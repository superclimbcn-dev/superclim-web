import { ArrowRight, Check, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { businessConfig } from '@/config/business';

const benefitKeys = ['portals', 'stairs', 'elevators', 'garages'] as const;

export function CommunityFeaturedBanner() {
  const { t } = useTranslation();
  const whatsappMessage = t('homeCommunityBanner.whatsappMessage');
  const whatsappUrl = `https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="bg-gray-50 pb-24 lg:pb-32" aria-labelledby="community-featured-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-emerald-950 via-teal-900 to-cyan-900 shadow-2xl shadow-emerald-950/20"
        >
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-72 overflow-hidden sm:min-h-96 lg:min-h-full">
              <img
                src="/images/limpieza-de-escalera.png"
                alt="Limpieza profesional de zonas comunes y escaleras"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/25 via-transparent to-teal-900/5" aria-hidden="true" />
              <div className="absolute bottom-8 left-8 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-medium text-emerald-100 backdrop-blur-sm sm:left-12">
                {t('homeCommunityBanner.areas')}
              </div>
            </div>

            <div className="bg-white p-7 sm:p-10 lg:p-14">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">{t('homeCommunityBanner.eyebrow')}</p>
              <h2 id="community-featured-title" className="text-3xl font-bold leading-tight text-gray-950 sm:text-4xl lg:text-5xl">
                {t('homeCommunityBanner.title')}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-gray-600">
                {t('homeCommunityBanner.description')}
              </p>

              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {benefitKeys.map((benefitKey) => (
                  <li key={benefitKey} className="flex items-center gap-3 text-sm font-semibold text-gray-800 sm:text-base">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <Check className="h-4 w-4" aria-hidden="true" />
                    </span>
                    {t(`homeCommunityBanner.benefits.${benefitKey}`)}
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button asChild size="lg" className="h-auto rounded-full bg-emerald-700 px-6 py-4 text-base hover:bg-emerald-800">
                  <Link to={businessConfig.urls.services.communityCleaning}>
                    {t('homeCommunityBanner.primaryCta')}
                    <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-auto rounded-full border-emerald-200 px-6 py-4 text-base text-emerald-800 hover:bg-emerald-50 hover:text-emerald-900">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
                    {t('homeCommunityBanner.secondaryCta')}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
