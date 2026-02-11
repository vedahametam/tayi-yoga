import PageHero from '../components/PageHero';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { Link } from 'react-router-dom';

export default function Disciples() {
  const teachers = [
    { name: 'Teacher Name 1', role: 'Senior Teacher', specialty: 'Hatha Yoga & Meditation' },
    { name: 'Teacher Name 2', role: 'Nature Cure Specialist', specialty: 'Naturopathy & Wellness' },
    { name: 'Teacher Name 3', role: 'Philosophy Teacher', specialty: 'Vedanta & Sanskrit' },
    { name: 'Teacher Name 4', role: 'Advanced Asana', specialty: 'Vinyasa & Alignment' },
    { name: 'Teacher Name 5', role: 'Pranayama Master', specialty: 'Breathwork & Energy' },
    { name: 'Teacher Name 6', role: 'Meditation Guide', specialty: 'Mindfulness & Contemplation' },
    { name: 'Teacher Name 7', role: 'Ayurveda Expert', specialty: 'Herbal Medicine & Diet' },
    { name: 'Teacher Name 8', role: 'Yoga Therapy', specialty: 'Therapeutic Applications' },
    { name: 'Teacher Name 9', role: 'Kirtan Leader', specialty: 'Devotional Chanting' },
    { name: 'Teacher Name 10', role: 'Anatomy Teacher', specialty: 'Body Mechanics & Safety' },
    { name: 'Teacher Name 11', role: 'Community Coordinator', specialty: 'Service & Events' },
    { name: 'Teacher Name 12', role: 'Retreat Facilitator', specialty: 'Workshops & Retreats' }
  ];

  return (
    <div>
      <PageHero
        title="Our Teachers & Disciples"
        subtitle="Meet the dedicated practitioners who guide and inspire our community"
        imagePlaceholder="Teachers Hero"
        height="medium"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-ink mb-6">
              The Teaching Lineage
            </h2>
            <p className="text-xl text-ink/70 max-w-3xl mx-auto leading-relaxed">
              Our teachers are dedicated disciples who have undergone rigorous training and have committed their
              lives to the practice and transmission of Tayi Sadhana Yoga. Each brings unique gifts and experiences
              to enrich our community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <ImagePlaceholder width={600} height={700} text="Guruji Teaching" className="rounded-lg shadow-2xl" />
            </div>
            <div>
              <h2 className="text-4xl font-serif font-bold text-ink mb-6">
                Under Guruji's Guidance
              </h2>
              <p className="text-lg text-ink/80 mb-4 leading-relaxed">
                All of our teachers have been personally trained and initiated by Guruji, receiving the sacred
                transmission of Tayi Sadhana Yoga through direct discipleship. This lineage connection ensures
                the authenticity and integrity of the teachings.
              </p>
              <p className="text-lg text-ink/80 mb-6 leading-relaxed">
                Our disciples don't just teach techniques—they embody the principles of yoga in their daily lives,
                serving as living examples of the transformative power of dedicated practice and devotion to the
                Divine Mother.
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

          <div className="mb-16">
            <h2 className="text-3xl font-serif font-bold text-ink text-center mb-12">
              Meet Our Teachers
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {teachers.map((teacher, index) => (
                <div key={index} className="bg-gradient-to-br from-sand to-mist rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                  <ImagePlaceholder width={400} height={400} text={`Photo: ${teacher.name}`} className="rounded-t-xl" />
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-bold text-ink mb-2">{teacher.name}</h3>
                    <p className="text-sm font-semibold text-earth mb-2">{teacher.role}</p>
                    <p className="text-sm text-ink/70 mb-4">{teacher.specialty}</p>
                    <button className="text-earth font-semibold text-sm hover:text-clay transition-colors">
                      View Profile →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-earth to-clay text-white rounded-2xl p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-serif font-bold mb-4">
                Qualities of Our Teachers
              </h2>
              <p className="text-xl text-mist/90">
                What makes our teaching team exceptional
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="w-12 h-12 bg-sun rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Authentic Training</h3>
                <p className="text-sm text-mist/80">
                  Comprehensive education in traditional yoga, philosophy, and spiritual practices
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="w-12 h-12 bg-sun rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Compassionate Presence</h3>
                <p className="text-sm text-mist/80">
                  Deep empathy and genuine care for each student's unique journey and needs
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="w-12 h-12 bg-sun rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Living Practice</h3>
                <p className="text-sm text-mist/80">
                  Daily sadhana and embodiment of yogic principles in all aspects of life
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="w-12 h-12 bg-sun rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Continuous Learning</h3>
                <p className="text-sm text-mist/80">
                  Ongoing study, practice, and refinement under Guruji's mentorship
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="w-12 h-12 bg-sun rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Selfless Service</h3>
                <p className="text-sm text-mist/80">
                  Dedication to serving students and community without ego or expectation
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="w-12 h-12 bg-sun rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Spiritual Transmission</h3>
                <p className="text-sm text-mist/80">
                  Ability to transmit not just knowledge but spiritual energy and grace
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-sand to-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-ink mb-4">
              Become a Disciple
            </h2>
            <p className="text-xl text-ink/70 max-w-3xl mx-auto">
              The path of discipleship is open to those who are called to deep practice and service
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-earth rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-earth mb-3">Complete Training</h3>
              <p className="text-ink/70">
                Begin with foundational teacher training and advance through our comprehensive programs
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-earth rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-earth mb-3">Deepen Practice</h3>
              <p className="text-ink/70">
                Establish daily sadhana and immerse yourself in study, service, and spiritual discipline
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-earth rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-earth mb-3">Receive Initiation</h3>
              <p className="text-ink/70">
                When ready, receive formal initiation and blessing from Guruji to become a lineage holder
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-ink mb-4">
              The Disciple's Path
            </h3>
            <p className="text-ink/70 mb-6">
              Discipleship is a sacred relationship built on trust, dedication, and surrender to the teachings.
              It requires commitment to personal practice, ethical living, and selfless service to the community.
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-earth mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-ink/70">Regular attendance at teachings and community gatherings</p>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-earth mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-ink/70">Daily personal practice (asana, pranayama, meditation)</p>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-earth mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-ink/70">Service to the ashram and community (seva)</p>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-earth mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-ink/70">Study of sacred texts and continuous learning</p>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-earth mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-ink/70">Adherence to yogic ethics and disciplined lifestyle</p>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-earth mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-ink/70">Openness to guidance and transformation under mentorship</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-earth text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Learn from Our Teachers
          </h2>
          <p className="text-xl text-mist/90 mb-8">
            Join our community and receive guidance from experienced, compassionate teachers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/education/overview"
              className="px-8 py-3 bg-sun text-ink rounded-full font-semibold hover:bg-white transition-colors"
            >
              View Programs
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
