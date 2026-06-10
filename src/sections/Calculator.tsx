import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { usePriceCalculator } from '@/hooks/usePriceCalculator';
import { Calculator as CalculatorIcon, ArrowRight, Sofa, Droplets, Layers, Sparkles, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { businessConfig } from '@/config/business';

const serviceTypes = [
  { key: 'cleaning', icon: Sparkles, color: 'bg-emerald-500', label: 'Limpieza' },
  { key: 'impermeabilization', icon: Droplets, color: 'bg-blue-500', label: 'Impermeabilización' },
  { key: 'both', icon: Layers, color: 'bg-purple-500', label: 'Limpieza + Impermeabilización' },
];

const sofaTypes = [
  { key: 'small', label: '2 plazas', price: 60 },
  { key: 'medium', label: '3 plazas', price: 80 },
  { key: 'large', label: '4+ plazas', price: 100 },
  { key: 'corner', label: 'Rinconera', price: 120 },
];

const fabricTypes = [
  { key: 'fabric', label: 'Tela normal', multiplier: 1 },
  { key: 'delicate', label: 'Tela delicada', multiplier: 1.2 },
  { key: 'leather', label: 'Piel/Cuero', multiplier: 1.3 },
];

export function Calculator() {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const { state, updateState, estimatedPrice, priceRange } = usePriceCalculator();

  const selectedService = serviceTypes.find(s => s.key === state.serviceType);
  const selectedSofa = sofaTypes.find(s => s.key === state.sofaType);
  const selectedFabric = fabricTypes.find(f => f.key === state.fabricType);

  // Gerar mensagem formatada para WhatsApp
  const generateWhatsAppMessage = () => {
    const serviceName = selectedService?.label || '';
    const sofaName = selectedSofa?.label || '';
    const fabricName = selectedFabric?.label || '';
    
    const message = `*🧼 SOLICITUD DE PRESUPUESTO - SUPERCLIM*

*📋 Detalles del Servicio:*
━━━━━━━━━━━━━━━━━━━━
🔹 *Servicio:* ${serviceName}
🔹 *Tipo de Sofá:* ${sofaName}
🔹 *Tipo de Tela:* ${fabricName}
🔹 *Cantidad:* ${state.quantity} unidad(es)

*💰 Estimación de Precio:*
━━━━━━━━━━━━━━━━━━━━
💵 *Desde:* ${estimatedPrice}€
📊 *Rango:* ${priceRange.min}€ - ${priceRange.max}€

*📍 Dirección:*
${businessConfig.address.street}

*📞 Contacto:* ${businessConfig.phoneDisplay.replace('+34 ', '')}

*⏰ Horario:* ${businessConfig.hours.weekdays.replace('Lun - Vie:', 'Lun-Vie')}, ${businessConfig.hours.saturday.replace('Sáb:', 'Sáb')}

Por favor, contacten conmigo para coordinar una visita. ¡Gracias!`;

    return encodeURIComponent(message);
  };

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
            <CalculatorIcon className="w-4 h-4 inline mr-1" />
            Calculadora Inteligente
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('calculator.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('calculator.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Calculator Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="shadow-xl border-0">
              <CardContent className="p-6 lg:p-8 space-y-8">
                {/* Service Type */}
                <div className="space-y-3">
                  <Label className="text-base font-semibold text-gray-900">
                    {t('calculator.serviceType')}
                  </Label>
                  <div className="grid grid-cols-3 gap-3">
                    {serviceTypes.map((service) => (
                      <button
                        key={service.key}
                        onClick={() => updateState('serviceType', service.key)}
                        className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all duration-200 ${
                          state.serviceType === service.key
                            ? 'border-emerald-500 bg-emerald-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-lg ${service.color} flex items-center justify-center`}>
                          <service.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xs font-medium text-center">
                          {service.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sofa Type */}
                <div className="space-y-3">
                  <Label className="text-base font-semibold text-gray-900">
                    {t('calculator.sofaType')}
                  </Label>
                  <div className="grid grid-cols-2 gap-3">
                    {sofaTypes.map((sofa) => (
                      <button
                        key={sofa.key}
                        onClick={() => updateState('sofaType', sofa.key)}
                        className={`flex items-center gap-3 p-3 rounded-xl border-2 transition-all duration-200 ${
                          state.sofaType === sofa.key
                            ? 'border-emerald-500 bg-emerald-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <Sofa className={`w-5 h-5 ${state.sofaType === sofa.key ? 'text-emerald-600' : 'text-gray-400'}`} />
                        <span className="text-sm font-medium">{sofa.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Fabric Type */}
                <div className="space-y-3">
                  <Label className="text-base font-semibold text-gray-900">
                    {t('calculator.fabricType')}
                  </Label>
                  <div className="flex flex-wrap gap-2">
                    {fabricTypes.map((fabric) => (
                      <button
                        key={fabric.key}
                        onClick={() => updateState('fabricType', fabric.key)}
                        className={`px-4 py-2 rounded-full border-2 text-sm font-medium transition-all duration-200 ${
                          state.fabricType === fabric.key
                            ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                            : 'border-gray-200 hover:border-gray-300 text-gray-600'
                        }`}
                      >
                        {fabric.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <Label className="text-base font-semibold text-gray-900">
                      {t('calculator.quantity')}
                    </Label>
                    <span className="text-2xl font-bold text-emerald-600">
                      {state.quantity}
                    </span>
                  </div>
                  <Slider
                    value={[state.quantity]}
                    onValueChange={(value) => updateState('quantity', value[0])}
                    min={1}
                    max={10}
                    step={1}
                    className="w-full"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Price Result */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="shadow-2xl border-0 bg-gradient-to-br from-emerald-600 to-teal-700 text-white sticky top-24">
              <CardContent className="p-8 lg:p-10">
                <div className="text-center mb-8">
                  <p className="text-emerald-100 mb-2">{t('calculator.estimatedPrice')}</p>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-lg text-emerald-200">{t('calculator.from')}</span>
                    <span className="text-5xl lg:text-6xl font-bold">{estimatedPrice}€</span>
                  </div>
                  <p className="text-sm text-emerald-200 mt-2">
                    Rango: {priceRange.min}€ - {priceRange.max}€
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-emerald-100">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-xs">✓</span>
                    </div>
                    <span className="text-sm">Presupuesto sin compromiso</span>
                  </div>
                  <div className="flex items-center gap-3 text-emerald-100">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-xs">✓</span>
                    </div>
                    <span className="text-sm">Respuesta en 24h</span>
                  </div>
                  <div className="flex items-center gap-3 text-emerald-100">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-xs">✓</span>
                    </div>
                    <span className="text-sm">Precio final sin sorpresas</span>
                  </div>
                </div>

                {/* Botão WhatsApp com pré-orçamento */}
                <a
                  href={`https://wa.me/${businessConfig.whatsappNumber}?text=${generateWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button
                    size="lg"
                    className="w-full bg-green-500 hover:bg-green-600 text-white rounded-full py-6 text-lg font-semibold group shadow-lg shadow-green-500/30"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Enviar Presupuesto por WhatsApp
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>

                <p className="text-center text-xs text-emerald-200 mt-4">
                  * El precio final puede variar según el estado del mueble
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
