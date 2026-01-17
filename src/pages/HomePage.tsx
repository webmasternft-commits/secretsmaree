import { useState } from 'react';
import { Link } from 'react-router-dom';

const StarIcon = ({ filled = false }: { filled?: boolean }) => (
  <svg className="w-5 h-5" fill={filled ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
    { number: "01", title: "Réservation", description: "Inscrivez-vous et recevez les prochaines dates disponibles" },
    { number: "02", title: "Rendez-vous", description: "Rejoignez-nous au point de départ pour l'immersion" },
    { number: "03", title: "Découverte", description: "Marchez sur l'estran et découvrez les parcs à huîtres" },
    { number: "04", title: "Dégustation", description: "Savourez huîtres et champagne les pieds dans l'eau" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[100svh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden -mt-16 sm:-mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/hero.png')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-ocean-900/70 via-ocean-800/50 to-ocean-900/80" />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-20 sm:pt-24 pb-16 sm:pb-8">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs sm:text-sm font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6">
            Golfe du Morbihan - Bretagne
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white mb-4 sm:mb-6 leading-tight">
            Dégustez des Huîtres<br />
            <span className="text-sand-300">les Pieds dans l'Eau</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
            Une expérience immersive et intimiste au cœur des parcs ostréicoles.
            Huîtres fraîches, champagne et coucher de soleil sur le Golfe.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
            <Link to="/tarifs" className="btn-primary text-base sm:text-lg">
              Réserver mon expérience
            </Link>
            <Link to="/experience" className="btn-secondary text-base sm:text-lg">
              Découvrir
            </Link>
          </div>

          <div className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-4 sm:gap-6 text-white/80 text-sm sm:text-base">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="flex text-sand-400">
                {[...Array(5)].map((_, i) => <StarIcon key={i} filled />)}
              </div>
              <span>5/5 (48 avis)</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-xl sm:text-2xl">👥</span>
              <span>6 pers. max</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-xl sm:text-2xl">⏱️</span>
              <span>2h30 d'expérience</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white hidden sm:block">
          <ChevronDownIcon />
        </div>
      </section>

      {/* What is it Section */}
      <section className="section-padding bg-shell-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 md:order-1">
              <span className="text-ocean-600 font-semibold text-xs sm:text-sm uppercase tracking-wider">L'expérience</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-ocean-900 mt-2 mb-4 sm:mb-6">
                Une dégustation pas comme les autres
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                Imaginez-vous les pieds dans l'eau, sur l'estran du Golfe du Morbihan à marée basse.
                Face à vous, les parcs à huîtres s'étendent à perte de vue. Dans vos mains,
                une huître fraîchement cueillie et un verre de champagne.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                <strong>Les Secrets de la Marée</strong>, c'est bien plus qu'une dégustation.
                C'est une immersion authentique dans le quotidien d'un ostréiculteur,
                une parenthèse hors du temps au rythme des marées.
              </p>
              <Link
                to="/experience"
                className="inline-flex items-center gap-2 text-ocean-600 font-semibold hover:text-ocean-700 transition-colors py-2 text-sm sm:text-base"
              >
                Découvrir l'expérience complète
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative order-1 md:order-2">
              <img
                src="/images/degustation.jpg"
                alt="Dégustation d'huîtres les pieds dans l'eau"
                className="rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl w-full"
              />
              <div className="absolute -bottom-4 sm:-bottom-6 left-4 sm:-left-6 bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-4 flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-ocean-100 rounded-full flex items-center justify-center text-ocean-600 text-xl sm:text-2xl flex-shrink-0">
                  🦪
                </div>
                <div>
                  <p className="font-semibold text-ocean-900 text-sm sm:text-base">+500 personnes</p>
                  <p className="text-xs sm:text-sm text-gray-500">ont vécu l'expérience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-ocean-600 font-semibold text-xs sm:text-sm uppercase tracking-wider">Le déroulement</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-ocean-900 mt-2">
              Comment ça se passe ?
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto mb-3 sm:mb-4 lg:mb-6 bg-gradient-to-br from-ocean-500 to-ocean-700 rounded-xl sm:rounded-2xl flex items-center justify-center text-white text-lg sm:text-xl lg:text-2xl font-bold transform group-hover:scale-110 transition-transform shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-ocean-900 mb-1 sm:mb-2 lg:mb-3">{step.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm lg:text-base">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-10 sm:py-12 md:py-16 bg-shell-50">
        <div className="container-custom">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-ocean-600 font-semibold text-xs sm:text-sm uppercase tracking-wider">Galerie</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-ocean-900 mt-2">
              L'expérience en images
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
            <img
              src="/images/hero.png"
              alt="Dégustation au coucher de soleil"
              className="rounded-lg sm:rounded-xl shadow-lg hover:scale-[1.02] transition-transform col-span-2 row-span-2 object-cover w-full h-48 sm:h-64 md:h-full"
            />
            <img
              src="/images/ostreiculteurs.jpg"
              alt="Les ostréiculteurs"
              className="rounded-lg sm:rounded-xl shadow-lg hover:scale-[1.02] transition-transform object-cover w-full h-24 sm:h-32 md:h-48"
            />
            <img
              src="/images/groupe.jpg"
              alt="Groupe de dégustation"
              className="rounded-lg sm:rounded-xl shadow-lg hover:scale-[1.02] transition-transform object-cover w-full h-24 sm:h-32 md:h-48"
            />
            <img
              src="/images/degustation.jpg"
              alt="Partage d'huîtres"
              className="rounded-lg sm:rounded-xl shadow-lg hover:scale-[1.02] transition-transform object-cover w-full h-24 sm:h-32 md:h-48"
            />
            <img
              src="/images/golfe.jpg"
              alt="Vue sur le Golfe du Morbihan"
              className="rounded-lg sm:rounded-xl shadow-lg hover:scale-[1.02] transition-transform object-cover w-full h-24 sm:h-32 md:h-48"
            />
          </div>
          <div className="text-center mt-6 sm:mt-8">
            <Link
              to="/galerie"
              className="inline-flex items-center gap-2 text-ocean-600 font-semibold hover:text-ocean-700 transition-colors py-2 text-sm sm:text-base"
            >
              Voir toute la galerie
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-ocean-600 font-semibold text-xs sm:text-sm uppercase tracking-wider">Instagram</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-ocean-900 mt-2">
              Suivez nos aventures
            </h2>
            <p className="text-gray-600 mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base px-2">
              Découvrez les coulisses de l'expérience, les plus beaux moments et les marées du Golfe du Morbihan.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <a
              href="https://www.instagram.com/les_secrets_de_la_maree/"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-xl sm:rounded-2xl p-0.5 sm:p-1 hover:scale-[1.01] sm:hover:scale-[1.02] transition-transform active:scale-[0.99]"
            >
              <div className="bg-white rounded-[10px] sm:rounded-xl p-5 sm:p-6 md:p-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-xl sm:rounded-2xl flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div className="text-center sm:text-left flex-1">
                  <p className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-ocean-900 mb-1 sm:mb-2">@les_secrets_de_la_maree</p>
                  <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Photos, vidéos et stories de nos dégustations sur l'estran</p>
                  <span className="inline-flex items-center gap-2 text-ocean-600 font-semibold text-sm sm:text-base">
                    Voir notre Instagram
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-ocean-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-ocean-300 font-semibold text-xs sm:text-sm uppercase tracking-wider">Témoignages</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mt-2">
              Ils ont vécu l'expérience
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 hover:bg-white/20 transition-colors">
                <div className="flex text-sand-400 mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => <StarIcon key={i} filled />)}
                </div>
                <p className="text-white/90 mb-4 sm:mb-6 leading-relaxed italic text-sm sm:text-base">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-ocean-600 rounded-full flex items-center justify-center text-white font-semibold text-sm sm:text-base flex-shrink-0">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base">{testimonial.name}</p>
                    <p className="text-xs sm:text-sm text-white/60">{testimonial.location}</p>
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
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-ocean-600 font-semibold text-xs sm:text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-ocean-900 mt-2">
              Questions fréquentes
            </h2>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg sm:rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-4 sm:px-6 py-4 sm:py-5 flex justify-between items-center text-left hover:bg-gray-50 active:bg-gray-100 transition-colors min-h-[56px] gap-3"
                >
                  <span className="font-semibold text-ocean-900 text-sm sm:text-base">{faq.question}</span>
                  <span className={`transform transition-transform flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`}>
                    <ChevronDownIcon />
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-5 text-gray-600 leading-relaxed text-sm sm:text-base">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-6 sm:mt-8">
            <Link
              to="/experience"
              className="inline-flex items-center gap-2 text-ocean-600 font-semibold hover:text-ocean-700 transition-colors py-2 text-sm sm:text-base"
            >
              Voir toutes les questions
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-ocean-700 via-ocean-800 to-ocean-900 text-white">
        <div className="container-custom text-center">
          <span className="inline-block bg-sand-400/20 text-sand-300 text-xs sm:text-sm font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6">
            Places limitées - Prochaines sessions Avril 2026
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 sm:mb-6">
            Réservez votre moment d'exception
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
            Les sessions sont programmées selon les grandes marées et se remplissent rapidement.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
            <Link to="/tarifs" className="btn-primary text-base sm:text-lg">
              Voir les tarifs et réserver
            </Link>
            <Link to="/contact" className="btn-secondary text-base sm:text-lg border-white/30 text-white hover:bg-white/10">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
