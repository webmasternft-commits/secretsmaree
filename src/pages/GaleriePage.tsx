import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function GaleriePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const gallery = [
    {
      src: "/images/hero.png",
      alt: "Coucher de soleil sur le Golfe du Morbihan",
      category: "ambiance"
    },
    {
      src: "/images/degustation.jpg",
      alt: "Dégustation d'huîtres les pieds dans l'eau",
      category: "degustation"
    },
    {
      src: "/images/ostreiculteurs.jpg",
      alt: "Les ostréiculteurs au travail",
      category: "metier"
    },
    {
      src: "/images/groupe.jpg",
      alt: "Groupe de visiteurs heureux",
      category: "groupe"
    },
    {
      src: "/images/golfe.jpg",
      alt: "Vue sur le Golfe du Morbihan",
      category: "ambiance"
    },
    {
      src: "/images/hero.png",
      alt: "L'estran à marée basse",
      category: "ambiance"
    },
    {
      src: "/images/degustation.jpg",
      alt: "Ouverture des huîtres",
      category: "degustation"
    },
    {
      src: "/images/groupe.jpg",
      alt: "Moment de partage",
      category: "groupe"
    }
  ];

  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-ocean-800 to-ocean-900 text-white">
        <div className="container-custom px-4 text-center">
          <span className="inline-block bg-ocean-500/30 text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
            En images
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Galerie photos
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Plongez dans l'univers des Secrets de la Marée.
            Des moments authentiques capturés sur l'estran du Golfe du Morbihan.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((image, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-2xl cursor-pointer group ${
                  index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                    index === 0 ? 'h-full min-h-[400px]' : 'h-64'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-medium">{image.alt}</p>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section-padding bg-shell-50">
        <div className="container-custom px-4">
          <div className="text-center mb-12">
            <span className="text-ocean-600 font-semibold text-sm uppercase tracking-wider">Vidéo</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ocean-900 mt-2">
              L'expérience en mouvement
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video bg-ocean-900 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/hero.png"
                alt="Aperçu vidéo"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                  <svg className="w-8 h-8 text-ocean-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm text-white/70">Durée: 2:30</p>
                <p className="font-semibold text-lg">Découvrez l'expérience en vidéo</p>
              </div>
            </div>
            <p className="text-center mt-6 text-gray-500">
              Vidéo bientôt disponible
            </p>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4 text-center">
          <span className="text-ocean-600 font-semibold text-sm uppercase tracking-wider">Sur Instagram</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-ocean-900 mt-2 mb-6">
            Suivez nos aventures
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Retrouvez les coulisses de l'expérience, les plus beaux couchers de soleil
            et les moments de partage sur notre compte Instagram.
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-8 rounded-full hover:opacity-90 transition-opacity"
          >
            <span className="text-xl">📷</span>
            @secretsdelamaree
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-ocean-700 via-ocean-800 to-ocean-900 text-white">
        <div className="container-custom text-center px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Créez vos propres souvenirs
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Chaque session est un moment unique. Rejoignez-nous pour vivre
            et immortaliser votre expérience.
          </p>
          <Link to="/tarifs" className="btn-primary text-lg">
            Réserver mon expérience
          </Link>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={selectedImage}
            alt="Image agrandie"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
