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

export default function ExperiencePageEN() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const timeline = [
    {
      time: "T-30min",
      title: "Welcome at Meeting Point",
      description: "Meet on the Gulf of Morbihan shoreline. Equipment provided (boots) and program presentation.",
      icon: "👋"
    },
    {
      time: "T",
      title: "Crossing the Foreshore",
      description: "Walk to the oyster farms at low tide. Discover the fauna and flora of this protected ecosystem.",
      icon: "🚶"
    },
    {
      time: "T+30min",
      title: "Oyster Farm Visit",
      description: "Presentation of Breton oyster farming techniques: bags, tables, refining. Discover cupped and flat oysters from the Gulf.",
      icon: "🦪"
    },
    {
      time: "T+1h",
      title: "Harvesting and Shucking",
      description: "Participate in the harvest and learn the traditional shucking techniques of Morbihan oysters.",
      icon: "🔪"
    },
    {
      time: "T+1h30",
      title: "Tasting on the Foreshore",
      description: "Tasting of fresh oysters and champagne, with your feet in the water, facing the islands of the Gulf of Morbihan.",
      icon: "🥂"
    },
    {
      time: "T+2h30",
      title: "End of Experience",
      description: "Return to the shore and souvenir photos in this exceptional classified setting.",
      icon: "📸"
    }
  ];

  const inclusions = [
    { item: "12 oysters per person (cupped and flat from the Gulf)", included: true },
    { item: "1 bottle of champagne for 2 people", included: true },
    { item: "Guided tour of oyster farms", included: true },
    { item: "Discovery of the foreshore and its biodiversity", included: true },
    { item: "Oyster shucking initiation", included: true },
    { item: "Souvenir photos", included: true },
    { item: "Boot loan (on request)", included: true },
    { item: "Tasting with feet in the water", included: true }
  ];

  const faqs = [
    {
      question: "Where does the oyster tasting experience take place?",
      answer: "The experience takes place directly on the oyster farms of the Gulf of Morbihan, in South Brittany, France. You will taste oysters with your feet in the water, facing the islands of the Gulf, in a classified natural setting."
    },
    {
      question: "How many people can participate in a session?",
      answer: "Each session welcomes a group of 6 people maximum. This intimate format guarantees a quality experience, ideal for couples, friends, or families."
    },
    {
      question: "How long is the oyster tasting?",
      answer: "The complete experience lasts approximately 2.5 hours: welcome, crossing the foreshore, visiting the oyster farms, tasting, and return. A timeless moment in the heart of the Gulf of Morbihan."
    },
    {
      question: "When do the tasting sessions take place?",
      answer: "Sessions are scheduled during spring tides (coefficient greater than 90) to access the oyster farms. These conditions allow for an authentic experience on the Gulf of Morbihan foreshore."
    },
    {
      question: "What equipment should I bring?",
      answer: "Plan for clothing suitable for Brittany weather. We provide boots on request. Tasting equipment (knives, plates, glasses) is included."
    },
    {
      question: "Is the experience accessible to everyone?",
      answer: "The experience requires walking on the foreshore (sometimes uneven terrain). It is not suitable for people with reduced mobility. Minimum recommended age: 12 years."
    },
    {
      question: "What happens in case of bad weather?",
      answer: "The experience takes place in all weather conditions, that's Breton authenticity! In case of dangerous conditions (storm, thunderstorm), we postpone and offer a new date."
    },
    {
      question: "Can this oyster experience be given as a gift?",
      answer: "Yes, the gift voucher is valid for 1 year and customizable. It's an original idea to offer a unique experience in the Gulf of Morbihan."
    }
  ];

  return (
    <>
      {/* Hero Section - SEO Optimized */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/degustation.jpg')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-ocean-900/90 to-ocean-900/60" />
        </div>
        <div className="relative z-10 container-custom px-4">
          <span className="inline-block bg-ocean-500/30 text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
            Gulf of Morbihan, Brittany, France
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Oyster Tasting<br />
            <span className="text-sand-300">With Your Feet in the Water</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
            Live a unique oyster farming experience in the heart of the Gulf of Morbihan.
            2.5 hours of immersion on the oyster farms, at low tide, in one of the most beautiful natural sites in Brittany, France.
          </p>
        </div>
      </section>

      {/* Gulf of Morbihan - SEO/GEO Section */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-ocean-600 font-semibold text-sm uppercase tracking-wider">An Exceptional Site</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-ocean-900 mt-2 mb-6">
                The Gulf of Morbihan, Birthplace of Breton Oyster Farming
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                The Gulf of Morbihan, whose name means "little sea" in Breton, is an inland sea of 115 km²
                dotted with about forty islands. Classified among the most beautiful bays in the world, this protected natural site
                is home to exceptional biodiversity.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Oyster farming has been practiced here since the 19th century. The nutrient-rich waters and the
                unique mixture of fresh and salt water give Gulf oysters their characteristic flavor,
                both iodized and slightly nutty.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, the Gulf of Morbihan has more than 300 oyster farmers who perpetuate this traditional know-how,
                producing millions of cupped and flat oysters each year, recognized for their quality.
              </p>
            </div>
            <div className="relative">
              <img
                src="/images/ostreiculteurs.jpg"
                alt="Oyster farms in the Gulf of Morbihan Brittany France"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-shell-50">
        <div className="container-custom px-4">
          <div className="text-center mb-16">
            <span className="text-ocean-600 font-semibold text-sm uppercase tracking-wider">The Process</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-ocean-900 mt-2">
              2.5 Hours on the Oyster Farms
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              A complete immersion in the oyster farming world of the Gulf of Morbihan, from harvest to tasting.
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

      {/* What's Included */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-ocean-600 font-semibold text-sm uppercase tracking-wider">All Inclusive</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-ocean-900 mt-2 mb-6">
                What's Included in the Experience
              </h2>
              <div className="grid gap-4">
                {inclusions.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 bg-shell-50 rounded-lg p-4 shadow-sm">
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
                alt="Oysters and champagne on Brittany oyster farms"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-ocean-600 text-white rounded-xl shadow-lg p-6">
                <p className="text-3xl font-bold">89€</p>
                <p className="text-sm text-white/80">per person</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - SEO Optimized */}
      <section className="section-padding bg-shell-50">
        <div className="container-custom max-w-3xl px-4">
          <div className="text-center mb-16">
            <span className="text-ocean-600 font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-ocean-900 mt-2">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 mt-4">
              Everything you need to know about our oyster tasting experience in the Gulf of Morbihan.
            </p>
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
            Book Your Oyster Tasting
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Live a unique experience on the oyster farms of the Gulf of Morbihan, Brittany.
          </p>
          <Link to="/en/prices" className="btn-primary text-lg">
            View Prices and Book
          </Link>
        </div>
      </section>
    </>
  );
}
