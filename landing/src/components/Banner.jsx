import React from 'react';
import { Sparkles } from 'lucide-react';

const Banner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 rounded-3xl shadow-2xl p-8 mb-12 animate-fade-in">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-bounce-subtle"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full animate-bounce-subtle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-white rounded-full animate-bounce-subtle" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="relative z-10 text-center">
        <div className="flex items-center justify-center mb-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Uygulama Portalı
          </h1>
        </div>
        <p className="text-blue-100 text-lg md:text-xl">
          Tüm araçlarınız bir arada
        </p>
        <div className="mt-6 flex items-center justify-center space-x-2 text-blue-100 text-sm">
          <span className="px-3 py-1 bg-white/20 rounded-full backdrop-blur-sm">
            Klavye Kısayolları Aktif
          </span>
          <span className="px-3 py-1 bg-white/20 rounded-full backdrop-blur-sm">
            Hızlı Erişim
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;