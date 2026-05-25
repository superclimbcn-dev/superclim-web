import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Star, Quote, ChevronLeft, ChevronRight, ExternalLink, BadgeCheck } from 'lucide-react';
import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { businessConfig } from '@/config/business';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: '1',
    key: '1',
    rating: 5,
    initials: 'LR',
  },
  {
    id: '2',
    key: '2',
    rating: 5,
    initials: 'MA',
  },
  {
    id: '3',
    key: '3',
    rating: 5,
    initials: 'LB',
  },
];

export function Testimonials() {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-emerald-950 to-teal-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-emerald-300 text-sm font-medium mb-4">
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 h-full"
                  >
                    <Quote className="w-10 h-10 text-emerald-400 mb-6" />
                    
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>

                    <p className="text-gray-300 leading-relaxed mb-6">
                      "{t(`testimonials.reviews.${testimonial.key}.text`)}"
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-emerald-400 bg-emerald-500 text-sm font-bold text-white">
                        {testimonial.initials}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-semibold text-white">
                            {t(`testimonials.reviews.${testimonial.key}.author`)}
                          </p>
                          <BadgeCheck className="h-4 w-4 text-emerald-300" />
                        </div>
                        <p className="text-sm text-gray-400">
                          {t(`testimonials.reviews.${testimonial.key}.location`)}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex flex-wrap justify-center gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400">4.9/5</div>
            <div className="text-sm text-gray-400">Google Reviews</div>
          </div>
          <div className="w-px h-16 bg-white/10 hidden sm:block" />
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400">
              {businessConfig.reviews.google.reviewCount}
            </div>
            <div className="text-sm text-gray-400">Reseñas Verificadas</div>
          </div>
          <div className="w-px h-16 bg-white/10 hidden sm:block" />
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400">98%</div>
            <div className="text-sm text-gray-400">Clientes Satisfechos</div>
          </div>
        </motion.div>

        <div className="mt-10 flex justify-center">
          <a href={businessConfig.social.googleReviews} target="_blank" rel="noopener noreferrer">
            <Button className="rounded-full bg-white text-emerald-800 hover:bg-gray-100">
              Ver reseñas en Google
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
