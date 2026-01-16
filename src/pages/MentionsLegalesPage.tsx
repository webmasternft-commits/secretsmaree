import { Link } from 'react-router-dom';

export default function MentionsLegalesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-ocean-800 to-ocean-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">
            Mentions légales
          </h1>
          <p className="text-white/80">
            Dernière mise à jour : Janvier 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">

            <h2 className="text-2xl font-serif font-bold text-ocean-900 mt-8 mb-4">
              1. Éditeur du site
            </h2>
            <p className="text-gray-600 mb-4">
              Le site secretsmaree.com est édité par :
            </p>
            <ul className="text-gray-600 mb-6 list-none pl-0">
              <li><strong>Raison sociale :</strong> Les Secrets de la Marée</li>
              <li><strong>Adresse :</strong> Golfe du Morbihan, Bretagne, France</li>
              <li><strong>Email :</strong> <a href="mailto:max@secretsmaree.com" className="text-ocean-600 hover:underline">max@secretsmaree.com</a></li>
              <li><strong>Téléphone :</strong> <a href="tel:+33651302497" className="text-ocean-600 hover:underline">06 51 30 24 97</a></li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-ocean-900 mt-8 mb-4">
              2. Hébergement
            </h2>
            <p className="text-gray-600 mb-6">
              Ce site est hébergé par GitHub Pages / Vercel.<br />
              Adresse : San Francisco, CA, États-Unis
            </p>

            <h2 className="text-2xl font-serif font-bold text-ocean-900 mt-8 mb-4">
              3. Propriété intellectuelle
            </h2>
            <p className="text-gray-600 mb-6">
              L'ensemble du contenu de ce site (textes, images, vidéos, logos, graphismes) est la propriété
              exclusive de Les Secrets de la Marée, sauf mention contraire. Toute reproduction, représentation,
              modification, publication ou adaptation de tout ou partie des éléments du site est interdite
              sans autorisation écrite préalable.
            </p>

            <h2 className="text-2xl font-serif font-bold text-ocean-900 mt-8 mb-4">
              4. Protection des données personnelles
            </h2>
            <p className="text-gray-600 mb-4">
              Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique
              et Libertés, vous disposez de droits sur vos données personnelles.
            </p>
            <p className="text-gray-600 mb-6">
              Pour plus d'informations, consultez notre{' '}
              <Link to="/politique-confidentialite" className="text-ocean-600 hover:underline">
                Politique de confidentialité
              </Link>.
            </p>

            <h2 className="text-2xl font-serif font-bold text-ocean-900 mt-8 mb-4">
              5. Cookies
            </h2>
            <p className="text-gray-600 mb-6">
              Ce site utilise des cookies pour améliorer l'expérience utilisateur. Vous pouvez configurer
              vos préférences via la bannière de consentement affichée lors de votre première visite.
              Pour en savoir plus, consultez notre{' '}
              <Link to="/politique-confidentialite" className="text-ocean-600 hover:underline">
                Politique de confidentialité
              </Link>.
            </p>

            <h2 className="text-2xl font-serif font-bold text-ocean-900 mt-8 mb-4">
              6. Responsabilité
            </h2>
            <p className="text-gray-600 mb-6">
              Les Secrets de la Marée s'efforce d'assurer l'exactitude des informations diffusées sur ce site.
              Toutefois, nous ne pouvons garantir l'exactitude, la complétude ou l'actualité des informations
              mises à disposition. L'utilisateur est seul responsable de l'utilisation qu'il fait des informations
              présentes sur le site.
            </p>

            <h2 className="text-2xl font-serif font-bold text-ocean-900 mt-8 mb-4">
              7. Liens hypertextes
            </h2>
            <p className="text-gray-600 mb-6">
              Ce site peut contenir des liens vers d'autres sites internet. Les Secrets de la Marée n'exerce
              aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
            </p>

            <h2 className="text-2xl font-serif font-bold text-ocean-900 mt-8 mb-4">
              8. Droit applicable
            </h2>
            <p className="text-gray-600 mb-6">
              Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux
              français seront seuls compétents.
            </p>

            <h2 className="text-2xl font-serif font-bold text-ocean-900 mt-8 mb-4">
              9. Contact
            </h2>
            <p className="text-gray-600 mb-6">
              Pour toute question concernant ces mentions légales, vous pouvez nous contacter :
            </p>
            <ul className="text-gray-600 mb-6 list-none pl-0">
              <li>Email : <a href="mailto:max@secretsmaree.com" className="text-ocean-600 hover:underline">max@secretsmaree.com</a></li>
              <li>Téléphone : <a href="tel:+33651302497" className="text-ocean-600 hover:underline">06 51 30 24 97</a></li>
            </ul>

          </div>
        </div>
      </section>
    </>
  );
}
