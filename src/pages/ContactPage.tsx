import { useState } from 'react';
import { Link } from 'react-router-dom';

const CheckIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    rgpdConsent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSubmitted(true);
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "max@secretsmaree.com",
      link: "mailto:max@secretsmaree.com"
    },
    {
      icon: "📱",
      title: "Téléphone",
      value: "06 51 30 24 97",
      link: "tel:+33651302497"
    },
    {
      icon: "📍",
      title: "Localisation",
      value: "Golfe du Morbihan, Bretagne",
      link: null
    },
    {
      icon: "🕐",
      title: "Horaires",
      value: "Sessions selon marées",
      link: null
    }
  ];

  const quickLinks = [
    { icon: "🦪", title: "Réserver une session", description: "Consultez les tarifs et disponibilités", href: "/tarifs" },
    { icon: "🎁", title: "Offrir en cadeau", description: "Bon cadeau valable 1 an", href: "/tarifs" },
    { icon: "🌊", title: "Horaires des marées", description: "Consultez les coefficients", href: "https://maree.secretsmaree.com", external: true }
  ];

  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-ocean-800 to-ocean-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block bg-ocean-500/30 text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
            Contactez-nous
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Une question ?
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Nous sommes là pour vous aider. N'hésitez pas à nous contacter
            pour toute question sur l'expérience.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-shell-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 -mt-20">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <span className="text-3xl mb-3 block">{info.icon}</span>
                <h3 className="font-semibold text-ocean-900 mb-1">{info.title}</h3>
                {info.link ? (
                  <a href={info.link} className="text-ocean-600 hover:text-ocean-700 transition-colors">
                    {info.value}
                  </a>
                ) : (
                  <p className="text-gray-600">{info.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Quick Links */}
      <section className="py-16 md:py-24 bg-shell-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-ocean-900 mb-6">
                Envoyez-nous un message
              </h2>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                      <CheckIcon />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-ocean-900 mb-2">Message envoyé !</h3>
                    <p className="text-gray-600 mb-6">
                      Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '', rgpdConsent: false });
                      }}
                      className="text-ocean-600 hover:text-ocean-700 font-semibold"
                    >
                      Envoyer un autre message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Nom *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 text-gray-900"
                          placeholder="Votre nom"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 text-gray-900"
                          placeholder="votre@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Sujet</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 text-gray-900"
                      >
                        <option value="">Choisissez un sujet</option>
                        <option value="reservation">Réservation</option>
                        <option value="gift">Bon cadeau</option>
                        <option value="group">Groupe / Événement</option>
                        <option value="press">Presse / Partenariat</option>
                        <option value="other">Autre</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                      <textarea
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 text-gray-900"
                        rows={5}
                        placeholder="Votre message..."
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="rgpdConsent"
                        required
                        checked={formData.rgpdConsent}
                        onChange={(e) => setFormData({...formData, rgpdConsent: e.target.checked})}
                        className="mt-1 w-4 h-4 text-ocean-600 border-gray-300 rounded focus:ring-ocean-500"
                      />
                      <label htmlFor="rgpdConsent" className="text-sm text-gray-600">
                        J'accepte que mes données soient traitées conformément à la{' '}
                        <Link to="/politique-confidentialite" className="text-ocean-600 hover:underline" target="_blank">
                          politique de confidentialité
                        </Link>
                        . *
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-ocean-600 hover:bg-ocean-700 text-white font-semibold py-4 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-ocean-900 mb-6">
                Accès rapide
              </h2>

              <div className="space-y-4">
                {quickLinks.map((link, index) => (
                  link.external ? (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4">
                        <span className="text-3xl">{link.icon}</span>
                        <div>
                          <h3 className="font-semibold text-ocean-900">{link.title}</h3>
                          <p className="text-gray-500 text-sm">{link.description}</p>
                        </div>
                        <svg className="w-5 h-5 text-gray-400 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </a>
                  ) : (
                    <Link key={index} to={link.href} className="block">
                      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4">
                        <span className="text-3xl">{link.icon}</span>
                        <div>
                          <h3 className="font-semibold text-ocean-900">{link.title}</h3>
                          <p className="text-gray-500 text-sm">{link.description}</p>
                        </div>
                        <svg className="w-5 h-5 text-gray-400 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                  )
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 bg-white rounded-2xl p-4 shadow-sm">
                <div className="bg-ocean-100 rounded-xl h-64 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-4xl mb-2 block">📍</span>
                    <p className="text-ocean-700 font-medium">Golfe du Morbihan</p>
                    <p className="text-ocean-600 text-sm">Bretagne, France</p>
                  </div>
                </div>
                <p className="text-gray-500 text-sm text-center mt-4">
                  Le point de rendez-vous exact vous sera communiqué lors de la réservation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-ocean-900 mb-4">
            Vous avez d'autres questions ?
          </h2>
          <p className="text-gray-600 mb-6">
            Consultez notre FAQ pour trouver rapidement des réponses.
          </p>
          <Link
            to="/experience"
            className="inline-flex items-center gap-2 text-ocean-600 font-semibold hover:text-ocean-700 transition-colors"
          >
            Voir les questions fréquentes
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
