import { Link } from 'react-router-dom';

export default function NotreHistoirePage() {
  const milestones = [
    {
      year: "XIXe",
      title: "Naissance de l'ostréiculture dans le Golfe",
      description: "Les premières concessions ostréicoles sont attribuées dans le Golfe du Morbihan. Les pêcheurs locaux commencent à cultiver l'huître plate, espèce native des côtes bretonnes."
    },
    {
      year: "1920",
      title: "Développement des parcs ostréicoles",
      description: "L'ostréiculture se structure dans le Golfe. Les familles d'ostréiculteurs transmettent leur savoir-faire de génération en génération."
    },
    {
      year: "1970",
      title: "L'huître creuse arrive en Bretagne",
      description: "Suite à une épizootie décimant l'huître plate, l'huître creuse japonaise (Crassostrea gigas) est introduite. Elle s'adapte parfaitement aux eaux du Golfe."
    },
    {
      year: "2000",
      title: "Reconnaissance mondiale",
      description: "Le Golfe du Morbihan est classé parmi les plus belles baies du monde. Ses huîtres gagnent en réputation auprès des gastronomes."
    },
    {
      year: "Auj.",
      title: "Les Secrets de la Marée",
      description: "Nous perpétuons cette tradition en ouvrant nos parcs aux visiteurs. Une façon unique de découvrir ce patrimoine vivant, les pieds dans l'eau."
    }
  ];

  const values = [
    {
      icon: "🌊",
      title: "Respect de l'environnement",
      description: "Les huîtres grandissent naturellement, au rythme des marées du Golfe. Aucun produit chimique, une culture 100% naturelle."
    },
    {
      icon: "🦪",
      title: "Savoir-faire artisanal",
      description: "Des techniques transmises depuis des générations. L'ostréiculture bretonne est un art qui demande patience et expertise."
    },
    {
      icon: "✨",
      title: "Excellence & Authenticité",
      description: "Chaque huître est sélectionnée avec soin. L'expérience est conçue pour être vraie, sincère, mémorable."
    },
    {
      icon: "🤝",
      title: "Partage & Convivialité",
      description: "Plus qu'une dégustation, c'est un moment d'échange et de découverte. On prend le temps, on écoute, on partage."
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
            Patrimoine breton
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            L'Ostréiculture<br />
            <span className="text-sand-300">dans le Golfe du Morbihan</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
            Découvrez l'histoire d'un savoir-faire ancestral et d'un terroir d'exception.
            Le Golfe du Morbihan, berceau de l'ostréiculture bretonne depuis plus d'un siècle.
          </p>
        </div>
      </section>

      {/* Story Intro */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ocean-900 mb-8">
              Un savoir-faire transmis depuis des générations
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              L'histoire de l'ostréiculture dans le Golfe du Morbihan remonte au XIXe siècle.
              Dans cette "petite mer" intérieure aux eaux riches et protégées, les premiers
              ostréiculteurs ont découvert un terroir idéal pour élever des huîtres d'exception.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Aujourd'hui, plus de 300 ostréiculteurs perpétuent cette tradition dans le Golfe.
              Leurs techniques ont évolué, mais l'essentiel reste inchangé : le respect des marées,
              la patience, et le lien indéfectible avec cet environnement unique.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Les Secrets de la Marée vous invite à plonger dans cet univers fascinant.
              Venez découvrir ce patrimoine vivant, comprendre le travail des ostréiculteurs,
              et déguster des huîtres fraîches dans leur milieu naturel.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-shell-50">
        <div className="container-custom px-4">
          <div className="text-center mb-16">
            <span className="text-ocean-600 font-semibold text-sm uppercase tracking-wider">Histoire</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ocean-900 mt-2">
              L'ostréiculture à travers le temps
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
            <span className="text-ocean-600 font-semibold text-sm uppercase tracking-wider">Nos engagements</span>
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
                Le Golfe du Morbihan, un écosystème unique
              </h2>
              <p className="text-white/80 mb-6 leading-relaxed">
                Le Golfe du Morbihan, "petite mer" en breton, est reconnu comme l'un des plus beaux
                sites naturels de France. Ses eaux calmes, riches en nutriments, offrent des conditions
                idéales pour l'élevage des huîtres depuis plus d'un siècle.
              </p>
              <p className="text-white/80 mb-6 leading-relaxed">
                Le mélange d'eau douce des rivières et d'eau salée de l'océan crée un environnement
                unique qui confère aux huîtres du Golfe leur goût caractéristique : iodé, légèrement
                noisette, avec une chair ferme et généreuse.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-white/80">
                  <span className="w-2 h-2 bg-ocean-400 rounded-full" />
                  115 km² de superficie
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <span className="w-2 h-2 bg-ocean-400 rounded-full" />
                  Plus de 40 îles et îlots
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <span className="w-2 h-2 bg-ocean-400 rounded-full" />
                  300+ ostréiculteurs
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <span className="w-2 h-2 bg-ocean-400 rounded-full" />
                  Classé parmi les plus belles baies du monde
                </li>
              </ul>
            </div>
            <div>
              <img
                src="/images/golfe.jpg"
                alt="Vue aérienne du Golfe du Morbihan en Bretagne"
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
            Vivez cette histoire de l'intérieur
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Venez découvrir ce patrimoine unique et déguster des huîtres
            directement sur les parcs ostréicoles du Golfe du Morbihan.
          </p>
          <Link to="/tarifs" className="btn-primary text-lg">
            Réserver votre expérience
          </Link>
        </div>
      </section>
    </>
  );
}
