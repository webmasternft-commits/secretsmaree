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

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: "L'Expérience", href: '/experience' },
    { name: 'Tarifs', href: '/tarifs' },
    { name: 'Notre Histoire', href: '/notre-histoire' },
    { name: 'Galerie', href: '/galerie' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img src="/images/logo.jpg" alt="Les Secrets de la Marée" className="h-12 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    isActive(item.href)
                      ? 'bg-ocean-600 text-white'
                      : 'text-gray-700 hover:bg-ocean-50 hover:text-ocean-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/tarifs"
                className="ml-4 bg-ocean-600 hover:bg-ocean-700 text-white font-semibold py-2.5 px-6 rounded-full transition-all shadow-lg hover:shadow-xl"
              >
                Réserver
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-medium ${
                    isActive(item.href)
                      ? 'bg-ocean-600 text-white'
                      : 'text-gray-700 hover:bg-ocean-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/tarifs"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center bg-ocean-600 text-white font-semibold py-3 px-6 rounded-lg mt-4"
              >
                Réserver maintenant
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-1 pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-ocean-950 text-white">
        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-ocean-700 to-ocean-800 py-12">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              Prêt à vivre une expérience inoubliable ?
            </h3>
            <p className="text-ocean-100 mb-6">
              Rejoignez-nous pour une dégustation les pieds dans l'eau
            </p>
            <Link
              to="/tarifs"
              className="inline-flex bg-white text-ocean-800 font-semibold py-3 px-8 rounded-full hover:bg-ocean-50 transition-all shadow-lg"
            >
              Voir les disponibilités
            </Link>
          </div>
        </div>

        {/* Footer Content */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <img src="/images/logo.jpg" alt="Les Secrets de la Marée" className="h-16 w-auto mb-4 rounded-lg" />
              <p className="text-white/70 leading-relaxed mb-6 max-w-md">
                Une expérience huîtrière authentique au cœur du Golfe du Morbihan.
                Dégustez des huîtres fraîches et du champagne les pieds dans l'eau,
                guidés par un ostréiculteur passionné.
              </p>
              <div className="flex gap-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <span className="text-lg">📷</span>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <span className="text-lg">📘</span>
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Navigation</h4>
              <ul className="space-y-3">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link to={item.href} className="text-white/70 hover:text-white transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact</h4>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-center gap-2">
                  <span>📍</span>
                  <span>Golfe du Morbihan, Bretagne</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>📧</span>
                  <a href="mailto:contact@secretsmaree.com" className="hover:text-white transition-colors">
                    contact@secretsmaree.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span>📱</span>
                  <a href="tel:+33612345678" className="hover:text-white transition-colors">
                    06 12 34 56 78
                  </a>
                </li>
              </ul>
              <div className="mt-6">
                <Link
                  to="https://maree.secretsmaree.com"
                  className="text-ocean-300 hover:text-ocean-200 transition-colors text-sm"
                >
                  🌊 Consulter les horaires des marées →
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Les Secrets de la Marée - Tous droits réservés
            </p>
            <div className="flex gap-6 text-white/50 text-sm">
              <Link to="/mentions-legales" className="hover:text-white transition-colors">
                Mentions légales
              </Link>
              <Link to="/cgv" className="hover:text-white transition-colors">
                CGV
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
