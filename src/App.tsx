import { useState, useCallback } from 'react';
import { translations, martyrs, type Language } from './translations';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HistorySection from './components/HistorySection';
import GallerySection from './components/GallerySection';
import TributeSection from './components/TributeSection';
import Footer from './components/Footer';
import Lightbox from './components/Lightbox';
import FallingPetals from './components/FallingPetals';
import NamesSection from './components/NamesSection';

function App() {
  const [lang, setLang] = useState<Language>('en');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxName, setLightboxName] = useState<string>('');
  const [petalTrigger, setPetalTrigger] = useState(0);

  const t = useCallback(
    (key: string) => translations[key]?.[lang] || translations[key]?.en || key,
    [lang]
  );

  const fontClass = lang === 'pa' ? 'text-gurmukhi' : lang === 'ur' ? 'text-urdu' : '';
  const dirClass = lang === 'ur' ? 'rtl' : 'ltr';

  const openLightbox = (image: string, name: string) => {
    setLightboxImage(image);
    setLightboxName(name);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    setLightboxName('');
  };

  const triggerPetals = () => {
    setPetalTrigger((prev) => prev + 1);
  };

  return (
    <div className={`min-h-screen ${fontClass}`} dir={dirClass}>
      <Navbar lang={lang} setLang={setLang} t={t} />
      <HeroSection t={t} lang={lang} />
      <HistorySection t={t} lang={lang} />
      <GallerySection
        t={t}
        lang={lang}
        martyrs={martyrs}
        openLightbox={openLightbox}
      />
      <NamesSection t={t} lang={lang} />
      <TributeSection t={t} lang={lang} onLampLit={triggerPetals} />
      <Footer t={t} lang={lang} />
      <FallingPetals trigger={petalTrigger} />
      {lightboxImage && (
        <Lightbox
          image={lightboxImage}
          name={lightboxName}
          onClose={closeLightbox}
          t={t}
        />
      )}
    </div>
  );
}

export default App;
