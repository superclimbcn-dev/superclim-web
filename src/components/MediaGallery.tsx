import { useState } from 'react';
import { motion } from 'framer-motion';
import { Image, Play, X } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export type MediaGalleryItem = {
  id: string;
  type: 'image' | 'video';
  src: string;
  poster?: string;
  title: string;
  description?: string;
  alt?: string;
};

type MediaGalleryProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  items: MediaGalleryItem[];
  className?: string;
};

export function MediaGallery({ eyebrow, title, subtitle, items, className = '' }: MediaGalleryProps) {
  const [activeItem, setActiveItem] = useState<MediaGalleryItem | null>(null);

  if (!items.length) {
    return null;
  }

  return (
    <section className={`py-24 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {eyebrow && (
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
              {eyebrow}
            </span>
          )}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => setActiveItem(item)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group overflow-hidden rounded-lg bg-white text-left shadow-lg ring-1 ring-gray-200 transition hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                {item.type === 'video' ? (
                  <video
                    src={item.src}
                    poster={item.poster}
                    preload="metadata"
                    muted
                    playsInline
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={item.alt || item.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent opacity-80" />
                <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-emerald-700 shadow-lg">
                  {item.type === 'video' ? <Play className="h-5 w-5 fill-current" /> : <Image className="h-5 w-5" />}
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  {item.description && (
                    <p className="mt-1 text-sm text-white/85">{item.description}</p>
                  )}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <Dialog open={Boolean(activeItem)} onOpenChange={(open) => !open && setActiveItem(null)}>
        <DialogContent className="max-w-5xl overflow-hidden border-0 bg-gray-950 p-0 text-white">
          {activeItem && (
            <>
              <DialogTitle className="sr-only">{activeItem.title}</DialogTitle>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => setActiveItem(null)}
                className="absolute right-3 top-3 z-10 rounded-full bg-black/50 text-white hover:bg-black/70 hover:text-white"
              >
                <X className="h-5 w-5" />
              </Button>
              <div className="bg-black">
                {activeItem.type === 'video' ? (
                  <video
                    src={activeItem.src}
                    poster={activeItem.poster}
                    controls
                    autoPlay
                    playsInline
                    className="max-h-[78vh] w-full bg-black object-contain"
                  />
                ) : (
                  <img
                    src={activeItem.src}
                    alt={activeItem.alt || activeItem.title}
                    className="max-h-[78vh] w-full bg-black object-contain"
                  />
                )}
              </div>
              <div className="px-5 py-4">
                <h3 className="text-lg font-bold">{activeItem.title}</h3>
                {activeItem.description && (
                  <p className="mt-1 text-sm text-white/70">{activeItem.description}</p>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
