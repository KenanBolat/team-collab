import React from 'react';
import { Heart, Keyboard, Info } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-16 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 rounded-3xl shadow-2xl p-8 text-white animate-fade-in">
      <div className="grid md:grid-cols-3 gap-6">
        {/* Left side - Info */}
        <div>
          <h3 className="text-xl font-bold mb-3 flex items-center">
            <Keyboard className="w-5 h-5 mr-2" />
            Klavye Kısayolları
          </h3>
          <p className="text-gray-300 mb-2">
            Uygulama detaylarını görüntülemek için klavye kısayollarını kullanın
          </p>
          <div className="flex flex-wrap gap-2">
            <kbd className="px-3 py-1 bg-gray-700 rounded-lg text-sm">D</kbd>
            <kbd className="px-3 py-1 bg-gray-700 rounded-lg text-sm">C</kbd>
            <kbd className="px-3 py-1 bg-gray-700 rounded-lg text-sm">A</kbd>
            <kbd className="px-3 py-1 bg-gray-700 rounded-lg text-sm">N</kbd>
            <kbd className="px-3 py-1 bg-gray-700 rounded-lg text-sm">T</kbd>
            <kbd className="px-3 py-1 bg-gray-700 rounded-lg text-sm">S</kbd>
          </div>
        </div>

        {/* Middle - How to use */}
        <div>
          <h3 className="text-xl font-bold mb-3 flex items-center">
            <Info className="w-5 h-5 mr-2" />
            Nasıl Kullanılır
          </h3>
          <ul className="text-gray-300 space-y-2 text-sm">
            <li>• Uygulama kartına tıklayın</li>
            <li>• Detayları inceleyin</li>
            <li>• "Uygulamayı Aç" butonuna tıklayın</li>
            <li>• Ya da klavye kısayolunu kullanın</li>
          </ul>
        </div>

        {/* Right side - Credits */}
        <div className="text-right">
          <div className="flex items-center justify-end mb-2">
          </div>
          <p className="text-gray-400 text-sm">
            © 2026 
          </p>
          <p className="text-gray-500 text-xs mt-1">
            Uydu Yer Segmenti Sistemleri
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;