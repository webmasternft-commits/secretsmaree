import { useState } from 'react';
import { Link } from 'react-router-dom';

const CheckIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

export default function ExperiencePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const timeline = [
    {
      time: "T-30min",
      title: "Accueil au point de rendez-vous",
      description: "Rendez-vous sur le littoral du Golfe du Morbihan. Équipement fourni (bottes) et présentation du programme.",
      icon: "👋"
    },
    {
      time: "T",
      title: "Traversée de l'estran",
      description: "Marche vers les parcs ostréicoles à marée basse. Découverte de la faune et flore de cet écosystème protégé.",
      icon: "🚶"
    },
    {
      time: "T+30min",
      title: "Visite des parcs à huîtres",
      description: "Présentation des techniques ostréicoles bretonnes : poches, tables, affinage. Découverte des huîtres creuses et plates du Golfe.",
      icon: "🦪"
    },
    {
      time: "T+1h",
      title: "Récolte et ouverture",
      description: "Participez à la récolte et apprenez les gestes traditionnels d'ouverture des huîtres du Morbihan.",
      icon: "🔪"
    },
    {
      time: "T+1h30",
      title: "Dégustation sur l'estran",
      description: "Dégustation d'huîtres fraîches et de champagne, les pieds dans l'eau, face aux îles du Golfe du Morbihan.",
      icon: "🥂"
    },
    {
      time: "T+2h30",
      title: "Fin de l'expérience",
      description: "Retour vers le rivage et photos souvenirs dans ce cadre exceptionnel classé.",
      icon: "📸"
    }
  ];

  const inclusions = [
    { item: "12 huîtres par personne (creuses et plates du Golfe)", included: true },
    { item: "1 bouteille de champagne pour 2 personnes", included: true },
    { item: "Visite guidée des parcs ostréicoles", included: true },
    { item: "Découverte de l'estran et de sa biodiversité", included: true },
    { item: "Initiation à l'ouverture des huîtres", included: true },
    { item: "Photos souvenirs", included: true },
    { item: "Prêt de bottes (sur demande)", included: true },
    { item: "Dégustation les pieds dans l'eau", included: true }
  ];

  const faqs = [
    {
      question: "Où se déroule l'expérience de dégustation d'huîtres ?",
      answer: "L'expérience se déroule directement sur les parcs ostréicoles du Golfe du Morbihan, en Bretagne Sud. Vous dégusterez les huîtres les pieds dans l'eau, face aux îles du Golfe, dans un cadre naturel classé."
    },
    {
      question: "Combien de personnes peuvent participer à une session ?",
      answer: "Chaque session accueille un groupe de 6 personnes maximum. Ce format intimiste garantit une expérience de qualité, idéale en couple, entre amis ou en famille."
    },
    {
      question: "Quelle est la durée de la dégustation d'huîtres ?",
      answer: "L'expérience complète dure environ 2h30 : accueil, traversée de l'estran, visite des parcs à huîtres, dégustation et retour. Un moment hors du temps au cœur du Golfe du Morbihan."
    },
    {
      question: "Quand ont lieu les sessions de dégustation ?",
      answer: "Les sessions sont programmées lors des grandes marées (coefficient supérieur à 90) pour accéder aux parcs ostréicoles. Ces conditions permettent de vivre une expérience authentique sur l'estran du Golfe du Morbihan."
    },
    {
      question: "Quel équipement prévoir pour la dégustation sur l'estran ?",
      answer: "Prévoyez des vêtements adaptés à la météo bretonne. Nous fournissons des bottes sur demande. Le matériel de dégustation (couteaux, assiettes, verres) est inclus."
    },
    {
      question: "L'expérience est-elle accessible à tous ?",
      answer: "L'expérience nécessite de marcher sur l'estran (terrain parfois irrégulier). Elle n'est pas adaptée aux personnes à mobilité réduite. Âge minimum recommandé : 12 ans."
    },
    {
      question: "Que se passe-t-il en cas de mauvais temps en Bretagne ?",
      answer: "L'expérience a lieu par tous les temps, c'est l'authenticité bretonne ! En cas de conditions dangereuses (tempête, orage), nous reportons et proposons une nouvelle date."
    },
    {
      question: "Peut-on offrir cette expérience ostréicole en cadeau ?",
      answer: "Oui, le bon cadeau est valable 1 an et personnalisable. C'est une idée originale pour offrir une expérience unique dans le Golfe du Morbihan."
    }
  ];

  return (
    <>
      {/* Hero Section - Optimisé SEO */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/degustation.jpg')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-ocean-900/90 to-ocean-900/60" />
        </div>
        <div className="relative z-10 container-custom px-4">
          <span className="inline-block bg-ocean-500/30 text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
            Golfe du Morbihan, Bretagne
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Dégustation d'huîtres<br />
            <span className="text-sand-300">les pieds dans l'eau</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
            Vivez une expérience ostréicole unique au cœur du Golfe du Morbihan.
            2h30 d'immersion sur les parcs à huîtres, à marée basse, dans l'un des plus beaux sites naturels de Bretagne.
          </p>
        </div>
      </section>

      {/* Le Golfe du Morbihan - Section SEO/GEO */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-ocean-600 font-semibold text-sm uppercase tracking-wider">Un site d'exception</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-ocean-900 mt-2 mb-6">
                Le Golfe du Morbihan, berceau de l'ostréiculture bretonne
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Le Golfe du Morbihan, dont le nom signifie "petite mer" en breton, est une mer intérieure de 115 km²
                parsemée d'une quarantaine d'îles. Classé parmi les plus belles baies du monde, ce site naturel
                protégé abrite une biodiversité exceptionnelle.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                L'ostréiculture y est pratiquée depuis le XIXe siècle. Les eaux riches en nutriments et le
                mélange unique d'eau douce et salée confèrent aux huîtres du Golfe leur saveur caractéristique,
                à la fois iodée et légèrement noisettée.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Aujourd'hui, le Golfe du Morbihan compte plus de 300 ostréiculteurs qui perpétuent ce savoir-faire
                traditionnel, produisant chaque année des millions d'huîtres creuses et plates reconnues pour leur qualité.
              </p>
            </div>
            <div className="relative">
              <img
                src="/images/ostreiculteurs.jpg"
                alt="Parcs ostréicoles du Golfe du Morbihan en Bretagne"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline - Déroulement */}
      <section className="section-padding bg-shell-50">
        <div className="container-custom px-4">
          <div className="text-center mb-16">
            <span className="text-ocean-600 font-semibold text-sm uppercase tracking-wider">Le déroulement</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-ocean-900 mt-2">
              2h30 sur les parcs à huîtres
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Une immersion complète dans l'univers ostréicole du Golfe du Morbihan, de la récolte à la dégustation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((step, index) => (
              <div key={index} className="relative flex gap-6 pb-12 last:pb-0">
                {index < timeline.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-full bg-ocean-200" />
                )}
                <div className="w-16 h-16 flex-shrink-0 bg-gradient-to-br from-ocean-500 to-ocean-700 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                  {step.icon}
                </div>
                <div className="flex-1 pt-2">
                  <span className="text-ocean-600 font-mono text-sm font-medium">{step.time}</span>
                  <h3 className="text-xl font-semibold text-ocean-900 mt-1 mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Les huîtres du Golfe */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="/images/groupe.jpg"
                alt="Dégustation d'huîtres sur l'estran du Golfe du Morbihan"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <span className="text-ocean-600 font-semibold text-sm uppercase tracking-wider">Produit d'exception</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-ocean-900 mt-2 mb-6">
                Les huîtres du Golfe du Morbihan
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Le Golfe du Morbihan produit deux variétés d'huîtres d'exception : l'huître creuse
                (<em>Crassostrea gigas</em>) et l'huître plate (<em>Ostrea edulis</em>), espèce native
                des côtes bretonnes.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Les huîtres creuses du Golfe se distinguent par leur chair ferme et leur goût équilibré
                entre sel et douceur. Les huîtres plates, plus rares, offrent une saveur plus prononcée
                avec des notes de noisette caractéristiques.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Élevées pendant 3 à 4 ans dans les eaux pures du Golfe, nos huîtres sont récoltées
                le jour même de votre dégustation pour une fraîcheur optimale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-shell-50">
        <div className="container-custom px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-ocean-600 font-semibold text-sm uppercase tracking-wider">Tout compris</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-ocean-900 mt-2 mb-6">
                Ce qui est inclus dans l'expérience
              </h2>
              <div className="grid gap-4">
                {inclusions.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm">
                    <span className="w-8 h-8 bg-ocean-100 text-ocean-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckIcon />
                    </span>
                    <span className="text-gray-700">{item.item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/degustation.jpg"
                alt="Huîtres et champagne sur les parcs ostréicoles de Bretagne"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-ocean-600 text-white rounded-xl shadow-lg p-6">
                <p className="text-3xl font-bold">89€</p>
                <p className="text-sm text-white/80">par personne</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Optimisé SEO */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl px-4">
          <div className="text-center mb-16">
            <span className="text-ocean-600 font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-ocean-900 mt-2">
              Questions fréquentes
            </h2>
            <p className="text-gray-600 mt-4">
              Tout savoir sur notre expérience de dégustation d'huîtres dans le Golfe du Morbihan.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-shell-50 rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-shell-100 transition-colors"
                >
                  <span className="font-semibold text-ocean-900">{faq.question}</span>
                  <span className={`transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`}>
                    <ChevronDownIcon />
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-ocean-700 via-ocean-800 to-ocean-900 text-white">
        <div className="container-custom text-center px-4">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
            Réservez votre dégustation d'huîtres
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Vivez une expérience unique sur les parcs ostréicoles du Golfe du Morbihan.
          </p>
          <Link to="/tarifs" className="btn-primary text-lg">
            Voir les tarifs et réserver
          </Link>
        </div>
      </section>
    </>
  );
}
