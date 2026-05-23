import PageHero from '../../components/PageHero';
import ImagePlaceholder from '../../components/ImagePlaceholder';

export default function Gallery() {
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


    </div>
  );
}
