import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Phone, MessageCircle, Check, Shield, Sparkles, Droplets, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Header } from '@/components/Header';
import { Footer } from '@/sections/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SEOMeta } from '@/components/SEOMeta';
import { Breadcrumb } from '@/components/Breadcrumb';
import { businessConfig } from '@/config/business';
import { seoConfig } from '@/config/seo';

const beneficios = [
  {
    icon: Sparkles,
    title: 'Limpieza Profunda',
    description: 'Eliminamos la suciedad acumulada sin dañar la capa protectora del cuero natural.',
  },
  {
    icon: Shield,
    title: 'Hidratación',
    description: 'Aplicamos acondicionadores específicos que previenen el agrietamiento y mantienen la elasticidad.',
  },
  {
    icon: Droplets,
    title: 'Protección contra Manchas',
    description: 'Tratamiento repelente que facilita la limpieza de futuras manchas.',
  },
  {
    icon: Sun,
    title: 'Protección UV',
    description: 'Evitamos la decoloración prematura causada por la exposición solar.',
  },
];

const tiposCuero = [
  'Sofás de piel natural',
  'Sillones de cuero genuino',
  'Butacas de piel anilina',
  'Muebles de cuero semi-anilina',
  'Tapicería de cuero pigmentado',
  'Reposacabezas y apoyabrazos de piel',
];

export default function LimpiezaCuero() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div className="min-h-screen bg-white">
      <SEOMeta config={seoConfig.leatherCleaning} />
      <Header />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-stone-800 via-amber-900 to-stone-900" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <Breadcrumb items={[{ label: 'Limpieza de Muebles en Cuero' }]} />

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
                Limpieza de{' '}
                <span className="block text-amber-400">Muebles en Cuero</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={heroVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-white/80 mb-8 leading-relaxed"
              >
                Cuidado experto para tus muebles de cuero y piel natural. Utilizamos productos
                específicos que limpian en profundidad sin dañar la textura ni el color del cuero.
                Servicio a domicilio en Barcelona y alrededores.
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
                  href={`https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent('Hola! Me interesa la limpieza de muebles en cuero')}`}
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
                    Tipos de cuero que tratamos
                  </h3>
                  <div className="space-y-3">
                    {tiposCuero.map((tipo, i) => (
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

      {/* Beneficios */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Cuidado Profesional del <span className="text-amber-600">Cuero</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              El cuero natural requiere un tratamiento especializado. Nuestros productos y técnicas
              están diseñados para preservar y realzar la belleza de tus muebles.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {beneficios.map((beneficio, index) => (
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
                      <beneficio.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{beneficio.title}</h3>
                    <p className="text-gray-600">{beneficio.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="py-24 bg-gradient-to-br from-stone-800 via-amber-900 to-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Nuestro Proceso de Limpieza de Cuero
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              'Evaluación del tipo de cuero y estado de la tapicería',
              'Limpieza suave con productos pH neutros específicos para cuero',
              'Eliminación de manchas con tratamientos específicos por tipo',
              'Hidratación profunda con acondicionadores de alta calidad',
              'Aplicación de protector UV y repelente de manchas',
              'Acabado con brillo natural y tacto sedoso',
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
              Devuelve la vida a tu sofá de cuero
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
              El cuero es una inversión que merece cuidado profesional. Confía en Superclim para
              mantener tus muebles como nuevos durante años.
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
                href={`https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent('Hola! Me interesa la limpieza de muebles en cuero. ¿Podrían darme más información?')}`}
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
