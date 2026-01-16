import { Link } from 'react-router-dom';

export default function OurStoryPageEN() {
  const milestones = [
    {
      year: "19th C",
      title: "Birth of Oyster Farming in the Gulf",
      description: "The first oyster farming concessions are granted in the Gulf of Morbihan. Local fishermen begin cultivating the flat oyster, a species native to Breton coasts."
    },
    {
      year: "1920",
      title: "Development of Oyster Farms",
      description: "Oyster farming becomes structured in the Gulf. Oyster farming families pass on their know-how from generation to generation."
    },
    {
      year: "1970",
      title: "The Cupped Oyster Arrives in Brittany",
      description: "Following an epizootic decimating the flat oyster, the Japanese cupped oyster (Crassostrea gigas) is introduced. It adapts perfectly to the Gulf's waters."
    },
    {
      year: "2000",
      title: "Worldwide Recognition",
      description: "The Gulf of Morbihan is classified among the most beautiful bays in the world. Its oysters gain reputation among gastronomes."
    },
    {
      year: "Today",
      title: "Les Secrets de la Marée",
      description: "We perpetuate this tradition by opening our farms to visitors. A unique way to discover this living heritage, with your feet in the water."
    }
  ];

  const values = [
    {
      icon: "🌊",
      title: "Environmental Respect",
      description: "Oysters grow naturally, following the rhythm of the Gulf's tides. No chemicals, 100% natural farming."
    },
    {
      icon: "🦪",
      title: "Artisanal Know-How",
      description: "Techniques passed down through generations. Breton oyster farming is an art that requires patience and expertise."
    },
    {
      icon: "✨",
      title: "Excellence & Authenticity",
      description: "Each oyster is carefully selected. The experience is designed to be true, sincere, and memorable."
    },
    {
      icon: "🤝",
      title: "Sharing & Conviviality",
      description: "More than a tasting, it's a moment of exchange and discovery. We take time, we listen, we share."
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
            Breton Heritage
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Oyster Farming<br />
            <span className="text-sand-300">in the Gulf of Morbihan</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
            Discover the history of ancestral know-how and an exceptional terroir.
            The Gulf of Morbihan, birthplace of Breton oyster farming for over a century.
          </p>
        </div>
      </section>

      {/* Story Intro */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ocean-900 mb-8">
              Know-How Passed Down Through Generations
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              The history of oyster farming in the Gulf of Morbihan dates back to the 19th century.
              In this "little sea" with its rich and protected waters, the first
              oyster farmers discovered an ideal terroir for raising exceptional oysters.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Today, more than 300 oyster farmers perpetuate this tradition in the Gulf.
              Their techniques have evolved, but the essence remains unchanged: respect for the tides,
              patience, and the unbreakable bond with this unique environment.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Les Secrets de la Marée invites you to dive into this fascinating world.
              Come discover this living heritage, understand the work of oyster farmers,
              and taste fresh oysters in their natural environment.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-shell-50">
        <div className="container-custom px-4">
          <div className="text-center mb-16">
            <span className="text-ocean-600 font-semibold text-sm uppercase tracking-wider">History</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ocean-900 mt-2">
              Oyster Farming Through Time
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative flex gap-6 pb-12 last:pb-0">
                {index < milestones.length - 1 && (
                  <div className="absolute left-10 top-16 w-0.5 h-full bg-ocean-200" />
                )}
                <div className="w-20 h-16 flex-shrink-0 bg-ocean-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {milestone.year}
                </div>
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
            <span className="text-ocean-600 font-semibold text-sm uppercase tracking-wider">Our Commitments</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ocean-900 mt-2">
              What Guides Us
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
              <span className="text-ocean-300 font-semibold text-sm uppercase tracking-wider">The Terroir</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-6">
                The Gulf of Morbihan, A Unique Ecosystem
              </h2>
              <p className="text-white/80 mb-6 leading-relaxed">
                The Gulf of Morbihan, meaning "little sea" in Breton, is recognized as one of the most beautiful
                natural sites in France. Its calm, nutrient-rich waters offer ideal conditions
                for oyster farming for over a century.
              </p>
              <p className="text-white/80 mb-6 leading-relaxed">
                The mixture of fresh water from rivers and salt water from the ocean creates a unique environment
                that gives Gulf oysters their characteristic taste: iodized, slightly
                nutty, with firm and generous flesh.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-white/80">
                  <span className="w-2 h-2 bg-ocean-400 rounded-full" />
                  115 km² surface area
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <span className="w-2 h-2 bg-ocean-400 rounded-full" />
                  More than 40 islands and islets
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <span className="w-2 h-2 bg-ocean-400 rounded-full" />
                  300+ oyster farmers
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <span className="w-2 h-2 bg-ocean-400 rounded-full" />
                  Classified among the most beautiful bays in the world
                </li>
              </ul>
            </div>
            <div>
              <img
                src="/images/golfe.jpg"
                alt="Aerial view of the Gulf of Morbihan in Brittany France"
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
            Experience This History From the Inside
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Come discover this unique heritage and taste oysters
            directly on the oyster farms of the Gulf of Morbihan.
          </p>
          <Link to="/en/prices" className="btn-primary text-lg">
            Book Your Experience
          </Link>
        </div>
      </section>
    </>
  );
}
