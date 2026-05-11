import type { Language } from '../translations';

interface FooterProps {
  t: (key: string) => string;
  lang: Language;
}

export default function Footer({ t, lang }: FooterProps) {
  const fontClass = lang === 'pa' ? 'font-gurmukhi' : lang === 'ur' ? 'font-urdu' : '';

  return (
    <footer className="relative py-16 md:py-20 border-t border-gold/10">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal to-[#0d0d0d]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
        {/* Khanda */}
        <div className="mb-6">
          <span className="text-4xl text-saffron/80">☬</span>
        </div>

        {/* Village Name */}
        <h3 className={`${lang === 'ur' ? 'font-urdu' : lang === 'pa' ? 'font-gurmukhi' : 'font-heading'} text-xl md:text-2xl text-gold font-semibold mb-6`}>
          {t('footerVillage')}
        </h3>

        {/* Ornamental Divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold/40" />
          <span className="text-saffron/60">✦</span>
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold/40" />
        </div>

        {/* Gurbani Quote */}
        <div className="max-w-xl mx-auto mb-8">
          <blockquote className={`${fontClass} text-parchment/80 italic text-base md:text-lg leading-relaxed mb-3`}>
            {t('footerGurbani')}
          </blockquote>
          <cite className="text-gold/60 text-sm not-italic">
            {t('footerGurbaniSource')}
          </cite>
        </div>

        {/* Decorative border */}
        <div className="border border-gold/10 rounded-lg p-4 mb-8 max-w-md mx-auto">
          <p className="text-parchment/40 text-xs leading-relaxed">
            {t('footerBuilt')}
          </p>
        </div>

        {/* Bottom row of lamps */}
        <div className="flex items-center justify-center gap-6 mb-6">
          {[...Array(7)].map((_, i) => (
            <span
              key={i}
              className="text-lg animate-flicker opacity-40"
              style={{ animationDelay: `${i * 0.4}s` }}
            >
              🪔
            </span>
          ))}
        </div>

        {/* Sewa Credit */}
        <div className="mb-4 flex items-center justify-center gap-2">
          <span className="text-saffron/50">🙏</span>
          <p className="text-gold/50 text-sm font-semibold tracking-wide">
            {t('footerSewa')}
          </p>
          <span className="text-saffron/50">🙏</span>
        </div>

        {/* Copyright */}
        <p className="text-parchment/20 text-xs">
          © {new Date().getFullYear()} • Village Chandoosa Digital Memorial
        </p>
      </div>

      {/* Bottom saffron line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-saffron/60 to-transparent" />
    </footer>
  );
}
