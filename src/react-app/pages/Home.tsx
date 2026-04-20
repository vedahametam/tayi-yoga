import { Link } from 'react-router-dom';
import ImagePlaceholder from '../components/ImagePlaceholder';

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-mist via-sand to-mist">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #9b6b43 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/general/hv_2.jpeg"
            alt="Tayi Sadhana Yoga Hero"
            className="w-full h-full object-cover"
          />
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-mist/60 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-mist via-transparent to-transparent opacity-80"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          {/* Animated Chakra Element */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-32 h-32">
              <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100" style={{ animationDuration: '20s' }}>
                <circle cx="50" cy="50" r="45" fill="none" stroke="#f4b44f" strokeWidth="0.5" opacity="0.3" />
                <circle cx="50" cy="50" r="35" fill="none" stroke="#2f5d50" strokeWidth="0.5" opacity="0.3" />
                <circle cx="50" cy="50" r="25" fill="none" stroke="#c07b54" strokeWidth="0.5" opacity="0.3" />
                {[0, 1, 2, 3, 4, 5, 6].map((i) => {
                  const angle = (i * 360) / 7;
                  const x = 50 + 40 * Math.cos((angle * Math.PI) / 180);
                  const y = 50 + 40 * Math.sin((angle * Math.PI) / 180);
                  return <circle key={i} cx={x} cy={y} r="3" fill={['#f4b44f', '#2f5d50', '#c07b54'][i % 3]} opacity="0.6" />;
                })}
              </svg>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-ink mb-6 leading-tight">
            In the lap of the <span className="text-earth">Divine Mother</span>
          </h1>
          <p className="text-xl md:text-2xl text-ink/80 mb-8 max-w-4xl mx-auto">
            The soul finds peace and the body finds healing
          </p>
          <p className="text-lg md:text-xl text-ink/70 mb-12 max-w-3xl mx-auto">
            Tayi Sadhana Yoga is a transformative path rooted in ancient wisdom,
            guiding seekers toward harmony, wellness, and spiritual awakening.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/about/tayi-sadhana-yoga"
              className="px-8 py-4 bg-earth text-white rounded-full font-semibold text-lg hover:bg-clay transition-all hover:scale-105 shadow-lg"
            >
              Discover Our Path
            </Link>
            <Link
              to="/education/overview"
              className="px-8 py-4 bg-white text-earth border-2 border-earth rounded-full font-semibold text-lg hover:bg-earth hover:text-white transition-all hover:scale-105 shadow-lg"
            >
              Explore Courses
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-earth" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-ink mb-6">
                Welcome to Tayi Sadhana Yoga
              </h2>
              <p className="text-lg text-ink/80 mb-6 leading-relaxed">
                A sacred journey that harmonizes body, mind, and spirit through the divine grace of the Mother.
                Our system integrates traditional yoga practices with nature cure, creating a holistic path to wellness and enlightenment.
              </p>
              <p className="text-lg text-ink/80 mb-8 leading-relaxed">
                Guided by ancient wisdom and modern understanding, we offer a transformative experience
                that awakens the inner potential and connects you to the universal consciousness.
              </p>
              <Link
                to="/about/tayi-sadhana-yoga"
                className="inline-flex items-center text-earth font-semibold hover:text-clay transition-colors"
              >
                Learn More About Us
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div>
<img
  src="/images/general/welcome.png"
  alt="Welcome - Yoga Practice"
  className="rounded-lg shadow-2xl w-full h-auto object-cover"
