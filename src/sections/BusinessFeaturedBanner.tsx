import { ArrowRight, Building2, Factory, Warehouse, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { businessConfig } from '@/config/business';

const links = [
  { key: 'offices', href: businessConfig.urls.services.officeCleaning, icon: Building2 },
  { key: 'industrial', href: businessConfig.urls.services.industrialCleaning, icon: Factory },
  { key: 'logistics', href: businessConfig.urls.services.logisticsCleaning, icon: Warehouse },
  { key: 'communities', href: businessConfig.urls.services.communityCleaning, icon: Building },
];
export function BusinessFeaturedBanner() {
  const { t } = useTranslation();
  return <section aria-labelledby="business-title" className="bg-emerald-950 py-20 text-white">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 id="business-title" className="max-w-3xl text-3xl font-bold sm:text-4xl">{t('homeBusiness.title')}</h2>
      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-emerald-100">{t('homeBusiness.description')}</p>
      <div className="my-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{links.map(({ key, href, icon: Icon }) => <Link key={key} to={href} className="rounded-2xl border border-emerald-800 bg-emerald-900 p-6 transition hover:bg-emerald-800"><Icon aria-hidden="true" className="mb-5 h-8 w-8 text-emerald-300" /><span className="font-semibold">{t(`homeBusiness.${key}`)}</span><ArrowRight aria-hidden="true" className="mt-4 h-5 w-5" /></Link>)}</div>
      <div className="flex flex-wrap gap-4"><Link to={businessConfig.urls.services.businessCleaning} className="rounded-full bg-white px-6 py-3 font-semibold text-emerald-950">{t('homeBusiness.cta')}</Link><Link to={`${businessConfig.urls.services.businessCleaning}#presupuesto`} className="rounded-full border border-emerald-300 px-6 py-3 font-semibold">{t('homeBusiness.quote')}</Link></div>
    </div>
  </section>;
}
