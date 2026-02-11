import PageHero from '../../components/PageHero';
import ImagePlaceholder from '../../components/ImagePlaceholder';
import { Link } from 'react-router-dom';

export default function AboutTayiSadhanaYoga() {
  return (
    <div>
      <PageHero
        title="About Tayi Sadhana Yoga"
        subtitle="A sacred path to wholeness, rooted in the wisdom of the Divine Mother"
        imagePlaceholder="About Hero Image"
        height="medium"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-serif font-bold text-ink mb-6">
                Our Journey
              </h2>
              <p className="text-lg text-ink/80 mb-4 leading-relaxed">
                Tayi Sadhana Yoga is not merely a practice—it is a way of life, a sacred journey that reconnects us with
                the eternal wisdom of the Divine Mother. Born from profound spiritual insights and guided by timeless yogic principles,
                our path offers a comprehensive system for transformation.
              </p>
              <p className="text-lg text-ink/80 mb-4 leading-relaxed">
                We believe that true healing comes from aligning ourselves with nature, honoring our bodies as temples,
                and awakening the dormant spiritual energy within. Through the integration of asana, pranayama, meditation,
                and nature cure, we guide seekers toward complete wellness.
              </p>
              <p className="text-lg text-ink/80 leading-relaxed">
                Our community is a family of dedicated practitioners who support each other on this profound journey of
                self-discovery and spiritual awakening.
              </p>
            </div>
            <div>
              <ImagePlaceholder width={600} height={800} text="Yoga Practice Image" className="rounded-lg shadow-2xl" />
            </div>
          </div>

          <div className="bg-gradient-to-r from-sand to-mist rounded-2xl p-12 mb-16">
            <h2 className="text-4xl font-serif font-bold text-ink text-center mb-8">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-earth rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-earth mb-3">Compassion</h3>
                <p className="text-ink/70">
                  Cultivating love and kindness toward all beings, recognizing the divine spark in every soul.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-leaf rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-leaf mb-3">Authenticity</h3>
                <p className="text-ink/70">
                  Honoring the ancient teachings while adapting them for modern seekers with integrity.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-clay rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-clay mb-3">Community</h3>
                <p className="text-ink/70">
                  Creating a supportive family where each member grows together on the spiritual path.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <ImagePlaceholder width={600} height={400} text="Community Image" className="rounded-lg shadow-2xl" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-serif font-bold text-ink mb-6">
                A Living Tradition
              </h2>
              <p className="text-lg text-ink/80 mb-4 leading-relaxed">
                Our lineage carries the profound wisdom passed down through generations of realized masters.
                Under the guidance of our founder and spiritual guide, we have developed a unique synthesis
                of traditional yoga, nature cure, and spiritual practices.
              </p>
              <p className="text-lg text-ink/80 mb-6 leading-relaxed">
                This living tradition continues to evolve, responding to the needs of contemporary seekers
                while staying true to the timeless principles of yoga and spiritual awakening.
              </p>
              <Link
                to="/about/guruji-message"
                className="inline-flex items-center text-earth font-semibold text-lg hover:text-clay transition-colors"
              >
                Read Guruji's Message
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-sand to-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-ink mb-4">
              What Makes Us Unique
            </h2>
            <p className="text-xl text-ink/70 max-w-3xl mx-auto">
              Our approach integrates multiple dimensions of well-being
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-earth mb-3">Holistic Approach</h3>
              <p className="text-ink/70">
                Addressing physical, mental, emotional, and spiritual dimensions simultaneously.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-earth mb-3">Nature Integration</h3>
              <p className="text-ink/70">
                Harnessing the healing power of nature through diet, herbs, and natural therapies.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-earth mb-3">Personalized Guidance</h3>
              <p className="text-ink/70">
                Tailored practices and mentorship suited to each individual's needs and capacity.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-earth mb-3">Sacred Space</h3>
              <p className="text-ink/70">
                A consecrated environment that supports deep practice and spiritual transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-earth text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Begin Your Journey
          </h2>
          <p className="text-xl text-mist/90 mb-8">
            Join our community and experience the transformative power of Tayi Sadhana Yoga
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/education/overview"
              className="px-8 py-3 bg-sun text-ink rounded-full font-semibold hover:bg-white transition-colors"
            >
              Explore Our Courses
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-earth transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
