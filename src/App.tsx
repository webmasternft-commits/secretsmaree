import { useState } from 'react';

// Icons as simple SVG components
const StarIcon = ({ filled = false }: { filled?: boolean }) => (
  <svg className="w-5 h-5" fill={filled ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

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

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSubmitted(true);
    setIsSubmitting(false);
  };

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
      answer: "Nous vous recommandons des bottes ou chaussures qui ne craignent pas l'eau, des vêtements adaptés à la météo. Le matériel de dégustation est fourni."
    },
    {
      question: "L'expérience est-elle accessible à tous ?",
      answer: "L'expérience nécessite de marcher sur l'estran (terrain parfois irrégulier). Elle n'est pas adaptée aux personnes à mobilité réduite. L'âge minimum recommandé est 12 ans."
    }
  ];

  const testimonials = [
    {
      name: "Marie & Thomas",
      location: "Paris",
      text: "Une expérience magique ! Déguster des huîtres les pieds dans l'eau avec vue sur le Golfe, c'est un moment suspendu dans le temps. Maxime est passionnant.",
      rating: 5
    },
    {
      name: "Sophie L.",
      location: "Nantes",
      text: "Nous avons offert cette expérience à mes parents pour leurs 40 ans de mariage. Un souvenir inoubliable, des photos magnifiques et des huîtres exceptionnelles !",
      rating: 5
    },
    {
      name: "Jean-Pierre",
      location: "Lyon",
      text: "Amateur d'huîtres depuis toujours, j'ai découvert une nouvelle façon de les apprécier. L'authenticité de cette expérience est incomparable.",
      rating: 5
    }
  ];

  const steps = [
    { number: "01", title: "Réservation", description: "Inscrivez-vous et recevez les prochaines dates disponibles selon les marées" },
    { number: "02", title: "Rendez-vous", description: "Rejoignez-nous au point de départ pour une immersion dans l'univers ostréicole" },
    { number: "03", title: "Découverte", description: "Marchez sur l'estran et découvrez les secrets des parcs à huîtres" },
    { number: "04", title: "Dégustation", description: "Savourez huîtres fraîches et champagne les pieds dans l'eau" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <img src="/images/logo.jpg" alt="Les Secrets de la Marée" className="h-10 w-auto" />
            </div>
            <a
              href="#reservation"
              className="hidden sm:inline-flex bg-ocean-600 hover:bg-ocean-700 text-white font-medium py-2 px-6 rounded-full transition-all"
            >
              Réserver
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/hero.png')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-ocean-900/60 via-ocean-800/40 to-ocean-900/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
            Golfe du Morbihan - Bretagne
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Dégustez des Huîtres<br />
            <span className="text-sand-300">les Pieds dans l'Eau</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Une expérience immersive et intimiste au cœur des parcs ostréicoles.
            Huîtres fraîches, champagne et coucher de soleil sur le Golfe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#reservation" className="btn-primary text-lg">
              Réserver mon expérience
            </a>
            <a href="#experience" className="btn-secondary text-lg">
              Découvrir
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <div className="flex text-sand-400">
                {[...Array(5)].map((_, i) => <StarIcon key={i} filled />)}
              </div>
              <span>5/5 (48 avis)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">👥</span>
              <span>6 pers. max</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⏱️</span>
              <span>2h30 d'expérience</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDownIcon />
        </div>
      </section>

      {/* What is it Section */}
      <section id="experience" className="section-padding bg-shell-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-ocean-600 font-semibold text-sm uppercase tracking-wider">L'expérience</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-ocean-900 mt-2 mb-6">
                Une dégustation pas comme les autres
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Imaginez-vous les pieds dans l'eau, sur l'estran du Golfe du Morbihan à marée basse.
                Face à vous, les parcs à huîtres s'étendent à perte de vue. Dans vos mains,
                une huître fraîchement cueillie et un verre de champagne.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                <strong>Les Secrets de la Marée</strong>, c'est bien plus qu'une dégustation.
                C'est une immersion authentique dans le quotidien d'un ostréiculteur,
                une parenthèse hors du temps au rythme des marées.
              </p>
              <ul className="space-y-4">
                {[
                  "Huîtres fraîches récoltées devant vous",
                  "Champagne servi les pieds dans l'eau",
                  "Groupe intimiste (6 personnes max)",
                  "Guide passionné et authentique"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <span className="w-6 h-6 bg-ocean-100 text-ocean-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckIcon />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src="/images/degustation.jpg"
                alt="Dégustation d'huîtres les pieds dans l'eau"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-ocean-100 rounded-full flex items-center justify-center text-ocean-600 text-2xl">
                  🦪
                </div>
                <div>
                  <p className="font-semibold text-ocean-900">+500 personnes</p>
                  <p className="text-sm text-gray-500">ont vécu l'expérience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-ocean-600 font-semibold text-sm uppercase tracking-wider">Le déroulement</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-ocean-900 mt-2">
              Comment ça se passe ?
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-ocean-500 to-ocean-700 rounded-2xl flex items-center justify-center text-white text-2xl font-bold transform group-hover:scale-110 transition-transform shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-ocean-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-shell-50">
        <div className="container-custom px-4">
          <div className="text-center mb-12">
            <span className="text-ocean-600 font-semibold text-sm uppercase tracking-wider">Galerie</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ocean-900 mt-2">
              L'expérience en images
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="/images/hero.png" alt="Dégustation au coucher de soleil" className="rounded-xl shadow-lg hover:scale-105 transition-transform col-span-2 row-span-2 object-cover h-full" />
            <img src="/images/ostreiculteurs.jpg" alt="Les ostréiculteurs" className="rounded-xl shadow-lg hover:scale-105 transition-transform object-cover h-48" />
            <img src="/images/groupe.jpg" alt="Groupe de dégustation" className="rounded-xl shadow-lg hover:scale-105 transition-transform object-cover h-48" />
            <img src="/images/degustation.jpg" alt="Partage d'huîtres" className="rounded-xl shadow-lg hover:scale-105 transition-transform object-cover h-48" />
            <img src="/images/golfe.jpg" alt="Vue sur le Golfe du Morbihan" className="rounded-xl shadow-lg hover:scale-105 transition-transform object-cover h-48" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-ocean-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-ocean-300 font-semibold text-sm uppercase tracking-wider">Témoignages</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mt-2">
              Ils ont vécu l'expérience
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-colors">
                <div className="flex text-sand-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => <StarIcon key={i} filled />)}
                </div>
                <p className="text-white/90 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-ocean-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-white/60">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-shell-50">
        <div className="container-custom max-w-3xl">
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

      {/* CTA / Reservation Section */}
      <section id="reservation" className="section-padding bg-gradient-to-br from-ocean-700 via-ocean-800 to-ocean-900 text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-sand-400/20 text-sand-300 text-sm font-medium px-4 py-2 rounded-full mb-6">
                Places limitées - Prochaines sessions Avril 2026
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                Réservez votre moment d'exception
              </h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Inscrivez-vous pour recevoir les prochaines dates disponibles.
                Les sessions sont programmées selon les grandes marées et se remplissent rapidement.
              </p>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-center gap-2">
                  <CheckIcon /> Expérience de 2h30
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon /> Huîtres + Champagne inclus
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon /> Petit groupe (6 pers. max)
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon /> Photos souvenirs offertes
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                    <CheckIcon />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-ocean-900 mb-2">Merci !</h3>
                  <p className="text-gray-600">Nous vous contacterons dès l'ouverture des prochaines sessions.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 className="text-2xl font-serif font-bold text-ocean-900 mb-6">Rejoindre la liste d'attente</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 transition-colors text-gray-900"
                        placeholder="Votre prénom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 transition-colors text-gray-900"
                        placeholder="votre@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone (optionnel)</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 transition-colors text-gray-900"
                        placeholder="06 XX XX XX XX"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-ocean-600 hover:bg-ocean-700 text-white font-semibold py-4 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Envoi en cours...' : "M'inscrire sur la liste"}
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 mt-4 text-center">
                    En vous inscrivant, vous acceptez d'être recontacté pour les prochaines sessions.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ocean-950 text-white py-12">
        <div className="container-custom px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/images/logo.jpg" alt="Les Secrets de la Marée" className="h-12 w-auto rounded-lg" />
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Expérience huîtrière premium dans le Golfe du Morbihan.
                Dégustation les pieds dans l'eau à marée basse.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li>📧 contact@secretsmaree.com</li>
                <li>📍 Golfe du Morbihan, Bretagne</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Liens</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li><a href="#experience" className="hover:text-white transition-colors">L'expérience</a></li>
                <li><a href="#reservation" className="hover:text-white transition-colors">Réserver</a></li>
                <li><a href="https://maree.secretsmaree.com" className="hover:text-white transition-colors">Horaires des marées</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/40 text-sm">
            <p>© {new Date().getFullYear()} Les Secrets de la Marée - Tous droits réservés</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