/>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-20 bg-gradient-to-b from-sand to-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-ink mb-4">
              The Three Pillars
            </h2>
            <p className="text-xl text-ink/70 max-w-3xl mx-auto">
              Our holistic approach integrates ancient traditions with nature's wisdom
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
              <div className="mb-6">
                <ImagePlaceholder width={400} height={300} src="/images/general/tayi_culture.jpeg" alt="Tayi Culture Pillar" className="rounded-lg object-cover" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-earth mb-4">Tayi Culture</h3>
              <p className="text-ink/70 mb-6 leading-relaxed">
                A way of life rooted in reverence for the Divine Mother, fostering community,
                compassion, and conscious living.
              </p>
              <Link
                to="/system/tayi-culture"
                className="inline-flex items-center text-earth font-semibold hover:text-clay transition-colors"
              >
                Explore Tayi Culture
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
              <div className="mb-6">
                <ImagePlaceholder width={400} height={300} text="Tayi Sadhana Yoga" src="/images/general/tayi_students.jpeg" className="rounded-lg object-cover" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-earth mb-4">Tayi Sadhana Yoga</h3>
              <p className="text-ink/70 mb-6 leading-relaxed">
                A comprehensive yoga system encompassing asanas, pranayama, meditation,
                and spiritual practices for complete transformation.
              </p>
              <Link
                to="/system/tayi-sadhana-yoga"
                className="inline-flex items-center text-earth font-semibold hover:text-clay transition-colors"
              >
                Discover the Practice
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
              <div className="mb-6">
                <ImagePlaceholder width={400} height={300} text="Nature Cure" src="/images/general/nature_cure.jpeg" className="rounded-lg object-cover" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-earth mb-4">Nature Cure</h3>
              <p className="text-ink/70 mb-6 leading-relaxed">
                Harness the healing power of nature through diet, detoxification,
                and natural therapies for optimal health and vitality.
              </p>
              <Link
                to="/system/nature-cure"
                className="inline-flex items-center text-earth font-semibold hover:text-clay transition-colors"
              >
                Learn About Healing
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-ink mb-4">
              Our Programs
            </h2>
            <p className="text-xl text-ink/70 max-w-3xl mx-auto">
              Embark on a transformative journey with our comprehensive training programs
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Program 1 */}
            <Link to="/education/12-years" className="group bg-gradient-to-br from-ink to-earth text-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:scale-105">
              <div className="p-6">
                <div className="mb-4">
                  <svg className="w-12 h-12 text-sun" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-bold mb-3">Tayi Sadhana Yoga - 12 Years</h3>
                <p className="text-mist/90 mb-4">
                  A transformational discipline designed to rebuild the modern human being from the foundation upward.
                </p>
                <span className="inline-flex items-center text-sun font-semibold group-hover:translate-x-2 transition-transform">
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* Program 2 */}
            <Link to="/education/yoga-ttc" className="group bg-gradient-to-br from-earth to-clay text-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:scale-105">
              <div className="p-6">
                <div className="mb-4">
                  <svg className="w-12 h-12 text-sun" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-bold mb-3">Tayi Sadhana Yoga TTC</h3>
                <p className="text-mist/90 mb-4">
                  12 Days • 12 Months • 12 Years: A complete mastery path for modern human transformation.
                </p>
                <span className="inline-flex items-center text-sun font-semibold group-hover:translate-x-2 transition-transform">
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* Program 3 */}
            <Link to="/education/nature-cure-ttc" className="group bg-gradient-to-br from-leaf to-earth text-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:scale-105">
              <div className="p-6">
                <div className="mb-4">
                  <svg className="w-12 h-12 text-sun" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-bold mb-3">Tayi Sadhana Nature Cure TTC</h3>
                <p className="text-mist/90 mb-4">
                  A holistic teacher training program that integrates nature-based healing principles with yogic science.
                </p>
                <span className="inline-flex items-center text-sun font-semibold group-hover:translate-x-2 transition-transform">
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Divine Project CTA */}
      <section className="py-20 bg-gradient-to-r from-earth to-clay text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Support the Divine Project
          </h2>
          <p className="text-xl text-mist/90 mb-8 max-w-3xl mx-auto">
            Join us in creating sacred spaces, supporting education, and spreading the light of yoga wisdom.
            Your contribution helps transform lives and preserve ancient knowledge for future generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/divine-project/donation"
              className="px-8 py-4 bg-sun text-ink rounded-full font-semibold text-lg hover:bg-white transition-all hover:scale-105 shadow-lg"
            >
              Make a Donation
            </Link>
            <Link
              to="/divine-project/birth-of-mother"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-full font-semibold text-lg hover:bg-white hover:text-earth transition-all hover:scale-105"
            >
              Learn About Our Mission
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-ink mb-4">
              Voices of Transformation
            </h2>
            <p className="text-xl text-ink/70">
              Stories from our community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-sand rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  <ImagePlaceholder width={80} height={80} text={`Student ${i}`} className="rounded-full mr-4" />
                  <div>
                    <h4 className="font-semibold text-ink">Student Name {i}</h4>
                    <p className="text-sm text-ink/60">Yoga Teacher</p>
                  </div>
                </div>
                <p className="text-ink/80 italic leading-relaxed">
                  "Tayi Sadhana Yoga has transformed my life in ways I never imagined.
                  The teachings are profound, the community is supportive, and the journey is beautiful."
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-b from-sand to-mist">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-ink mb-4">
            Stay Connected
          </h2>
          <p className="text-lg text-ink/70 mb-8">
            Subscribe to receive updates about upcoming courses, events, and wisdom from our teachers
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-6 py-3 rounded-full border-2 border-earth/30 focus:border-earth focus:outline-none"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-earth text-white rounded-full font-semibold hover:bg-clay transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
