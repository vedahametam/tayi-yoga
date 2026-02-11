import { useState } from 'react';
import PageHero from '../../components/PageHero';
import ImagePlaceholder from '../../components/ImagePlaceholder';
import { Link } from 'react-router-dom';

export default function YogaTTC() {
  const [selectedProgram, setSelectedProgram] = useState<'200' | '300' | '500'>('200');

  return (
    <div>
      <PageHero
        title="Yoga Teacher Training Certification"
        subtitle="Internationally recognized programs in Tayi Sadhana Yoga"
        imagePlaceholder="Yoga TTC Hero"
        height="medium"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-ink mb-6">
              Choose Your Path
            </h2>
            <p className="text-xl text-ink/70 max-w-3xl mx-auto">
              Select the program that matches your current level and aspirations
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => setSelectedProgram('200')}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                selectedProgram === '200'
                  ? 'bg-earth text-white shadow-lg scale-105'
                  : 'bg-sand text-earth hover:bg-earth/10'
              }`}
            >
              200-Hour Foundation
            </button>
            <button
              onClick={() => setSelectedProgram('300')}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                selectedProgram === '300'
                  ? 'bg-earth text-white shadow-lg scale-105'
                  : 'bg-sand text-earth hover:bg-earth/10'
              }`}
            >
              300-Hour Advanced
            </button>
            <button
              onClick={() => setSelectedProgram('500')}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                selectedProgram === '500'
                  ? 'bg-earth text-white shadow-lg scale-105'
                  : 'bg-sand text-earth hover:bg-earth/10'
              }`}
            >
              500-Hour Comprehensive
            </button>
          </div>

          {selectedProgram === '200' && (
            <div className="bg-gradient-to-br from-sand to-mist rounded-2xl p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <h3 className="text-3xl font-serif font-bold text-ink mb-6">200-Hour Foundation TTC</h3>
                  <p className="text-lg text-ink/80 mb-4 leading-relaxed">
                    Perfect for beginners and those seeking to deepen their personal practice. This comprehensive
                    program builds a strong foundation in all aspects of yoga.
                  </p>
                  <div className="bg-white rounded-lg p-6 mb-6">
                    <h4 className="font-semibold text-earth mb-3">Program Details:</h4>
                    <ul className="space-y-2 text-ink/80">
                      <li>• <strong>Duration:</strong> 4 weeks intensive or 3 months weekend program</li>
                      <li>• <strong>Prerequisites:</strong> Basic yoga experience recommended</li>
                      <li>• <strong>Certification:</strong> Yoga Alliance registered 200-Hour RYT</li>
                      <li>• <strong>Investment:</strong> Contact for current pricing</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <ImagePlaceholder width={600} height={600} text="200-Hour TTC" className="rounded-lg shadow-2xl" />
                </div>
              </div>

              <div className="bg-white rounded-xl p-8">
                <h4 className="text-2xl font-serif font-bold text-ink mb-6">Curriculum Highlights</h4>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h5 className="font-semibold text-earth mb-3">Asana Practice</h5>
                    <ul className="space-y-2 text-ink/70">
                      <li>• Traditional Hatha Yoga postures</li>
                      <li>• Alignment principles and adjustments</li>
                      <li>• Vinyasa flow sequences</li>
                      <li>• Restorative and therapeutic yoga</li>
                      <li>• Safe practice guidelines</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-earth mb-3">Pranayama & Meditation</h5>
                    <ul className="space-y-2 text-ink/70">
                      <li>• Fundamental breathing techniques</li>
                      <li>• Nadi Shodhana and Kapalabhati</li>
                      <li>• Concentration practices</li>
                      <li>• Guided and silent meditation</li>
                      <li>• Mantra meditation</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-earth mb-3">Philosophy & Wisdom</h5>
                    <ul className="space-y-2 text-ink/70">
                      <li>• Introduction to Yoga Sutras</li>
                      <li>• Eight limbs of yoga</li>
                      <li>• Bhagavad Gita essentials</li>
                      <li>• Yogic lifestyle and ethics</li>
                      <li>• Karma, dharma, and spiritual growth</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-earth mb-3">Teaching Methodology</h5>
                    <ul className="space-y-2 text-ink/70">
                      <li>• Class sequencing and planning</li>
                      <li>• Verbal cuing and demonstration</li>
                      <li>• Hands-on adjustments</li>
                      <li>• Teaching different levels</li>
                      <li>• Creating safe, inclusive spaces</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-earth mb-3">Anatomy & Physiology</h5>
                    <ul className="space-y-2 text-ink/70">
                      <li>• Skeletal and muscular systems</li>
                      <li>• Body mechanics in asana</li>
                      <li>• Common injuries and prevention</li>
                      <li>• Subtle body anatomy</li>
                      <li>• Chakras and energy channels</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-earth mb-3">Practical Experience</h5>
                    <ul className="space-y-2 text-ink/70">
                      <li>• Teaching practice sessions</li>
                      <li>• Peer teaching and feedback</li>
                      <li>• Observation and assisting</li>
                      <li>• Final teaching assessment</li>
                      <li>• Community class teaching</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedProgram === '300' && (
            <div className="bg-gradient-to-br from-sand to-mist rounded-2xl p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <h3 className="text-3xl font-serif font-bold text-ink mb-6">300-Hour Advanced TTC</h3>
                  <p className="text-lg text-ink/80 mb-4 leading-relaxed">
                    Deepen your practice and teaching skills with advanced techniques, intensive training, and
                    specialized modules for experienced practitioners.
                  </p>
                  <div className="bg-white rounded-lg p-6 mb-6">
                    <h4 className="font-semibold text-earth mb-3">Program Details:</h4>
                    <ul className="space-y-2 text-ink/80">
                      <li>• <strong>Duration:</strong> 5 weeks intensive or 4 months weekend program</li>
                      <li>• <strong>Prerequisites:</strong> Completed 200-Hour TTC</li>
                      <li>• <strong>Certification:</strong> Yoga Alliance registered 500-Hour RYT (200+300)</li>
                      <li>• <strong>Investment:</strong> Contact for current pricing</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <ImagePlaceholder width={600} height={600} text="300-Hour TTC" className="rounded-lg shadow-2xl" />
                </div>
              </div>

              <div className="bg-white rounded-xl p-8">
                <h4 className="text-2xl font-serif font-bold text-ink mb-6">Advanced Curriculum</h4>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h5 className="font-semibold text-leaf mb-3">Advanced Asana</h5>
                    <ul className="space-y-2 text-ink/70">
                      <li>• Inversions and arm balances</li>
                      <li>• Advanced backbends and twists</li>
                      <li>• Peak pose sequencing</li>
                      <li>• Modifications and variations</li>
                      <li>• Therapeutic applications</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-leaf mb-3">Advanced Pranayama</h5>
                    <ul className="space-y-2 text-ink/70">
                      <li>• Bhastrika and advanced techniques</li>
                      <li>• Kumbhaka (breath retention)</li>
                      <li>• Bandhas and mudras</li>
                      <li>• Energy work and purification</li>
                      <li>• Kundalini practices</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-leaf mb-3">Deep Philosophy</h5>
                    <ul className="space-y-2 text-ink/70">
                      <li>• Complete Yoga Sutras study</li>
                      <li>• Bhagavad Gita in depth</li>
                      <li>• Upanishads and Tantra</li>
                      <li>• Sanskrit chanting and mantras</li>
                      <li>• Applied spiritual wisdom</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-leaf mb-3">Teaching Mastery</h5>
                    <ul className="space-y-2 text-ink/70">
                      <li>• Advanced sequencing techniques</li>
                      <li>• Themed and workshop classes</li>
                      <li>• Individualized instruction</li>
                      <li>• Business of yoga teaching</li>
                      <li>• Marketing and community building</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-leaf mb-3">Specialized Topics</h5>
                    <ul className="space-y-2 text-ink/70">
                      <li>• Yoga therapy principles</li>
                      <li>• Prenatal and postnatal yoga</li>
                      <li>• Senior and chair yoga</li>
                      <li>• Yin and restorative yoga</li>
                      <li>• Ayurveda and yoga</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-leaf mb-3">Energy & Meditation</h5>
                    <ul className="space-y-2 text-ink/70">
                      <li>• Chakra meditation and balancing</li>
                      <li>• Advanced concentration practices</li>
                      <li>• Visualization techniques</li>
                      <li>• Silent meditation retreats</li>
                      <li>• Spiritual awakening practices</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedProgram === '500' && (
            <div className="bg-gradient-to-br from-sand to-mist rounded-2xl p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <h3 className="text-3xl font-serif font-bold text-ink mb-6">500-Hour Comprehensive TTC</h3>
                  <p className="text-lg text-ink/80 mb-4 leading-relaxed">
                    The complete journey combining both 200-hour and 300-hour programs. Ideal for those committed
                    to comprehensive training and professional teaching certification.
                  </p>
                  <div className="bg-white rounded-lg p-6 mb-6">
                    <h4 className="font-semibold text-earth mb-3">Program Details:</h4>
                    <ul className="space-y-2 text-ink/80">
                      <li>• <strong>Duration:</strong> 9 weeks intensive or 7 months comprehensive</li>
                      <li>• <strong>Prerequisites:</strong> Dedicated yoga practice</li>
                      <li>• <strong>Certification:</strong> Yoga Alliance registered 500-Hour E-RYT eligible</li>
                      <li>• <strong>Investment:</strong> Special bundle pricing available</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <ImagePlaceholder width={600} height={600} text="500-Hour TTC" className="rounded-lg shadow-2xl" />
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 mb-8">
                <h4 className="text-2xl font-serif font-bold text-ink mb-6">Complete Training Package</h4>
                <p className="text-lg text-ink/70 mb-6">
                  The 500-Hour program includes everything from both the 200-Hour and 300-Hour programs, plus
                  additional modules and benefits:
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-sand rounded-lg p-6">
                    <h5 className="font-semibold text-earth mb-3">Foundation (200 Hours)</h5>
                    <p className="text-sm text-ink/70">
                      Complete foundational training in asana, pranayama, meditation, philosophy, and teaching basics
                    </p>
                  </div>
                  <div className="bg-sand rounded-lg p-6">
                    <h5 className="font-semibold text-earth mb-3">Advanced (300 Hours)</h5>
                    <p className="text-sm text-ink/70">
                      Advanced practices, specialized topics, deeper philosophy, and mastery-level teaching skills
                    </p>
                  </div>
                  <div className="bg-sand rounded-lg p-6">
                    <h5 className="font-semibold text-earth mb-3">Bonus Modules</h5>
                    <p className="text-sm text-ink/70">
                      Additional mentorship, advanced workshops, business development, and ongoing support
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-earth text-white rounded-xl p-8">
                <h4 className="text-2xl font-serif font-bold mb-4">Why Choose the 500-Hour Program?</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-sun mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Seamless progression from beginner to advanced</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-sun mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Special bundle pricing saves investment</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-sun mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Highest level Yoga Alliance certification</span>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-sun mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Priority access to advanced programs</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-sun mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Lifetime community membership</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-sun mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Enhanced career opportunities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-sand to-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-ink mb-4">
              Daily Schedule
            </h2>
            <p className="text-xl text-ink/70">
              A typical day in our intensive program
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-4">
              {[
                { time: '5:30 AM', activity: 'Morning Prayer & Meditation', icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' },
                { time: '6:30 AM', activity: 'Pranayama Practice', icon: 'M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5' },
                { time: '7:30 AM', activity: 'Asana Practice', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
                { time: '9:00 AM', activity: 'Breakfast & Rest', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
                { time: '10:30 AM', activity: 'Philosophy or Anatomy Class', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
                { time: '12:30 PM', activity: 'Lunch & Free Time', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
                { time: '3:00 PM', activity: 'Teaching Methodology or Practice Teaching', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
                { time: '5:00 PM', activity: 'Gentle Yoga or Restorative Practice', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
                { time: '6:30 PM', activity: 'Dinner', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
                { time: '7:30 PM', activity: 'Evening Meditation & Chanting', icon: 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3' },
                { time: '9:00 PM', activity: 'Self-Study & Rest', icon: 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z' }
              ].map((item, index) => (
                <div key={index} className="flex items-start border-l-4 border-earth pl-6 py-2">
                  <svg className="w-6 h-6 text-earth mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                  <div>
                    <p className="font-semibold text-earth">{item.time}</p>
                    <p className="text-ink/70">{item.activity}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-earth text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Begin Your Teacher Training Journey
          </h2>
          <p className="text-xl text-mist/90 mb-8">
            Transform your practice and step into your role as a yoga teacher
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
