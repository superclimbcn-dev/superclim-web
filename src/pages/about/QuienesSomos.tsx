import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Award, Leaf, Users, Shield, Clock, Heart, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Header } from '@/components/Header';
import { Footer } from '@/sections/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SEOMeta } from '@/components/SEOMeta';
import { Breadcrumb } from '@/components/Breadcrumb';
import { businessConfig } from '@/config/business';
import { seoConfig } from '@/config/seo';

const valores = [
  {
    icon: Leaf,
    title: 'Compromiso Ecológico',
    description: 'Utilizamos productos 100% biodegradables y respetuosos con el medio ambiente, seguros para toda la familia.',
  },
  {
    icon: Shield,
    title: 'Garantía de Calidad',
    description: 'Ofrecemos 2 años de garantía por escrito en nuestro servicio de impermeabilización.',
  },
  {
    icon: Users,
    title: 'Equipo Experto',
    description: 'Nuestros técnicos están altamente capacitados con más de 16 años de experiencia en el sector.',
  },
  {
    icon: Heart,
    title: 'Atención Personalizada',
    description: 'Cada cliente recibe un tratamiento único adaptado a sus necesidades específicas.',
  },
  {
    icon: Clock,
    title: 'Puntualidad',
    description: 'Respetamos tu tiempo. Cumplimos con los horarios acordados y respondemos en menos de 24 horas.',
  },
  {
    icon: Award,
    title: 'Excelencia',
    description: 'Buscamos la perfección en cada servicio. Más de 5.000 clientes satisfechos nos avalan.',
  },
];

export default function QuienesSomos() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div className="min-h-screen bg-white">
      <SEOMeta config={seoConfig.about} />
      <Header />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <Breadcrumb items={[{ label: 'Quiénes Somos' }]} />

          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 40 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mt-8 max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Quiénes <span className="text-emerald-400">Somos</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Superclim es una empresa líder en limpieza de sofás, impermeabilizacion de sofas,
              limpieza de alfombras y limpieza de colchones con sede en Barcelona. Contamos con
              años de experiencia en el sector y un equipo altamente capacitado.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Historia */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Nuestra <span className="text-emerald-600">Historia</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <strong>Superclim</strong> es una empresa líder en limpieza de sofás,
                  impermeabilizacion de sofas, limpieza de alfombras y limpieza de colchones con
                  sede en Barcelona. Contamos con años de experiencia en el sector y un equipo
                  altamente capacitado que utiliza las técnicas y equipos más avanzados para ofrecer
                  resultados excepcionales.
                </p>
                <p>
                  Nuestra misión es transformar el entorno de nuestros clientes, proporcionando un
                  espacio más limpio y saludable. Cada miembro de nuestro equipo está entrenado para
                  atender las necesidades específicas de cada cliente, asegurando un servicio
                  personalizado y eficiente.
                </p>
                <p>
                  Además, nos enorgullecemos de utilizar productos ecológicos que son seguros para tu
                  familia y el medio ambiente. Desde nuestros inicios en Sabadell, hemos expandido
                  nuestros servicios para cubrir toda el área metropolitana de Barcelona,
                  incluyendo Terrassa, Sant Cugat, Cerdanyola, Rubí y más.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-4 bg-emerald-50 rounded-xl">
                      <div className="text-4xl font-bold text-emerald-600 mb-2">{businessConfig.experienceYears}+</div>
                      <div className="text-sm text-gray-600">Años de experiencia</div>
                    </div>
                    <div className="text-center p-4 bg-emerald-50 rounded-xl">
                      <div className="text-4xl font-bold text-emerald-600 mb-2">5.000+</div>
                      <div className="text-sm text-gray-600">Clientes satisfechos</div>
                    </div>
                    <div className="text-center p-4 bg-emerald-50 rounded-xl">
                      <div className="text-4xl font-bold text-emerald-600 mb-2">9</div>
                      <div className="text-sm text-gray-600">Ciudades cubiertas</div>
                    </div>
                    <div className="text-center p-4 bg-emerald-50 rounded-xl">
                      <div className="text-4xl font-bold text-emerald-600 mb-2">4.9</div>
                      <div className="text-sm text-gray-600">Valoración Google</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Nuestros <span className="text-emerald-600">Valores</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Los principios que guían cada uno de nuestros servicios y nos han convertido en
              referentes del sector.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valores.map((valor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-6">
                      <valor.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{valor.title}</h3>
                    <p className="text-gray-600">{valor.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
              ¿Conoces ya nuestros servicios?
            </h2>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
              Descubre por qué más de 5.000 clientes confían en Superclim para mantener sus hogares
              limpios y saludables.
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
                href={`https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent('Hola! Me gustaría más información sobre sus servicios')}`}
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
