import PageHero from '../../components/PageHero';
import ImagePlaceholder from '../../components/ImagePlaceholder';
import { Link } from 'react-router-dom';

export default function TayiCulture() {
  return (
    <div>
      <PageHero
        title="Tayi Culture"
        subtitle="A way of life rooted in reverence for the Divine Mother"
        imagePlaceholder="Tayi Culture Hero"
        height="medium"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-serif font-bold text-ink mb-6">
                Living in the Lap of the Divine Mother
              </h2>
              <p className="text-lg text-ink/80 mb-4 leading-relaxed">
                Tayi Culture is more than a philosophy—it is a complete way of life centered around the Divine Mother.
                "Tayi" means mother in Tamil, and our culture embodies the nurturing, protective, and transformative
                qualities of the universal mother consciousness.
              </p>
              <p className="text-lg text-ink/80 mb-4 leading-relaxed">
                This sacred culture integrates spiritual practice, conscious living, community service, and reverence
                for nature. We see the Divine Mother in all of creation and honor her presence in every aspect of life.
              </p>
              <p className="text-lg text-ink/80 leading-relaxed">
                Through Tayi Culture, we cultivate compassion, discipline, devotion, and selfless service as pathways
                to spiritual awakening and harmonious living.
              </p>
            </div>
            <div>
              <ImagePlaceholder width={600} height={800} text="Divine Mother Worship" className="rounded-lg shadow-2xl" />
            </div>
          </div>

          <div className="bg-gradient-to-r from-sand to-mist rounded-2xl p-12 mb-16">
            <h2 className="text-4xl font-serif font-bold text-ink text-center mb-8">
              Core Principles
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="w-12 h-12 bg-earth rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-earth mb-3">Divine Love</h3>
                <p className="text-ink/70">
                  Cultivating unconditional love for all beings as manifestations of the Divine Mother.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="w-12 h-12 bg-leaf rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-leaf mb-3">Sacred Living</h3>
                <p className="text-ink/70">
                  Transforming daily life into spiritual practice through mindful actions and conscious choices.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="w-12 h-12 bg-clay rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-clay mb-3">Community Harmony</h3>
                <p className="text-ink/70">
                  Building supportive communities where individuals grow together in spiritual consciousness.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="w-12 h-12 bg-sun rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-sun mb-3">Inner Light</h3>
                <p className="text-ink/70">
                  Awakening the divine light within through meditation, contemplation, and self-inquiry.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="w-12 h-12 bg-earth rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-earth mb-3">Selfless Service</h3>
                <p className="text-ink/70">
                  Dedicating actions to the service of humanity without expectation of reward or recognition.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="w-12 h-12 bg-leaf rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-leaf mb-3">Nature Connection</h3>
                <p className="text-ink/70">
                  Honoring and preserving the natural world as the living body of the Divine Mother.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <ImagePlaceholder width={600} height={400} text="Community Living" className="rounded-lg shadow-2xl" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-serif font-bold text-ink mb-6">
                Daily Practice
              </h2>
              <p className="text-lg text-ink/80 mb-4 leading-relaxed">
                Tayi Culture is lived through daily practices that sanctify ordinary activities and deepen our
                connection with the Divine Mother.
              </p>
              <ul className="space-y-3 text-lg text-ink/80">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-earth mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Morning prayers and devotional practices
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-earth mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Conscious eating as a sacred ritual
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-earth mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Work as worship and offering
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-earth mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Evening meditation and reflection
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-earth mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Gratitude practices before rest
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-ink mb-6">
                Community and Celebration
              </h2>
              <p className="text-lg text-ink/80 mb-4 leading-relaxed">
                Tayi Culture celebrates the divine feminine through sacred festivals, community gatherings, and
                spiritual ceremonies that honor the cycles of nature and the journey of the soul.
              </p>
              <p className="text-lg text-ink/80 mb-6 leading-relaxed">
                These celebrations bring our community together in joy, devotion, and shared spiritual aspiration,
                strengthening the bonds of our spiritual family and deepening our collective consciousness.
              </p>
              <Link
                to="/media/news-events"
                className="inline-flex items-center text-earth font-semibold text-lg hover:text-clay transition-colors"
              >
                View Upcoming Events
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div>
              <ImagePlaceholder width={600} height={400} text="Festival Celebration" className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-earth to-clay text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Embrace Tayi Culture
          </h2>
          <p className="text-xl text-mist/90 mb-8">
            Join our community and experience the transformative power of living in the Divine Mother's grace
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/education/overview"
              className="px-8 py-3 bg-sun text-ink rounded-full font-semibold hover:bg-white transition-colors"
            >
              Explore Our Programs
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-earth transition-colors"
            >
              Connect With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
