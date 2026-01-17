import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

interface LayoutProps {
  children: React.ReactNode;
}

export default function LayoutEN({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/en' },
    { name: 'Experience', href: '/en/experience' },
    { name: 'Prices', href: '/en/prices' },
    { name: 'Our Story', href: '/en/our-story' },
    { name: 'Gallery', href: '/en/gallery' },
    { name: 'Contact', href: '/en/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Close menu when navigating
  const handleNavClick = () => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm safe-top">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <Link to="/en" className="flex items-center gap-3" onClick={handleNavClick}>
              <img
                src="/images/logo.jpg"
                alt="Les Secrets de la Marée - Oyster Tasting Gulf of Morbihan"
                className="h-12 sm:h-14 lg:h-16 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={handleNavClick}
                  className={`px-3 xl:px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    isActive(item.href)
                      ? 'bg-ocean-600 text-white'
                      : 'text-gray-700 hover:bg-ocean-50 hover:text-ocean-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/"
                className="ml-2 px-3 py-2 text-sm text-gray-500 hover:text-ocean-600 transition-colors"
                title="Version française"
              >
                FR
              </Link>
              <Link
                to="/en/prices"
                onClick={handleNavClick}
                className="ml-2 bg-ocean-600 hover:bg-ocean-700 text-white font-semibold py-2.5 px-5 xl:px-6 rounded-full transition-all shadow-lg hover:shadow-xl text-sm"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-3 -mr-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t mobile-menu-enter">
            <div className="px-4 py-4 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto safe-bottom">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={handleNavClick}
                  className={`block px-4 py-4 rounded-xl font-medium text-base transition-colors min-h-[52px] flex items-center ${
                    isActive(item.href)
                      ? 'bg-ocean-600 text-white'
                      : 'text-gray-700 hover:bg-ocean-50 active:bg-ocean-100'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2 border-t border-gray-100 mt-2">
                <Link
                  to="/"
                  onClick={handleNavClick}
                  className="block px-4 py-4 text-gray-500 hover:text-ocean-600 transition-colors min-h-[52px] flex items-center"
                >
                  🇫🇷 Version française
                </Link>
              </div>
              <Link
                to="/en/prices"
                onClick={handleNavClick}
                className="block w-full text-center bg-ocean-600 hover:bg-ocean-700 active:bg-ocean-800 text-white font-semibold py-4 px-6 rounded-xl mt-4 transition-colors min-h-[52px]"
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-1 pt-16 sm:pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-ocean-950 text-white">
        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-ocean-700 to-ocean-800 py-10 sm:py-12">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold mb-3 sm:mb-4">
              Ready for an Unforgettable Experience?
            </h3>
            <p className="text-ocean-100 mb-5 sm:mb-6 text-sm sm:text-base">
              Join us for a tasting with your feet in the water
            </p>
            <Link
              to="/en/prices"
              className="inline-flex bg-white text-ocean-800 font-semibold py-3 px-6 sm:px-8 rounded-full hover:bg-ocean-50 active:bg-gray-100 transition-all shadow-lg text-sm sm:text-base min-h-[48px] items-center"
            >
              View Availability
            </Link>
          </div>
        </div>

        {/* Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="sm:col-span-2">
              <img
                src="/images/logo.jpg"
                alt="Les Secrets de la Marée - Brittany Oyster Experience"
                className="h-16 sm:h-20 lg:h-24 w-auto mb-4 rounded-lg"
              />
              <p className="text-white/70 leading-relaxed mb-6 max-w-md text-sm sm:text-base">
                An authentic oyster experience in the heart of the Gulf of Morbihan, Brittany.
                Taste fresh oysters and champagne with your feet in the water,
                guided by a passionate oyster farmer.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/les_secrets_de_la_maree/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 active:bg-white/30 transition-colors"
                  aria-label="Instagram"
                >
                  <span className="text-lg">📷</span>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 active:bg-white/30 transition-colors"
                  aria-label="Facebook"
                >
                  <span className="text-lg">📘</span>
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-semibold text-base sm:text-lg mb-4">Navigation</h4>
              <ul className="space-y-2 sm:space-y-3">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-white/70 hover:text-white transition-colors text-sm sm:text-base py-1 inline-block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-base sm:text-lg mb-4">Contact</h4>
              <ul className="space-y-3 text-white/70 text-sm sm:text-base">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5">📍</span>
                  <span>Gulf of Morbihan, Brittany, France</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>📧</span>
                  <a
                    href="mailto:max@secretsmaree.com"
                    className="hover:text-white transition-colors break-all"
                  >
                    max@secretsmaree.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span>📱</span>
                  <a
                    href="tel:+33651302497"
                    className="hover:text-white transition-colors"
                  >
                    +33 6 51 30 24 97
                  </a>
                </li>
              </ul>
              <div className="mt-5 sm:mt-6">
                <Link
                  to="/"
                  className="text-ocean-300 hover:text-ocean-200 transition-colors text-sm inline-flex items-center gap-1"
                >
                  🇫🇷 Version française
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-xs sm:text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Les Secrets de la Marée - All rights reserved
            </p>
            <div className="flex gap-4 sm:gap-6 text-white/50 text-xs sm:text-sm">
              <Link to="/en/legal" className="hover:text-white transition-colors py-1">
                Legal Notice
              </Link>
              <Link to="/en/privacy" className="hover:text-white transition-colors py-1">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
