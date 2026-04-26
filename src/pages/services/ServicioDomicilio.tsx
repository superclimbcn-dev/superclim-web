import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { 
  Home, 
  Check, 
  Truck,
  Clock,
  MapPin,
  Shield,
  Sparkles,
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
import { seoConfig } from '@/config/seo';

const ventajas = [
  {
    icon: Home,
    title: "Sin Mover tus Muebles",
    description: "Trabajamos directamente en tu hogar, sin necesidad de trasladar nada."
  },
  {
    icon: Truck,
    title: "Equipos Portátiles",
    description: "Maquinaria profesional de última generación que llevamos a tu domicilio."
  },
  {
    icon: Clock,
    title: "Horario Flexible",
    description: "Nos adaptamos a tus horarios, incluyendo fines de semana."
  },
  {
    icon: Shield,
    title: "Productos Certificados",
    description: "Utilizamos productos ecológicos, seguros para tu familia y mascotas."
  }
];

const zonas = [
  "Sabadell",
  "Barcelona",
  "Terrassa",
  "Cerdanyola del Vallès",
  "Sant Cugat",
  "Sant Quirze del Vallès",
  "Castellar del Vallès",
  "Rubí"
];

export default function ServicioDomicilio() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div className="min-h-screen bg-white">
      <SEOMeta config={seoConfig.homeService} />
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <Breadcrumb items={[{ label: 'Servicio a Domicilio' }]} />
      </div>
      
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-violet-800 to-purple-900" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 40 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 text-violet-200 font-semibold">
              <Home className="w-5 h-5" />
              COMODIDAD TOTAL
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Servicio a <span className="text-violet-300">Domicilio</span>
            </h1>

            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Superclim Servicios con nuestra larga experiencia y un método único desarrollado por nosotros, te ayudamos a mantener la limpieza de sofá a domicilio y dejarlo impecable. Nuestra empresa está diseñada para ofrecer los servicios de limpieza de sofá a domicilio en Barcelona, Sabadell y alrededores.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href={`tel:${businessConfig.phone}`}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-xl"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Solicitar Presupuesto
                </Button>
              </a>
              <a
                href={`https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent('Hola! Me interesa el servicio a domicilio')}`}
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

      {/* Ventajas */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ventajas de nuestro <span className="text-indigo-600">servicio</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ventajas.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow border-0 shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center mx-auto mb-6">
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

      {/* Zonas */}
      <section className="py-24 bg-gradient-to-br from-indigo-900 via-violet-800 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <MapPin className="w-12 h-12 text-violet-300 mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Zonas que <span className="text-violet-300">cubrimos</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Servicio de limpieza a domicilio en Barcelona y todas las ciudades cercanas.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {zonas.map((zona, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10"
              >
                <div className="w-8 h-8 rounded-full bg-violet-500/30 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-violet-300" />
                </div>
                <span className="text-white/90">{zona}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center mx-auto mb-8">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            ¿Listo para disfrutar de la comodidad?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            No tienes que preocuparte por nada. Nuestro equipo técnico se desplaza 
            hasta tu domicilio con todo el equipo necesario.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+34624529442">
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-xl"
              >
                <Phone className="w-5 h-5 mr-2" />
                Llamar Ahora
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
