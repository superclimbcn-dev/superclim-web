import { motion } from 'framer-motion';
import { Car, Check, MessageCircle, Phone, Sparkles, Timer, Warehouse } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Header } from '@/components/Header';
import { Footer } from '@/sections/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SEOMeta } from '@/components/SEOMeta';
import { Breadcrumb } from '@/components/Breadcrumb';
import { businessConfig } from '@/config/business';
import { seoConfig } from '@/config/seo';

const includedItems = [
  {
    title: 'Asientos',
    description:
      'Limpieza de asientos de tela y superficies textiles, con tratamiento orientado a mejorar el aspecto y la higiene general.',
  },
  {
    title: 'Moquetas y alfombrillas',
    description:
      'Eliminación de suciedad acumulada en suelo y alfombrillas, mejorando la limpieza visual del interior.',
  },
  {
    title: 'Maletero',
    description:
      'Limpieza de la zona de carga, especialmente útil en coches con polvo, restos o suciedad de uso frecuente.',
  },
  {
    title: 'Zonas interiores',
    description:
      'Repaso general del habitáculo para dejar el interior más limpio, ordenado y agradable.',
  },
];

const idealFor = [
  'Asientos manchados',
  'Moquetas sucias',
  'Olores acumulados',
  'Uso diario intensivo',
  'Vehículos de segunda mano',
  'Interiores descuidados',
];

const resultExamples = [
  {
    title: 'Asiento delantero',
    description: 'Ejemplo de mejora visual tras la limpieza interior.',
  },
  {
    title: 'Moqueta y suelo',
    description: 'Resultado orientado a mejorar limpieza e higiene del habitáculo.',
  },
  {
    title: 'Interior general',
    description: 'Perfecto para reforzar confianza con pruebas reales del trabajo.',
  },
];

export default function LimpiezaTapiceriaCocheSabadell() {
  const whatsappMessage =
    'Hola! Me interesa la limpieza de tapicería de coche en Sabadell. Quiero enviar fotos del interior para presupuesto.';

  return (
    <div className="min-h-screen bg-white">
      <SEOMeta config={seoConfig.carUpholsterySabadell} />
      <Header />

      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&q=80&w=2069')] bg-cover bg-center opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <Breadcrumb
            items={[
              { label: 'Servicios', href: '/servicios/' },
              { label: 'Limpieza de tapicería de coche en Sabadell' },
            ]}
          />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-8 max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 mb-6">
              <Warehouse className="w-5 h-5 text-emerald-300" />
              <span className="text-emerald-200 font-semibold">SERVICIO EN LOCAL</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Limpieza de tapicería de coche en Sabadell
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Servicio en local para asientos, moquetas, alfombrillas, maletero e interior del
              vehículo.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href={`tel:${businessConfig.phone}`}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-xl"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Solicitar presupuesto
                </Button>
              </a>
              <a
                href={`https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 rounded-full px-8 py-6 text-lg font-semibold"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Servicio profesional en local
              </h2>
              <div className="space-y-5 text-lg text-gray-600 leading-relaxed">
                <p>
                  Superclim Servicios ofrece limpieza de tapicería de coche en Sabadell con
                  servicio realizado en local. Trabajamos la limpieza interior del vehículo con
                  atención al detalle, utilizando productos adecuados para cada superficie y un
                  proceso adaptado al estado del coche.
                </p>
                <p>
                  Este servicio es ideal para vehículos con suciedad acumulada, manchas, olores, uso
                  diario intensivo o interiores que necesitan una limpieza más cuidada.
                </p>
                <p>
                  Al trabajar en nuestro local, podemos dedicar el tiempo y el espacio necesarios
                  para conseguir un resultado más completo y mejor controlado.
                </p>
              </div>
            </div>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Timer className="w-6 h-6 text-emerald-600" />
                  <h3 className="text-xl font-bold text-gray-900">Ideal para coches con:</h3>
                </div>
                <div className="space-y-3">
                  {idealFor.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              ¿Qué incluye la limpieza interior?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {includedItems.map((item) => (
              <Card key={item.title} className="h-full border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-5">
                    <Car className="w-6 h-6 text-emerald-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            ¿Por qué trabajamos en local?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-5">
            Al realizar la limpieza en nuestro local en Sabadell, podemos trabajar con más
            comodidad, mejor organización y el tiempo necesario para cada vehículo. Esto nos permite
            ofrecer un servicio más detallado y controlado que una limpieza rápida improvisada.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            También es una buena opción para clientes que buscan dejar el coche con cita previa y
            recogerlo cuando el trabajo esté terminado.
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Antes y después</h2>
            <p className="text-lg text-gray-600">
              Aquí puedes mostrar resultados reales del servicio. Sustituye las imágenes de ejemplo
              por tus fotos reales.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {resultExamples.map((item) => (
              <Card key={item.title} className="overflow-hidden border-0 shadow-lg">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-100 grid grid-cols-2">
                  <div className="flex items-center justify-center border-r border-white/70 text-gray-500 font-semibold">
                    Antes
                  </div>
                  <div className="flex items-center justify-center text-emerald-700 font-semibold">
                    Después
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="w-12 h-12 text-emerald-300 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Pide tu presupuesto sin compromiso
          </h2>
          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            Envíanos por WhatsApp fotos del interior de tu coche, indícanos el modelo y el estado
            general de la tapicería. Te responderemos con una valoración rápida y cita previa.
          </p>
          <a
            href={`https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-white text-emerald-700 hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold shadow-xl"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Escríbenos por WhatsApp
            </Button>
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
