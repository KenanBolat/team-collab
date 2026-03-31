import React, { useEffect } from 'react';
import { X, ExternalLink, Lock, Unlock, Info } from 'lucide-react';

const AppDetailsModal = ({ app, isOpen, onClose, onNavigate }) => {
  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !app) return null;

  const Icon = app.icon;

  const handleNavigate = () => {
    onNavigate(app.url, app.name);
    onClose();
  };

  const howToUseItems = Array.isArray(app.howToUse)
    ? app.howToUse
    : [app.howToUse];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl shadow-2xl max-w-2xl w-full animate-slide-up">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full shadow-lg
                     flex items-center justify-center hover:bg-gray-100 transition-all
                     hover:rotate-90 duration-300 z-10"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Shortcut badge */}
        <div className={`absolute top-4 right-20 shortcut-badge bg-gradient-to-br ${app.color} text-white`}>
          {app.shortcut}
        </div>

        {/* Header with logo */}
        <div className="p-8 pb-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className={`w-20 h-20 bg-gradient-to-br ${app.color} rounded-2xl 
                           flex items-center justify-center text-4xl shadow-xl`}>
              {app.illustration || <Icon className="w-10 h-10 text-white" />}
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800">{app.name}</h2>
              <p className="text-gray-600">{app.nameEn}</p>
            </div>
          </div>

          {/* Info card */}
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-6 border-4 border-gray-800 shadow-lg">
            <div className="space-y-3">
              {/* How to Use */}
              <div className="flex items-start">
                <Info className="w-5 h-5 text-blue-700 mr-3 mt-1 flex-shrink-0" />
                <div className="mt-2 space-y-1 max-h-80 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
                  <span className="font text-gray-800 ">Nasıl Kullanılır:  </span>
                  {/* <p className="text-gray-700 mt-1">{app.howToUse}</p> */}
                    {howToUseItems.map((item, index)=> (
                      
                      <ul className="mt-2">  {item} <br/> </ul>
                  
                  ))}
                </div>
              </div>

              <div className="border-t-2 border-gray-400 my-3"></div>

              {/* Description */}
              <div>
                <span className="font-bold text-gray-800">Açıklama: </span>
                <span className="text-gray-700">{app.description}</span>
              </div>

              <div className="border-t-2 border-gray-400 my-3"></div>

              {/* Host */}
              <div>
                <span className="font-bold text-gray-800">Host: </span>
                <span className="text-gray-700 font-mono bg-white/50 px-2 py-1 rounded">
                  {app.host}
                </span>
              </div>

              <div className="border-t-2 border-gray-400 my-3"></div>

              {/* Port */}
              <div>
                <span className="font-bold text-gray-800">Port: </span>
                <span className="text-gray-700 font-mono bg-white/50 px-2 py-1 rounded">
                 {app.port}
                </span>
              </div>

              <div className="border-t-2 border-gray-400 my-3"></div>

              {/* Login Required */}
              <div className="flex items-center">
                {app.loginRequired ? (
                  <>
                    <Lock className="w-5 h-5 text-red-600 mr-3" />
                    <span className="font-bold text-gray-800">Giriş: </span>
                    <span className="text-red-600 ml-2 font-semibold">Gerekli</span>
                  </>
                ) : (
                  <>
                    <Unlock className="w-5 h-5 text-green-600 mr-3" />
                    <span className="font-bold text-gray-800">Giriş: </span>
                    <span className="text-green-600 ml-2 font-semibold">Gerekli Değil</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer with action buttons */}
        <div className="px-8 pb-8 flex gap-4">
          <button
            onClick={onClose}
            className="flex-1 py-4 bg-gray-200 hover:bg-gray-300 rounded-xl
                       font-bold text-gray-700 transition-all duration-300
                       transform hover:scale-105"
          >
            Vazgeç
          </button>
          <button
            onClick={handleNavigate}
            className={`flex-1 py-4 bg-gradient-to-r ${app.color} hover:shadow-xl rounded-xl
                       font-bold text-white transition-all duration-300
                       transform hover:scale-105 flex items-center justify-center space-x-2`}
          >
            <span>Uygulamayı Aç</span>
            <ExternalLink className="w-5 h-5" />
          </button>
        </div>

        {/* Keyboard hint */}
        <div className="px-8 pb-6 text-center text-sm text-gray-500">
          <kbd className="px-2 py-1 bg-gray-200 rounded">ESC</kbd> tuşuna basarak kapatabilirsiniz
        </div>
      </div>
    </div>
  );
};

export default AppDetailsModal;