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
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-parchment/20 text-xs order-2 sm:order-1">
            © {new Date().getFullYear()} • Village Chandoosa Digital Memorial
          </p>
          <div className="flex flex-col items-center gap-2 order-1 sm:order-2">
            <span className="text-parchment/50 text-xs font-medium tracking-wide">Connect with Developer</span>
            <div className="flex items-center gap-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/ramandeep____47?igsh=MWQwMDNzOGlvYml4aA%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
                aria-label="Follow on Instagram"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <defs>
                    <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#FFDC80" />
                      <stop offset="10%" stopColor="#FCAF45" />
                      <stop offset="30%" stopColor="#F77737" />
                      <stop offset="50%" stopColor="#F56040" />
                      <stop offset="70%" stopColor="#FD1D1D" />
                      <stop offset="80%" stopColor="#E1306C" />
                      <stop offset="90%" stopColor="#C13584" />
                      <stop offset="100%" stopColor="#833AB4" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#instagram-gradient)"
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/raman1984/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
                aria-label="Connect on LinkedIn"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="#0A66C2"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom saffron line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-saffron/60 to-transparent" />
    </footer>
  );
}
