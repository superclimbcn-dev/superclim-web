import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Phone, MessageCircle, Check, Star, Globe, Award, HandHeart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Header } from '@/components/Header';
import { Footer } from '@/sections/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SEOMeta } from '@/components/SEOMeta';
import { Breadcrumb } from '@/components/Breadcrumb';
import { businessConfig } from '@/config/business';
import { seoConfig } from '@/config/seo';

const tiposAlfombras = [
  'Alfombras persas y orientales',
  'Alfombras indias y pakistaníes',
  'Alfombras chinas y tibetanas',
  'Alfombras kilim y sumak',
  'Alfombras industriales',
  'Alfombras artesanales',
];

const servicios = [
  {
    icon: HandHeart,
    title: 'Reparación de Orillas',
    description: 'Restauramos los flecos y bordes desgastados de tu alfombra con técnicas tradicionales.',
  },
  {
    icon: Award,
    title: 'Confección y Reparación de Flecos',
    description: 'Renovamos, confeccionamos y reparamos flecos desgastados o dañados en alfombras orientales y persas.',
  },
  {
    icon: Star,
    title: 'Reparación de Agujeros',
    description: 'Tejemos a mano las zonas dañadas para una restauración imperceptible.',
  },
  {
    icon: Globe,
    title: 'Lavado Especializado',
    description: 'Limpieza profunda adaptada al tipo de fibra y tintes de cada alfombra.',
  },
];

export default function RestauracionAlfombras() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div className="min-h-screen bg-white">
      <SEOMeta config={seoConfig.restoration} />
      <Header />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-orange-800 to-red-900" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <Breadcrumb items={[{ label: 'Restauración de Alfombras' }]} />

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
            <motion.div
              ref={heroRef}
              initial={{ opacity: 0, y: 40 }}
              animate={heroVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={heroVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              >
                Restauración de{' '}
                <span className="block text-amber-400">Alfombras Orientales</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={heroVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-white/80 mb-8 leading-relaxed"
              >
                Especialistas en la restauración de alfombras orientales, persas, indianas y
                artesanales. Recuperamos el esplendor de tus alfombras con técnicas tradicionales y
                productos de máxima calidad. Servicio de recogida y entrega en Barcelona y
                alrededores.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={heroVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <a href={`tel:${businessConfig.phone}`}>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-xl"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Solicitar Presupuesto
                  </Button>
                </a>
                <a
                  href={`https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent('Hola! Me interesa la restauración de alfombras')}`}
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
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={heroVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden lg:block"
            >
              <Card className="bg-white/10 backdrop-blur-xl border-white/20">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Tipos de alfombras que restauramos
                  </h3>
                  <div className="space-y-3">
                    {tiposAlfombras.map((tipo, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-amber-500/30 flex items-center justify-center">
                          <Check className="w-4 h-4 text-amber-400" />
                        </div>
                        <span className="text-white/90">{tipo}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Nuestros Servicios de <span className="text-amber-600">Restauración</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Cada alfombra es única y merece un tratamiento especializado. Nuestros expertos
              evalúan el estado de tu alfombra y proponen la mejor solución.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {servicios.map((servicio, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mb-6">
                      <servicio.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{servicio.title}</h3>
                    <p className="text-gray-600">{servicio.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Galería de trabajos */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Nuestro <span className="text-amber-600">Taller de Restauración</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Manos expertas devolviendo la vida a alfombras orientales. Desde la confección de flecos
              hasta la reparación de orillas, cada pieza es tratada con el máximo cuidado artesanal.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                src: 'https://images.pexels.com/photos/14258629/pexels-photo-14258629.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1',
                alt: 'Artesano restaurando alfombra oriental en taller',
                caption: 'Reparación artesanal de orillas y flecos',
              },
              {
                src: '/images/restaurando-flecos.jpg',
                alt: 'Experto restaurando flecos de alfombra persa',
                caption: 'Instalación y reparación de flecos orientales',
              },
              {
                src: 'https://images.pexels.com/photos/12519510/pexels-photo-12519510.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1',
                alt: 'Detalle de ribete y flecos de alfombra persa restaurada',
                caption: 'Ribeteado y acabado de alfombras orientales',
              },
            ].map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-semibold text-lg">{img.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-24 bg-gradient-to-br from-amber-900 via-orange-800 to-red-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              ¿Por qué confiar en Superclim para la restauración?
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              'Más de 16 años de experiencia en restauración de alfombras de valor',
              'Técnicos especializados en técnicas tradicionales de tejido',
              'Productos específicos que respetan los tintes naturales',
              'Servicio de recogida y entrega en toda el área metropolitana',
              'Presupuesto sin compromiso previo',
              'Garantía de satisfacción en todos nuestros trabajos',
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <div className="w-8 h-8 rounded-full bg-amber-500/30 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-amber-400" />
                </div>
                <span className="text-white/90">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Recupera el esplendor de tu alfombra
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
              No dejes que el paso del tiempo dañe tus alfombras. Nuestros expertos pueden devolverles
              su belleza original con técnicas tradicionales y productos de calidad.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={`tel:${businessConfig.phone}`}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-xl"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Llamar Ahora
                </Button>
              </a>
              <a
                href={`https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent('Hola! Me interesa la restauración de alfombras. ¿Podrían darme un presupuesto?')}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-amber-500 text-amber-600 hover:bg-amber-50 rounded-full px-8 py-6 text-lg font-semibold"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
