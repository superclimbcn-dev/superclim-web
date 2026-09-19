import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { useFloatingWhatsAppSafety } from '@/hooks/useFloatingWhatsAppSafety';

export function BusinessWhatsAppButton({ href }: { href: string }) {
  const ref = useFloatingWhatsAppSafety();
  return <div ref={ref} className="floating-whatsapp fixed bottom-4 right-4 z-40" data-mobile-blocked="true"><a href={href} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-emerald-700 font-bold text-white shadow-lg hover:bg-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700 sm:h-auto sm:w-auto sm:px-5 sm:py-3"><WhatsAppIcon className="h-6 w-6 sm:hidden" /><span className="hidden sm:inline">WhatsApp</span></a></div>;
}
