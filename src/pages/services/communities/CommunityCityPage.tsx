import { ArrowRight, Building2, Check, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Header } from '@/components/Header';
import { SEOMeta } from '@/components/SEOMeta';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { businessConfig } from '@/config/business';
import { communityCityPages, type CommunityCitySlug } from '@/config/communityPages';
import { seoConfig } from '@/config/seo';
import { useSchemaOrg } from '@/hooks/useSchemaOrg';
import { Footer } from '@/sections/Footer';

interface CommunityCityPageProps { city: CommunityCitySlug; }

const includedAreas = ['Portales y accesos', 'Escaleras y rellanos', 'Ascensores', 'Cristales y buzones', 'Patios y zonas comunes', 'Garajes comunitarios'];

export default function CommunityCityPage({ city }: CommunityCityPageProps) {
  const page = communityCityPages[city];
  const { getServiceSchema } = useSchemaOrg();
  const serviceSchema = getServiceSchema(page.h1, page.introduction, `${businessConfig.urls.base}${page.path}`, page.name);
  const whatsappUrl = `https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent(page.whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-white">
      <SEOMeta config={seoConfig[page.seoKey]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Header />
      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-teal-900 to-cyan-900 text-white">
          <div className="absolute inset-0 opacity-20" aria-hidden="true">
            <div className="absolute -left-20 top-20 h-72 w-72 rounded-full border border-emerald-300/50" />
            <div className="absolute right-0 top-0 h-96 w-96 translate-x-1/3 -translate-y-1/3 rounded-full bg-teal-400/30 blur-3xl" />
            <div className="absolute bottom-0 left-1/2 h-48 w-48 rotate-12 border border-white/30" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-24 sm:px-6 lg:px-8 lg:pb-28 lg:pt-28">
            <Breadcrumb items={[{ label: 'Limpieza de comunidades', href: businessConfig.urls.services.communityCleaning }, { label: page.name }]} />
            <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1fr_360px]">
              <div className="max-w-3xl">
                <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">{page.eyebrow}</p>
                <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{page.h1}</h1>
                <p className="mb-8 text-lg leading-relaxed text-white/85 sm:text-xl">{page.introduction}</p>
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="w-full rounded-full bg-emerald-500 px-7 py-6 text-base hover:bg-emerald-400 sm:w-auto"><MessageCircle className="mr-2 h-5 w-5" />Solicitar presupuesto</Button>
                  </a>
                  <a href={`tel:${businessConfig.phone}`}>
                    <Button size="lg" variant="outline" className="w-full rounded-full border-white/40 bg-white/10 px-7 py-6 text-base text-white hover:bg-white/20 hover:text-white sm:w-auto"><Phone className="mr-2 h-5 w-5" />{businessConfig.phoneDisplay}</Button>
                  </a>
                </div>
              </div>
              <div className="hidden rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm lg:block">
                <Building2 className="mb-6 h-16 w-16 text-emerald-300" />
                <p className="text-2xl font-bold">Un plan definido para cada finca</p>
                <p className="mt-3 leading-relaxed text-white/75">Zonas, tareas y frecuencia acordadas antes de comenzar el servicio.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              {page.sections.map((section) => (
                <article key={section.title} className="rounded-3xl border border-gray-100 bg-white p-7 shadow-lg shadow-gray-200/50 sm:p-9">
                  <h2 className="mb-5 text-2xl font-bold text-gray-900 sm:text-3xl">{section.title}</h2>
                  <div className="space-y-4 text-lg leading-relaxed text-gray-600">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Zonas que puede incluir el servicio</h2>
              <p className="mt-4 text-lg text-gray-600">La propuesta concreta qué espacios y tareas forman parte del mantenimiento.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {includedAreas.map((item) => <div key={item} className="flex items-center gap-3 rounded-2xl bg-white p-5 shadow-sm"><span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-emerald-100"><Check className="h-5 w-5 text-emerald-700" /></span><span className="font-semibold text-gray-800">{item}</span></div>)}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-10 text-center text-3xl font-bold text-gray-900 sm:text-4xl">Preguntas frecuentes sobre el servicio en {page.shortName}</h2>
            <div className="space-y-4">
              {page.faqs.map((faq) => <details key={faq.question} className="group rounded-2xl border border-gray-200 bg-white p-6 open:shadow-md"><summary className="cursor-pointer list-none pr-8 text-lg font-semibold text-gray-900 marker:hidden">{faq.question}</summary><p className="mt-4 leading-relaxed text-gray-600">{faq.answer}</p></details>)}
            </div>
          </div>
        </section>

        <section className="bg-emerald-950 py-16 text-white">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold sm:text-4xl">Servicio en otras zonas del Vallès</h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/75">Consulta las páginas locales o vuelve al servicio regional de limpieza de comunidades.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to={businessConfig.urls.services.communityCleaning} className="inline-flex items-center rounded-full border border-white/30 px-5 py-3 font-semibold hover:bg-white/10">Servicio regional <ArrowRight className="ml-2 h-4 w-4" /></Link>
              {page.related.map((item) => <Link key={item.path} to={item.path} className="inline-flex items-center rounded-full bg-white px-5 py-3 font-semibold text-emerald-950 hover:bg-emerald-50">{item.label} <ArrowRight className="ml-2 h-4 w-4" /></Link>)}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
