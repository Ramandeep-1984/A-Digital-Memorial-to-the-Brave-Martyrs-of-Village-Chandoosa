import { useState, useEffect, useRef } from 'react';
import type { Language } from '../translations';

interface TributeSectionProps {
  t: (key: string) => string;
  lang: Language;
  onLampLit: () => void;
}

interface FloatingElement {
  id: number;
  type: 'lamp';
  x: number;
  startTime: number;
}

export default function TributeSection({ t, lang, onLampLit }: TributeSectionProps) {
  const [visible, setVisible] = useState(false);
  const [lampLit, setLampLit] = useState(false);
  const [floatingElements, setFloatingElements] = useState<FloatingElement[]>([]);
  const [message, setMessage] = useState('');
  const ref = useRef<HTMLDivElement>(null);
  const nextId = useRef(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

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

  // Clean up floating elements after animation
  useEffect(() => {
    if (floatingElements.length > 0) {
      const timer = setTimeout(() => {
        setFloatingElements((prev) => prev.filter((el) => Date.now() - el.startTime < 3000));
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [floatingElements]);

  const addFloatingElements = (type: 'lamp', count: number) => {
    const newElements: FloatingElement[] = [];
    for (let i = 0; i < count; i++) {
      newElements.push({
        id: nextId.current++,
        type,
        x: 20 + Math.random() * 60,
        startTime: Date.now(),
      });
    }
    setFloatingElements((prev) => [...prev, ...newElements]);
  };

  const handleLightLamp = () => {
    setLampLit(true);
    setMessage(t('tributeLit'));
    addFloatingElements('lamp', 5);
    setTimeout(() => setMessage(''), 4000);
    onLampLit();

    // Stop previous audio if still playing
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    // Play the sacred sound
    try {
      const audio = new Audio('https://files.catbox.moe/v4g93c.mp3');
      audio.volume = 0.7;
      audioRef.current = audio;
      audio.play().catch(() => {
        // Browser may block autoplay — that's okay
      });
    } catch {
      // Audio playback not supported
    }
  };

  const fontClass = lang === 'pa' ? 'font-gurmukhi' : lang === 'ur' ? 'font-urdu' : 'font-heading';

  const lampEmojis = ['⚔️', '☬', '⚔️', '☬'];

  return (
    <section
      id="tribute"
      ref={ref}
      className="relative py-20 md:py-28 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal to-[#1a1008]" />

      {/* Floating elements */}
      {floatingElements.map((el) => (
        <div
          key={el.id}
          className="absolute bottom-20 text-2xl animate-float-up pointer-events-none z-20"
          style={{
            left: `${el.x}%`,
            animationDelay: `${Math.random() * 0.5}s`,
          }}
        >
          {lampEmojis[Math.floor(Math.random() * lampEmojis.length)]}
        </div>
      ))}

      <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-saffron/60" />
            <span className="text-saffron text-lg">✦</span>
            <div className="w-12 h-px bg-saffron/60" />
          </div>

          <h2 className={`${fontClass} text-3xl md:text-4xl lg:text-5xl font-bold text-saffron mb-4`}>
            {t('tributeTitle')}
          </h2>
          <p className="text-gold-light/80 text-sm md:text-base">
            {t('tributeSubtitle')}
          </p>
        </div>

        {/* Diya Display */}
        <div
          className={`text-center mb-10 transition-all duration-1000 delay-300 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div
            className={`text-7xl md:text-8xl inline-block transition-all duration-1000 ${
              lampLit ? 'animate-flicker drop-shadow-[0_0_30px_rgba(255,102,0,0.6)]' : 'opacity-50 grayscale'
            }`}
          >
            ⚔️
          </div>

          {lampLit && (
            <div className="mt-4 text-sm text-gold/60 animate-fade-in-up">
              ☬ ⚔️ ☬
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 transition-all duration-1000 delay-500 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <button
            onClick={handleLightLamp}
            className="px-8 py-4 rounded-lg text-base font-semibold tracking-wide
                       transition-all duration-500 border-2 min-w-[220px]
                       bg-gradient-to-r from-saffron to-saffron-dark border-saffron text-white 
                       hover:shadow-lg hover:shadow-saffron/30 hover:scale-105 active:scale-95"
          >
            {t('lightLamp')}
          </button>


        </div>

        {/* Message */}
        {message && (
          <div className="text-center mb-6 animate-fade-in-up">
            <p className="text-gold-light text-sm md:text-base bg-saffron/10 border border-saffron/20 rounded-lg px-6 py-3 inline-block">
              {message}
            </p>
          </div>
        )}


      </div>
    </section>
  );
}
