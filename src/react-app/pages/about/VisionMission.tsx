import PageHero from '../../components/PageHero';
import ImagePlaceholder from '../../components/ImagePlaceholder';
import { Link } from 'react-router-dom';

export default function VisionMission() {
  return (
    <div>
      <PageHero
        title="Vision & Mission"
        subtitle="Our commitment to spreading the light of yoga wisdom"
        imagePlaceholder="Vision Mission Hero"
        height="medium"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Vision */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-6 py-2 bg-earth/10 rounded-full mb-6">
                  <span className="text-earth font-semibold">Our Vision</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-ink mb-6">
                  A World United in Divine Consciousness
                </h2>
                <p className="text-xl text-ink/80 mb-6 leading-relaxed">
                  We envision a world where humanity lives in harmony with nature, recognizes the divine in all beings,
                  and experiences the peace that comes from inner awakening.
                </p>
                <p className="text-lg text-ink/70 mb-6 leading-relaxed">
                  Through the practice of Tayi Sadhana Yoga, we see a future where physical health, mental clarity,
                  emotional balance, and spiritual realization are accessible to all seekers, regardless of background or circumstance.
                </p>
                <p className="text-lg text-ink/70 leading-relaxed">
                  Our vision extends beyond individual transformation to collective awakening—creating communities
                  of conscious individuals who live in service, compassion, and reverence for the Divine Mother.
                </p>
              </div>
              <div>
                <ImagePlaceholder width={600} height={800} text="Vision Image" className="rounded-lg shadow-2xl" />
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <ImagePlaceholder width={600} height={800} text="Mission Image" className="rounded-lg shadow-2xl" />
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-block px-6 py-2 bg-leaf/10 rounded-full mb-6">
                  <span className="text-leaf font-semibold">Our Mission</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-ink mb-6">
                  Preserving Wisdom, Transforming Lives
                </h2>
                <p className="text-xl text-ink/80 mb-6 leading-relaxed">
                  Our mission is to preserve and share the authentic teachings of yoga while making them accessible
                  and relevant for contemporary seekers.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-leaf mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-lg text-ink/70">
                      Provide comprehensive training programs for aspiring yoga teachers and practitioners
                    </p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-leaf mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-lg text-ink/70">
                      Create sacred spaces and healing centers where transformation can occur
                    </p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-leaf mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-lg text-ink/70">
                      Support education and welfare initiatives for underprivileged communities
                    </p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-leaf mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-lg text-ink/70">
                      Build a global network of certified teachers spreading authentic yoga wisdom
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="bg-gradient-to-br from-sand to-mist rounded-2xl p-12">
            <h2 className="text-4xl font-serif font-bold text-ink text-center mb-12">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-earth rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-ink mb-3">Authenticity</h3>
                <p className="text-ink/70">
                  Maintaining the purity and integrity of traditional teachings while adapting to modern contexts
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-leaf rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-ink mb-3">Compassion</h3>
                <p className="text-ink/70">
                  Approaching all beings with kindness, understanding, and unconditional love
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-clay rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-ink mb-3">Community</h3>
                <p className="text-ink/70">
                  Fostering a supportive sangha where members grow together on the spiritual path
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-sun rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-ink mb-3">Excellence</h3>
                <p className="text-ink/70">
                  Striving for the highest standards in teaching, practice, and service
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-earth rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-ink mb-3">Sustainability</h3>
                <p className="text-ink/70">
                  Living in harmony with nature and promoting ecological consciousness
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-leaf rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-ink mb-3">Transformation</h3>
                <p className="text-ink/70">
                  Empowering individuals to realize their highest potential and live with purpose
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-20 bg-gradient-to-b from-sand to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-ink text-center mb-12">
            Our Goals for the Future
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-earth">
              <div className="text-3xl font-bold text-earth mb-2">2025</div>
              <h4 className="font-semibold text-ink mb-2">Expansion</h4>
              <p className="text-sm text-ink/70">
                Establish 5 new teaching centers across India and certify 500+ teachers
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-leaf">
              <div className="text-3xl font-bold text-leaf mb-2">2026</div>
              <h4 className="font-semibold text-ink mb-2">Digital Platform</h4>
              <p className="text-sm text-ink/70">
                Launch online learning platform to reach global seekers
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-clay">
              <div className="text-3xl font-bold text-clay mb-2">2027</div>
              <h4 className="font-semibold text-ink mb-2">Healing Center</h4>
              <p className="text-sm text-ink/70">
                Complete construction of residential nature cure and yoga healing center
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-sun">
              <div className="text-3xl font-bold text-sun mb-2">2028</div>
              <h4 className="font-semibold text-ink mb-2">Global Network</h4>
              <p className="text-sm text-ink/70">
                Build international community with centers on every continent
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-earth to-clay text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-serif font-bold mb-4">
            Be Part of Our Vision
          </h3>
          <p className="text-lg text-mist/90 mb-8">
            Join us in creating a world transformed by yoga wisdom and divine grace
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/education/overview"
              className="px-8 py-3 bg-sun text-ink rounded-full font-semibold hover:bg-white transition-colors"
            >
              Explore Training Programs
            </Link>
            <Link
              to="/divine-project/donation"
              className="px-8 py-3 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-earth transition-colors"
            >
              Support Our Mission
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
