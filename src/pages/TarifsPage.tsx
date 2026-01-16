import { useState } from 'react';
import { Link } from 'react-router-dom';
import { submitForm } from '../services/formService';

const CheckIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default function TarifsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '2',
    message: '',
    rgpdConsent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const result = await submitForm({
      type: 'reservation',
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      date: formData.date,
      guests: formData.guests,
      message: formData.message,
      submittedAt: new Date().toISOString()
    });

    if (result.success) {
      setSubmitted(true);
    } else {
      setError(result.message);
    }
    setIsSubmitting(false);
  };

  const offers = [
    {
      name: "Duo",
      subtitle: "Pour 2 personnes",
      price: 178,
      pricePerPerson: 89,
      features: [
        "12 huîtres par personne",
        "1 bouteille de champagne",
        "Découverte ostréicole 2h30",
        "Photos souvenirs",
        "Prêt de bottes"
      ],
      popular: false
    },
    {
      name: "Quatuor",
      subtitle: "Pour 4 personnes",
      price: 336,
      pricePerPerson: 84,
      features: [
        "12 huîtres par personne",
        "2 bouteilles de champagne",
        "Découverte ostréicole 2h30",
        "Photos souvenirs",
        "Prêt de bottes",
        "Huîtres supplémentaires offertes"
      ],
      popular: true
    },
    {
      name: "Groupe",
      subtitle: "5-6 personnes",
      price: 395,
      pricePerPerson: 79,
      features: [
        "12 huîtres par personne",
        "3 bouteilles de champagne",
        "Découverte ostréicole 2h30",
        "Photos souvenirs",
        "Prêt de bottes",
        "Huîtres supplémentaires offertes",
        "Plateau de dégustation premium"
      ],
      popular: false
    }
  ];

  const upcomingDates = [
    { date: "Samedi 5 Avril 2026", time: "14h30 - 17h00", spots: 4, coefficient: 105 },
    { date: "Dimanche 6 Avril 2026", time: "15h00 - 17h30", spots: 6, coefficient: 108 },
    { date: "Samedi 19 Avril 2026", time: "13h30 - 16h00", spots: 2, coefficient: 98 },
    { date: "Dimanche 20 Avril 2026", time: "14h00 - 16h30", spots: 6, coefficient: 102 },
    { date: "Samedi 3 Mai 2026", time: "14h30 - 17h00", spots: 6, coefficient: 112 },
    { date: "Dimanche 4 Mai 2026", time: "15h00 - 17h30", spots: 6, coefficient: 115 }
  ];

  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-ocean-800 to-ocean-900 text-white">
        <div className="container-custom px-4 text-center">
          <span className="inline-block bg-sand-400/20 text-sand-300 text-sm font-medium px-4 py-2 rounded-full mb-6">
            Tarifs & Réservation
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Réservez votre<br />
            <span className="text-sand-300">expérience unique</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Choisissez la formule qui vous convient et réservez votre créneau
            selon les grandes marées du Golfe du Morbihan.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-shell-50">
        <div className="container-custom px-4">
          <div className="text-center mb-16">
            <span className="text-ocean-600 font-semibold text-sm uppercase tracking-wider">Nos formules</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ocean-900 mt-2">
              Choisissez votre formule
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {offers.map((offer, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all hover:scale-105 ${
                  offer.popular ? 'ring-2 ring-ocean-600 relative' : ''
                }`}
              >
                {offer.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-ocean-600 text-white text-center text-sm font-medium py-2">
                    Le plus populaire
                  </div>
                )}
                <div className={`p-8 ${offer.popular ? 'pt-14' : ''}`}>
                  <h3 className="text-2xl font-serif font-bold text-ocean-900">{offer.name}</h3>
                  <p className="text-gray-500 mb-6">{offer.subtitle}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-ocean-900">{offer.price}€</span>
                    <span className="text-gray-500 ml-2">({offer.pricePerPerson}€/pers)</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {offer.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-600">
                        <span className="text-ocean-600"><CheckIcon /></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#reservation"
                    className={`block text-center py-3 px-6 rounded-lg font-semibold transition-all ${
                      offer.popular
                        ? 'bg-ocean-600 text-white hover:bg-ocean-700'
                        : 'bg-ocean-100 text-ocean-700 hover:bg-ocean-200'
                    }`}
                  >
                    Réserver
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Dates */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4">
          <div className="text-center mb-16">
            <span className="text-ocean-600 font-semibold text-sm uppercase tracking-wider">Calendrier</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ocean-900 mt-2">
              Prochaines sessions disponibles
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Les sessions ont lieu lors des grandes marées (coefficient &gt; 90)
              pour accéder aux parcs à huîtres.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid gap-4">
            {upcomingDates.map((session, index) => (
              <div
                key={index}
                className="bg-shell-50 rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-ocean-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">📅</span>
                  </div>
                  <div>
                    <p className="font-semibold text-ocean-900">{session.date}</p>
                    <p className="text-gray-500">{session.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Coefficient</p>
                    <p className="font-semibold text-ocean-600">{session.coefficient}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Places</p>
                    <p className={`font-semibold ${session.spots <= 2 ? 'text-red-600' : 'text-green-600'}`}>
                      {session.spots} restantes
                    </p>
                  </div>
                  <a
                    href="#reservation"
                    className="bg-ocean-600 hover:bg-ocean-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                  >
                    Réserver
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center mt-8 text-gray-500">
            D'autres dates seront ajoutées prochainement selon les marées.
            <Link to="/contact" className="text-ocean-600 hover:text-ocean-700 ml-1">
              Contactez-nous
            </Link>
            {" "}pour être informé.
          </p>
        </div>
      </section>

      {/* Reservation Form */}
      <section id="reservation" className="section-padding bg-gradient-to-br from-ocean-800 to-ocean-900">
        <div className="container-custom px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                Formulaire de réservation
              </h2>
              <p className="text-white/70">
                Remplissez ce formulaire et nous vous recontacterons rapidement pour confirmer votre réservation.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                    <CheckIcon />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-ocean-900 mb-2">Demande envoyée !</h3>
                  <p className="text-gray-600 mb-6">
                    Nous avons bien reçu votre demande de réservation.
                    Nous vous recontacterons dans les 24h pour confirmer les détails.
                  </p>
                  <Link to="/" className="text-ocean-600 hover:text-ocean-700 font-semibold">
                    Retour à l'accueil
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nom complet *</label>
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

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 text-gray-900"
                        placeholder="06 XX XX XX XX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nombre de personnes *</label>
                      <select
                        required
                        value={formData.guests}
                        onChange={(e) => setFormData({...formData, guests: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 text-gray-900"
                      >
                        <option value="2">2 personnes (178€)</option>
                        <option value="3">3 personnes (252€)</option>
                        <option value="4">4 personnes (336€)</option>
                        <option value="5">5 personnes (395€)</option>
                        <option value="6">6 personnes (474€)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date souhaitée</label>
                    <select
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 text-gray-900"
                    >
                      <option value="">Choisissez une date</option>
                      {upcomingDates.map((session, index) => (
                        <option key={index} value={session.date}>
                          {session.date} - {session.time} ({session.spots} places)
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message (optionnel)</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 text-gray-900"
                      rows={4}
                      placeholder="Allergies, demandes spéciales, occasion particulière..."
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="rgpdConsentReservation"
                      required
                      checked={formData.rgpdConsent}
                      onChange={(e) => setFormData({...formData, rgpdConsent: e.target.checked})}
                      className="mt-1 w-4 h-4 text-ocean-600 border-gray-300 rounded focus:ring-ocean-500"
                    />
                    <label htmlFor="rgpdConsentReservation" className="text-sm text-gray-600">
                      J'accepte que mes données soient traitées conformément à la{' '}
                      <Link to="/politique-confidentialite" className="text-ocean-600 hover:underline" target="_blank">
                        politique de confidentialité
                      </Link>
                      . *
                    </label>
                  </div>

                  {error && (
                    <div className="bg-red-50 text-red-700 p-4 rounded-lg text-sm">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-ocean-600 hover:bg-ocean-700 text-white font-semibold py-4 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande de réservation'}
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    Nous vous recontacterons dans les 24h pour confirmer votre réservation et les modalités de paiement.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Gift Card Section */}
      <section className="section-padding bg-shell-50">
        <div className="container-custom px-4">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg max-w-4xl mx-auto text-center">
            <span className="text-4xl mb-4 block">🎁</span>
            <h2 className="text-3xl font-serif font-bold text-ocean-900 mb-4">
              Offrez une expérience inoubliable
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Le bon cadeau Les Secrets de la Marée est valable 1 an.
              Idéal pour un anniversaire, un mariage ou simplement faire plaisir.
            </p>
            <Link
              to="/contact"
              className="inline-flex bg-ocean-600 hover:bg-ocean-700 text-white font-semibold py-3 px-8 rounded-full transition-all"
            >
              Commander un bon cadeau
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
