import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function GalleryPageEN() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const gallery = [
    {
      src: "/images/hero.png",
      alt: "Sunset over the Gulf of Morbihan",
      category: "ambiance"
    },
    {
      src: "/images/degustation.jpg",
      alt: "Oyster tasting with feet in the water",
      category: "tasting"
    },
    {
      src: "/images/ostreiculteurs.jpg",
      alt: "Oyster farmers at work",
      category: "craft"
    },
    {
      src: "/images/groupe.jpg",
      alt: "Happy group of visitors",
      category: "group"
    },
    {
      src: "/images/golfe.jpg",
      alt: "View over the Gulf of Morbihan",
      category: "ambiance"
    },
    {
      src: "/images/hero.png",
      alt: "The foreshore at low tide",
      category: "ambiance"
    },
    {
      src: "/images/degustation.jpg",
      alt: "Oyster shucking",
      category: "tasting"
    },
    {
      src: "/images/groupe.jpg",
      alt: "Sharing moment",
      category: "group"
    }
  ];

  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-ocean-800 to-ocean-900 text-white">
        <div className="container-custom px-4 text-center">
          <span className="inline-block bg-ocean-500/30 text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
            In Pictures
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Photo Gallery
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Dive into the world of Les Secrets de la Marée.
            Authentic moments captured on the foreshore of the Gulf of Morbihan.
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
            <span className="text-ocean-600 font-semibold text-sm uppercase tracking-wider">Video</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ocean-900 mt-2">
              The Experience in Motion
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video bg-ocean-900 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/hero.png"
                alt="Video preview"
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
                <p className="text-sm text-white/70">Duration: 2:30</p>
                <p className="font-semibold text-lg">Discover the experience in video</p>
              </div>
            </div>
            <p className="text-center mt-6 text-gray-500">
              Video coming soon
            </p>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4 text-center">
          <span className="text-ocean-600 font-semibold text-sm uppercase tracking-wider">On Instagram</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-ocean-900 mt-2 mb-6">
            Follow Our Adventures
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Find behind-the-scenes content, the most beautiful sunsets,
            and sharing moments on our Instagram account.
          </p>
          <a
            href="https://www.instagram.com/les_secrets_de_la_maree/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-8 rounded-full hover:opacity-90 transition-opacity"
          >
            <span className="text-xl">📷</span>
            @les_secrets_de_la_maree
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-ocean-700 via-ocean-800 to-ocean-900 text-white">
        <div className="container-custom text-center px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Create Your Own Memories
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Each session is a unique moment. Join us to experience
            and capture your own adventure.
          </p>
          <Link to="/en/prices" className="btn-primary text-lg">
            Book My Experience
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
            alt="Enlarged image"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
