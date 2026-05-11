import { useEffect } from 'react';

interface LightboxProps {
  image: string;
  name: string;
  onClose: () => void;
  t: (key: string) => string;
}

export default function Lightbox({ image, name, onClose, t }: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 lightbox-overlay bg-black/90"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl max-h-[90vh] animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-parchment/80 hover:text-white
                     transition-colors flex items-center gap-2 text-sm"
        >
          {t('close')}
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image */}
        <div className="border-2 border-gold/30 rounded-lg overflow-hidden shadow-2xl shadow-black/50">
          <img
            src={image}
            alt={name}
            className="max-h-[75vh] w-auto object-contain"
          />
        </div>

        {/* Name */}
        <div className="mt-4 text-center">
          <p className="text-gold font-heading font-semibold text-lg">{name}</p>
          <div className="flex items-center justify-center gap-2 mt-2">
            <div className="w-8 h-px bg-saffron/40" />
            <span className="text-saffron/60">✦</span>
            <div className="w-8 h-px bg-saffron/40" />
          </div>
        </div>
      </div>
    </div>
  );
}
