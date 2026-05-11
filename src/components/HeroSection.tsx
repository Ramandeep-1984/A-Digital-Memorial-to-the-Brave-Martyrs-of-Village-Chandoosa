import { useEffect, useState } from 'react';
import type { Language } from '../translations';

interface HeroSectionProps {
  t: (key: string) => string;
  lang: Language;
}

export default function HeroSection({ t, lang }: HeroSectionProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const fontClass = lang === 'pa' ? 'font-gurmukhi' : lang === 'ur' ? 'font-urdu' : 'font-heading';

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/33360798/pexels-photo-33360798.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1600')`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/70 to-charcoal" />

      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-saffron to-transparent" />

      {/* Content */}
      <div
        className={`relative z-10 text-center px-6 max-w-4xl mx-auto transition-all duration-1500 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Khanda Symbol */}
        <div className="mb-6">
          <span className="text-5xl md:text-6xl text-saffron animate-glow-pulse inline-block">
            ☬
          </span>
        </div>

        {/* Ornamental Line */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent to-gold" />
          <span className="text-gold text-xs tracking-[0.3em] uppercase">
            ੧੯੪੭
          </span>
          <div className="w-16 md:w-24 h-px bg-gradient-to-l from-transparent to-gold" />
        </div>

        {/* Main Title */}
        <h1
          className={`${fontClass} text-3xl md:text-5xl lg:text-6xl font-bold text-parchment
                      leading-tight mb-6 drop-shadow-lg`}
        >
          {t('heroTitle')}
        </h1>

        {/* Subtitle */}
        <p className="text-parchment/80 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          {t('heroSubtitle')}
        </p>

        {/* Quote */}
        <div className="border border-gold/30 rounded-lg px-6 py-4 max-w-xl mx-auto bg-charcoal/50 backdrop-blur-sm animate-border-glow">
          <p className="text-gold-light italic text-sm md:text-base">
            {t('heroQuote')}
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-parchment/50 text-xs tracking-wider">
            {t('scrollDown')}
          </span>
          <svg className="w-5 h-5 text-gold/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Bottom decorative flame row */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-8 pb-4 opacity-40">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className="text-2xl animate-flicker"
            style={{ animationDelay: `${i * 0.5}s` }}
          >
            🪔
          </span>
        ))}
      </div>
    </section>
  );
}
