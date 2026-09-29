import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Building2, CalendarDays, Check, Factory, Warehouse } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/sections/Footer';
import { Breadcrumb } from '@/components/Breadcrumb';
import { BusinessSEO } from '@/components/BusinessSEO';
import { BusinessQuoteForm } from '@/components/BusinessQuoteForm';
import { BusinessWhatsAppButton } from '@/components/BusinessWhatsAppButton';
import { businessConfig } from '@/config/business';
import { businessCityPageBySlug, businessCityPath, businessCitySEO } from '@/config/businessCityPages';
import type { BusinessCityPageConfig } from '@/config/businessCityPages';
import { businessRegionalNavigation } from '@/config/regionalNavigation';

function verticalLinks(page: BusinessCityPageConfig) {
  const legacySlug = page.slug === 'sant-cugat-del-valles' ? 'sant-cugat' : page.slug === 'sant-quirze-del-valles' ? 'sant-quirze' : page.slug === 'cerdanyola-del-valles' ? 'cerdanyola' : page.slug;
  return [
    { label: `Limpieza de oficinas en ${page.city}`, href: businessRegionalNavigation.oficinas.localUrls[legacySlug as keyof typeof businessRegionalNavigation.oficinas.localUrls], icon: Building2 },
    { label: `Limpieza de naves industriales en ${page.city}`, href: businessRegionalNavigation.naves.localUrls[legacySlug as keyof typeof businessRegionalNavigation.naves.localUrls], icon: Factory },
    { label: 'Limpieza de oficinas: alcance regional', href: businessConfig.urls.services.officeCleaning, icon: Building2 },
    { label: 'Limpieza de naves industriales', href: businessConfig.urls.services.industrialCleaning, icon: Factory },
    { label: 'Limpieza de almacenes y centros logísticos', href: businessConfig.urls.services.logisticsCleaning, icon: Warehouse },
    { label: 'Limpieza de comunidades', href: businessConfig.urls.services.communityCleaning, icon: Building2 },
  ].filter((link, index, links) => link.href && links.findIndex(item => item.href === link.href) === index);
}

