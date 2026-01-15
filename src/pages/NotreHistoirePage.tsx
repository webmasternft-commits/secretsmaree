import { Link } from 'react-router-dom';

export default function NotreHistoirePage() {
  const milestones = [
    {
      year: "1952",
      title: "Les débuts familiaux",
      description: "Le grand-père de Maxime s'installe sur les parcs ostréicoles du Golfe du Morbihan. Début d'une aventure familiale qui traverse les générations."
    },
    {
      year: "1978",
      title: "La transmission",
      description: "Le père de Maxime reprend l'exploitation. Les techniques évoluent mais le savoir-faire artisanal reste au cœur du métier."
    },
    {
      year: "2005",
      title: "Maxime rejoint l'aventure",
      description: "Après des études en aquaculture, Maxime revient sur les parcs familiaux. La passion de l'huître coule dans ses veines."
    },
    {
      year: "2022",
      title: "Naissance de Les Secrets de la Marée",
      description: "Maxime crée une expérience unique pour partager sa passion. Premiers groupes accueillis sur l'estran pour des dégustations les pieds dans l'eau."
    },
    {
      year: "2025",
      title: "+500 personnes accueillies",
      description: "L'expérience se développe et séduit de plus en plus de visiteurs venus découvrir les secrets de l'ostréiculture."
    }
  ];

  const values = [
    {
      icon: "🌊",
      title: "Respect de l'environnement",
      description: "Nos huîtres grandissent naturellement, au rythme des marées. Aucun produit chimique, aucune intervention artificielle."
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Tradition familiale",
      description: "Trois générations d'ostréiculteurs ont façonné notre savoir-faire. Cette expérience est un héritage que nous transmettons."
    },
    {
      icon: "✨",
      title: "Excellence & Authenticité",
      description: "Chaque huître est sélectionnée avec soin. L'expérience est conçue pour être vraie, sincère, mémorable."
    },
    {
      icon: "🤝",
      title: "Partage & Convivialité",
      description: "Plus qu'une dégustation, c'est un moment d'échange et de rencontre. On prend le temps, on écoute, on partage."
    }
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/ostreiculteurs.jpg')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-ocean-900/90 to-ocean-900/60" />
        </div>
        <div className="relative z-10 container-custom px-4">
          <span className="inline-block bg-ocean-500/30 text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
            Depuis 1952
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Notre Histoire
          </h1>
          <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
            Trois générations d'ostréiculteurs passionnés par le Golfe du Morbihan.
            Découvrez l'histoire d'une famille et d'un terroir d'exception.
          </p>
        </div>
      </section>

      {/* Story Intro */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ocean-900 mb-8">
              Une passion transmise de génération en génération
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              L'histoire des Secrets de la Marée commence bien avant la création de l'expérience.
              Elle prend racine dans les années 50, quand mon grand-père a posé ses premières poches
              d'huîtres sur l'estran du Golfe du Morbihan.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Depuis, notre famille cultive les huîtres avec le même respect de la nature,
              la même exigence de qualité, la même passion pour ce métier unique.
              Les techniques ont évolué, mais l'essentiel reste : le temps, la patience,
              et le lien indéfectible avec la mer.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Aujourd'hui, je suis fier de vous ouvrir les portes de cet univers.
              Les Secrets de la Marée, c'est ma façon de partager 70 ans d'histoire familiale
              avec ceux qui veulent vivre l'huître autrement.
            </p>
            <p className="text-ocean-600 font-semibold mt-8 text-xl font-serif italic">
              — Maxime
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-shell-50">
        <div className="container-custom px-4">
          <div className="text-center mb-16">
            <span className="text-ocean-600 font-semibold text-sm uppercase tracking-wider">Notre parcours</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ocean-900 mt-2">
              Les moments clés
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative flex gap-6 pb-12 last:pb-0">
                {/* Line */}
                {index < milestones.length - 1 && (
                  <div className="absolute left-10 top-16 w-0.5 h-full bg-ocean-200" />
                )}

                {/* Year Badge */}
                <div className="w-20 h-16 flex-shrink-0 bg-ocean-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {milestone.year}
                </div>

                {/* Content */}
                <div className="flex-1 bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-ocean-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4">
          <div className="text-center mb-16">
            <span className="text-ocean-600 font-semibold text-sm uppercase tracking-wider">Nos valeurs</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ocean-900 mt-2">
              Ce qui nous guide
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="bg-shell-50 rounded-2xl p-8">
                <span className="text-4xl mb-4 block">{value.icon}</span>
                <h3 className="text-xl font-semibold text-ocean-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Gulf */}
      <section className="section-padding bg-ocean-900 text-white">
        <div className="container-custom px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-ocean-300 font-semibold text-sm uppercase tracking-wider">Le terroir</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-6">
                Le Golfe du Morbihan, un écrin d'exception
              </h2>
              <p className="text-white/80 mb-6 leading-relaxed">
                Le Golfe du Morbihan, "petite mer" en breton, est reconnu comme l'un des plus beaux
                sites naturels de France. Ses eaux calmes, riches en nutriments, offrent des conditions
                idéales pour l'élevage des huîtres.
              </p>
              <p className="text-white/80 mb-6 leading-relaxed">
                Classé parmi les plus belles baies du monde, le Golfe abrite un écosystème unique
                où se mêlent terre et mer au rythme des marées. C'est dans ce cadre préservé
                que nos huîtres développent leurs saveurs caractéristiques.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-white/80">
                  <span className="w-2 h-2 bg-ocean-400 rounded-full" />
                  42 îles et îlots
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <span className="w-2 h-2 bg-ocean-400 rounded-full" />
                  250 espèces d'oiseaux
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <span className="w-2 h-2 bg-ocean-400 rounded-full" />
                  12 000 hectares de superficie
                </li>
              </ul>
            </div>
            <div>
              <img
                src="/images/golfe.jpg"
                alt="Vue aérienne du Golfe du Morbihan"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-shell-50">
        <div className="container-custom px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-ocean-900 mb-6">
            Écrivez votre propre chapitre
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Venez vivre cette expérience unique et découvrir les secrets
            que nous transmettons depuis trois générations.
          </p>
          <Link to="/tarifs" className="btn-primary text-lg">
            Réserver votre expérience
          </Link>
        </div>
      </section>
    </>
  );
}
