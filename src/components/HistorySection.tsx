import { useEffect, useRef, useState } from 'react';
import type { Language } from '../translations';

interface HistorySectionProps {
  t: (key: string) => string;
  lang: Language;
}

export default function HistorySection({ t, lang }: HistorySectionProps) {
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
      id="history"
      ref={ref}
      className="relative py-20 md:py-28"
    >
      {/* Paper texture background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url('/images/paper-texture.jpg')`,
          backgroundSize: 'cover',
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal-light/50 to-charcoal" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Decorative */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-saffron/60" />
            <span className="text-saffron text-lg">✦</span>
            <div className="w-12 h-px bg-saffron/60" />
          </div>

          <h2
            className={`${fontClass} text-3xl md:text-4xl lg:text-5xl font-bold text-saffron mb-4`}
          >
            {t('historyTitle')}
          </h2>
          <p className="text-gold-light/80 text-sm md:text-base max-w-2xl mx-auto">
            {t('historySubtitle')}
          </p>
        </div>

        {/* Historical content area */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Decorative frame */}
          <div className="relative border border-gold/20 rounded-lg p-6 md:p-10 bg-charcoal/80 backdrop-blur-sm">
            {/* Corner ornaments */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-saffron rounded-tl-lg" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-saffron rounded-tr-lg" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-saffron rounded-bl-lg" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-saffron rounded-br-lg" />

            {/* Content */}
            <div className="space-y-6">
              {t('historyPlaceholder')
                .split('\n\n')
                .map((paragraph, index) => (
                  <p
                    key={index}
                    className={`text-parchment/90 leading-relaxed text-sm md:text-base ${
                      paragraph.startsWith('[')
                        ? 'text-gold/70 italic border-l-2 border-saffron/40 pl-4 bg-saffron/5 py-3 rounded-r-lg'
                        : ''
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
            </div>

            {/* Bottom ornament */}
            <div className="mt-10 flex items-center justify-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-px bg-gold/40" />
                <span className="text-saffron text-xl">🪔</span>
                <div className="w-8 h-px bg-gold/40" />
              </div>
            </div>
          </div>
        </div>

        {/* Timeline hint */}
        <div
          className={`mt-12 flex justify-center transition-all duration-1000 delay-500 ${
            visible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex items-center gap-4 text-gold/60 text-xs tracking-widest uppercase">
            <span>October</span>
            <div className="w-16 h-px bg-gold/30" />
            <span className="text-saffron font-semibold text-sm">1947</span>
            <div className="w-16 h-px bg-gold/30" />
            <span>Kabali Raids</span>
          </div>
        </div>
      </div>
    </section>
  );
}
