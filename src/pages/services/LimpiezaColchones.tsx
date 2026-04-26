import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { 
  BedDouble, 
  Check, 
  Sparkles, 
  Wind,
  Shield,
  Heart,
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

const beneficios = [
  {
    icon: Wind,
    title: "Eliminación de Ácaros",
    description: "Eliminamos los ácaros del polvo que causan alergias y problemas respiratorios."
  },
  {
    icon: Shield,
    title: "Desinfección Completa",
    description: "Acabamos con bacterias, hongos y microorganismos dañinos."
  },
  {
    icon: Sparkles,
    title: "Eliminación de Olores",
    description: "Dile adiós a los malos olores persistentes de sudor y humedad."
  },
  {
    icon: Heart,
    title: "Descanso Saludable",
    description: "Garantiza un ambiente limpio y saludable para tu descanso."
  }
];

const razones = [
  "Pasamos el 35% de nuestra vida sobre el colchón",
  "Dejamos residuos de piel, sudor y polvo",
  "Los ácaros se alimentan de células muertas de la piel",
  "Ambientes húmedos favorecen el crecimiento de microorganismos",
  "Puede alargar la vida útil de tu colchón",
  "Essencial para personas con alergias y asma"
];

export default function LimpiezaColchones() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div className="min-h-screen bg-white">
      <SEOMeta config={seoConfig.mattressCleaning} />
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <Breadcrumb items={[{ label: 'Limpieza de Colchones' }]} />
      </div>
      
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-600 via-orange-600 to-red-600" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 40 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 text-amber-200 font-semibold">
              <Heart className="w-5 h-5" />
              SALUD PARA TU DESCANSO
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Limpieza de <span className="text-amber-300">Colchones</span>
            </h1>

            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              En nuestra empresa Superclim Servícios también realizamos servicios de limpieza de colchones, ya que estos artículos están sujetos a la proliferación de ácaros y otros gérmenes nocivos para la salud humana. Este servicio se realiza en el domicilio del cliente, sin necesidad de desplazamiento y el tiempo de secado varía de 12 a 24 horas, según el grado de suciedad y las condiciones climáticas.
            </p>

            <div className="flex flex-wrap gap-4">
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
                href={`https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent('Hola! Me interesa la limpieza de colchones')}`}
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

      {/* ¿Por qué limpiar? */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                ¿Por qué necesitas limpiar <span className="text-amber-600">tus colchones</span>?
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                La limpieza y desinfección de su colchón es particularmente importante en ambientes 
                húmedos donde el sudor y la humedad de la superficie podrían exacerbar el crecimiento 
                de microorganismos como los ácaros del polvo doméstico, el moho y las bacterias.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Especialmente si tiene alergias como eccema y asma, es potencialmente alérgico a los 
                excrementos de los ácaros del polvo doméstico que se alimentan principalmente de las 
                células muertas de la piel del colchón.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {razones.map((razon, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-md">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{razon}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-24 bg-gradient-to-br from-amber-600 via-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Beneficios de nuestra <span className="text-amber-200">limpieza</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {beneficios.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mx-auto mb-8">
            <BedDouble className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            ¡Haz tu presupuesto sin compromiso!
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            El servicio se realiza en el domicilio del cliente, sin necesidad de desplazamiento. 
            El tiempo de secado varía de 12 a 24 horas según el grado de suciedad.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+34624529442">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-xl"
              >
                <Phone className="w-5 h-5 mr-2" />
                Llamar Ahora
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Nuevo contenido SEO 2026 - Colchones antiácaros */}
      <section className="py-24 bg-gradient-to-br from-violet-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-4">
              Tratamientos Especializados 2026
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Limpieza de colchones <span className="text-violet-600">antiácaros</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              El colchón es el lugar donde pasamos un tercio de nuestra vida. Nuestro tratamiento
              antiácaros especializado elimina los microorganismos que afectan tu descanso y salud.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Elimina ácaros del polvo
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Los ácaros del polvo son la principal causa de alergia en el hogar. Nuestro
                    tratamiento elimina hasta el 99% de estos microorganismos, mejorando
                    significativamente la calidad del sueño.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Desinfección profunda
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Eliminamos bacterias, hongos y virus que pueden acumularse en el colchón.
                    Especialmente recomendado después de enfermedades o para personas con sistema
                    inmunológico sensible.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Tratamiento para bebés
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Productos hipoalergénicos y sin perfume para la limpieza de colchones de cuna y
                    cama infantil. La máxima seguridad para los más pequeños de la casa.
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
