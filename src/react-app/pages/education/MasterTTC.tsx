import PageHero from '../../components/PageHero';
import ImagePlaceholder from '../../components/ImagePlaceholder';
import { Link } from 'react-router-dom';

export default function MasterTTC() {
  return (
    <div>
      <PageHero
        title="Master Teacher Training"
        subtitle="Advanced program for experienced practitioners seeking mastery in yoga and spiritual guidance"
        imagePlaceholder="Master TTC Hero"
        height="medium"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-ink mb-6">
              The Path to Mastery
            </h2>
            <p className="text-xl text-ink/70 max-w-3xl mx-auto leading-relaxed">
              This elite program is designed for dedicated practitioners who have completed foundational training
              and are ready to deepen their practice, refine their teaching, and step into roles as master teachers
              and spiritual mentors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <ImagePlaceholder width={600} height={800} text="Master Practice" className="rounded-lg shadow-2xl" />
            </div>
            <div>
              <h2 className="text-4xl font-serif font-bold text-ink mb-6">
                For Dedicated Practitioners
              </h2>
              <p className="text-lg text-ink/80 mb-4 leading-relaxed">
                The Master TTC is a transformative journey that goes beyond technique to cultivate true mastery.
                You'll explore the deepest dimensions of yoga practice, energy work, and spiritual awakening.
              </p>
              <p className="text-lg text-ink/80 mb-6 leading-relaxed">
                This program prepares you to guide advanced practitioners, train future teachers, and serve as
                a spiritual mentor within our lineage and beyond.
              </p>
              <div className="bg-gradient-to-r from-sand to-mist rounded-lg p-6">
                <h4 className="font-semibold text-earth mb-3">Program Details:</h4>
                <ul className="space-y-2 text-ink/80">
                  <li>• <strong>Duration:</strong> 8 weeks intensive residential program</li>
                  <li>• <strong>Prerequisites:</strong> 500-Hour RYT or equivalent experience</li>
                  <li>• <strong>Requirements:</strong> Minimum 3 years teaching experience</li>
                  <li>• <strong>Certification:</strong> Tayi Sadhana Yoga Master Teacher</li>
                  <li>• <strong>Format:</strong> Residential immersion only</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-earth to-clay text-white rounded-2xl p-12 mb-16">
            <h2 className="text-4xl font-serif font-bold text-center mb-12">
              Advanced Curriculum
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-2xl font-serif font-bold text-sun mb-4">Advanced Practice</h3>
                <ul className="space-y-3 text-mist/90">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-sun mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Mastery of advanced asanas and transitions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-sun mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Complex pranayama and bandha techniques</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-sun mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Kriya yoga and purification practices</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-sun mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Extended meditation and silent retreats</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-sun mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Personal sadhana refinement</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-2xl font-serif font-bold text-sun mb-4">Energy Mastery</h3>
                <ul className="space-y-3 text-mist/90">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-sun mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Kundalini awakening and safety</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-sun mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Advanced chakra work and balancing</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-sun mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Nadi purification techniques</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-sun mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Subtle body anatomy in depth</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-sun mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Energy healing and transmission</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-2xl font-serif font-bold text-sun mb-4">Teaching Excellence</h3>
                <ul className="space-y-3 text-mist/90">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-sun mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Training future teachers (TTC methodology)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-sun mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Advanced adjustment and assists</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-sun mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Working with advanced students</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-sun mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Curriculum development and design</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-sun mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Leadership and program management</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-2xl font-serif font-bold text-sun mb-4">Spiritual Mentorship</h3>
                <ul className="space-y-3 text-mist/90">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-sun mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Guiding spiritual awakening</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-sun mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Understanding spiritual crises</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-sun mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Holding sacred space</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-sun mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Ethical considerations in teaching</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-sun mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Lineage wisdom and transmission</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-serif font-bold text-ink mb-6">
                Deep Philosophical Study
              </h2>
              <p className="text-lg text-ink/80 mb-4 leading-relaxed">
                Immerse yourself in the profound wisdom of yoga's sacred texts through intensive study,
                contemplation, and direct experience.
              </p>
              <div className="space-y-4">
                <div className="bg-sand rounded-lg p-4">
                  <h4 className="font-semibold text-earth mb-2">Yoga Sutras Mastery</h4>
                  <p className="text-sm text-ink/70">
                    Complete commentary study, Sanskrit analysis, and practical application of Patanjali's wisdom
                  </p>
                </div>
                <div className="bg-sand rounded-lg p-4">
                  <h4 className="font-semibold text-earth mb-2">Bhagavad Gita In-Depth</h4>
                  <p className="text-sm text-ink/70">
                    Verse-by-verse study with multiple commentaries and integration into modern life
                  </p>
                </div>
                <div className="bg-sand rounded-lg p-4">
                  <h4 className="font-semibold text-earth mb-2">Upanishads & Vedanta</h4>
                  <p className="text-sm text-ink/70">
                    Exploration of non-dual philosophy and the nature of ultimate reality
                  </p>
                </div>
                <div className="bg-sand rounded-lg p-4">
                  <h4 className="font-semibold text-earth mb-2">Tantra & Shakti Wisdom</h4>
                  <p className="text-sm text-ink/70">
                    Understanding divine feminine energy and tantric practices within our lineage
                  </p>
                </div>
              </div>
            </div>
            <div>
              <ImagePlaceholder width={600} height={700} text="Philosophy Study" className="rounded-lg shadow-2xl" />
            </div>
          </div>

          <div className="bg-gradient-to-b from-sand to-mist rounded-2xl p-12">
            <h2 className="text-4xl font-serif font-bold text-ink text-center mb-12">
              Program Structure
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-earth mb-4">Weeks 1-3: Deepening</h3>
                <p className="text-ink/70 mb-4">
                  Intensive personal practice, advanced techniques, and philosophical foundations
                </p>
                <ul className="space-y-2 text-sm text-ink/60">
                  <li>• Daily 3-hour practice sessions</li>
                  <li>• Philosophy immersion</li>
                  <li>• Energy work fundamentals</li>
                  <li>• Silent meditation retreat</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-earth mb-4">Weeks 4-6: Mastery</h3>
                <p className="text-ink/70 mb-4">
                  Advanced applications, teaching methodology, and spiritual mentorship training
                </p>
                <ul className="space-y-2 text-sm text-ink/60">
                  <li>• TTC teaching practice</li>
                  <li>• Advanced energy work</li>
                  <li>• Curriculum development</li>
                  <li>• One-on-one mentorship</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-earth mb-4">Weeks 7-8: Integration</h3>
                <p className="text-ink/70 mb-4">
                  Final projects, certification requirements, and transition to master teacher role
                </p>
                <ul className="space-y-2 text-sm text-ink/60">
                  <li>• Final teaching assessment</li>
                  <li>• Lineage transmission ceremony</li>
                  <li>• Integration and planning</li>
                  <li>• Community commitment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-ink mb-4">
              Application Requirements
            </h2>
            <p className="text-xl text-ink/70">
              This exclusive program accepts only qualified, dedicated candidates
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-gradient-to-br from-sand to-mist rounded-xl p-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-earth mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong className="text-ink">Certification:</strong>
                  <p className="text-ink/70">500-Hour Yoga Alliance RYT or equivalent training</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-earth mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong className="text-ink">Experience:</strong>
                  <p className="text-ink/70">Minimum 3 years of active teaching (documented hours)</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-earth mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong className="text-ink">Personal Practice:</strong>
                  <p className="text-ink/70">Established daily sadhana for at least 2 years</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-earth mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong className="text-ink">Application:</strong>
                  <p className="text-ink/70">Written application, video submission, and interview with senior teacher</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-earth mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong className="text-ink">Commitment:</strong>
                  <p className="text-ink/70">Full residential attendance and post-program service requirements</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-earth mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong className="text-ink">References:</strong>
                  <p className="text-ink/70">Two professional references from yoga teachers or mentors</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-earth/20 text-center">
              <p className="text-ink/70 mb-4">
                <strong>Limited Enrollment:</strong> Maximum 12 students per cohort
              </p>
              <p className="text-ink/70">
                <strong>Next Program:</strong> Contact us for upcoming dates and application deadline
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-ink to-earth text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Answer the Call to Mastery
          </h2>
          <p className="text-xl text-mist/90 mb-8">
            This is more than training—it's a sacred transmission and lifetime commitment to the path
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-sun text-ink rounded-full font-semibold hover:bg-white transition-colors"
            >
              Request Application
            </Link>
            <Link
              to="/about/guruji-message"
              className="px-8 py-3 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-earth transition-colors"
            >
              Read Guruji's Message
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
