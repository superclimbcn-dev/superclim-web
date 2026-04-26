import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { 
  Shield, 
  Check, 
  Droplets,
  Clock,
  Award, 
  Leaf, 
  ArrowRight,
  Sparkles,
  Star,
  Phone,
  MessageCircle,
  Umbrella,
  Heart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Header } from '@/components/Header';
import { Footer } from '@/sections/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { businessConfig } from '@/config/business';
import { SEOMeta } from '@/components/SEOMeta';
import { Breadcrumb } from '@/components/Breadcrumb';
import { seoConfig } from '@/config/seo';

const ventajas = [
  "100 % hipoalergénico",
  "Seguro para niños y mascotas",
  "Transpirable",
  "Repelente al agua y al aceite",
  "También para manchas de mascotas",
  "Invisible e inodoro",
  "Previene la suciedad",
  "Sin nanopartículas",
  "Inofensivo para la salud",
  "Reduce la decoloración",
  "Escudo protector para muebles tapizados y de cuero",
  "Sin experimentación animal",
  "Protección UV",
  "Los líquidos se deslizan",
  "100 % vegano"
];

const beneficios = [
  {
    icon: Droplets,
    title: "Protección contra Líquidos",
    description: "Los líquidos se deslizan sobre la superficie sin penetrar en la tela."
  },
  {
    icon: Shield,
    title: "Prevención de Manchas",
    description: "Evita que las manchas penetren en las fibras, facilitando su limpieza."
  },
  {
    icon: Clock,
    title: "Durabilidad Extendida",
    description: "Prolonga la vida útil de tus muebles durante años."
  },
  {
    icon: Sparkles,
    title: "Fácil Limpieza",
    description: "Facilita el mantenimiento diario de tus sofás y alfombras."
  },
  {
    icon: Leaf,
    title: "100% Ecológico",
    description: "Productos veganos y respetuosos con el medio ambiente."
  },
  {
    icon: Heart,
    title: "Seguro para la Familia",
    description: "Hipoalergénico y seguro para niños y mascotas."
  }
];

export default function Impermeabilizacion() {
  useTranslation();
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: ventajasRef, isVisible: ventajasVisible } = useScrollAnimation({ threshold: 0.1 });

  const scrollToContact = () => {
    const element = document.querySelector('#contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOMeta config={seoConfig.impermeabilization} />
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <Breadcrumb items={[{ label: 'Impermeabilización de Sofás' }]} />
      </div>
      
      {/* Hero Section - Extraordinário */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background com gradiente */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* Floating elements decorativos */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl"
        />
        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-40 left-10 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              ref={heroRef}
              initial={{ opacity: 0, y: 40 }}
              animate={heroVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={heroVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 mb-6"
              >
                <Award className="w-5 h-5 text-emerald-400" />
                <span className="text-emerald-300 font-semibold">2 AÑOS DE GARANTÍA POR ESCRITO</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={heroVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              >
                Impermeabilización
                <span className="block text-emerald-400">de Sofás</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={heroVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-white/80 mb-8 leading-relaxed"
              >
                Mantén tus sofás como nuevos durante más tiempo con nuestros servicios de impermeabilización de sofas profesional y con garantia de 2 años por escrito. Protege contra manchas, derrames y desgaste diario.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={heroVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Button
                  onClick={scrollToContact}
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-xl shadow-emerald-500/30 group"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Solicitar Presupuesto
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <a
                  href={`https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent('Hola! Me interesa la impermeabilización de sofás')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 rounded-full px-8 py-6 text-lg font-semibold"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Directo
                  </Button>
                </a>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={heroVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex gap-8 mt-10"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400">16+</div>
                  <div className="text-sm text-white/60">Años experiencia</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400">5K+</div>
                  <div className="text-sm text-white/60">Clientes felices</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400">2</div>
                  <div className="text-sm text-white/60">Años garantía</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Card de destaque */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={heroVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden lg:block"
            >
              <Card className="bg-white/10 backdrop-blur-xl border-white/20 overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Blindaje Profesional</h3>
                      <p className="text-emerald-300">Protección total garantizada</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      "Protección contra líquidos y manchas",
                      "Invisible e inodoro",
                      "Seguro para niños y mascotas",
                      "2 años de garantía por escrito"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-emerald-500/30 flex items-center justify-center">
                          <Check className="w-4 h-4 text-emerald-400" />
                        </div>
                        <span className="text-white/90">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="flex items-center gap-2">
                      {[1,2,3,4,5].map(i => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                      <span className="text-white/80 ml-2">4.9/5 (156 reseñas)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ¿Por qué elegirnos? */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, y: 30 }}
            animate={contentVisible ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
              Nuestro Servicio
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              ¿Por qué elegir nuestra <span className="text-emerald-600">impermeabilización</span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Superclim ofrece un servicio especializado de impermeabilización de sofás, diseñado para proteger tus muebles contra derrames accidentales, manchas y el desgaste general del uso diario. Con más de 16 años de experiencia, garantizamos la máxima protección y durabilidad para tus sofás.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beneficios.map((beneficio, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={contentVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-6">
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

      {/* Ventajas - Grid completo */}
      <section className="py-24 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ventajasRef}
            initial={{ opacity: 0, y: 30 }}
            animate={ventajasVisible ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-emerald-300 text-sm font-medium mb-4">
              Ventajas Exclusivas
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Impermeabilización con <span className="text-emerald-400">2 años de garantía</span>
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Nuestro tratamiento ofrece beneficios únicos que protegen tus muebles 
              y tu familia. Productos de última generación, seguros y ecológicos.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ventajas.map((ventaja, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={ventajasVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-500/30 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-emerald-400" />
                </div>
                <span className="text-white/90">{ventaja}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="contacto" className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mx-auto mb-8">
              <Umbrella className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              ¿Listo para proteger tus muebles?
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
              No esperes más para darle a tus sofás la protección que merecen. 
              Solicita tu presupuesto gratuito sin compromiso.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={`tel:${businessConfig.phone}`}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-xl"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Llamar Ahora
                </Button>
              </a>
              <a
                href={`https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent('Hola! Me interesa la impermeabilización de sofás. ¿Podrían darme más información?')}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 rounded-full px-8 py-6 text-lg font-semibold"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Nuevo contenido SEO 2026 - Blindaje de sofás */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
              Sinónimos y Términos Relacionados 2026
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Blindaje de sofás — <span className="text-emerald-600">máxima protección</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              El blindaje de sofás es otro término para referirse a la impermeabilización. En
              Superclim ofrecemos el mejor blindaje profesional con garantía de 2 años por escrito.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    ¿Qué es el blindaje de sofás?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    El blindaje de sofás consiste en aplicar un tratamiento protector invisible que
                    crea una barrera contra líquidos, manchas y suciedad. A diferencia de otros
                    tratamientos, nuestro blindaje no altera la textura ni el color del tejido, y
                    es completamente seguro para niños y mascotas.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Diferencia entre blindaje e impermeabilización
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Aunque muchos clientes buscan "blindaje de sofás" e otros "impermeabilización",
                    en Superclim ambos términos se refieren al mismo servicio de protección avanzada.
                    Nuestro tratamiento repele agua, aceite, vino, café y hasta manchas de mascotas.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
