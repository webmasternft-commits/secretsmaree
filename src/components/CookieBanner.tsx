import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', 'all');
    setIsVisible(false);
  };

  const acceptEssential = () => {
    localStorage.setItem('cookie-consent', 'essential');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-semibold text-ocean-900 mb-1">Gestion des cookies</h3>
            <p className="text-sm text-gray-600">
              Nous utilisons des cookies pour améliorer votre expérience sur notre site.
              Les cookies essentiels sont nécessaires au fonctionnement du site.
              Consultez notre{' '}
              <Link to="/politique-confidentialite" className="text-ocean-600 hover:underline">
                politique de confidentialité
              </Link>{' '}
              pour en savoir plus.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={acceptEssential}
              className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
            >
              Essentiels uniquement
            </button>
            <button
              onClick={acceptAll}
              className="px-6 py-2.5 bg-ocean-600 text-white rounded-lg hover:bg-ocean-700 transition-colors text-sm font-medium"
            >
              Accepter tout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
