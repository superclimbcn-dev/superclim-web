import { ArrowRight, Building2, ClipboardList, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Header } from '@/components/Header';
import { SEOMeta } from '@/components/SEOMeta';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { businessConfig } from '@/config/business';
import { seoConfig } from '@/config/seo';
import { useSchemaOrg } from '@/hooks/useSchemaOrg';
import { Footer } from '@/sections/Footer';

const services = [
  ['Portales y accesos', 'Limpieza de entradas, vestíbulos, puertas y zonas de paso para mantener una buena imagen desde el acceso al edificio.'],
  ['Escaleras y rellanos', 'Barrido y fregado de escaleras y descansillos, con atención a zonas de paso, esquinas y zócalos.'],
  ['Ascensores', 'Limpieza de cabinas, espejos, puertas, botoneras y elementos de contacto según el servicio contratado.'],
  ['Cristales y buzones', 'Mantenimiento de cristales accesibles, buzones, puertas y superficies habituales de entrada.'],
  ['Patios y zonas comunes', 'Limpieza de patios interiores y otros espacios comunitarios incluidos en el plan de mantenimiento.'],
  ['Garajes y parkings', 'Mantenimiento de zonas comunes del garaje, espacios de circulación y retirada de suciedad según las necesidades de la finca.'],
];

const cities = [
  ['Sabadell', businessConfig.urls.services.communityCleaningSabadell, 'Servicio local desde nuestra base en Sabadell.'],
  ['Terrassa', businessConfig.urls.services.communityCleaningTerrassa, 'Planes adaptados a fincas y frecuencias de mantenimiento.'],
  ['Sant Quirze', businessConfig.urls.services.communityCleaningSantQuirze, 'Cobertura próxima para comunidades residenciales.'],
];

const otherCoverage = ['Barberà del Vallès', 'Cerdanyola del Vallès', 'Sant Cugat del Vallès', 'Castellar del Vallès'];
const budgetFactors = ['Número de plantas', 'Portales y rellanos', 'Ascensores', 'Superficie', 'Garaje', 'Patios', 'Cristales', 'Frecuencia', 'Estado inicial', 'Trabajos adicionales'];
const process = ['Conocemos la finca', 'Definimos las tareas', 'Acordamos la frecuencia', 'Preparamos la propuesta'];
const faqs = [
  ['¿Cuánto cuesta limpiar una comunidad de vecinos?', 'No existe una tarifa única. El presupuesto depende del tamaño de la finca, las zonas incluidas, el estado inicial, las tareas y la frecuencia acordada.'],
  ['¿Qué incluye la limpieza de una comunidad?', 'Puede incluir portales, escaleras, rellanos, ascensores, cristales accesibles, buzones, patios, garajes y otras zonas comunes definidas en la propuesta.'],
  ['¿Con qué frecuencia se deben limpiar las escaleras?', 'La frecuencia depende del número de viviendas, el tránsito y las necesidades de la finca. Puede ser semanal o incluir varias visitas por semana.'],
  ['¿Trabajáis con administradores de fincas?', 'Sí. Preparamos propuestas claras para administradores y presidentes, indicando zonas, tareas, periodicidad y trabajos puntuales.'],
  ['¿Realizáis limpiezas puntuales?', 'Sí. Se puede solicitar una puesta a punto inicial, una limpieza puntual o trabajos extraordinarios previamente acordados.'],
  ['¿Podéis incluir el garaje?', 'Sí. El garaje puede incorporarse con tareas y frecuencia propias según su superficie y necesidades.'],
  ['¿Trabajáis fuera de Sabadell?', 'Sí. Trabajamos en Terrassa, Sant Quirze y otros municipios del Vallès Occidental dentro de nuestra cobertura operativa.'],
];

