import React from 'react';
import { LOCATIONS } from '../constants';
import { MapPin, ArrowRight } from 'lucide-react';

const LocationSection: React.FC = () => {
  return (
    <section id="locations" className="py-24 bg-stone-100 text-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-stone-900">采风足迹</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-stone-600 max-w-2xl mx-auto">
            深入四大文化地标，汲取自然与人文的灵感养分。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {LOCATIONS.map((location) => (
            <div
              key={location.id}
              className="group relative overflow-hidden rounded-lg shadow-xl bg-white h-[400px] flex items-end transition-all hover:-translate-y-1 duration-300"
            >
              {/* Image Background */}
              <div className="absolute inset-0 z-0">
                <img
                  src={location.imageUrl}
                  alt={location.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 w-full">
                <div className="flex items-center text-orange-400 mb-2 text-sm font-semibold tracking-wider uppercase">
                  <MapPin className="w-4 h-4 mr-1" />
                  {location.id === 'westlake' || location.id === 'zimao' ? 'Quanzhou / Jinjiang' : 'Putian'}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                  {location.name}
                </h3>
                <p className="text-stone-300 mb-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                  {location.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {location.features.map((feature, idx) => (
                    <span key={idx} className="px-2 py-1 bg-stone-800/50 border border-stone-700 text-stone-300 text-xs rounded">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-4 transition-all duration-300 opacity-0 group-hover:opacity-100">
                   <span className="inline-flex items-center text-white text-sm font-medium cursor-pointer hover:underline">
                     查看灵感作品 <ArrowRight className="ml-1 w-4 h-4" />
                   </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
