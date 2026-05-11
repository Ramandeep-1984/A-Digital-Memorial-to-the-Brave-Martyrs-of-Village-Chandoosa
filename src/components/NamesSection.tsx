import { useEffect, useRef, useState } from 'react';
import type { Language } from '../translations';

interface NamesSectionProps {
  t: (key: string) => string;
  lang: Language;
}

interface Shaheed {
  serial: number;
  name: Record<Language, string>;
  category: 'singh' | 'kaur' | 'child';
}

const shaheeds: Shaheed[] = [
  { serial: 1, name: { en: 'S. Sacha Singh', pa: 'ਸ. ਸੱਚਾ ਸਿੰਘ', ur: 'س۔ سچا سنگھ' }, category: 'singh' },
  { serial: 2, name: { en: 'S. Gurbaksh Singh', pa: 'ਸ. ਗੁਰਬਖਸ਼ ਸਿੰਘ', ur: 'س۔ گربخش سنگھ' }, category: 'singh' },
  { serial: 3, name: { en: 'S. Aya Singh', pa: 'ਸ. ਆਇਆ ਸਿੰਘ', ur: 'س۔ آیا سنگھ' }, category: 'singh' },
  { serial: 4, name: { en: 'S. Saran Singh', pa: 'ਸ. ਸਰਨ ਸਿੰਘ', ur: 'س۔ سرن سنگھ' }, category: 'singh' },
  { serial: 5, name: { en: 'S. Raja Singh', pa: 'ਸ. ਰਾਜਾ ਸਿੰਘ', ur: 'س۔ راجا سنگھ' }, category: 'singh' },
  { serial: 6, name: { en: 'S. Maeya Singh', pa: 'ਸ. ਮਾਏਆ ਸਿੰਘ', ur: 'س۔ مائیا سنگھ' }, category: 'singh' },
  { serial: 7, name: { en: 'S. Dheeraj Singh', pa: 'ਸ. ਧੀਰਜ ਸਿੰਘ', ur: 'س۔ دھیرج سنگھ' }, category: 'singh' },
  { serial: 8, name: { en: 'S. Kapoor Singh', pa: 'ਸ. ਕਪੂਰ ਸਿੰਘ', ur: 'س۔ کپور سنگھ' }, category: 'singh' },
  { serial: 9, name: { en: 'S. Ujagar Singh', pa: 'ਸ. ਉਜਾਗਰ ਸਿੰਘ', ur: 'س۔ اجاگر سنگھ' }, category: 'singh' },
  { serial: 10, name: { en: 'S. Rangeel Singh', pa: 'ਸ. ਰੰਗੀਲ ਸਿੰਘ', ur: 'س۔ رنگیل سنگھ' }, category: 'singh' },
  { serial: 11, name: { en: 'S. Hajar Singh', pa: 'ਸ. ਹਰਜਰ ਸਿੰਘ', ur: 'س۔ ہرجر سنگھ' }, category: 'singh' },
  { serial: 12, name: { en: 'S. Mohan Singh', pa: 'ਸ. ਮੋਹਨ ਸਿੰਘ', ur: 'س۔ موہن سنگھ' }, category: 'singh' },
  { serial: 13, name: { en: 'S. Ramaya Singh', pa: 'ਸ. ਰਮਈਆ ਸਿੰਘ', ur: 'س۔ رمایا سنگھ' }, category: 'singh' },
  { serial: 14, name: { en: 'Smt. Bholi Kour', pa: 'ਸ੍ਰੀਮਤੀ ਭੋਲੀ ਕੌਰ', ur: 'محترمہ بھولی کور' }, category: 'kaur' },
  { serial: 15, name: { en: 'Smt. Haro Kour', pa: 'ਸ੍ਰੀਮਤੀ ਹਾਰੋ ਕੌਰ', ur: 'محترمہ ہارو کور' }, category: 'kaur' },
  { serial: 16, name: { en: 'Smt. Thakar Kour', pa: 'ਸ੍ਰੀਮਤੀ ਠਾਕਰ ਕੌਰ', ur: 'محترمہ ٹھاکر کور' }, category: 'kaur' },
  { serial: 17, name: { en: 'Smt. Gopi Kour', pa: 'ਸ੍ਰੀਮਤੀ ਗੋਪੀ ਕੌਰ', ur: 'محترمہ گوپی کور' }, category: 'kaur' },
  { serial: 18, name: { en: 'Kaki Pritam Kour', pa: 'ਕਾਕੀ ਪ੍ਰੀਤਮ ਕੌਰ', ur: 'کاکی پریتم کور' }, category: 'kaur' },
  { serial: 19, name: { en: 'Kaka Jeet Singh', pa: 'ਕਾਕਾ ਜੀਤ ਸਿੰਘ', ur: 'کاکا جیت سنگھ' }, category: 'child' },
  { serial: 20, name: { en: 'Kaka Dhayan Singh', pa: 'ਕਾਕਾ ਧਿਆਨ ਸਿੰਘ', ur: 'کاکا دھیان سنگھ' }, category: 'child' },
  { serial: 21, name: { en: 'Kaka Deedhar Singh', pa: 'ਕਾਕਾ ਦੀਦਾਰ ਸਿੰਘ', ur: 'کاکا دیدار سنگھ' }, category: 'child' },
];

