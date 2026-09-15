import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Building2, Check, ClipboardList, CalendarDays, Users } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/sections/Footer';
import { BusinessSEO } from '@/components/BusinessSEO';
import { Breadcrumb } from '@/components/Breadcrumb';
import { BusinessQuoteForm } from '@/components/BusinessQuoteForm';
import { businessConfig } from '@/config/business';
import { businessPages, businessLinks, businessCoverage } from '@/config/businessPages';
import type { BusinessPageKey } from '@/config/businessPages';
import { seoConfig } from '@/config/seo';

export default function BusinessPage({ pageKey, prerender = false }: { pageKey: BusinessPageKey; prerender?: boolean }) {
  const page = businessPages[pageKey];
  const seo = seoConfig[pageKey];
  const hub = pageKey === 'businessCleaning';
  const location = useLocation();
  useEffect(() => {
    document.head.querySelectorAll('[data-prerender-business]').forEach(tag => tag.remove());
    if (location.hash === '#presupuesto') document.getElementById('presupuesto')?.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);
  const providerId = `${businessConfig.urls.base}${businessConfig.urls.services.businessCleaning}#organization`;
  const service = {
    '@context': 'https://schema.org', '@type': 'Service', '@id': `${seo.canonical}#service`,
    name: page.label, serviceType: page.label, description: seo.description, url: seo.canonical,
    provider: { '@id': providerId }, areaServed: businessCoverage.map(name => ({ '@type': 'Place', name })),
    ...(hub ? { hasOfferCatalog: {
      '@type': 'OfferCatalog', name: 'Servicios de limpieza profesional', itemListElement: [
        ...businessLinks.map(link => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: link.label, url: `${businessConfig.urls.base}${link.href}` } })),
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Limpieza de almacenes', url: `${businessConfig.urls.base}${businessConfig.urls.services.logisticsCleaning}` } },
      ],
    } } : {}),
  };
  const organization = { '@context': 'https://schema.org', '@type': 'Organization', '@id': providerId, name: businessConfig.fullName, url: businessConfig.urls.base, telephone: businessConfig.phone, email: businessConfig.email, address: { '@type': 'PostalAddress', streetAddress: businessConfig.address.street, addressLocality: businessConfig.address.city, postalCode: businessConfig.address.postalCode, addressRegion: businessConfig.address.region, addressCountry: businessConfig.address.country } };
  const whatsapp = `https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent(`Hola, quiero un presupuesto de ${page.label.toLowerCase()}.`)}`;
  return <>
    {!prerender && <BusinessSEO config={seo} />}
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
    {hub && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />}
    <Header />
    <main lang="es" className="pt-20 text-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><Breadcrumb items={hub ? [{ label: 'Limpieza para empresas' }] : [{ label: 'Limpieza para empresas', href: businessConfig.urls.services.businessCleaning }, { label: page.label }]} /></div>
      <section className="overflow-hidden bg-emerald-950 py-16 text-white sm:py-24"><div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.3fr_0.7fr] lg:px-8">
        <div><p className="text-sm font-semibold uppercase tracking-widest text-emerald-300">{page.eyebrow}</p><h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">{seo.h1}</h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-emerald-50">{page.intro}</p><div className="mt-8 flex flex-wrap gap-3"><a href="#presupuesto" className="rounded-full bg-white px-6 py-4 font-bold text-emerald-950 hover:bg-emerald-50">Solicitar presupuesto</a><a href={whatsapp} target="_blank" rel="noopener noreferrer" className="rounded-full border border-emerald-300 px-6 py-4 font-semibold hover:bg-emerald-900">WhatsApp</a></div></div>
        <aside className="rounded-3xl border border-emerald-800 bg-emerald-900 p-8"><Building2 className="h-12 w-12 text-emerald-300" aria-hidden="true" /><p className="mt-6 text-2xl font-semibold">Tu actividad marca el plan de limpieza</p><ul className="mt-6 space-y-5">{['Tareas definidas por instalación', 'Frecuencia y horarios acordados', 'Personal y organización de Superclim'].map(text => <li className="flex gap-3" key={text}><Check className="h-5 w-5 shrink-0 text-emerald-300" aria-hidden="true" />{text}</li>)}</ul></aside>
      </div></section>
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"><h2 className="text-3xl font-bold">{page.heading}</h2><div className="mt-9 grid gap-6 md:grid-cols-3">{page.sections.map(([title, text]) => <article key={title} className="rounded-2xl border border-gray-200 p-7"><h3 className="text-xl font-bold">{title}</h3><p className="mt-4 leading-relaxed text-gray-600">{text}</p></article>)}</div>
        <h2 className="mt-14 text-2xl font-bold">{hub ? 'Tipos de instalaciones' : 'Otros servicios para tus instalaciones'}</h2><div className="mt-6 grid gap-3 sm:grid-cols-2">{businessLinks.filter(link => link.href !== businessConfig.urls.services[pageKey]).map(link => <Link key={link.href} to={link.href} className="flex items-center justify-between gap-3 rounded-xl bg-emerald-50 p-5 font-semibold text-emerald-900 hover:bg-emerald-100">{link.label}<ArrowRight className="h-5 w-5 shrink-0" aria-hidden="true" /></Link>)}</div>
        {!hub && <Link to={businessConfig.urls.services.businessCleaning} className="mt-6 inline-block font-semibold text-emerald-800 underline">Conoce cómo organizamos la limpieza para empresas</Link>}
      </section>
      <section className="bg-gray-50 py-20"><div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8"><div><h2 className="text-3xl font-bold">Servicios que podemos incluir en el plan</h2><p className="mt-4 text-gray-600">El alcance se concreta en la propuesta, según las superficies y necesidades de tu instalación.</p><ul className="mt-7 space-y-4">{page.tasks.map(task => <li className="flex gap-3" key={task}><Check className="h-5 w-5 shrink-0 text-emerald-700" aria-hidden="true" />{task}</li>)}</ul></div><div className="rounded-3xl bg-white p-8"><CalendarDays className="h-10 w-10 text-emerald-700" aria-hidden="true" /><h2 className="mt-5 text-2xl font-bold">{page.planningTitle}</h2><p className="mt-5 leading-relaxed text-gray-600">{page.planning}</p></div></div></section>
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"><h2 className="text-3xl font-bold">Cómo funciona</h2><ol className="mt-9 grid gap-8 md:grid-cols-3">{[['Cuéntanos qué necesitas', 'Indica la ubicación, el tipo de instalación, su superficie y los horarios preferidos.'], ['Definimos la propuesta', 'Valoramos zonas, tareas y frecuencias para preparar un presupuesto personalizado.'], ['Organizamos y seguimos el servicio', 'Acordamos el inicio, organizamos nuestro equipo y mantenemos el seguimiento de las tareas.']].map(([title, text], i) => <li key={title}><span className="text-sm font-bold text-emerald-700">0{i + 1}</span><h3 className="mt-3 text-xl font-bold">{title}</h3><p className="mt-3 leading-relaxed text-gray-600">{text}</p></li>)}</ol>
        <div className="mt-16 grid gap-8 md:grid-cols-2"><article className="rounded-3xl bg-emerald-50 p-8"><ClipboardList className="h-9 w-9 text-emerald-700" aria-hidden="true" /><h2 className="mt-5 text-2xl font-bold">Ventajas para tu empresa</h2><p className="mt-4 leading-relaxed text-gray-700">Nos ocupamos de la organización del servicio para que tu empresa no tenga que gestionar directamente el personal de limpieza. Las tareas y frecuencias acordadas facilitan el seguimiento y permiten comunicar prioridades con claridad.</p></article><article className="rounded-3xl border border-gray-200 p-8"><Users className="h-9 w-9 text-emerald-700" aria-hidden="true" /><h2 className="mt-5 text-2xl font-bold">Personal y continuidad del servicio</h2><p className="mt-4 leading-relaxed text-gray-700">Superclim presta el servicio con su propio personal y se encarga de la planificación y supervisión. Diseñamos equipos y horarios según las necesidades de cada instalación y gestionamos incidencias y sustituciones cuando corresponda, según las condiciones acordadas.</p></article></div>
      </section>
      <section className="bg-emerald-950 py-16 text-white"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><h2 className="text-3xl font-bold">Desde Sabadell, para el Vallès Occidental y Barcelona</h2><p className="mt-5 max-w-3xl leading-relaxed text-emerald-100">Indícanos la ubicación de tu centro de trabajo para valorar desplazamientos, accesos y horarios en la propuesta.</p><ul className="mt-7 flex flex-wrap gap-3">{businessCoverage.map(city => <li key={city} className="rounded-full border border-emerald-700 px-4 py-2">{city}</li>)}</ul></div></section>
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6"><h2 className="mb-8 text-3xl font-bold">Preguntas frecuentes</h2><div className="divide-y divide-gray-200">{page.faq.map(([question, answer]) => <details key={question} className="py-5"><summary className="cursor-pointer text-lg font-semibold">{question}</summary><p className="mt-4 leading-relaxed text-gray-600">{answer}</p></details>)}</div></section>
      <BusinessQuoteForm facility={page.facility} />
    </main><Footer />
    <a href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Consultar servicio de limpieza por WhatsApp" className="fixed bottom-4 right-4 z-40 rounded-full bg-emerald-700 px-5 py-3 font-bold text-white shadow-lg hover:bg-emerald-800">WhatsApp</a>
  </>;
}
