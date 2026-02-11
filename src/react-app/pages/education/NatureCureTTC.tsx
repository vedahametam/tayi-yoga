import PageHero from '../../components/PageHero';
import ImagePlaceholder from '../../components/ImagePlaceholder';
import { Link } from 'react-router-dom';

export default function NatureCureTTC() {
  return (
    <div>
      <PageHero
        title="Nature Cure Teacher Training"
        subtitle="Comprehensive certification in natural healing and wellness therapies"
        imagePlaceholder="Nature Cure TTC Hero"
        height="medium"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-serif font-bold text-ink mb-6">
                Become a Nature Cure Practitioner
              </h2>
              <p className="text-lg text-ink/80 mb-4 leading-relaxed">
                This intensive program trains you in the ancient art and modern science of natural healing.
                Learn to guide others toward optimal health using nature's powerful therapeutic elements.
              </p>
              <p className="text-lg text-ink/80 mb-6 leading-relaxed">
                Through hands-on training, clinical practice, and comprehensive study, you'll master the skills
                to assess health conditions, design therapeutic protocols, and facilitate genuine healing.
              </p>
              <div className="bg-gradient-to-r from-sand to-mist rounded-lg p-6">
                <h4 className="font-semibold text-earth mb-3">Program Overview:</h4>
                <ul className="space-y-2 text-ink/80">
                  <li>• <strong>Duration:</strong> 6 weeks intensive or 4 months weekend program</li>
                  <li>• <strong>Prerequisites:</strong> Interest in natural healing (yoga background helpful)</li>
                  <li>• <strong>Certification:</strong> Tayi Nature Cure Practitioner Certificate</li>
                  <li>• <strong>Format:</strong> Residential or commuter options available</li>
                </ul>
              </div>
            </div>
            <div>
              <ImagePlaceholder width={600} height={800} text="Nature Cure Training" className="rounded-lg shadow-2xl" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-sand to-mist rounded-2xl p-12 mb-16">
            <h2 className="text-4xl font-serif font-bold text-ink text-center mb-12">
              Comprehensive Curriculum
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-leaf rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-leaf mb-3">Naturopathy Principles</h3>
                <ul className="space-y-2 text-sm text-ink/70">
                  <li>• Foundations of natural healing</li>
                  <li>• Healing crisis and detoxification</li>
                  <li>• Constitutional assessment</li>
                  <li>• Health vs. disease paradigms</li>
                  <li>• Nature cure philosophy</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-earth rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-earth mb-3">Dietary Therapy</h3>
                <ul className="space-y-2 text-sm text-ink/70">
                  <li>• Nutritional science fundamentals</li>
                  <li>• Therapeutic diets for conditions</li>
                  <li>• Juice fasting protocols</li>
                  <li>• Food as medicine</li>
                  <li>• Meal planning and recipes</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-blue-600 mb-3">Hydrotherapy</h3>
                <ul className="space-y-2 text-sm text-ink/70">
                  <li>• Water treatment principles</li>
                  <li>• Hip baths and foot baths</li>
                  <li>• Steam and sauna therapy</li>
                  <li>• Cold and hot applications</li>
                  <li>• Colon hydrotherapy basics</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-clay rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-clay mb-3">Mud Therapy</h3>
                <ul className="space-y-2 text-sm text-ink/70">
                  <li>• Therapeutic properties of clay</li>
                  <li>• Mud pack applications</li>
                  <li>• Poultices and compresses</li>
                  <li>• Detoxification protocols</li>
                  <li>• Skin and organ treatments</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-sun rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-sun mb-3">Sun & Air Therapy</h3>
                <ul className="space-y-2 text-sm text-ink/70">
                  <li>• Heliotherapy principles</li>
                  <li>• Vitamin D and sun exposure</li>
                  <li>• Chromotherapy (color therapy)</li>
                  <li>• Fresh air and breathing</li>
                  <li>• Outdoor healing practices</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-green-600 mb-3">Herbal Medicine</h3>
                <ul className="space-y-2 text-sm text-ink/70">
                  <li>• Medicinal plant identification</li>
                  <li>• Herbal preparations and formulas</li>
                  <li>• Ayurvedic herbs and usage</li>
                  <li>• Essential oils therapy</li>
                  <li>• Home remedies and tonics</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-purple-600 mb-3">Fasting Therapy</h3>
                <ul className="space-y-2 text-sm text-ink/70">
                  <li>• Science of therapeutic fasting</li>
                  <li>• Different fasting protocols</li>
                  <li>• Preparation and breaking fasts</li>
                  <li>• Contraindications and safety</li>
                  <li>• Supervised fasting guidance</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-red-600 mb-3">Clinical Practice</h3>
                <ul className="space-y-2 text-sm text-ink/70">
                  <li>• Case taking and assessment</li>
                  <li>• Treatment protocol design</li>
                  <li>• Hands-on clinical hours</li>
                  <li>• Client communication</li>
                  <li>• Documentation and ethics</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-indigo-600 mb-3">Integration with Yoga</h3>
                <ul className="space-y-2 text-sm text-ink/70">
                  <li>• Yoga therapy applications</li>
                  <li>• Pranayama for healing</li>
                  <li>• Meditation and mind-body</li>
                  <li>• Holistic treatment approach</li>
                  <li>• Lifestyle counseling</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <ImagePlaceholder width={600} height={400} text="Practical Training" className="rounded-lg shadow-2xl" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-serif font-bold text-ink mb-6">
                Hands-On Training
              </h2>
              <p className="text-lg text-ink/80 mb-4 leading-relaxed">
                This program emphasizes practical, hands-on experience. You'll work with real clients under
                supervision, learning to apply therapeutic protocols with confidence and skill.
              </p>
              <p className="text-lg text-ink/80 mb-6 leading-relaxed">
                Our clinical facility provides a safe environment to practice assessments, treatments, and
                client care while receiving expert guidance and feedback.
              </p>
              <div className="bg-sand rounded-lg p-6">
                <h4 className="font-semibold text-earth mb-3">Clinical Hours Include:</h4>
                <ul className="space-y-2 text-ink/80">
                  <li>• Client consultations and intake</li>
                  <li>• Treatment protocol implementation</li>
                  <li>• Dietary planning sessions</li>
                  <li>• Therapeutic application practice</li>
                  <li>• Follow-up and progress tracking</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-serif font-bold text-ink text-center mb-8">
              Career Opportunities
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                'Nature cure centers and spas',
                'Wellness retreats and resorts',
                'Integrative health clinics',
                'Private practice consulting',
                'Yoga and wellness studios',
                'Corporate wellness programs',
                'Educational institutions',
                'Research and writing'
              ].map((career, index) => (
                <div key={index} className="flex items-start bg-gradient-to-br from-sand to-mist p-4 rounded-lg">
                  <svg className="w-6 h-6 text-leaf mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-ink/80">{career}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-sand to-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-ink mb-4">
              What You'll Gain
            </h2>
            <p className="text-xl text-ink/70">
              Transform yourself while learning to heal others
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-leaf to-earth rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-earth mb-4">Expert Knowledge</h3>
              <p className="text-ink/70 leading-relaxed">
                Comprehensive understanding of natural healing modalities, backed by both traditional wisdom
                and modern research.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-earth to-clay rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-earth mb-4">Practical Skills</h3>
              <p className="text-ink/70 leading-relaxed">
                Hands-on experience in assessment, treatment planning, and therapeutic application through
                supervised clinical practice.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-clay to-sun rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-earth mb-4">Professional Certification</h3>
              <p className="text-ink/70 leading-relaxed">
                Recognized credentials that enable you to practice professionally and make a meaningful
                difference in people's lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-earth text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Start Your Natural Healing Journey
          </h2>
          <p className="text-xl text-mist/90 mb-8">
            Join our next Nature Cure Teacher Training program
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-sun text-ink rounded-full font-semibold hover:bg-white transition-colors"
            >
              Apply Now
            </Link>
            <Link
              to="/system/nature-cure"
              className="px-8 py-3 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-earth transition-colors"
            >
              Learn About Nature Cure
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
