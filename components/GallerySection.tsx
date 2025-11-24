import React, { useState } from 'react';
import { MOCK_WORKS, LOCATIONS } from '../constants';

const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filters = [
    { id: 'all', label: '全部作品' },
    ...LOCATIONS.map(l => ({ id: l.id, label: l.name }))
  ];

  const filteredWorks = activeFilter === 'all'
    ? MOCK_WORKS
    : MOCK_WORKS.filter(w => w.locationId === activeFilter);

  return (
    <section id="gallery" className="py-24 bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
             <h2 className="text-3xl md:text-4xl font-bold mb-2">设计成果展</h2>
             <p className="text-stone-400">灵感转化与形态重构</p>
          </div>
          
          {/* Filter Tabs */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 text-sm rounded-full transition-all duration-300 border ${
                  activeFilter === filter.id
                    ? 'bg-orange-500 border-orange-500 text-white'
                    : 'bg-transparent border-stone-700 text-stone-400 hover:border-stone-500'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWorks.map((work) => (
            <div key={work.id} className="bg-stone-800 rounded-lg overflow-hidden shadow-lg group hover:shadow-orange-900/20 transition-all duration-300">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={work.imageUrl}
                  alt={work.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-stone-900/80 backdrop-blur px-3 py-1 text-xs rounded text-orange-400">
                  {work.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                    {work.title}
                  </h3>
                  <span className="text-sm text-stone-500">{work.studentName}</span>
                </div>
                <p className="text-stone-400 text-sm mb-4 line-clamp-3">
                  {work.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-stone-700">
                   <span className="text-xs text-stone-500">
                     灵感来源: {LOCATIONS.find(l => l.id === work.locationId)?.name}
                   </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredWorks.length === 0 && (
          <div className="text-center py-20 text-stone-500">
            <p>该区域暂无展品</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
