import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LocationSection from './components/LocationSection';
import GallerySection from './components/GallerySection';
import AICurator from './components/AICurator';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans text-stone-800 bg-stone-50 min-h-screen selection:bg-orange-200 selection:text-orange-900">
      <Header />
      
      <main>
        <Hero />
        <div id="locations">
          <LocationSection />
        </div>
        <div id="gallery">
          <GallerySection />
        </div>
      </main>

      <Footer />
      
      <div id="curator">
        <AICurator />
      </div>
    </div>
  );
};

export default App;
