import { renderToString } from 'react-dom/server';
import type { ComponentType } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { I18nextProvider } from 'react-i18next';
import { StaticRouter } from 'react-router-dom';
import i18n from '@/i18n';
import LimpiezaSofas from '@/pages/services/LimpiezaSofas';
import ServicioDomicilio from '@/pages/services/ServicioDomicilio';
import LimpiezaSillones from '@/pages/services/LimpiezaSillones';
import RegionalServicePage from '@/pages/regional/RegionalServicePage';

export { regionalSofaUrls } from '@/config/regionalUrls';

type SofaPageKey = 'sofaCleaning' | 'homeService' | 'armchairCleaning';

const pages = {
  sofaCleaning: LimpiezaSofas,
  homeService: ServicioDomicilio,
  armchairCleaning: LimpiezaSillones,
} satisfies Record<SofaPageKey, ComponentType>;

export async function renderSofaServicePage(pageKey: SofaPageKey, routePath: string) {
  await i18n.changeLanguage('es');
  const Page = pages[pageKey];
  return renderToString(
    <HelmetProvider>
      <I18nextProvider i18n={i18n}>
        <StaticRouter location={routePath}><Page /></StaticRouter>
      </I18nextProvider>
    </HelmetProvider>,
  );
}

export async function renderRegionalSofaPage(citySlug: string, routePath: string) {
  await i18n.changeLanguage('es');
  return renderToString(
    <HelmetProvider>
      <I18nextProvider i18n={i18n}>
        <StaticRouter location={routePath}><RegionalServicePage serviceType="sofas" citySlug={citySlug} /></StaticRouter>
      </I18nextProvider>
    </HelmetProvider>,
  );
}
