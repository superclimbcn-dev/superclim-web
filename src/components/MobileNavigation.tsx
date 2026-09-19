import { useEffect, useRef, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { businessConfig } from '@/config/business';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

const services = businessConfig.urls.services;
const groups = [
  ['services', [['sofas', services.sofaCleaning], ['carpets', services.carpetCleaning], ['mattresses', services.mattressCleaning], ['waterproofing', services.impermeabilization]]],
  ['communities', [['communityCleaning', services.communityCleaning]]],
  ['business', [['businessCleaning', services.businessCleaning], ['offices', services.officeCleaning], ['industrial', services.industrialCleaning], ['logistics', services.logisticsCleaning]]],
  ['company', [['about', '/quienes-somos'], ['contact', '/contacto']]],
] as const;

export function MobileNavigation({ isScrolled }: { isScrolled: boolean }) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const navigating = useRef(false);
  useEffect(() => {
    const desktop = matchMedia('(min-width: 1024px)');
    const close = () => setOpen(false);
    const resize = () => { if (desktop.matches) close(); };
    desktop.addEventListener('change', resize);
    window.addEventListener('popstate', close);
    return () => { desktop.removeEventListener('change', resize); window.removeEventListener('popstate', close); };
  }, []);
  const linkClass = 'block rounded-lg px-3 py-3 text-gray-800 hover:bg-emerald-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-700';
  return <Dialog.Root open={open} onOpenChange={setOpen}>
    <Dialog.Trigger asChild><button type="button" aria-label={t('mobileNav.open')} className={`lg:hidden rounded-lg p-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-600 ${isScrolled ? 'text-gray-700' : 'text-white'}`}><Menu className="h-6 w-6" aria-hidden="true" /></button></Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-[60] bg-black/50" />
      <Dialog.Content onCloseAutoFocus={event => {
        if (!navigating.current) return;
        event.preventDefault();
        navigating.current = false;
        requestAnimationFrame(() => {
          const heading = document.querySelector<HTMLElement>('main h1');
          heading?.setAttribute('tabindex', '-1');
          window.scrollTo({ top: 0, behavior: 'instant' });
          heading?.focus({ preventScroll: true });
        });
      }} data-mobile-navigation className="fixed inset-y-0 right-0 z-[70] w-[min(90vw,380px)] overflow-y-auto overscroll-contain bg-white p-5 pb-[max(24px,env(safe-area-inset-bottom))] shadow-xl" aria-describedby={undefined}>
        <div className="mb-5 flex items-center justify-between gap-3"><Dialog.Title className="text-lg font-bold text-gray-900">{t('mobileNav.title')}</Dialog.Title><Dialog.Close asChild><button aria-label={t('mobileNav.close')} className="rounded-lg p-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-700"><X aria-hidden="true" className="h-6 w-6" /></button></Dialog.Close></div>
        <nav aria-label={t('mobileNav.title')}>
          <Dialog.Close asChild><Link onClick={() => { navigating.current = true; }} className={linkClass} to="/">{t('mobileNav.home')}</Link></Dialog.Close>
          <Dialog.Close asChild><Link onClick={() => { navigating.current = true; }} className={linkClass} to="/servicios">{t('mobileNav.allServices')}</Link></Dialog.Close>
          {groups.map(([group, links]) => <details key={group} className="border-t border-gray-200 py-2">
            <summary className="cursor-pointer rounded-lg px-3 py-3 font-semibold text-emerald-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-700">{t(`mobileNav.${group}`)}</summary>
            <ul className="pl-3">{links.map(([key, href]) => <li key={key}><Dialog.Close asChild><Link onClick={() => { navigating.current = true; }} className={linkClass} to={href}>{t(`mobileNav.${key}`)}</Link></Dialog.Close></li>)}</ul>
          </details>)}
        </nav>
        <div className="mt-5 border-t pt-5"><LanguageSwitcher isScrolled /><a className={linkClass} href={`tel:${businessConfig.phone}`}>{businessConfig.phoneDisplay}</a><a className={linkClass} href={`https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent(t('whatsapp.message'))}`} target="_blank" rel="noopener noreferrer">WhatsApp</a></div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>;
}
