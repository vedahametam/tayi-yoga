import PageHero from '../../components/PageHero';
import ImagePlaceholder from '../../components/ImagePlaceholder';
import { Link } from 'react-router-dom';

export default function CoursesOverview() {
  return (
    <div>
      <PageHero
        title="Our Education Programs"
        subtitle="Transform your life and empower others through comprehensive yoga and wellness training"
        imagePlaceholder="Education Hero"
        height="medium"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-ink mb-6">
              Comprehensive Teacher Training Programs
            </h2>
            <p className="text-xl text-ink/70 max-w-3xl mx-auto leading-relaxed">
              Our internationally recognized certification programs combine traditional wisdom with modern pedagogy,
              preparing you to share the transformative power of yoga and natural healing with confidence and authenticity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <Link to="/education/yoga-ttc" className="group bg-gradient-to-br from-earth to-clay text-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:scale-105">
              <ImagePlaceholder width={600} height={400} text="Yoga TTC" className="rounded-t-2xl" />
              <div className="p-8">
                <h3 className="text-3xl font-serif font-bold mb-4">Yoga Teacher Training</h3>
                <p className="text-mist/90 mb-6 leading-relaxed">
                  Internationally certified 200/300/500-hour programs in Tayi Sadhana Yoga. Master asanas, pranayama,
                  meditation, philosophy, anatomy, and teaching methodology.
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-sun font-semibold">• 200-Hour Foundation TTC</p>
                  <p className="text-sun font-semibold">• 300-Hour Advanced TTC</p>
                  <p className="text-sun font-semibold">• 500-Hour Comprehensive TTC</p>
                </div>
                <span className="inline-flex items-center text-sun font-semibold group-hover:translate-x-2 transition-transform">
                  Learn More
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>

            <Link to="/education/nature-cure-ttc" className="group bg-gradient-to-br from-leaf to-earth text-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:scale-105">
              <ImagePlaceholder width={600} height={400} text="Nature Cure TTC" className="rounded-t-2xl" />
              <div className="p-8">
                <h3 className="text-3xl font-serif font-bold mb-4">Nature Cure Training</h3>
                <p className="text-mist/90 mb-6 leading-relaxed">
                  Comprehensive training in natural healing modalities including dietary therapy, hydrotherapy,
                  fasting, herbal medicine, and traditional wellness practices.
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-sun font-semibold">• Naturopathy Fundamentals</p>
                  <p className="text-sun font-semibold">• Therapeutic Techniques</p>
                  <p className="text-sun font-semibold">• Clinical Practice</p>
                </div>
                <span className="inline-flex items-center text-sun font-semibold group-hover:translate-x-2 transition-transform">
                  Learn More
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>

            <Link to="/education/master-ttc" className="group bg-gradient-to-br from-ink to-clay text-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:scale-105">
              <ImagePlaceholder width={600} height={400} text="Master TTC" className="rounded-t-2xl" />
              <div className="p-8">
                <h3 className="text-3xl font-serif font-bold mb-4">Master Teacher Training</h3>
                <p className="text-mist/90 mb-6 leading-relaxed">
                  Advanced program for experienced practitioners seeking mastery in yoga, meditation, energy work,
                  and spiritual guidance. Develop the skills to train future teachers.
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-sun font-semibold">• Advanced Practices</p>
                  <p className="text-sun font-semibold">• Teacher Training Skills</p>
                  <p className="text-sun font-semibold">• Spiritual Mentorship</p>
                </div>
                <span className="inline-flex items-center text-sun font-semibold group-hover:translate-x-2 transition-transform">
                  Learn More
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>

            <Link to="/education/philosophy-ttc" className="group bg-gradient-to-br from-clay to-sun text-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:scale-105">
              <ImagePlaceholder width={600} height={400} text="Philosophy TTC" className="rounded-t-2xl" />
              <div className="p-8">
                <h3 className="text-3xl font-serif font-bold mb-4">Yoga Philosophy Training</h3>
                <p className="text-mist/90 mb-6 leading-relaxed">
                  Deep exploration of yogic scriptures, philosophy, and spiritual wisdom. Study the Yoga Sutras,
                  Bhagavad Gita, Upanishads, and other sacred texts.
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-white font-semibold">• Classical Yoga Texts</p>
                  <p className="text-white font-semibold">• Sanskrit Fundamentals</p>
                  <p className="text-white font-semibold">• Applied Philosophy</p>
                </div>
                <span className="inline-flex items-center text-white font-semibold group-hover:translate-x-2 transition-transform">
                  Learn More
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-sand to-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-ink mb-4">
              Why Choose Our Programs
            </h2>
            <p className="text-xl text-ink/70 max-w-3xl mx-auto">
              Experience the difference of authentic, transformative education
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-earth rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-earth text-center mb-3">Authentic Lineage</h3>
              <p className="text-ink/70 text-center">
                Learn from masters who embody the teachings, preserving ancient wisdom while making it relevant for modern life.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-leaf rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-leaf text-center mb-3">Comprehensive Curriculum</h3>
              <p className="text-ink/70 text-center">
                Holistic training covering all aspects of yoga and wellness, from physical practice to spiritual philosophy.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-clay rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-clay text-center mb-3">Small Group Size</h3>
              <p className="text-ink/70 text-center">
                Intimate classes ensure personalized attention, allowing for deep learning and individual guidance.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-sun rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-sun text-center mb-3">Sacred Environment</h3>
              <p className="text-ink/70 text-center">
                Train in a consecrated space designed to support deep practice, learning, and spiritual transformation.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-earth rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-earth text-center mb-3">International Recognition</h3>
              <p className="text-ink/70 text-center">
                Certifications recognized worldwide, enabling you to teach professionally anywhere in the world.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-leaf rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-leaf text-center mb-3">Lifelong Support</h3>
              <p className="text-ink/70 text-center">
                Join a global community of graduates with ongoing mentorship, resources, and continuing education.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ImagePlaceholder width={600} height={500} text="Student Experience" className="rounded-lg shadow-2xl" />
            </div>
            <div>
              <h2 className="text-4xl font-serif font-bold text-ink mb-6">
                What to Expect
              </h2>
              <p className="text-lg text-ink/80 mb-6 leading-relaxed">
                Our programs are immersive experiences that transform not just your knowledge, but your entire being.
                Each day combines rigorous training with deep spiritual practice and community connection.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-earth mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong className="text-ink">Daily Practice:</strong>
                    <p className="text-ink/70">Morning asana, pranayama, and meditation sessions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-earth mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong className="text-ink">Theory Classes:</strong>
                    <p className="text-ink/70">Philosophy, anatomy, teaching methodology, and spiritual wisdom</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-earth mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong className="text-ink">Teaching Practice:</strong>
                    <p className="text-ink/70">Hands-on experience leading classes with expert feedback</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-earth mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong className="text-ink">Community Living:</strong>
                    <p className="text-ink/70">Shared meals, seva (service), and spiritual ceremonies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-earth to-clay text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-mist/90 mb-8">
            Take the first step toward becoming a certified yoga or wellness teacher
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-sun text-ink rounded-full font-semibold hover:bg-white transition-colors"
            >
              Apply Now
            </Link>
            <Link
              to="/certification/teacher-certification"
              className="px-8 py-3 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-earth transition-colors"
            >
              Certification Info
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
