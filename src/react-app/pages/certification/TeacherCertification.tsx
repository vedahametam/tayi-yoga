import PageHero from '../../components/PageHero';
import ImagePlaceholder from '../../components/ImagePlaceholder';
import { Link } from 'react-router-dom';

export default function TeacherCertification() {
  return (
    <div>
      <PageHero
        title="Teacher Certification"
        subtitle="Internationally recognized yoga and wellness certifications"
        imagePlaceholder="Certification Hero"
        height="medium"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-ink mb-6">
              Professional Certification Programs
            </h2>
            <p className="text-xl text-ink/70 max-w-3xl mx-auto leading-relaxed">
              Our certifications are recognized worldwide, enabling you to teach professionally and make a meaningful
              impact in the lives of students across the globe.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <ImagePlaceholder width={600} height={700} text="Certification Ceremony" className="rounded-lg shadow-2xl" />
            </div>
            <div>
              <h2 className="text-4xl font-serif font-bold text-ink mb-6">
                Yoga Alliance Registered
              </h2>
              <p className="text-lg text-ink/80 mb-4 leading-relaxed">
                Tayi Sadhana Yoga is a Registered Yoga School (RYS) with Yoga Alliance, the internationally
                recognized standard for yoga teacher training. Our certifications meet or exceed all Yoga
                Alliance requirements.
              </p>
              <p className="text-lg text-ink/80 mb-6 leading-relaxed">
                Upon completion of our programs, graduates are eligible to register with Yoga Alliance as
                Registered Yoga Teachers (RYT), enabling professional teaching worldwide.
              </p>
              <div className="bg-gradient-to-r from-sand to-mist rounded-lg p-6">
                <h4 className="font-semibold text-earth mb-3">Available Certifications:</h4>
                <ul className="space-y-2 text-ink/80">
                  <li>• RYT 200 - Registered Yoga Teacher (200 hours)</li>
                  <li>• RYT 300 - Advanced Registered Yoga Teacher</li>
                  <li>• RYT 500 - Experienced Registered Yoga Teacher</li>
                  <li>• E-RYT 500 - Experienced Teacher (after teaching hours)</li>
                  <li>• Tayi Nature Cure Practitioner</li>
                  <li>• Yoga Philosophy Teacher</li>
                  <li>• Master Teacher Certification</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-sand to-mist rounded-2xl p-12 mb-16">
            <h2 className="text-4xl font-serif font-bold text-ink text-center mb-12">
              Certification Requirements
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-earth rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-earth mb-3">Attendance</h3>
                <p className="text-ink/70">
                  95% minimum attendance for all classes, practice sessions, and training activities. Make-up
                  work required for any missed sessions.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-leaf rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-leaf mb-3">Written Exams</h3>
                <p className="text-ink/70">
                  Pass written examinations covering anatomy, philosophy, teaching methodology, and ethical
                  guidelines. Minimum 70% required.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-clay rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-clay mb-3">Teaching Practicum</h3>
                <p className="text-ink/70">
                  Successfully complete teaching practicums including peer teaching, community classes, and
                  final teaching assessment.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-sun rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-sun mb-3">Assignments</h3>
                <p className="text-ink/70">
                  Complete all required assignments including essays, lesson plans, case studies, and
                  personal practice journals.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-earth rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-earth mb-3">Ethical Conduct</h3>
                <p className="text-ink/70">
                  Demonstrate understanding and adherence to our Code of Discipline and ethical teaching
                  standards throughout the program.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-leaf rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-leaf mb-3">Final Review</h3>
                <p className="text-ink/70">
                  Pass comprehensive final review with senior teachers, demonstrating competence in all
                  areas of training.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-serif font-bold text-ink mb-6">
                Continuing Education
              </h2>
              <p className="text-lg text-ink/80 mb-4 leading-relaxed">
                Yoga Alliance requires certified teachers to complete continuing education hours to maintain
                registration. We offer various opportunities for ongoing learning and professional development.
              </p>
              <div className="space-y-4">
                <div className="bg-sand rounded-lg p-4">
                  <h4 className="font-semibold text-earth mb-2">Workshops & Intensives</h4>
                  <p className="text-sm text-ink/70">
                    Regular workshops on specialized topics, advanced techniques, and emerging trends
                  </p>
                </div>
                <div className="bg-sand rounded-lg p-4">
                  <h4 className="font-semibold text-earth mb-2">Advanced Training Modules</h4>
                  <p className="text-sm text-ink/70">
                    Specialized certifications in areas like prenatal yoga, yoga therapy, or advanced meditation
                  </p>
                </div>
                <div className="bg-sand rounded-lg p-4">
                  <h4 className="font-semibold text-earth mb-2">Mentorship Programs</h4>
                  <p className="text-sm text-ink/70">
                    One-on-one guidance from senior teachers to refine skills and deepen understanding
                  </p>
                </div>
                <div className="bg-sand rounded-lg p-4">
                  <h4 className="font-semibold text-earth mb-2">Annual Retreats</h4>
                  <p className="text-sm text-ink/70">
                    Immersive retreat experiences combining practice, study, and community connection
                  </p>
                </div>
              </div>
            </div>
            <div>
              <ImagePlaceholder width={600} height={600} text="Continuing Education" className="rounded-lg shadow-2xl" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-serif font-bold text-ink text-center mb-8">
              Registration Process
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-earth to-clay rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="font-semibold text-earth mb-2">Complete Training</h3>
                <p className="text-sm text-ink/70">
                  Finish all program requirements and pass final assessments
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-earth to-clay rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="font-semibold text-earth mb-2">Receive Certificate</h3>
                <p className="text-sm text-ink/70">
                  Obtain your official Tayi Sadhana Yoga certification
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-earth to-clay rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="font-semibold text-earth mb-2">Register with YA</h3>
                <p className="text-sm text-ink/70">
                  Create account on Yoga Alliance website and submit application
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-earth to-clay rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="font-semibold text-earth mb-2">Start Teaching</h3>
                <p className="text-sm text-ink/70">
                  Begin your career as a certified yoga professional
                </p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-earth/20 text-center">
              <p className="text-ink/70 mb-4">
                We provide all documentation and support needed for Yoga Alliance registration
              </p>
              <Link
                to="/certification/code-of-discipline"
                className="inline-flex items-center text-earth font-semibold hover:text-clay transition-colors"
              >
                View Our Code of Discipline
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
              Benefits of Certification
            </h2>
            <p className="text-xl text-ink/70">
              Professional recognition opens doors to meaningful career opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-earth mb-3">Global Recognition</h3>
              <p className="text-ink/70">
                Teach anywhere in the world with internationally recognized credentials
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-earth mb-3">Professional Credibility</h3>
              <p className="text-ink/70">
                Establish trust and authority with students, studios, and retreat centers
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-earth mb-3">Insurance Eligibility</h3>
              <p className="text-ink/70">
                Qualify for professional liability insurance for yoga teachers
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-earth mb-3">Career Opportunities</h3>
              <p className="text-ink/70">
                Access jobs at yoga studios, wellness centers, resorts, and retreat venues
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-earth mb-3">Community Support</h3>
              <p className="text-ink/70">
                Join global network of Yoga Alliance teachers and ongoing resources
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-earth mb-3">Lineage Connection</h3>
              <p className="text-ink/70">
                Lifetime connection to Tayi Sadhana Yoga community and teachings
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-earth text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Begin Your Certification Journey
          </h2>
          <p className="text-xl text-mist/90 mb-8">
            Take the first step toward becoming a professionally certified yoga teacher
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
              Contact Admissions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