export default function LimpiezaComunidades() {
  const { getServiceSchema } = useSchemaOrg();
  const intro = 'Servicio profesional de limpieza y mantenimiento para comunidades de vecinos, presidentes y administradores de fincas. Trabajamos en Sabadell, Terrassa, Sant Quirze y otros municipios del Vallès, adaptando las tareas y la frecuencia a cada edificio.';
  const serviceSchema = getServiceSchema('Limpieza de comunidades', intro, `${businessConfig.urls.base}${businessConfig.urls.services.communityCleaning}`);
  const whatsappUrl = `https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent('Hola, quiero solicitar un presupuesto para la limpieza de una comunidad.')}`;

  return (
    <div className="min-h-screen bg-white">
      <SEOMeta config={seoConfig.communityCleaning} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Header />
      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-teal-900 to-cyan-900 text-white">
          <div className="absolute inset-0 opacity-20" aria-hidden="true"><div className="absolute -right-32 top-0 h-[32rem] w-[32rem] rounded-full border-[3rem] border-emerald-300/20" /><div className="absolute bottom-0 left-0 h-72 w-72 -translate-x-1/3 translate-y-1/3 rounded-full bg-cyan-400/40 blur-3xl" /></div>
          <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-24 sm:px-6 lg:px-8 lg:pb-28 lg:pt-28">
            <Breadcrumb items={[{ label: 'Limpieza de comunidades' }]} />
            <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1fr_380px]">
              <div className="max-w-4xl">
                <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-200">Servicio para comunidades y administradores de fincas</p>
                <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Limpieza de comunidades en Sabadell y Vallès Occidental</h1>
                <p className="mb-8 text-lg leading-relaxed text-white/85 sm:text-xl">{intro}</p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"><Button size="lg" className="w-full rounded-full bg-emerald-500 px-7 py-6 text-base hover:bg-emerald-400 sm:w-auto"><ClipboardList className="mr-2 h-5 w-5" />Solicitar presupuesto</Button></a>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"><Button size="lg" variant="outline" className="w-full rounded-full border-white/40 bg-white/10 px-7 py-6 text-base text-white hover:bg-white/20 hover:text-white sm:w-auto"><MessageCircle className="mr-2 h-5 w-5" />Hablar por WhatsApp</Button></a>
                </div>
              </div>
              <div className="hidden rounded-3xl border border-white/20 bg-white/10 p-10 backdrop-blur-sm lg:block"><Building2 className="h-20 w-20 text-emerald-300" /><p className="mt-6 text-2xl font-bold">Mantenimiento organizado</p><p className="mt-3 text-white/75">Un alcance claro para cada edificio y cada zona común.</p></div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mx-auto mb-14 max-w-3xl text-center"><h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Servicios de limpieza para comunidades de vecinos</h2><p className="mt-4 text-lg text-gray-600">Definimos las tareas que necesita la finca y las dejamos reflejadas en la propuesta.</p></div><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{services.map(([title, description]) => <Card key={title} className="border-0 shadow-lg"><CardContent className="p-7"><Sparkles className="mb-5 h-9 w-9 text-emerald-600" /><h3 className="mb-3 text-xl font-bold text-gray-900">{title}</h3><p className="leading-relaxed text-gray-600">{description}</p></CardContent></Card>)}</div></div></section>

        <section className="bg-gray-50 py-20 sm:py-24"><div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8"><div><h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Mantenimiento periódico o limpieza puntual</h2><div className="mt-6 space-y-4 text-lg leading-relaxed text-gray-600"><p>El servicio periódico puede organizarse semanalmente o con varias visitas por semana cuando el uso del edificio lo requiere. Cada zona puede tener una frecuencia distinta.</p><p>También valoramos limpiezas puntuales, una puesta a punto inicial y trabajos extraordinarios acordados antes de su realización.</p></div></div><div className="rounded-3xl bg-emerald-950 p-8 text-white"><h2 className="text-3xl font-bold">Servicio para administradores de fincas y presidentes de comunidad</h2><p className="mt-5 leading-relaxed text-white/80">La propuesta puede definir con claridad las zonas incluidas, tareas, periodicidad, trabajos puntuales y necesidades especiales de la finca.</p><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center font-semibold text-emerald-300">Solicitar valoración <ArrowRight className="ml-2 h-4 w-4" /></a></div></div></section>

        <section className="py-20 sm:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-12 text-center"><h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Limpieza de comunidades por zona</h2><p className="mt-4 text-lg text-gray-600">Selecciona tu municipio para consultar información específica sobre el servicio.</p></div><div className="grid gap-6 md:grid-cols-3">{cities.map(([name, path, description]) => <Link key={path} to={path} className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"><Building2 className="h-10 w-10 text-emerald-600" /><h3 className="mt-5 text-2xl font-bold text-gray-900">{name}</h3><p className="mt-3 text-gray-600">{description}</p><span className="mt-6 inline-flex items-center font-semibold text-emerald-700">Ver servicio <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" /></span></Link>)}</div><div className="mt-12 rounded-2xl bg-gray-50 p-7 text-center"><h3 className="text-lg font-bold text-gray-900">También trabajamos en</h3><p className="mt-3 text-gray-600">{otherCoverage.join(' · ')}</p></div></div></section>

        <section className="bg-emerald-50 py-20 sm:py-24"><div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"><h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">¿Cómo calculamos el presupuesto de una comunidad?</h2><p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray-600">No publicamos un precio genérico porque cada finca combina espacios, frecuencias y necesidades diferentes.</p><div className="mt-10 flex flex-wrap justify-center gap-3">{budgetFactors.map((factor) => <span key={factor} className="rounded-full border border-emerald-200 bg-white px-4 py-2 text-gray-700">{factor}</span>)}</div><ol className="mt-12 grid gap-5 md:grid-cols-4">{process.map((step, index) => <li key={step} className="rounded-2xl bg-white p-6 shadow-sm"><span className="text-sm font-bold text-emerald-600">0{index + 1}</span><p className="mt-2 font-bold text-gray-900">{step}</p></li>)}</ol></div></section>

        <section className="py-20 sm:py-24"><div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"><h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">Servicios complementarios para zonas comunes</h2><div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2"><Link to={businessConfig.urls.services.sofaCleaning} className="rounded-3xl border border-gray-100 p-8 shadow-lg hover:shadow-xl"><h3 className="text-2xl font-bold">Sofás y sillones</h3><p className="mt-3 text-gray-600">Para porterías, recepciones, salas sociales y otros espacios comunitarios con mobiliario tapizado.</p></Link><Link to={businessConfig.urls.services.carpetCleaning} className="rounded-3xl border border-gray-100 p-8 shadow-lg hover:shadow-xl"><h3 className="text-2xl font-bold">Alfombras y moquetas</h3><p className="mt-3 text-gray-600">Limpieza profesional de alfombras y elementos textiles presentes en zonas comunes.</p></Link></div></div></section>

        <section className="bg-gray-50 py-20 sm:py-24"><div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"><h2 className="mb-10 text-center text-3xl font-bold text-gray-900 sm:text-4xl">Preguntas frecuentes</h2><div className="space-y-4">{faqs.map(([question, answer]) => <details key={question} className="rounded-2xl border border-gray-200 bg-white p-6 open:shadow-md"><summary className="cursor-pointer list-none pr-8 text-lg font-semibold text-gray-900 marker:hidden">{question}</summary><p className="mt-4 leading-relaxed text-gray-600">{answer}</p></details>)}</div></div></section>

        <section className="bg-gradient-to-r from-emerald-800 to-teal-800 py-16 text-white"><div className="mx-auto max-w-4xl px-4 text-center sm:px-6"><h2 className="text-3xl font-bold sm:text-4xl">Solicita una valoración para tu comunidad</h2><p className="mx-auto mt-4 max-w-2xl text-white/80">Cuéntanos cómo es la finca y qué zonas necesitan mantenimiento.</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><a href={whatsappUrl} target="_blank" rel="noopener noreferrer"><Button size="lg" className="w-full rounded-full bg-white px-7 py-6 text-emerald-900 hover:bg-gray-100 sm:w-auto"><MessageCircle className="mr-2 h-5 w-5" />Solicitar presupuesto</Button></a><a href={`tel:${businessConfig.phone}`}><Button size="lg" variant="outline" className="w-full rounded-full border-white/40 bg-white/10 px-7 py-6 text-white hover:bg-white/20 hover:text-white sm:w-auto"><Phone className="mr-2 h-5 w-5" />{businessConfig.phoneDisplay}</Button></a></div></div></section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
