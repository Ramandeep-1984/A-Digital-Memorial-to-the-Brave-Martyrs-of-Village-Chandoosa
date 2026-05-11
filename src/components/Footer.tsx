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

        {/* Copyright and Social Links */}
        <div className="flex items-center justify-between">
          <div className="flex-1" />
          <p className="text-parchment/20 text-xs">
            © {new Date().getFullYear()} • Village Chandoosa Digital Memorial
          </p>
          <div className="flex-1 flex justify-end">
            <a
              href="https://www.instagram.com/ramandeep____47?igsh=MWQwMDNzOGlvYml4aA%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-parchment/40 hover:text-saffron transition-colors duration-300 group"
              aria-label="Follow on Instagram"
            >
              <svg
                className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom saffron line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-saffron/60 to-transparent" />
    </footer>
  );
}
