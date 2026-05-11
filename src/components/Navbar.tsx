import { useState, useEffect } from 'react';
import type { Language } from '../translations';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

export default function Navbar({ lang, setLang, t }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#history', label: t('navHistory') },
    { href: '#gallery', label: t('navGallery') },
    { href: '#names', label: t('navNames') },
    { href: '#tribute', label: t('navTribute') },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'pa', label: 'ਪੰਜਾਬੀ' },
    { code: 'ur', label: 'اردو' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-charcoal/95 backdrop-blur-md shadow-lg shadow-black/30 border-b border-gold/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo / Khanda Symbol */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-2xl">☬</span>
          <span
            className="font-heading text-gold text-sm md:text-base font-semibold tracking-wider
                       group-hover:text-gold-light transition-colors"
          >
            1947
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-parchment/80 hover:text-gold transition-colors text-sm tracking-wide
                         relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5
                         after:bg-saffron after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}

          {/* Language Selector */}
          <div className="flex items-center gap-1 ml-4 border border-gold/30 rounded-lg overflow-hidden">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`px-3 py-1.5 text-xs transition-all ${
                  lang === l.code
                    ? 'bg-saffron text-white font-semibold'
                    : 'text-parchment/70 hover:bg-charcoal-light hover:text-gold'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile: Language buttons + Menu button */}
        <div className="md:hidden flex items-center gap-2">
          {/* Language buttons always visible on mobile */}
          <div className="flex items-center gap-0.5 border border-gold/30 rounded-lg overflow-hidden">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`px-2.5 py-1.5 text-[11px] transition-all ${
                  lang === l.code
                    ? 'bg-saffron text-white font-semibold'
                    : 'text-parchment/70 hover:bg-charcoal-light'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Hamburger */}
          <button
            className="text-gold p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 transition-transform"
              style={{ transform: menuOpen ? 'rotate(90deg)' : 'rotate(0)' }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-80 border-t border-gold/20' : 'max-h-0'
        }`}
      >
        <div className="bg-charcoal/98 backdrop-blur-md px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-parchment/80 hover:text-gold transition-colors py-2
                         border-b border-gold/10 text-center"
            >
              {link.label}
            </a>
          ))}

        </div>
      </div>
    </nav>
  );
}
