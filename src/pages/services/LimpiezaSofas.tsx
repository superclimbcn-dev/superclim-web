import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { 
  Sofa, 
  Check, 
  Sparkles, 
  Wind,
  Shield,
  Phone,
  MessageCircle,
  Home,
  Star
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

const procesoLimpieza = [
  {
    title: "Inspección Inicial",
    description: "Evaluamos el estado del sofá, tipo de tela y manchas para determinar el mejor tratamiento."
  },
  {
    title: "Aspirado Profundo",
    description: "Eliminamos polvo, ácaros y partículas superficiales con equipos industriales de alta potencia."
  },
  {
    title: "Tratamiento de Manchas",
    description: "Aplicamos productos específicos para cada tipo de mancha (grasa, vino, tinta, etc.)."
  },
  {
    title: "Limpieza Profunda",
    description: "Utilizamos técnicas de inyección-extracción para limpiar hasta las capas más profundas."
  },
  {
    title: "Desinfección",
    description: "Eliminamos bacterias, hongos y olores con productos ecológicos certificados."
  },
  {
    title: "Secado Rápido",
    description: "El tiempo de secado varía de 1 a 3 horas dependiendo de las condiciones climáticas."
  }
];

const beneficios = [
  "Eliminación de ácaros, bacterias y alérgenos",
  "Eliminación de malos olores persistentes",
  "Conservación del tejido y prolongación de vida útil",
  "Mejora de la calidad del aire interior",
  "Prevención de plagas y microorganismos",
  "Productos 100% ecológicos y seguros"
];

export default function LimpiezaSofas() {
  useTranslation();
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div className="min-h-screen bg-white">
      <SEOMeta config={seoConfig.sofaCleaning} />
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <Breadcrumb items={[{ label: 'Limpieza de Sofás' }]} />
      </div>
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 mb-6"
              >
                <Sparkles className="w-5 h-5 text-blue-400" />
                <span className="text-blue-300 font-semibold">LIMPIEZA PROFESIONAL A DOMICILIO</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={heroVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              >
                Limpieza
                <span className="block text-blue-400">de Sofás</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={heroVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-white/80 mb-8 leading-relaxed"
              >
                Recupera el aspecto y la comodidad de tus sofás con nuestra limpieza profesional. 
                Eliminamos manchas, suciedad y malos olores, devolviendo a tus muebles su frescura original.
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
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-xl"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Solicitar Presupuesto
                  </Button>
                </a>
                <a
                  href={`https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent('Hola! Me interesa la limpieza de sofás')}`}
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
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <Home className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Servicio a Domicilio</h3>
                      <p className="text-blue-300">Sin mover tus muebles</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {[
                      "Trabajamos en tu hogar",
                      "Sin necesidad de traslados",
                      "Tiempo de secado: 1-3 horas",
                      "Productos ecológicos certificados"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-blue-500/30 flex items-center justify-center">
                          <Check className="w-4 h-4 text-blue-400" />
                        </div>
                        <span className="text-white/90">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ¿Por qué limpiar el sofá? */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, y: 30 }}
            animate={contentVisible ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
              Importancia de la Limpieza
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              ¿Por Qué es Importante Limpiar el Sofá <span className="text-blue-600">Regularmente</span>?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={contentVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center mb-6">
                    <Wind className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Eliminación de Contaminantes</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Los sofás son imanes para el polvo, los ácaros y otras partículas diminutas que se asientan en sus tejidos. Estas partículas pueden convertirse en un peligro para la salud, especialmente para las personas que sufren de alergias o problemas respiratorios. La acumulación de polvo y alérgenos puede provocar síntomas como estornudos, picazón en los ojos y problemas respiratorios. La limpieza de sofá regularmente ayuda a eliminar estos contaminantes, mejorando la calidad del aire interior y proporcionando un ambiente más saludable para todos los miembros del hogar.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={contentVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="h-full border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Prevención de Olores</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Con el tiempo, los sofás pueden absorber olores de diversas fuentes, como la cocina, las mascotas y el humo. Estos olores penetran en las fibras de la tapicería y pueden ser difíciles de eliminar con métodos de limpieza superficial. La limpieza profunda y regular del sofá asegura que se eliminen estos olores, dejando su mueble con un aroma fresco y agradable. Esto es especialmente importante en hogares con mascotas o en áreas con alta humedad, donde los olores pueden volverse particularmente persistentes.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={contentVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="h-full border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-6">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Conservación del Tejido</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Existe un mito común de que evitar la limpieza de sofá prolonga su vida útil al reducir el desgaste. Sin embargo, la realidad es opuesta. La suciedad y los residuos que se acumulan en las fibras de la tapicería actúan como abrasivos, causando un desgaste acelerado. Con el tiempo, esto puede llevar a la decoloración, el debilitamiento de las fibras y la necesidad de reemplazar la tapicería mucho antes de lo necesario. La limpieza de sofas regularmente mantiene el tejido en buen estado, ayudando a conservar su apariencia y textura originales por más tiempo.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={contentVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card className="h-full border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mb-6">
                    <Star className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Mejora del Hogar</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Un sofá limpio y bien cuidado realza la estética general de cualquier espacio. Es uno de los elementos más prominentes en la mayoría de las salas de estar, y su estado puede influir significativamente en la impresión general que se tiene del hogar. Un sofá libre de manchas y olores contribuye a un ambiente más acogedor y atractivo, haciendo que tanto usted como sus invitados se sientan más cómodos y a gusto.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Proceso de Limpieza */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-blue-300 text-sm font-medium mb-4">
              Nuestro Proceso
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Proceso de <span className="text-blue-400">Limpieza Profesional</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {procesoLimpieza.map((paso, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 h-full">
                  <div className="absolute -top-4 -left-2 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-white mt-4 mb-3">{paso.title}</h3>
                  <p className="text-white/70">{paso.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Beneficios de nuestra <span className="text-blue-600">limpieza de sofás</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {beneficios.map((beneficio, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-md"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-700 font-medium">{beneficio}</span>
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
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-8">
              <Sofa className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              ¿Listo para recuperar tu sofá?
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
              Déjanos la limpieza de tu sofá a nosotros. Nuestro equipo técnico quiere 
              acercarse a ti y ofrecerte un servicio de calidad sin que tengas que salir de casa.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={`tel:${businessConfig.phone}`}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-xl"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Llamar Ahora
                </Button>
              </a>
              <a
                href={`https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent('Hola! Me interesa la limpieza de sofás. ¿Podrían darme un presupuesto?')}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 rounded-full px-8 py-6 text-lg font-semibold"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Nuevo contenido SEO 2026 - Limpieza especializada */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
              Servicios Especializados 2026
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Limpieza de sofás especializada para cada{' '}
              <span className="text-blue-600">necesidad</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Limpieza de sofás con vapor
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Nuestra técnica de limpieza con vapor elimina el 99.9% de bacterias y ácaros sin
                    necesidad de productos químicos agresivos. Ideal para familias con bebés,
                    personas con alergias y quienes buscan una limpieza profunda y natural.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['vapor clean', 'sin químicos', 'desinfección natural'].map((kw, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-700">
                        {kw}
                      </span>
                    ))}
                  </div>
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
                    Limpieza de sofás para alérgicos
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Tratamiento especializado que elimina ácaros del polvo, polen y otros alérgenos
                    acumulados en la tapicería. Recomendado para personas con asma, rinitis alérgica
                    y dermatitis atópica. Mejora la calidad del aire interior de tu hogar.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['antiácaros', 'alergias', 'asma', 'calidad del aire'].map((kw, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-700">
                        {kw}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Limpieza de sofás para Airbnb y viviendas turísticas
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Servicio express diseñado para propietarios de apartamentos turísticos en
                    Barcelona. Secado rápido que permite recibir huéspedes el mismo día. Mantén tus
                    sofás impecables y consigue mejores reseñas.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['airbnb', 'apartamentos turísticos', 'express', 'secado rápido'].map((kw, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-700">
                        {kw}
                      </span>
                    ))}
                  </div>
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
                    Limpieza ecológica de tapicerías
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Productos 100% biodegradables certificados por Ecocert. Limpieza profunda
                    respetuosa con el medio ambiente, segura para niños, mascotas y plantas. Cuidamos
                    tu hogar y el planeta.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['ecológico', 'biodegradable', 'seguro mascotas', 'Ecocert'].map((kw, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-700">
                        {kw}
                      </span>
                    ))}
                  </div>
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
