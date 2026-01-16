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

export default function HomePageEN() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How many people can participate?",
      answer: "Each session welcomes an intimate group of 6 people maximum, ensuring a personalized and authentic experience. Perfect for couples, friends, or families."
    },
    {
      question: "What is included in the experience?",
      answer: "The experience includes freshly harvested oysters tasting (about 12 per person), a bottle of champagne for 2, a discovery of oyster farming techniques, and a unique immersion with your feet in the water."
    },
    {
      question: "How long does the experience last?",
      answer: "The experience lasts approximately 2.5 hours, including welcome, oyster farm discovery, tasting, and a convivial moment facing the Gulf of Morbihan."
    }
  ];

  const testimonials = [
    {
      name: "Sarah & James",
      location: "London, UK",
      text: "A magical experience! Tasting oysters with our feet in the water overlooking the Gulf was unforgettable. Highly recommend for any seafood lover visiting Brittany.",
      rating: 5
    },
    {
      name: "Emma L.",
      location: "Dublin, Ireland",
      text: "We gifted this experience to my parents. An incredible memory, beautiful photos, and exceptional oysters! A must-do when in Brittany.",
      rating: 5
    },
    {
      name: "Michael",
      location: "New York, USA",
      text: "As an oyster lover, I've tried many tastings worldwide. This one in the Gulf of Morbihan was truly unique and authentic.",
      rating: 5
    }
  ];

  const steps = [
    { number: "01", title: "Booking", description: "Sign up and receive the next available dates" },
    { number: "02", title: "Meeting Point", description: "Join us at the starting point for the immersion" },
    { number: "03", title: "Discovery", description: "Walk on the foreshore and discover the oyster farms" },
    { number: "04", title: "Tasting", description: "Savor oysters and champagne with your feet in the water" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden -mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/hero.png')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-ocean-900/60 via-ocean-800/40 to-ocean-900/70" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-24">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
            Gulf of Morbihan - Brittany, France
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Taste Fresh Oysters<br />
            <span className="text-sand-300">With Your Feet in the Water</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            An immersive and intimate experience in the heart of Brittany's oyster farms.
            Fresh oysters, champagne, and sunset over the Gulf of Morbihan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/en/prices" className="btn-primary text-lg">
              Book My Experience
            </Link>
            <Link to="/en/experience" className="btn-secondary text-lg">
              Learn More
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <div className="flex text-sand-400">
                {[...Array(5)].map((_, i) => <StarIcon key={i} filled />)}
              </div>
              <span>5/5 (48 reviews)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">👥</span>
              <span>6 people max</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⏱️</span>
              <span>2.5 hour experience</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white">
          <ChevronDownIcon />
        </div>
      </section>

      {/* What is it Section */}
      <section className="section-padding bg-shell-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-ocean-600 font-semibold text-sm uppercase tracking-wider">The Experience</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-ocean-900 mt-2 mb-6">
                A Tasting Like No Other
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Imagine yourself standing in the water on the Gulf of Morbihan foreshore at low tide.
                Before you, oyster farms stretch as far as the eye can see. In your hands,
                a freshly picked oyster and a glass of champagne.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                <strong>Les Secrets de la Marée</strong> is much more than a tasting.
                It's an authentic immersion into the daily life of an oyster farmer,
                a timeless escape following the rhythm of the tides.
              </p>
              <Link
                to="/en/experience"
                className="inline-flex items-center gap-2 text-ocean-600 font-semibold hover:text-ocean-700 transition-colors"
              >
                Discover the full experience
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <img
                src="/images/degustation.jpg"
                alt="Oyster tasting with feet in the water in Brittany"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-ocean-100 rounded-full flex items-center justify-center text-ocean-600 text-2xl">
                  🦪
                </div>
                <div>
                  <p className="font-semibold text-ocean-900">500+ guests</p>
                  <p className="text-sm text-gray-500">have lived the experience</p>
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
            <span className="text-ocean-600 font-semibold text-sm uppercase tracking-wider">The Process</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-ocean-900 mt-2">
              How Does It Work?
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

      {/* Instagram Section */}
      <section className="section-padding bg-shell-50">
        <div className="container-custom px-4">
          <div className="text-center mb-12">
            <span className="text-ocean-600 font-semibold text-sm uppercase tracking-wider">Instagram</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ocean-900 mt-2">
              Follow Our Adventures
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Discover behind-the-scenes moments, the best experiences, and the tides of the Gulf of Morbihan.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <a
              href="https://www.instagram.com/les_secrets_de_la_maree/"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-2xl p-1 hover:scale-[1.02] transition-transform"
            >
              <div className="bg-white rounded-xl p-8 flex flex-col md:flex-row items-center gap-8">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-2xl flex items-center justify-center text-white text-5xl flex-shrink-0">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div className="text-center md:text-left flex-1">
                  <p className="text-2xl font-serif font-bold text-ocean-900 mb-2">@les_secrets_de_la_maree</p>
                  <p className="text-gray-600 mb-4">Photos, videos and stories from our tastings on the foreshore</p>
                  <span className="inline-flex items-center gap-2 text-ocean-600 font-semibold">
                    View our Instagram
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="text-center mb-16">
            <span className="text-ocean-300 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mt-2">
              What Our Guests Say
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
              Frequently Asked Questions
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

          <div className="text-center mt-8">
            <Link
              to="/en/experience"
              className="inline-flex items-center gap-2 text-ocean-600 font-semibold hover:text-ocean-700 transition-colors"
            >
              See all questions
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-ocean-700 via-ocean-800 to-ocean-900 text-white">
        <div className="container-custom text-center">
          <span className="inline-block bg-sand-400/20 text-sand-300 text-sm font-medium px-4 py-2 rounded-full mb-6">
            Limited spots - Next sessions April 2026
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
            Book Your Exceptional Moment
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Sessions are scheduled according to the tides and fill up quickly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/en/prices" className="btn-primary text-lg">
              View Prices & Book
            </Link>
            <Link to="/en/contact" className="btn-secondary text-lg border-white/30 text-white hover:bg-white/10">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
