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
      title: "Accueil & Équipement",
      description: "Rendez-vous au point de départ. On vous équipe de bottes si besoin et on vous présente le déroulement de l'expérience.",
      icon: "👋"
    },
    {
      time: "T",
      title: "Départ vers l'estran",
      description: "Direction les parcs à huîtres ! On traverse l'estran ensemble en découvrant cet écosystème unique.",
      icon: "🚶"
    },
    {
      time: "T+30min",
      title: "Découverte ostréicole",
      description: "Maxime vous explique son métier, les techniques de culture, les différentes variétés d'huîtres du Golfe.",
      icon: "🦪"
    },
    {
      time: "T+1h",
      title: "Récolte & Ouverture",
      description: "Participez à la récolte des huîtres et apprenez à les ouvrir comme un pro. C'est aussi ça l'expérience !",
      icon: "🔪"
    },
    {
      time: "T+1h30",
      title: "Dégustation",
      description: "Le moment tant attendu : huîtres fraîches, champagne glacé, les pieds dans l'eau face au Golfe.",
      icon: "🥂"
    },
    {
      time: "T+2h30",
      title: "Fin & Photos",
      description: "On immortalise ce moment unique avant de se quitter. Vous repartez avec des souvenirs plein la tête.",
      icon: "📸"
    }
  ];

  const inclusions = [
    { item: "12 huîtres par personne (creuses et plates)", included: true },
    { item: "1 bouteille de champagne pour 2 personnes", included: true },
    { item: "Découverte du métier d'ostréiculteur", included: true },
    { item: "Marche guidée sur l'estran", included: true },
    { item: "Cours d'ouverture d'huîtres", included: true },
    { item: "Photos souvenirs de l'expérience", included: true },
    { item: "Prêt de bottes (sur demande)", included: true },
    { item: "Dégustation les pieds dans l'eau", included: true }
  ];

  const faqs = [
    {
      question: "Combien de personnes peuvent participer ?",
      answer: "Chaque session accueille un groupe intimiste de 6 personnes maximum, garantissant une expérience personnalisée et authentique. Idéal pour un moment en couple, entre amis ou en famille."
    },
    {
      question: "Que comprend l'expérience ?",
      answer: "L'expérience comprend une dégustation d'huîtres fraîchement récoltées (environ 12 par personne), une bouteille de champagne pour 2, une découverte des techniques ostréicoles et une immersion unique les pieds dans l'eau."
    },
    {
      question: "Quelle est la durée de l'expérience ?",
      answer: "L'expérience dure environ 2h30, incluant l'accueil, la découverte du parc à huîtres, la dégustation et un moment de convivialité face au Golfe du Morbihan."
    },
    {
      question: "Comment sont choisies les dates ?",
      answer: "Les sessions sont programmées en fonction des grandes marées (coefficient > 90) pour accéder aux parcs à huîtres. Vous recevrez les dates disponibles après votre inscription."
    },
    {
      question: "Faut-il un équipement particulier ?",
      answer: "Nous vous recommandons des bottes ou chaussures qui ne craignent pas l'eau, des vêtements adaptés à la météo. Le matériel de dégustation est fourni. Nous pouvons prêter des bottes sur demande."
    },
    {
      question: "L'expérience est-elle accessible à tous ?",
      answer: "L'expérience nécessite de marcher sur l'estran (terrain parfois irrégulier). Elle n'est pas adaptée aux personnes à mobilité réduite. L'âge minimum recommandé est 12 ans."
    },
    {
      question: "Que se passe-t-il en cas de mauvais temps ?",
      answer: "L'expérience a lieu par tous les temps, c'est ça aussi l'authenticité ! En cas de conditions météo dangereuses (tempête, orage), nous reportons la session et vous proposons une nouvelle date."
    },
    {
      question: "Peut-on offrir l'expérience en cadeau ?",
      answer: "Absolument ! C'est même l'un des cadeaux les plus appréciés. Vous pouvez commander un bon cadeau valable 1 an, personnalisable avec un message."
    }
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/degustation.jpg')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-ocean-900/90 to-ocean-900/60" />
        </div>
        <div className="relative z-10 container-custom px-4">
          <span className="inline-block bg-ocean-500/30 text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
            Une immersion unique
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            L'Expérience<br />
            <span className="text-sand-300">Les Secrets de la Marée</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
            2h30 d'immersion au cœur des parcs à huîtres du Golfe du Morbihan.
            Une expérience sensorielle unique, les pieds dans l'eau à marée basse.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4">
          <div className="text-center mb-16">
            <span className="text-ocean-600 font-semibold text-sm uppercase tracking-wider">Le déroulement</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-ocean-900 mt-2">
              2h30 d'exception
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((step, index) => (
              <div key={index} className="relative flex gap-6 pb-12 last:pb-0">
                {/* Line */}
                {index < timeline.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-full bg-ocean-200" />
                )}

                {/* Icon */}
                <div className="w-16 h-16 flex-shrink-0 bg-gradient-to-br from-ocean-500 to-ocean-700 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                  {step.icon}
                </div>

                {/* Content */}
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

      {/* What's Included */}
      <section className="section-padding bg-shell-50">
        <div className="container-custom px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-ocean-600 font-semibold text-sm uppercase tracking-wider">Tout compris</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-ocean-900 mt-2 mb-6">
                Ce qui est inclus
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
                src="/images/groupe.jpg"
                alt="Groupe en dégustation"
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

      {/* The Host */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="/images/ostreiculteurs.jpg"
                alt="Maxime, ostréiculteur passionné"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <span className="text-ocean-600 font-semibold text-sm uppercase tracking-wider">Votre hôte</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-ocean-900 mt-2 mb-6">
                Maxime, ostréiculteur passionné
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Fils et petit-fils d'ostréiculteurs, Maxime a grandi les pieds dans l'eau du Golfe du Morbihan.
                Passionné par son métier, il a créé Les Secrets de la Marée pour partager son univers
                avec ceux qui veulent découvrir l'huître autrement.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                "Mon plus grand plaisir, c'est de voir les yeux émerveillés de mes invités
                quand ils dégustent leur première huître les pieds dans l'eau, face au Golfe.
                C'est un moment de connexion unique avec la nature et notre terroir."
              </p>
              <Link
                to="/notre-histoire"
                className="inline-flex items-center gap-2 text-ocean-600 font-semibold hover:text-ocean-700 transition-colors"
              >
                Découvrir notre histoire
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-shell-50">
        <div className="container-custom max-w-3xl px-4">
          <div className="text-center mb-16">
            <span className="text-ocean-600 font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-ocean-900 mt-2">
              Questions fréquentes
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
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
            Prêt à vivre l'expérience ?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Réservez dès maintenant votre place pour une session inoubliable.
          </p>
          <Link to="/tarifs" className="btn-primary text-lg">
            Voir les tarifs et réserver
          </Link>
        </div>
      </section>
    </>
  );
}
