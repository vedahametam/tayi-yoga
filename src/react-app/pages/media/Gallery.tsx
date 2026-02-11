import { useState } from 'react';
import PageHero from '../../components/PageHero';
import ImagePlaceholder from '../../components/ImagePlaceholder';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'ashram', name: 'Ashram & Grounds' },
    { id: 'classes', name: 'Classes & Practice' },
    { id: 'events', name: 'Events & Ceremonies' },
    { id: 'nature', name: 'Nature & Gardens' },
    { id: 'construction', name: 'Temple Construction' },
    { id: 'community', name: 'Community Life' }
  ];

  const photos = Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    category: categories[Math.floor(i / 4) % categories.length].id,
    title: `Photo ${i + 1}`,
    description: 'Beautiful moment captured at Tayi Sadhana Yoga'
  }));

  const filteredPhotos = selectedCategory === 'all'
    ? photos
    : photos.filter(photo => photo.category === selectedCategory);

  return (
    <div>
      <PageHero
        title="Photo Gallery"
        subtitle="Glimpses of life, practice, and sacred moments at Tayi Sadhana Yoga"
        imagePlaceholder="Gallery Hero"
        height="medium"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-ink mb-6">
              Visual Journey
            </h2>
            <p className="text-xl text-ink/70 max-w-3xl mx-auto">
              Explore our collection of photos capturing the beauty, spirit, and transformative moments
              at our ashram and community gatherings
            </p>
          </div>

          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    selectedCategory === category.id
                      ? 'bg-earth text-white shadow-lg scale-105'
                      : 'bg-sand text-earth hover:bg-earth/10'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                className="group relative bg-gradient-to-br from-sand to-mist rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
              >
                <ImagePlaceholder
                  width={400}
                  height={300}
                  text={photo.title}
                  className="rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-semibold text-lg mb-1">{photo.title}</h3>
                    <p className="text-sm text-mist/90">{photo.description}</p>
                  </div>
                </div>
                <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-6 h-6 text-earth" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {filteredPhotos.length === 0 && (
            <div className="text-center py-20">
              <svg className="w-24 h-24 mx-auto text-earth/30 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-xl text-ink/60">No photos in this category yet</p>
            </div>
          )}

          <div className="mt-12 text-center">
            <button className="px-8 py-3 bg-earth text-white rounded-full font-semibold hover:bg-clay transition-colors">
              Load More Photos
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-sand to-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-ink mb-4">
              Featured Collections
            </h2>
            <p className="text-xl text-ink/70">
              Curated photo series from special events and moments
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <ImagePlaceholder width={400} height={300} text="Annual Festival 2024" className="rounded-t-xl" />
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-ink mb-2">Annual Festival 2024</h3>
                <p className="text-ink/70 mb-4">
                  Highlights from our yearly celebration honoring the Divine Mother
                </p>
                <button className="text-earth font-semibold hover:text-clay transition-colors">
                  View Album (48 photos) →
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <ImagePlaceholder width={400} height={300} text="TTC Graduation" className="rounded-t-xl" />
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-ink mb-2">TTC Graduation</h3>
                <p className="text-ink/70 mb-4">
                  Celebrating our newest certified yoga teachers
                </p>
                <button className="text-earth font-semibold hover:text-clay transition-colors">
                  View Album (36 photos) →
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <ImagePlaceholder width={400} height={300} text="Shrine Construction" className="rounded-t-xl" />
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-ink mb-2">Shrine Construction</h3>
                <p className="text-ink/70 mb-4">
                  Progress on the Seven Chakra Shrines project
                </p>
                <button className="text-earth font-semibold hover:text-clay transition-colors">
                  View Album (52 photos) →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-earth text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Share Your Photos
          </h2>
          <p className="text-xl text-mist/90 mb-8">
            If you've visited our ashram or attended our programs, we'd love to see your photos
          </p>
          <button className="px-8 py-3 bg-sun text-ink rounded-full font-semibold hover:bg-white transition-colors">
            Submit Your Photos
          </button>
        </div>
      </section>
    </div>
  );
}