export default function BusinessCityPage({ page, prerender = false }: { page: BusinessCityPageConfig; prerender?: boolean }) {
  const seo = businessCitySEO(page);
  const location = useLocation();
  useEffect(() => {
    document.head.querySelectorAll('[data-prerender-business]').forEach(tag => tag.remove());
    if (location.hash === '#presupuesto') document.getElementById('presupuesto')?.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);
  const whatsapp = `https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent(`Hola, quiero un presupuesto de limpieza para una empresa en ${page.city}.`)}`;
  const schema = { '@context': 'https://schema.org', '@type': 'Service', '@id': `${seo.canonical}#service`, name: seo.h1, serviceType: 'Servicios de limpieza para empresas', description: seo.description, url: seo.canonical, provider: { '@id': `${businessConfig.urls.base}${businessConfig.urls.services.businessCleaning}#organization`, name: businessConfig.fullName }, areaServed: { '@type': 'City', name: page.city } };
  const nearby = page.nearby.map(slug => businessCityPageBySlug[slug]).filter(Boolean);
  return <>
    {!prerender && <BusinessSEO config={seo} />}
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <Header />
    <main lang="es" className="pt-20 text-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><Breadcrumb items={[{ label: 'Limpieza para empresas', href: businessConfig.urls.services.businessCleaning }, { label: page.city }]} /></div>
      <section className="bg-emerald-950 py-16 text-white sm:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><p className="text-sm font-semibold uppercase tracking-widest text-emerald-300">Servicios de limpieza para empresas</p><h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl">{seo.h1}</h1><p className="mt-6 max-w-4xl text-lg leading-relaxed text-emerald-50">{page.profile}</p>{page.slug === 'barcelona' && <p className="mt-5 max-w-4xl leading-relaxed text-emerald-100">Si buscas empresas de limpieza en Barcelona para un servicio periódico, preparamos una propuesta a partir de las instalaciones y de las necesidades reales del centro: oficinas, comunidades, naves industriales, almacenes o centros logísticos.</p>}<div className="mt-8 flex flex-wrap gap-4"><a href="#presupuesto" className="rounded-full bg-white px-6 py-4 font-bold text-emerald-950">Solicitar presupuesto</a><a href={whatsapp} target="_blank" rel="noopener noreferrer" className="rounded-full border border-emerald-300 px-6 py-4 font-semibold">Consultar por WhatsApp</a></div></div></section>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"><h2 className="text-3xl font-bold">Servicios de limpieza para empresas en {page.city}</h2><p className="mt-5 max-w-4xl text-lg leading-relaxed text-gray-700">Adaptamos la limpieza de empresas al uso de cada instalación. Estas son las prioridades más habituales en el contexto local, pero el alcance final se define después de conocer el centro.</p><div className="mt-8 grid gap-5 md:grid-cols-3">{page.priorities.map((priority, index) => <article key={priority} className="rounded-2xl border border-gray-200 p-6"><Check className="h-6 w-6 text-emerald-700" aria-hidden="true" /><h3 className="mt-4 text-xl font-bold">{priority}</h3><p className="mt-3 leading-relaxed text-gray-600">{index === 0 ? 'Definimos superficies, tareas y puntos de atención según su utilización.' : index === 1 ? 'Coordinamos accesos y horarios con la persona responsable de la instalación.' : 'Diferenciamos mantenimiento habitual y necesidades adicionales antes de presupuestar.'}</p></article>)}</div></section>
      <section className="bg-gray-50 py-16"><div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8"><article className="rounded-3xl bg-white p-8"><CalendarDays className="h-9 w-9 text-emerald-700" aria-hidden="true" /><h2 className="mt-5 text-2xl font-bold">Cómo organizamos el servicio en {page.city}</h2><p className="mt-5 leading-relaxed text-gray-700">{page.planning}</p></article><article className="rounded-3xl bg-white p-8"><Building2 className="h-9 w-9 text-emerald-700" aria-hidden="true" /><h2 className="mt-5 text-2xl font-bold">Limpieza periódica y mantenimiento</h2><p className="mt-5 leading-relaxed text-gray-700">{page.recurring}</p></article></div></section>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"><h2 className="text-3xl font-bold">Servicios específicos para tu instalación</h2><p className="mt-4 max-w-3xl leading-relaxed text-gray-700">Consulta las páginas especializadas que correspondan. Las landings municipales existentes se conservan y se enlazan cuando hay una página específica publicada.</p><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{verticalLinks(page).map(({ label, href, icon: Icon }) => <Link key={href} to={href!} className="flex items-center justify-between gap-4 rounded-2xl border border-emerald-200 p-5 font-semibold text-emerald-950 hover:bg-emerald-50"><span className="flex items-center gap-3"><Icon className="h-5 w-5 shrink-0 text-emerald-700" aria-hidden="true" />{label}</span><ArrowRight className="h-5 w-5 shrink-0" aria-hidden="true" /></Link>)}</div></section>
      <section className="bg-emerald-950 py-16 text-white"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><h2 className="text-3xl font-bold">Cobertura próxima a {page.city}</h2><p className="mt-5 max-w-3xl leading-relaxed text-emerald-100">También prestamos servicio y valoramos contratos en municipios relacionados de la zona. Cada enlace conduce a contenido específico de esa ciudad.</p><ul className="mt-7 flex flex-wrap gap-3">{nearby.map(item => <li key={item.slug}><Link to={businessCityPath(item)} className="inline-flex rounded-full border border-emerald-700 px-4 py-2 font-semibold underline-offset-4 hover:bg-emerald-900 hover:underline">Empresa de limpieza en {item.city}</Link></li>)}</ul></div></section>
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6"><h2 className="mb-7 text-3xl font-bold">Preguntas frecuentes sobre limpieza de empresas en {page.city}</h2>{page.faq.map(([question, answer]) => <details key={question} className="border-b border-gray-200 py-5"><summary className="cursor-pointer text-lg font-semibold">{question}</summary><p className="mt-4 leading-relaxed text-gray-700">{answer}</p></details>)}</section>
      <BusinessQuoteForm facility="Empresa o espacio profesional" />
    </main><Footer /><BusinessWhatsAppButton href={whatsapp} />
  </>;
}