const sectionTitles: Record<string, Record<Language, string>> = {
  namesTitle: {
    en: 'Names of the Shaheeds',
    pa: 'ਸ਼ਹੀਦਾਂ ਦੇ ਨਾਮ',
    ur: 'شہداء کے نام',
  },
  namesSubtitle: {
    en: 'Every name etched in eternity — Men, Women & Children who gave their lives',
    pa: 'ਹਰ ਨਾਮ ਸਦੀਵੀ — ਮਰਦ, ਔਰਤਾਂ ਤੇ ਬੱਚੇ ਜਿਨ੍ਹਾਂ ਨੇ ਜਾਨਾਂ ਦਿੱਤੀਆਂ',
    ur: 'ہر نام ابدی — مرد، خواتین اور بچے جنہوں نے جانیں دیں',
  },
  categoryMen: {
    en: 'Brave Warriors',
    pa: 'ਬਹਾਦਰ ਯੋਧੇ',
    ur: 'بہادر جنگجو',
  },
  categoryWomen: {
    en: 'Brave Mothers & Sisters',
    pa: 'ਬਹਾਦਰ ਮਾਵਾਂ ਤੇ ਭੈਣਾਂ',
    ur: 'بہادر مائیں اور بہنیں',
  },
  categoryChildren: {
    en: 'Young Innocents',
    pa: 'ਮਾਸੂਮ ਬੱਚੇ',
    ur: 'معصوم بچے',
  },
  threeChildren: {
    en: 'And three young children whose names remain unknown',
    pa: 'ਅਤੇ ਤਿੰਨ ਛੋਟੇ ਬੱਚੇ ਜਿਨ੍ਹਾਂ ਦੇ ਨਾਮ ਅਣਪਛਾਤੇ ਰਹੇ',
    ur: 'اور تین چھوٹے بچے جن کے نام نامعلوم رہے',
  },
};

export default function NamesSection({ lang }: NamesSectionProps) {
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

  const men = shaheeds.filter((s) => s.category === 'singh');
  const women = shaheeds.filter((s) => s.category === 'kaur');
  const children = shaheeds.filter((s) => s.category === 'child');

  const getCategoryIcon = (cat: string) => {
    if (cat === 'singh') return '⚔️';
    if (cat === 'kaur') return '🙏';
    return '🕊️';
  };

  const renderGroup = (
    title: string,
    icon: string,
    list: Shaheed[],
    delay: number
  ) => (
    <div
      className={`mb-10 transition-all duration-1000 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Category Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xl">{icon}</span>
        <h3 className="text-gold font-semibold text-lg tracking-wide">{title}</h3>
        <div className="flex-1 h-px bg-gold/20" />
      </div>

      {/* Names List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {list.map((shaheed, index) => (
          <div
            key={shaheed.serial}
            className={`flex items-center gap-4 px-4 py-3 border-b border-gold/10
                       hover:bg-saffron/5 transition-colors group
                       ${index % 2 === 0 ? 'md:border-r md:border-r-gold/10' : ''}`}
          >
            {/* Serial Number */}
            <span className="text-saffron/60 font-heading text-sm font-bold w-8 text-center shrink-0">
              {shaheed.serial}.
            </span>

            {/* Khanda dot */}
            <span className="text-saffron/40 text-xs group-hover:text-saffron transition-colors">☬</span>

            {/* Name */}
            <span className="text-parchment/90 text-sm md:text-base group-hover:text-gold transition-colors">
              {shaheed.name[lang]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section
      id="names"
      ref={ref}
      className="relative py-20 md:py-28"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-[#1a1510] to-charcoal" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8">
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
            {sectionTitles.namesTitle[lang]}
          </h2>
          <p className="text-gold-light/80 text-sm md:text-base max-w-2xl mx-auto">
            {sectionTitles.namesSubtitle[lang]}
          </p>
        </div>

        {/* Decorative frame */}
        <div className="relative border border-gold/20 rounded-lg p-6 md:p-10 bg-charcoal/80 backdrop-blur-sm">
          {/* Corner ornaments */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-saffron rounded-tl-lg" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-saffron rounded-tr-lg" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-saffron rounded-bl-lg" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-saffron rounded-br-lg" />

          {/* Men */}
          {renderGroup(sectionTitles.categoryMen[lang], getCategoryIcon('singh'), men, 200)}

          {/* Women */}
          {renderGroup(sectionTitles.categoryWomen[lang], getCategoryIcon('kaur'), women, 400)}

          {/* Children */}
          {renderGroup(sectionTitles.categoryChildren[lang], getCategoryIcon('child'), children, 600)}

          {/* Three unknown children */}
          <div
            className={`mt-6 text-center transition-all duration-1000 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            <div className="inline-flex items-center gap-3 bg-saffron/5 border border-saffron/20 rounded-lg px-6 py-4">
              <span className="text-xl">🕊️</span>
              <p className="text-gold/80 italic text-sm md:text-base">
                {sectionTitles.threeChildren[lang]}
              </p>
              <span className="text-xl">🕊️</span>
            </div>
          </div>

          {/* Bottom ornament */}
          <div className="mt-10 flex items-center justify-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-px bg-gold/40" />
              <span className="text-saffron text-xl">☬</span>
              <div className="w-8 h-px bg-gold/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
