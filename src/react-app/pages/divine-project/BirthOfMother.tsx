import PageHero from '../../components/PageHero';
import ImagePlaceholder from '../../components/ImagePlaceholder';
import { Link } from 'react-router-dom';

export default function BirthOfMother() {
  return (
    <div>
      <PageHero
        title="Birth of the Mother"
        subtitle="The sacred vision that birthed our divine project"
        imagePlaceholder="Birth of Mother Hero"
        height="large"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl font-serif font-bold text-ink mb-6 text-center">
              The Divine Vision
            </h2>
            <p className="text-xl text-ink/80 mb-6 leading-relaxed text-center">
              In a profound moment of meditation, Guruji received a sacred vision from the Divine Mother—
              a calling to create spaces and programs dedicated to her worship and the service of humanity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <ImagePlaceholder width={600} height={800} text="Divine Mother Shrine" className="rounded-lg shadow-2xl" />
            </div>
            <div>
              <h3 className="text-3xl font-serif font-bold text-ink mb-6">
                The Sacred Shrine
              </h3>
              <p className="text-lg text-ink/80 mb-4 leading-relaxed">
                At the heart of Tayi Sadhana Yoga is the consecrated shrine of the Divine Mother.
                This sacred space serves as the spiritual nucleus, radiating divine energy and blessings
                to all who enter with sincere devotion.
              </p>
              <p className="text-lg text-ink/80 mb-4 leading-relaxed">
                The shrine incorporates sacred geometry, chakra symbolism, and traditional temple architecture,
                creating a powerful vortex for spiritual transformation. Here, seekers experience the direct
                presence of the Mother and receive her grace.
              </p>
              <p className="text-lg text-ink/80 leading-relaxed">
                Daily rituals, special ceremonies, and meditative practices conducted at the shrine form
                the foundation of our spiritual community.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-sand to-mist rounded-2xl p-12 mb-16">
            <h3 className="text-3xl font-serif font-bold text-ink text-center mb-12">
              Seven Chakra Shrines
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Muladhara', color: 'red', element: 'Earth' },
                { name: 'Svadhisthana', color: 'orange', element: 'Water' },
                { name: 'Manipura', color: 'yellow', element: 'Fire' },
                { name: 'Anahata', color: 'green', element: 'Air' },
                { name: 'Vishuddha', color: 'blue', element: 'Ether' },
                { name: 'Ajna', color: 'indigo', element: 'Mind' },
                { name: 'Sahasrara', color: 'violet', element: 'Consciousness' }
              ].slice(0, 4).map((chakra, i) => (
                <div key={i} className="bg-white rounded-lg p-6 text-center shadow-lg">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-earth to-clay flex items-center justify-center">
                    <span className="text-white font-bold">{i + 1}</span>
                  </div>
                  <h4 className="font-semibold text-ink mb-2">{chakra.name}</h4>
                  <p className="text-sm text-ink/70">{chakra.element}</p>
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-6 max-w-3xl mx-auto">
              {[
                { name: 'Vishuddha', color: 'blue', element: 'Ether' },
                { name: 'Ajna', color: 'indigo', element: 'Mind' },
                { name: 'Sahasrara', color: 'violet', element: 'Consciousness' }
              ].map((chakra, i) => (
                <div key={i} className="bg-white rounded-lg p-6 text-center shadow-lg">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-leaf to-sun flex items-center justify-center">
                    <span className="text-white font-bold">{i + 5}</span>
                  </div>
                  <h4 className="font-semibold text-ink mb-2">{chakra.name}</h4>
                  <p className="text-sm text-ink/70">{chakra.element}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-serif font-bold text-ink mb-6">
                Ongoing Development
              </h3>
              <p className="text-lg text-ink/80 mb-4 leading-relaxed">
                The Divine Project continues to unfold as we work to complete the construction of seven chakra shrines,
                a meditation hall, residential facilities for seekers, and nature cure centers.
              </p>
              <p className="text-lg text-ink/80 mb-6 leading-relaxed">
                Each phase of development is conducted with sacred intention, following traditional vastu principles
                and ecological sustainability guidelines. We invite you to be part of this divine manifestation.
              </p>
              <Link
                to="/divine-project/donation"
                className="inline-flex items-center text-earth font-semibold text-lg hover:text-clay transition-colors"
              >
                Support the Divine Project
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <ImagePlaceholder width={600} height={400} text="Construction Progress" className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
