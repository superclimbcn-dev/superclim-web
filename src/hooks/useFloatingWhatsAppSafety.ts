import { useEffect, useRef } from 'react';

// Hide the mobile control only in stable situations: while the virtual
// keyboard is open, while a form field has focus, or while a dialog (e.g.
// the cookie consent banner) is open. Never reacts to scroll, so the button
// stays put during normal scrolling.
export function useFloatingWhatsAppSafety() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const mobile = matchMedia('(max-width: 639px)');

    const update = () => {
      if (!mobile.matches) {
        root.dataset.mobileBlocked = 'false';
        return;
      }
      const editing = document.activeElement?.matches(
        'input, textarea, select, [contenteditable="true"]'
      );
      const keyboard =
        window.visualViewport &&
        window.visualViewport.height < window.innerHeight * 0.75;
      const dialog = [...document.querySelectorAll('[role="dialog"]')].some(
        (el) => el.getBoundingClientRect().height > 0
      );
      root.dataset.mobileBlocked = String(Boolean(editing || keyboard || dialog));
    };

    const handleViewportChange = () => update();

    document.addEventListener('focusin', update);
    document.addEventListener('focusout', update);
    window.visualViewport?.addEventListener('resize', handleViewportChange);
    window.addEventListener('resize', handleViewportChange);
    mobile.addEventListener('change', handleViewportChange);

    update();

    return () => {
      document.removeEventListener('focusin', update);
      document.removeEventListener('focusout', update);
      window.visualViewport?.removeEventListener('resize', handleViewportChange);
      window.removeEventListener('resize', handleViewportChange);
      mobile.removeEventListener('change', handleViewportChange);
    };
  }, []);

  return ref;
}
