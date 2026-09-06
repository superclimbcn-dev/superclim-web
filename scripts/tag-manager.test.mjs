import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import vm from 'node:vm';

const source = readFileSync(new URL('../public/tag-manager.js', import.meta.url), 'utf8');

function setup(initialConsent, storageThrows = false) {
  let storedConsent = initialConsent;
  const listeners = new Map();
  const scripts = [];
  const dataLayer = [{ event: 'existing_event' }];
  const window = {
    dataLayer,
    localStorage: {
      getItem() {
        if (storageThrows) throw new Error('Storage unavailable');
        return storedConsent;
      },
    },
    addEventListener(name, callback) { listeners.set(name, callback); },
  };
  vm.runInNewContext(source, {
    window,
    document: {
      createElement(tag) { assert.equal(tag, 'script'); return {}; },
      head: { appendChild(script) { scripts.push(script); } },
    },
  });
  return {
    scripts,
    dataLayer,
    setConsent(value, eventName = 'superclim-cookie-consent-change', key = 'superclim-cookie-consent') {
      storedConsent = value;
      listeners.get(eventName)({ key });
    },
    latestConsent() {
      return dataLayer.filter((entry) => entry[0] === 'consent').at(-1)[2];
    },
  };
}

test('no container request before consent, after rejection, or with unavailable storage', () => {
  for (const value of [null, 'rejected', 'invalid']) {
    const state = setup(value);
    assert.equal(state.scripts.length, 0);
    assert.equal(state.latestConsent().analytics_storage, 'denied');
  }
  assert.equal(setup('accepted', true).scripts.length, 0);
});

test('acceptance loads the supplied container once, with consent queued first', () => {
  const state = setup(null);
  state.setConsent('accepted');
  state.setConsent('accepted');
  assert.equal(state.scripts.length, 1);
  assert.equal(state.scripts[0].src, 'https://www.googletagmanager.com/gtm.js?id=GTM-NSV38GHV');
  assert.equal(state.scripts[0].async, true);
  assert.equal(state.dataLayer[0].event, 'existing_event');
  const defaults = state.dataLayer.findIndex((entry) => entry[1] === 'default');
  const granted = state.dataLayer.findIndex((entry) => entry[2]?.analytics_storage === 'granted');
  const start = state.dataLayer.findIndex((entry) => entry.event === 'gtm.js');
  assert(defaults < granted && granted < start);
  assert.equal(state.latestConsent().ad_storage, 'denied');
  assert.equal(state.latestConsent().ad_user_data, 'denied');
  assert.equal(state.latestConsent().ad_personalization, 'denied');
});

test('returning accepted visitors load the container without another banner interaction', () => {
  const state = setup('accepted');
  assert.equal(state.scripts.length, 1);
  assert.equal(state.latestConsent().analytics_storage, 'granted');
});

test('consent changes across tabs update the queue without loading duplicate containers', () => {
  const state = setup('accepted');
  state.setConsent('rejected', 'storage');
  assert.equal(state.latestConsent().analytics_storage, 'denied');
  state.setConsent('accepted', 'storage');
  assert.equal(state.latestConsent().analytics_storage, 'granted');
  assert.equal(state.scripts.length, 1);
  state.setConsent(null, 'storage', null);
  assert.equal(state.latestConsent().analytics_storage, 'denied');
});
