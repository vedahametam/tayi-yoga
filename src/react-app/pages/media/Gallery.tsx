import { useState } from 'react';
import PageHero from '../../components/PageHero';
import ImagePlaceholder from '../../components/ImagePlaceholder';

export default function Gallery() {
  const [activeAlbum, setActiveAlbum] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Shrine Construction album photos
  const shrinePhotos = [
    { src: '/images/gallery/shrine/shrine_1.jpeg', width: 1191, height: 845 },
    { src: '/images/gallery/shrine/shrine_2.jpg', width: 1320, height: 859 },
    { src: '/images/gallery/shrine/shrine_3.jpg', width: 1205, height: 847 }
  ];

  // Events album photos
  const eventsPhotos = [
    { src: '/images/gallery/events/12_years.jpeg', width: 1200, height: 800 },
    { src: '/images/gallery/events/IMG_0172.JPG', width: 1920, height: 1080 },
    { src: '/images/gallery/events/IMG_0174.JPG', width: 1569, height: 1080 },
    { src: '/images/gallery/events/IMG_0400.JPG', width: 1620, height: 1080 }
  ];

  // TTC album photos
  const ttcPhotos = [
    { src: '/images/gallery/ttc/disciples.jpg', width: 1400, height: 555 },
    { src: '/images/gallery/ttc/ttc.jpeg', width: 1200, height: 595 }
  ];

  const getAlbumPhotos = () => {
    if (activeAlbum === 'shrine') return shrinePhotos;
    if (activeAlbum === 'events') return eventsPhotos;
    if (activeAlbum === 'ttc') return ttcPhotos;
    return [];
  };

  const getAlbumTitle = () => {
    if (activeAlbum === 'shrine') return 'Shrine Construction';
    if (activeAlbum === 'events') return 'Events';
    if (activeAlbum === 'ttc') return 'TTC';
    return '';
  };

  const getAlbumDescription = () => {
    if (activeAlbum === 'shrine') return 'Progress on the Seven Chakra Shrines project — Constructed using sacred Vedic geometry and natural materials';
    if (activeAlbum === 'events') return 'Highlights from our special events, festivals, and yearly celebrations';
    if (activeAlbum === 'ttc') return 'Celebrating our graduates, teacher training highlights, and Gurukula moments';
    return '';
  };

  const currentPhotos = getAlbumPhotos();

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
            {/* Events */}
            <div 
              onClick={() => setActiveAlbum('events')}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer border border-earth/5 hover:border-earth/20 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <ImagePlaceholder 
                  width={400} 
                  height={300} 
                  src="/images/gallery/events/12_years.jpeg" 
                  alt="Events" 
                  className="rounded-t-xl animate-in fade-in duration-300" 
                  objectFit="cover" 
                />
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold text-ink mb-2">Events</h3>
                  <p className="text-ink/70 mb-4">
                    Highlights from our special events, festivals, and yearly celebrations
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <button className="text-earth font-semibold hover:text-clay transition-colors flex items-center">
                  View Album ({eventsPhotos.length} photos) →
                </button>
              </div>
            </div>

            {/* TTC */}
            <div 
              onClick={() => setActiveAlbum('ttc')}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer border border-earth/5 hover:border-earth/20 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <ImagePlaceholder 
                  width={400} 
                  height={300} 
                  src="/images/gallery/ttc/disciples.jpg" 
                  alt="TTC" 
                  className="rounded-t-xl animate-in fade-in duration-300" 
                  objectFit="cover" 
                />
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold text-ink mb-2">TTC</h3>
                  <p className="text-ink/70 mb-4">
                    Celebrating our graduates, teacher training highlights, and Gurukula moments
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <button className="text-earth font-semibold hover:text-clay transition-colors flex items-center">
                  View Album ({ttcPhotos.length} photos) →
                </button>
              </div>
            </div>

            {/* Shrine Construction */}
            <div 
              onClick={() => setActiveAlbum('shrine')}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer border border-earth/5 hover:border-earth/20 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <ImagePlaceholder 
                  width={400} 
                  height={300} 
                  src="/images/gallery/shrine/shrine_1.jpeg" 
                  alt="Shrine Construction" 
                  className="rounded-t-xl animate-in fade-in duration-300" 
                  objectFit="cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold text-ink mb-2">Shrine Construction</h3>
                  <p className="text-ink/70 mb-4">
                    Progress on the Seven Chakra Shrines project
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <button className="text-earth font-semibold hover:text-clay transition-colors flex items-center">
                  View Album ({shrinePhotos.length} photos) →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Album Modal */}
      {activeAlbum !== null && (
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
              <h3 className="text-3xl font-serif font-bold text-ink mb-2">{getAlbumTitle()}</h3>
              <p className="text-earth font-medium">{getAlbumDescription()}</p>
            </div>

            {/* Image Grid / Empty State */}
            {currentPhotos.length > 0 ? (
              <div className="grid md:grid-cols-3 gap-6">
                {currentPhotos.map((photo, index) => (
                  <div 
                    key={index} 
                    onClick={() => setLightboxIndex(index)}
                    className="group cursor-pointer bg-white rounded-2xl p-3 shadow-md hover:shadow-xl transition-all border border-earth/10 hover:-translate-y-1 transform"
                  >
                    <ImagePlaceholder 
                      width={photo.width} 
                      height={photo.height} 
                      src={photo.src} 
                      className="rounded-xl overflow-hidden" 
                      objectFit="cover" 
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-2xl border border-earth/10 p-8 shadow-sm">
                <svg className="w-16 h-16 mx-auto text-earth/30 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <h4 className="text-xl font-bold text-ink mb-2">This album is currently empty</h4>
                <p className="text-sm text-ink/60 max-w-md mx-auto leading-relaxed">
                  To display your photos here, place them in the project directory at:
                  <code className="block mt-2 bg-sand/80 px-4 py-2 rounded text-earth font-mono text-xs">
                    public/images/gallery/{activeAlbum}/
                  </code>
                  and reference them inside the <code className="text-earth font-mono text-xs">Gallery.tsx</code> file's photo dataset.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Lightbox / Zoomed View */}
      {lightboxIndex !== null && currentPhotos.length > 0 && (
        <div className="fixed inset-0 z-[60] bg-black/95 flex flex-col justify-between p-4 select-none animate-in fade-in duration-200">
          {/* Header */}
          <div className="flex justify-between items-center text-white p-2">
            <span className="font-semibold text-sm tracking-wider uppercase">{lightboxIndex + 1} / {currentPhotos.length}</span>
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
              onClick={() => setLightboxIndex((lightboxIndex - 1 + currentPhotos.length) % currentPhotos.length)}
              className="absolute left-4 sm:left-8 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors text-2xl font-bold z-10"
              aria-label="Previous photo"
            >
              ‹
            </button>

            {/* The Image */}
            <div className="max-w-[85vw] max-h-[75vh] flex items-center justify-center p-2">
              <img 
                src={currentPhotos[lightboxIndex].src} 
                className="max-w-full max-h-full rounded-lg shadow-2xl object-contain animate-in zoom-in-95 duration-200" 
              />
            </div>

            {/* Next Button */}
            <button 
              onClick={() => setLightboxIndex((lightboxIndex + 1) % currentPhotos.length)}
              className="absolute right-4 sm:right-8 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors text-2xl font-bold z-10"
              aria-label="Next photo"
            >
              ›
            </button>
          </div>

          <div className="pb-6"></div>
        </div>
      )}
    </div>
  );
}
