import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  Phone,
  MessageCircle,
  Sofa,
  Bed,
  LayoutGrid,
  Shield,
  Armchair,
  Home,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Header } from '@/components/Header';
import { Footer } from '@/sections/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SEOMeta } from '@/components/SEOMeta';
import { Breadcrumb } from '@/components/Breadcrumb';
import { businessConfig } from '@/config/business';
import { seoConfig } from '@/config/seo';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Sofa,
    title: 'Limpieza de Sofás',
    description: 'Recupera el aspecto y la comodidad de tus sofás con nuestra limpieza profesional. Eliminamos manchas, suciedad y malos olores.',
    href: '/limpieza-de-sofas/',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: LayoutGrid,
    title: 'Limpieza de Alfombras',
    description: 'Servicio profesional de lavado de alfombras con recogida y entrega. Eliminamos manchas, ácaros y olores persistentes.',
    href: '/limpieza-de-alfombras/',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Bed,
    title: 'Limpieza de Colchones',
    description: 'Eliminamos ácaros, bacterias y manchas de tu colchón. Garantizamos un descanso saludable y reparador.',
    href: '/mas-servicios/',
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: Shield,
    title: 'Impermeabilización de Sofás',
    description: 'Protege tus muebles contra manchas y líquidos con garantía de 2 años por escrito. Productos ecológicos y seguros.',
    href: '/impermeabilizacion-de-sofas',
    color: 'from-emerald-600 to-teal-600',
  },
  {
    icon: Armchair,
    title: 'Limpieza de Sillones',
    description: 'Limpieza completa de sillones, eliminando suciedad, manchas y olores para restaurar su apariencia original.',
    href: '/limpieza-de-sofas/limpieza-de-sillones',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: Home,
    title: 'Servicio a Domicilio',
    description: 'Limpieza de sofás directamente en tu hogar. Sin mover tus muebles, con equipos profesionales portátiles.',
    href: '/limpieza-de-sofas/limpieza-de-sofas-a-domicilio',
    color: 'from-rose-500 to-pink-500',
  },
];

export default function ServicesPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div className="min-h-screen bg-white">
      <SEOMeta config={seoConfig.services} />
      <Header />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <Breadcrumb items={[{ label: 'Servicios' }]} />

          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 40 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mt-8 max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Nuestros <span className="text-emerald-400">Servicios</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Descubre todos nuestros servicios de limpieza profesional de tapicerías. Desde sofás
              y alfombras hasta colchones y cuero. Servicio a domicilio en toda el área
              metropolitana de Barcelona.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow border-0 shadow-lg group">
                  <CardContent className="p-8">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}
                    >
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <Link
                      to={service.href}
                      className="inline-flex items-center text-emerald-600 font-semibold group-hover:text-emerald-700 transition-colors"
                    >
                      Saber Más
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios adicionales */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Servicios <span className="text-emerald-600">Adicionales</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Además de nuestros servicios principales, ofrecemos soluciones especializadas para
              necesidades específicas.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Restauración de Alfombras
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Especialistas en la restauración de alfombras orientales, persas e indianas.
                    Recuperamos el esplendor de tus alfombras con técnicas tradicionales.
                  </p>
                  <Link
                    to="/restauracion-de-alfombras"
                    className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
                  >
                    Saber Más
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Limpieza de Muebles en Cuero
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Cuidado experto para tus muebles de cuero y piel natural. Limpieza profunda,
                    hidratación y protección UV.
                  </p>
                  <Link
                    to="/limpieza-de-muebles-en-cuero"
                    className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
                  >
                    Saber Más
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              ¿Necesitas algún servicio?
            </h2>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
              Contáctanos y te ayudaremos a elegir el servicio que mejor se adapte a tus necesidades.
              Presupuesto gratuito sin compromiso.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={`tel:${businessConfig.phone}`}>
                <Button
                  size="lg"
                  className="bg-white text-emerald-900 hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold shadow-xl"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Llamar Ahora
                </Button>
              </a>
              <a
                href={`https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent('Hola! Me gustaría información sobre sus servicios')}`}
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

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
