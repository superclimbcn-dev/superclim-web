import { useEffect, useRef } from 'react';

// Never reserve content width: hide the mobile control if its fixed footprint
// would cover readable content, another control, a dialog or an editing session.
export function useFloatingWhatsAppSafety() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const mobile = matchMedia('(max-width: 639px)');
    let frame = 0;
    const update = () => {
      frame = 0;
      if (!mobile.matches) { root.dataset.mobileBlocked = 'false'; return; }
      const button = root.querySelector('a');
      if (!button) return;
      const rect = button.getBoundingClientRect();
      const editing = document.activeElement?.matches('input, textarea, select, [contenteditable="true"]');
      const keyboard = window.visualViewport && window.visualViewport.height < window.innerHeight * 0.75;
      const intersects = (r: DOMRect) => r.width > 0 && r.height > 0 && r.left < rect.right + 4 && r.right > rect.left - 4 && r.top < rect.bottom + 4 && r.bottom > rect.top - 4;
      const dialog = [...document.querySelectorAll('[role="dialog"]')].some(el => el.getBoundingClientRect().height > 0);
      const collision = [...document.querySelectorAll('main p, main h1, main h2, main h3, main li, main summary, main label, main a, main button, main input, main textarea, main select, footer p, footer a, footer h2, footer h3')].some(el => !root.contains(el) && intersects(el.getBoundingClientRect()));
      root.dataset.mobileBlocked = String(Boolean(editing || keyboard || dialog || collision));
    };
    const schedule = () => {
      if (root.contains(document.activeElement)) {
        cancelAnimationFrame(frame);
        update();
        return;
      }
      // Hide immediately while scrolling/animations move content; reveal only
      // after the next layout check confirms that the footprint is clear.
      if (mobile.matches) root.dataset.mobileBlocked = 'true';
      if (!frame) frame = requestAnimationFrame(update);
    };
    const observer = new MutationObserver(() => schedule());
    observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['style', 'class', 'open'] });
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    document.addEventListener('focusin', schedule);
    document.addEventListener('focusout', schedule);
    window.visualViewport?.addEventListener('resize', schedule);
    const resize = new ResizeObserver(() => schedule()); resize.observe(document.body);
    schedule();
    return () => {
      cancelAnimationFrame(frame); observer.disconnect(); resize.disconnect();
      window.removeEventListener('scroll', schedule); window.removeEventListener('resize', schedule);
      document.removeEventListener('focusin', schedule); document.removeEventListener('focusout', schedule);
      window.visualViewport?.removeEventListener('resize', schedule);
    };
  }, []);
  return ref;
}
