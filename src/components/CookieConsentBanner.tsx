import { Link } from 'react-router-dom';
import { Cookie, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { useCookieConsent } from '@/hooks/useCookieConsent';

export function CookieConsentBanner() {
  const { t } = useTranslation();
  const { consent, setConsent } = useCookieConsent();

  if (consent) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={t('cookieConsent.title')}
      className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6 sm:pb-6"
    >
      <div className="mx-auto max-w-5xl rounded-lg border border-emerald-100 bg-white p-4 shadow-2xl shadow-gray-900/20 sm:p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex gap-3">
            <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
              <Cookie className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-base font-semibold text-gray-950">
                {t('cookieConsent.title')}
              </h2>
              <p className="mt-1 max-w-3xl text-sm leading-6 text-gray-600">
                {t('cookieConsent.description')}{' '}
                <Link to="/politica-de-cookies" className="font-medium text-emerald-700 underline underline-offset-4 hover:text-emerald-800">
                  {t('cookieConsent.policyLink')}
                </Link>
              </p>
            </div>
          </div>

          <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end lg:shrink-0">
            <Button
              type="button"
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50"
              onClick={() => setConsent('rejected')}
            >
              {t('cookieConsent.reject')}
            </Button>
            <Button
              type="button"
              className="bg-emerald-600 text-white hover:bg-emerald-700"
              onClick={() => setConsent('accepted')}
            >
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              {t('cookieConsent.accept')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
