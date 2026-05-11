import { useEffect, useRef, useState } from 'react';
import type { Language } from '../translations';

interface Martyr {
  id: number;
  name: Record<Language, string>;
  role: Record<Language, string>;
  image: string;
}

interface GallerySectionProps {
  t: (key: string) => string;
  lang: Language;
  martyrs: Martyr[];
  openLightbox: (image: string, name: string) => void;
}

export default function GallerySection({ t, lang, martyrs, openLightbox }: GallerySectionProps) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const fontClass = lang === 'pa' ? 'font-gurmukhi' : lang === 'ur' ? 'font-urdu' : 'font-heading';

  return (
    <section
      id="gallery"
      ref={ref}
      className="relative py-20 md:py-28"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-[#1e1510] to-charcoal" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-saffron/60" />
            <span className="text-saffron text-lg">✦</span>
            <div className="w-12 h-px bg-saffron/60" />
          </div>

          <h2 className={`${fontClass} text-3xl md:text-4xl lg:text-5xl font-bold text-saffron mb-4`}>
            {t('galleryTitle')}
          </h2>
          <p className="text-gold-light/80 text-sm md:text-base max-w-2xl mx-auto">
            {t('gallerySubtitle')}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {martyrs.map((martyr, index) => (
            <div
              key={martyr.id}
              className={`group relative transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Card */}
              <div className="relative overflow-hidden rounded-lg border border-gold/20
                            bg-charcoal-light/50 hover:border-saffron/50 transition-all duration-500
                            hover:shadow-lg hover:shadow-saffron/10">
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={martyr.image}
                    alt={martyr.name[lang]}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700
                             group-hover:scale-110 filter sepia-[0.6] group-hover:sepia-[0.3]"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent
                                opacity-70 group-hover:opacity-90 transition-opacity" />

                  {/* View button - appears on hover */}
                  <button
                    onClick={() => openLightbox(martyr.image, martyr.name[lang])}
                    className="absolute top-3 right-3 bg-charcoal/70 backdrop-blur-sm text-gold
                             px-3 py-1.5 rounded-full text-xs border border-gold/30
                             opacity-0 group-hover:opacity-100 transition-all duration-300
                             hover:bg-saffron hover:text-white hover:border-saffron
                             transform translate-y-2 group-hover:translate-y-0"
                  >
                    {t('viewFullImage')}
                  </button>
                </div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                  <h3 className="text-parchment font-semibold text-sm md:text-base mb-0.5">
                    {martyr.name[lang]}
                  </h3>
                  <p className="text-gold/70 text-xs md:text-sm">
                    {martyr.role[lang]}
                  </p>
                </div>

                {/* Top corner ornament */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-saffron/40
                              opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-saffron/40
                              opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div
          className={`mt-10 text-center transition-all duration-1000 delay-700 ${
            visible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className="text-gold/40 text-xs italic">
            {t('galleryPlaceholder')}
          </p>
        </div>
      </div>
    </section>
  );
}
