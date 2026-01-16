import { Link } from 'react-router-dom';

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-ocean-800 to-ocean-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">
            Politique de confidentialité
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

            <p className="text-gray-600 mb-6 text-lg">
              Les Secrets de la Marée s'engage à protéger votre vie privée. Cette politique de confidentialité
              explique comment nous collectons, utilisons et protégeons vos données personnelles conformément
              au Règlement Général sur la Protection des Données (RGPD).
            </p>

            <h2 className="text-2xl font-serif font-bold text-ocean-900 mt-8 mb-4">
              1. Responsable du traitement
            </h2>
            <p className="text-gray-600 mb-4">
              Le responsable du traitement des données est :
            </p>
            <ul className="text-gray-600 mb-6 list-none pl-0">
              <li><strong>Les Secrets de la Marée</strong></li>
              <li>Golfe du Morbihan, Bretagne, France</li>
              <li>Email : <a href="mailto:max@secretsmaree.com" className="text-ocean-600 hover:underline">max@secretsmaree.com</a></li>
              <li>Téléphone : <a href="tel:+33651302497" className="text-ocean-600 hover:underline">06 51 30 24 97</a></li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-ocean-900 mt-8 mb-4">
              2. Données collectées
            </h2>
            <p className="text-gray-600 mb-4">
              Nous collectons les données suivantes :
            </p>
            <ul className="text-gray-600 mb-6 list-disc pl-6">
              <li><strong>Données d'identification :</strong> nom, prénom, adresse email, numéro de téléphone</li>
              <li><strong>Données de réservation :</strong> date souhaitée, nombre de participants, préférences</li>
              <li><strong>Données de navigation :</strong> adresse IP, type de navigateur, pages visitées (via cookies)</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-ocean-900 mt-8 mb-4">
              3. Finalités du traitement
            </h2>
            <p className="text-gray-600 mb-4">
              Vos données sont collectées pour :
            </p>
            <ul className="text-gray-600 mb-6 list-disc pl-6">
              <li>Gérer vos réservations et demandes de contact</li>
              <li>Vous envoyer des confirmations et informations relatives à votre réservation</li>
              <li>Répondre à vos questions et demandes</li>
              <li>Améliorer notre site et nos services</li>
              <li>Respecter nos obligations légales</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-ocean-900 mt-8 mb-4">
              4. Base légale du traitement
            </h2>
            <p className="text-gray-600 mb-6">
              Le traitement de vos données repose sur :
            </p>
            <ul className="text-gray-600 mb-6 list-disc pl-6">
              <li><strong>L'exécution d'un contrat :</strong> pour les données nécessaires à la gestion de votre réservation</li>
              <li><strong>Votre consentement :</strong> pour l'utilisation de cookies non essentiels</li>
              <li><strong>Notre intérêt légitime :</strong> pour améliorer nos services et notre site</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-ocean-900 mt-8 mb-4">
              5. Durée de conservation
            </h2>
            <p className="text-gray-600 mb-6">
              Vos données sont conservées :
            </p>
            <ul className="text-gray-600 mb-6 list-disc pl-6">
              <li><strong>Données de contact et réservation :</strong> 3 ans après le dernier contact</li>
              <li><strong>Données de facturation :</strong> 10 ans (obligation légale)</li>
              <li><strong>Cookies :</strong> 13 mois maximum</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-ocean-900 mt-8 mb-4">
              6. Cookies
            </h2>
            <p className="text-gray-600 mb-4">
              Notre site utilise des cookies :
            </p>
            <ul className="text-gray-600 mb-6 list-disc pl-6">
              <li><strong>Cookies essentiels :</strong> nécessaires au fonctionnement du site (pas de consentement requis)</li>
              <li><strong>Cookies de performance :</strong> pour analyser l'utilisation du site (avec votre consentement)</li>
            </ul>
            <p className="text-gray-600 mb-6">
              Vous pouvez modifier vos préférences à tout moment en supprimant vos cookies dans les paramètres de votre navigateur.
            </p>

            <h2 className="text-2xl font-serif font-bold text-ocean-900 mt-8 mb-4">
              7. Partage des données
            </h2>
            <p className="text-gray-600 mb-6">
              Vos données ne sont pas vendues à des tiers. Elles peuvent être partagées avec :
            </p>
            <ul className="text-gray-600 mb-6 list-disc pl-6">
              <li>Nos prestataires techniques (hébergement, paiement en ligne)</li>
              <li>Les autorités compétentes en cas d'obligation légale</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-ocean-900 mt-8 mb-4">
              8. Vos droits
            </h2>
            <p className="text-gray-600 mb-4">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="text-gray-600 mb-6 list-disc pl-6">
              <li><strong>Droit d'accès :</strong> obtenir une copie de vos données</li>
              <li><strong>Droit de rectification :</strong> corriger des données inexactes</li>
              <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
              <li><strong>Droit à la limitation :</strong> restreindre le traitement de vos données</li>
              <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
              <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
              <li><strong>Droit de retirer votre consentement :</strong> à tout moment</li>
            </ul>
            <p className="text-gray-600 mb-6">
              Pour exercer ces droits, contactez-nous à{' '}
              <a href="mailto:max@secretsmaree.com" className="text-ocean-600 hover:underline">max@secretsmaree.com</a>.
              Nous répondrons dans un délai d'un mois.
            </p>

            <h2 className="text-2xl font-serif font-bold text-ocean-900 mt-8 mb-4">
              9. Sécurité des données
            </h2>
            <p className="text-gray-600 mb-6">
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger
              vos données contre tout accès non autorisé, modification, divulgation ou destruction.
            </p>

            <h2 className="text-2xl font-serif font-bold text-ocean-900 mt-8 mb-4">
              10. Réclamation
            </h2>
            <p className="text-gray-600 mb-6">
              Si vous estimez que le traitement de vos données ne respecte pas la réglementation,
              vous pouvez introduire une réclamation auprès de la CNIL :{' '}
              <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-ocean-600 hover:underline">
                www.cnil.fr
              </a>
            </p>

            <h2 className="text-2xl font-serif font-bold text-ocean-900 mt-8 mb-4">
              11. Modifications
            </h2>
            <p className="text-gray-600 mb-6">
              Cette politique peut être modifiée à tout moment. La date de dernière mise à jour est indiquée
              en haut de cette page. Nous vous invitons à la consulter régulièrement.
            </p>

            <h2 className="text-2xl font-serif font-bold text-ocean-900 mt-8 mb-4">
              12. Contact
            </h2>
            <p className="text-gray-600 mb-6">
              Pour toute question concernant cette politique de confidentialité ou vos données personnelles :
            </p>
            <ul className="text-gray-600 mb-6 list-none pl-0">
              <li>Email : <a href="mailto:max@secretsmaree.com" className="text-ocean-600 hover:underline">max@secretsmaree.com</a></li>
              <li>Téléphone : <a href="tel:+33651302497" className="text-ocean-600 hover:underline">06 51 30 24 97</a></li>
            </ul>

            <div className="mt-12 p-6 bg-ocean-50 rounded-xl">
              <p className="text-ocean-800 text-center">
                Vous avez une question ?{' '}
                <Link to="/contact" className="text-ocean-600 font-semibold hover:underline">
                  Contactez-nous
                </Link>
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
