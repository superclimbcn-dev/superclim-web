import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/sections/Footer';
import { BusinessSEO } from '@/components/BusinessSEO';
import { Breadcrumb } from '@/components/Breadcrumb';
import { BusinessQuoteForm } from '@/components/BusinessQuoteForm';
import { BusinessWhatsAppButton } from '@/components/BusinessWhatsAppButton';
import { RegionalRelatedServices } from '@/components/RegionalRelatedServices';
import { businessConfig } from '@/config/business';
import { businessRegionalNavigation, regionalCities } from '@/config/regionalNavigation';
import { businessRegionalSEO } from '@/config/businessRegionalPages';
import type { BusinessRegionalConfig } from '@/config/businessRegionalPages';

const linkClass = 'inline-flex rounded-xl border border-emerald-200 px-5 py-3 font-semibold text-emerald-900 hover:bg-emerald-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700';

export default function BusinessRegionalPage({ page, prerender = false }: { page: BusinessRegionalConfig; prerender?: boolean }) {
  const seo = businessRegionalSEO(page);
  const parent = businessRegionalNavigation[page.service];
  const location = useLocation();
  useEffect(() => {
    document.head.querySelectorAll('[data-prerender-business]').forEach(tag => tag.remove());
    if (location.hash === '#presupuesto') document.getElementById('presupuesto')?.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);
  const whatsapp = `https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent(`Hola, quiero un presupuesto de ${page.h1.toLowerCase()}.`)}`;
  const serviceSchema = {
    '@context': 'https://schema.org', '@type': 'Service', '@id': `${seo.canonical}#service`,
    name: page.h1, serviceType: parent.label, description: page.description, url: seo.canonical,
    provider: { '@id': `${businessConfig.urls.base}${businessConfig.urls.services.businessCleaning}#organization`, name: businessConfig.fullName },
    areaServed: { '@type': 'City', name: page.cityName },
  };
  const limits = page.service === 'naves'
    ? 'No incluye limpieza de maquinaria especializada fuera del alcance, retirada de residuos peligrosos, trabajos en altura no contratados ni limpieza técnica especializada fuera del alcance acordado. No se presupone la manipulación o el traslado de mercancías. Cualquier necesidad adicional debe valorarse y aceptarse expresamente; no se da por disponible.'
    : 'El mantenimiento se limita a las zonas y superficies accesibles incluidas en la propuesta. No implica manipular documentación, intervenir en equipos informáticos ni realizar trabajos técnicos especializados. Las limpiezas extraordinarias o los trabajos en altura no se dan por incluidos.';
  return <>
    {!prerender && <BusinessSEO config={seo} />}
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    <Header />
    <main lang="es" className="pt-20 text-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6"><Breadcrumb items={[
        { label: 'Limpieza para Empresas', href: businessConfig.urls.services.businessCleaning },
        { label: page.service === 'oficinas' ? 'Oficinas' : 'Naves Industriales', href: parent.generalUrl },
        { label: page.cityName },
      ]} /></div>
      <section className="bg-emerald-950 py-16 text-white sm:py-24"><div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-semibold text-emerald-200">Servicio contratado de limpieza recurrente</p>
        <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl">{page.h1}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-emerald-50">{page.intro}</p>
        <div className="mt-8 flex flex-wrap gap-4"><a href="#presupuesto" className="rounded-full bg-white px-6 py-4 font-bold text-emerald-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Solicitar presupuesto</a><a href={whatsapp} target="_blank" rel="noopener noreferrer" className="rounded-full border border-emerald-300 px-6 py-4 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Consultar por WhatsApp</a></div>
      </div></section>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6"><h2 className="text-3xl font-bold">{page.scopeTitle}</h2><p className="mt-5 max-w-4xl text-lg leading-relaxed text-gray-700">{page.scope}</p>
        <h3 className="mt-8 text-xl font-semibold">Áreas que puede incluir el servicio</h3><ul className="mt-5 grid gap-4 sm:grid-cols-3">{page.areas.map(area => <li key={area} className="rounded-2xl bg-emerald-50 p-5 font-medium text-emerald-950">{area}</li>)}</ul>
      </section>
      <section className="bg-gray-50 py-16"><div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2"><article><h2 className="text-2xl font-bold">{page.planningTitle}</h2><p className="mt-5 leading-relaxed text-gray-700">{page.planning}</p></article><article><h2 className="text-2xl font-bold">{page.coverageTitle}</h2><p className="mt-5 leading-relaxed text-gray-700">{page.coverage}</p></article></div></section>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6"><h2 className="text-3xl font-bold">Cómo contratar el servicio en {page.cityName}</h2><ol className="mt-8 grid gap-8 md:grid-cols-3">
        <li><h3 className="text-xl font-bold">1. Describir la instalación</h3><p className="mt-4 leading-relaxed text-gray-700">{page.process}</p></li>
        <li><h3 className="text-xl font-bold">2. Acordar la propuesta</h3><p className="mt-4 leading-relaxed text-gray-700">Concretamos zonas, tareas, frecuencia, horarios, accesos y los materiales previstos en la propuesta. Si hace falta conocer la instalación, acordamos una visita de valoración.</p></li>
        <li><h3 className="text-xl font-bold">3. Organizar y supervisar</h3><p className="mt-4 leading-relaxed text-gray-700">Tu empresa contrata el servicio de limpieza. Superclim organiza el equipo, los turnos y la supervisión, gestiona incidencias y sustituciones cuando corresponda y realiza el seguimiento según el alcance acordado.</p></li>
      </ol><p className="mt-8"><Link to="/contacto" className="font-semibold text-emerald-800 underline underline-offset-4">Contacta con Superclim para explicar las necesidades de tu instalación</Link>.</p>
        <article className="mt-12 rounded-2xl border border-gray-200 p-6"><h2 className="text-2xl font-bold">Límites del servicio</h2><p className="mt-4 leading-relaxed text-gray-700">{limits}</p></article>
      </section>
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6"><h2 className="mb-6 text-3xl font-bold">Preguntas frecuentes</h2>{page.faq.map(([question, answer]) => <details key={question} className="border-b border-gray-200 py-5"><summary className="cursor-pointer rounded text-lg font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-700">{question}</summary><p className="mt-4 leading-relaxed text-gray-700">{answer}</p></details>)}</section>
      <RegionalRelatedServices city={page.city} service={page.service} />
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6" data-business-siblings><h2 className="text-2xl font-bold">{parent.label} en otras ciudades</h2><ul className="mt-6 flex flex-wrap gap-3">{Object.entries(parent.localUrls).filter(([city]) => city !== page.city).map(([city, href]) => <li key={href}><Link className={linkClass} to={href}>{parent.label} en {regionalCities[city as keyof typeof regionalCities]}</Link></li>)}</ul><Link to={parent.generalUrl} className="mt-6 inline-block font-semibold text-emerald-800 underline underline-offset-4">{parent.label}: alcance del servicio regional</Link></section>
      <BusinessQuoteForm facility={page.service === 'oficinas' ? 'Oficina' : 'Nave industrial'} />
    </main>
    <Footer />
    <BusinessWhatsAppButton href={whatsapp} />
  </>;
}
