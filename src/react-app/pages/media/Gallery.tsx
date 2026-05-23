import { useState } from 'react';
import PageHero from '../../components/PageHero';
import ImagePlaceholder from '../../components/ImagePlaceholder';

export default function Gallery() {
  const [activeAlbum, setActiveAlbum] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const shrinePhotos = [
    { src: '/images/gallery/shrine/shrine_1.jpeg', width: 1191, height: 845, alt: 'Shrine View 1', caption: 'Pranic Energy Consecrated Foundation' },
    { src: '/images/gallery/shrine/shrine_2.jpg', width: 1320, height: 859, alt: 'Shrine View 2', caption: 'Vedic Sacred Geometry Layout' },
    { src: '/images/gallery/shrine/shrine_3.jpg', width: 1205, height: 847, alt: 'Shrine View 3', caption: 'Pranic Stone & Lime Pillars' }
  ];

  return (
    <div>
      <PageHero
        title="Photo Gallery"
        subtitle="Glimpses of life, practice, and sacred moments at Tayi Sadhana Yoga"
        imagePlaceholder="Gallery Hero"
        height="medium"
      />

      <section className="py-20 bg-gradient-to-b from-sand to-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-ink mb-4">
              Featured Collections
            </h2>
            <p className="text-xl text-ink/70">
              Curated photo series from special events and moments
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Annual Festival 2024 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-earth/5 opacity-80 hover:opacity-100 transition-all">
              <ImagePlaceholder width={400} height={300} text="Annual Festival 2024" className="rounded-t-xl" />
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-ink mb-2">Annual Festival 2024</h3>
                <p className="text-ink/70 mb-4">
                  Highlights from our yearly celebration honoring the Divine Mother
                </p>
                <button className="text-earth/50 font-semibold cursor-not-allowed">
                  Placeholder (Album empty)
                </button>
              </div>
            </div>

            {/* TTC Graduation */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-earth/5 opacity-80 hover:opacity-100 transition-all">
              <ImagePlaceholder width={400} height={300} text="TTC Graduation" className="rounded-t-xl" />
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-ink mb-2">TTC Graduation</h3>
                <p className="text-ink/70 mb-4">
                  Celebrating our newest certified yoga teachers
                </p>
                <button className="text-earth/50 font-semibold cursor-not-allowed">
                  Placeholder (Album empty)
                </button>
              </div>
            </div>

            {/* Shrine Construction */}
            <div 
              onClick={() => setActiveAlbum('shrine')}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer border border-earth/5 hover:border-earth/20 transform hover:-translate-y-1"
            >
              <ImagePlaceholder 
                width={1191} 
                height={845} 
                src="/images/gallery/shrine/shrine_1.jpeg" 
                alt="Shrine Construction" 
                className="rounded-t-xl" 
                objectFit="cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-ink mb-2">Shrine Construction</h3>
                <p className="text-ink/70 mb-4">
                  Progress on the Seven Chakra Shrines project
                </p>
                <button className="text-earth font-semibold hover:text-clay transition-colors flex items-center">
                  View Album (3 photos) →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Album Modal */}
      {activeAlbum === 'shrine' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-ink/80 backdrop-blur-md overflow-y-auto">
          <div className="relative bg-sand/95 w-full max-w-5xl rounded-3xl p-6 md:p-10 shadow-2xl border border-white/20 my-8 animate-in fade-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button 
              onClick={() => setActiveAlbum(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 bg-ink/15 hover:bg-ink/30 rounded-full flex items-center justify-center text-ink transition-colors font-bold text-xl"
              aria-label="Close album"
            >
              ✕
            </button>

            {/* Modal Header */}
            <div className="mb-8 border-b border-earth/20 pb-4">
              <h3 className="text-3xl font-serif font-bold text-ink mb-2">Shrine Construction</h3>
              <p className="text-earth font-medium">Progress on the Seven Chakra Shrines project — Constructed using sacred Vedic geometry and natural materials</p>
            </div>

            {/* Image Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {shrinePhotos.map((photo, index) => (
                <div 
                  key={index} 
                  onClick={() => setLightboxIndex(index)}
                  className="group cursor-pointer bg-white rounded-2xl p-3 shadow-md hover:shadow-xl transition-all border border-earth/10 hover:-translate-y-1 transform"
                >
                  <ImagePlaceholder 
                    width={photo.width} 
                    height={photo.height} 
                    src={photo.src} 
                    alt={photo.alt} 
                    className="rounded-xl overflow-hidden" 
                    objectFit="cover" 
                  />
                  <div className="mt-3 text-center">
                    <p className="text-xs font-semibold text-earth uppercase tracking-widest">{photo.alt}</p>
                    <p className="text-sm font-medium text-ink/80 mt-1">{photo.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Lightbox / Zoomed View */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[60] bg-black/95 flex flex-col justify-between p-4 select-none animate-in fade-in duration-200">
          {/* Header */}
          <div className="flex justify-between items-center text-white p-2">
            <span className="font-semibold text-sm tracking-wider uppercase">{lightboxIndex + 1} / {shrinePhotos.length} — {shrinePhotos[lightboxIndex].alt}</span>
            <button 
              onClick={() => setLightboxIndex(null)}
              className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors text-xl font-bold"
            >
              ✕
            </button>
          </div>

          {/* Main Zoomed Image Container */}
          <div className="flex-grow flex items-center justify-center relative min-h-[50vh]">
            {/* Prev Button */}
            <button 
              onClick={() => setLightboxIndex((lightboxIndex - 1 + shrinePhotos.length) % shrinePhotos.length)}
              className="absolute left-4 sm:left-8 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors text-2xl font-bold z-10"
              aria-label="Previous photo"
            >
              ‹
            </button>

            {/* The Image */}
            <div className="max-w-[85vw] max-h-[70vh] flex items-center justify-center p-2">
              <img 
                src={shrinePhotos[lightboxIndex].src} 
                alt={shrinePhotos[lightboxIndex].alt} 
                className="max-w-full max-h-full rounded-lg shadow-2xl object-contain animate-in zoom-in-95 duration-200" 
              />
            </div>

            {/* Next Button */}
            <button 
              onClick={() => setLightboxIndex((lightboxIndex + 1) % shrinePhotos.length)}
              className="absolute right-4 sm:right-8 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors text-2xl font-bold z-10"
              aria-label="Next photo"
            >
              ›
            </button>
          </div>

          {/* Caption Footer */}
          <div className="text-center text-white pb-6 px-4">
            <p className="text-lg font-serif font-bold text-sand mb-1">{shrinePhotos[lightboxIndex].caption}</p>
            <p className="text-xs text-white/50">Natural materials — stone, earth, and lime with 0% industrial metal</p>
          </div>
        </div>
      )}
    </div>
  );
}
