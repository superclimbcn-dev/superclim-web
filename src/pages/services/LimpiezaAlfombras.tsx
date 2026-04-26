
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { 
  Grid3X3, 
  Check, 
  Sparkles, 
  Droplets,
  Wind,
  Shield,
  Phone,
  MessageCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Header } from '@/components/Header';
import { Footer } from '@/sections/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { businessConfig } from '@/config/business';
import { SEOMeta } from '@/components/SEOMeta';
import { Breadcrumb } from '@/components/Breadcrumb';
import { CityServiceLinks } from '@/components/CityServiceLinks';
import { seoConfig } from '@/config/seo';

const beneficios = [
  {
    icon: Droplets,
    title: "Eliminación de Orina",
    description: "Tratamiento especializado para eliminar manchas y olores de orina de mascotas."
  },
  {
    icon: Sparkles,
    title: "Limpieza Profunda",
    description: "Desinfección completa que elimina bacterias y microorganismos."
  },
  {
    icon: Wind,
    title: "Eliminación de Ácaros",
    description: "Acabamos con los ácaros y alérgenos que causan problemas respiratorios."
  },
  {
    icon: Shield,
    title: "Preservación de Calidad",
    description: "Técnicas que mantienen la textura y color originales de tus alfombras."
  }
];

const tiposAlfombras = [
  "Alfombras orientales y persas",
  "Alfombras importadas e indias",
  "Alfombras industrializadas",
  "Moquetas y tapetes",
  "Alfombras de lana y sintéticas"
];

export default function LimpiezaAlfombras() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div className="min-h-screen bg-white">
      <SEOMeta config={seoConfig.carpetCleaning} />
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <Breadcrumb items={[{ label: 'Limpieza de Alfombras' }]} />
      </div>
      
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 40 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 mb-6 text-purple-300 font-semibold">
              <Sparkles className="w-5 h-5" />
              ESPECIALISTAS EN ALFOMBRAS
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Limpieza de <span className="text-purple-400">Alfombras</span>
            </h1>

            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Superclim Servicios es una empresa privada que ofrece servicios de limpieza de sofás a domicilio, limpieza de alfombras, alfombrillas, alfombras orientales, alfombras artesanales, alfombras industriales y tapizados en general. Nuestra dilatada experiencia, máquinas de trabajo innovadoras y productos de máxima calidad, respetuosos con el medio ambiente, proporcionan excelentes resultados y una gran satisfacción a quienes confían en nosotros.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href={`tel:${businessConfig.phone}`}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-xl"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Solicitar Presupuesto
                </Button>
              </a>
              <a
                href={`https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent('Hola! Me interesa la limpieza de alfombras')}`}
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

      {/* Beneficios */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              ¿Por Qué es Importante Limpiar las Alfombras <span className="text-purple-600">Regularmente</span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Las alfombras acumulan polvo, suciedad y otros contaminantes que pueden afectar la salud de los habitantes del hogar. Además, mantener las alfombras limpias prolonga su vida útil y mantiene su apariencia como nueva por más tiempo. Nuestro servicio de lavado de alfombras en Barcelona asegura que tus alfombras no solo luzcan impecables, sino que también contribuyan a un ambiente más saludable en tu hogar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {beneficios.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow border-0 shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-6">
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tipos de Alfombras */}
      <section className="py-24 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Trabajamos con todo tipo de <span className="text-purple-300">alfombras</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tiposAlfombras.map((tipo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <div className="w-8 h-8 rounded-full bg-purple-500/30 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-purple-400" />
                </div>
                <span className="text-white/90">{tipo}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-8">
            <Grid3X3 className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Recupera el brillo de tus alfombras
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            También realizamos restauración de alfombras orientales, importadas y persas. 
            Confía en los especialistas.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+34624529442">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-xl"
              >
                <Phone className="w-5 h-5 mr-2" />
                Llamar Ahora
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Nuevo contenido SEO 2026 - Restauración de alfombras */}
      <section className="py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-4">
              Servicio Premium 2026
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Restauración de alfombras <span className="text-amber-600">orientales</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Además del lavado de alfombras estándar, somos especialistas en la restauración de
              alfombras orientales, persas, kilim y alfombras artesanales de alto valor.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Alfombras persas</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Tratamiento especializado para alfombras persas con tintes naturales. Lavado a
                    mano con productos específicos que preservan los colores y la integridad de las
                    fibras de lana y seda.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-full border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Alfombras orientales</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Restauración completa de alfombras orientales: reparación de orillas, flecos,
                    zonas desgastadas y recuperación de color. Técnicas tradicionales de tejido a
                    mano.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="h-full border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Recogida y entrega</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Servicio de recogida y entrega de alfombras en Sabadell, Barcelona, Terrassa,
                    Sant Cugat y todas las zonas cercanas. Transporte seguro y cuidadoso para piezas
                    de alto valor.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <CityServiceLinks
        title="Limpieza de Alfombras por Ciudad"
        subtitle="Servicio profesional a domicilio en tu zona. Selecciona tu ciudad para más información."
        serviceColor="from-purple-500 to-pink-500"
        cities={[
          { name: 'Barcelona', href: '/limpieza-de-alfombras/barcelona' },
          { name: 'Sabadell', href: '/limpieza-de-alfombras/sabadell' },
          { name: 'Terrassa', href: '/limpieza-de-alfombras/terrassa' },
          { name: 'Sant Cugat', href: '/limpieza-de-alfombras/sant-cugat' },
          { name: 'Cerdanyola', href: '/limpieza-de-alfombras/cerdanyola' },
          { name: 'Barberà', href: '/limpieza-de-alfombras/barbera-del-valles' },
          { name: 'Sant Quirze', href: '/limpieza-de-alfombras/sant-quirze' },
          { name: 'Castellar', href: '/limpieza-de-alfombras/castellar-del-valles' },
          { name: 'Lavado BCN', href: '/limpieza-de-alfombras/lavado-de-alfombras-barcelona' },
        ]}
      />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
