import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-stone-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/mountains/1920/1080"
          alt="Landscape"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/30 to-stone-900"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-orange-500 font-medium tracking-[0.3em] mb-4 text-sm md:text-base uppercase">
          Product Design Exhibition 2024
        </h2>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          寻迹·闽南 <br />
          <span className="font-light text-3xl md:text-5xl block mt-2 text-stone-300">
            传统与设计的对话
          </span>
        </h1>
        <p className="max-w-2xl text-stone-400 text-lg md:text-xl mb-10 leading-relaxed">
          从泉州西湖的波光到紫帽山的苍翠，从工艺城的匠心到囊山寺的禅意。
          探索地域文化基因，重构现代生活美学。
        </p>
        <a
          href="#locations"
          className="px-8 py-3 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 rounded-sm uppercase tracking-widest text-sm"
        >
          开启采风之旅
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <ChevronDown className="w-8 h-8 text-stone-400" />
      </div>
    </section>
  );
};

export default Hero;
