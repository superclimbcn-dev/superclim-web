import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { businessConfig } from '@/config/business';

interface RegionalCTAProps {
  cityName: string;
  serviceName: string;
}

export function RegionalCTA({ cityName, serviceName }: RegionalCTAProps) {
  return (
    <section className="py-12 bg-gradient-to-r from-emerald-600 to-teal-600">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-emerald-100 text-sm font-medium mb-2">
              <MapPin className="w-4 h-4" />
              Servicio en {cityName}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              ¿Necesitas {serviceName} en {cityName}?
            </h3>
            <p className="text-emerald-100 mt-1">
              Presupuesto gratuito en minutos. Sin compromiso.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <a href={`tel:${businessConfig.phone}`}>
              <Button
                size="lg"
                className="bg-white text-emerald-700 hover:bg-gray-100 rounded-full px-6 shadow-lg"
              >
                <Phone className="w-4 h-4 mr-2" />
                Llamar
              </Button>
            </a>
            <a
              href={`https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent(
                `Hola! Me interesa ${serviceName} en ${cityName}. ¿Podrían darme un presupuesto?`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20 rounded-full px-6"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
