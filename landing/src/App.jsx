import React, { useEffect, useState } from 'react';
import Banner from './components/Banner';
import AppCard from './components/AppCard';
import AppDetailsModal from './components/AppDetailsModal';
import Footer from './components/Footer';
import { apps } from './data/apps';
import { ExternalLink } from 'lucide-react';

function App() {
  const [notification, setNotification] = useState(null);
  const [selectedApp, setSelectedApp] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (event) => {
      // Don't trigger if modal is open or typing in input field
      if (isModalOpen || event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
        return;
      }

      const key = event.key.toUpperCase();
      const app = apps.find(a => a.shortcut === key);

      if (app) {
        event.preventDefault();
        showAppDetails(app);
      }
    };

    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, [isModalOpen]);

  const showAppDetails = (app) => {
    setSelectedApp(app);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedApp(null), 300); // Wait for animation
  };

  const navigateToApp = (url, appName) => {
    // Show notification
    setNotification(`${appName} açılıyor...`);
    setTimeout(() => setNotification(null), 2000);

    // Navigate to the app
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Notification Toast */}
        {notification && (
          <div className="fixed top-4 right-4 z-50 animate-slide-up">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl shadow-2xl flex items-center space-x-2">
              <ExternalLink className="w-5 h-5" />
              <span className="font-medium">{notification}</span>
            </div>
          </div>
        )}

        {/* App Details Modal */}
        <AppDetailsModal
          app={selectedApp}
          isOpen={isModalOpen}
          onClose={closeModal}
          onNavigate={navigateToApp}
        />

        {/* Banner */}
        <Banner />

        {/* Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {apps.map((app, index) => (
            <AppCard
              key={app.id}
              app={app}
              index={index}
              onShowDetails={showAppDetails}
            />
          ))}
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;