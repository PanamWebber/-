import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-400 py-12 border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h3 className="text-lg font-semibold text-white mb-1">艺境·闽南</h3>
          <p className="text-sm">产品设计专业采风成果汇报展</p>
        </div>
        <div className="flex space-x-6 text-sm">
          <span className="hover:text-orange-500 transition-colors cursor-pointer">关于我们</span>
          <span className="hover:text-orange-500 transition-colors cursor-pointer">展览咨询</span>
          <span className="hover:text-orange-500 transition-colors cursor-pointer">版权声明</span>
        </div>
      </div>
      <div className="text-center mt-8 text-xs text-stone-600">
        &copy; 2024 Minnan Design Field Trip Exhibition. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
