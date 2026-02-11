import PageHero from '../../components/PageHero';
import ImagePlaceholder from '../../components/ImagePlaceholder';

export default function CodeOfDiscipline() {
  return (
    <div>
      <PageHero
        title="Code of Discipline"
        subtitle="Ethical guidelines and professional standards for Tayi Sadhana Yoga teachers"
        imagePlaceholder="Code of Discipline Hero"
        height="medium"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-ink mb-6">
              Our Commitment to Integrity
            </h2>
            <p className="text-xl text-ink/70 max-w-3xl mx-auto leading-relaxed">
              As teachers of Tayi Sadhana Yoga, we uphold the highest standards of ethical conduct, professional
              integrity, and spiritual authenticity. This code guides our actions and ensures we serve students
              with compassion, wisdom, and respect.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <ImagePlaceholder width={600} height={700} text="Ethical Teaching" className="rounded-lg shadow-2xl" />
            </div>
            <div>
              <h2 className="text-4xl font-serif font-bold text-ink mb-6">
                Foundation in Yamas and Niyamas
              </h2>
              <p className="text-lg text-ink/80 mb-6 leading-relaxed">
                Our code is rooted in the classical ethical principles of yoga—the yamas (universal ethics) and
                niyamas (personal observances). These timeless guidelines form the foundation of all authentic
                yoga practice and teaching.
              </p>
              <div className="bg-gradient-to-r from-sand to-mist rounded-lg p-6">
                <h4 className="font-semibold text-earth mb-3">The Five Yamas:</h4>
                <ul className="space-y-2 text-ink/80">
                  <li>• <strong>Ahimsa:</strong> Non-violence in thought, word, and action</li>
                  <li>• <strong>Satya:</strong> Truthfulness and authenticity</li>
                  <li>• <strong>Asteya:</strong> Non-stealing, honoring others' time and energy</li>
                  <li>• <strong>Brahmacharya:</strong> Appropriate use of energy and relationships</li>
                  <li>• <strong>Aparigraha:</strong> Non-possessiveness and generosity</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-earth to-clay text-white rounded-2xl p-12 mb-16">
            <h2 className="text-4xl font-serif font-bold text-center mb-12">
              Professional Standards
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-2xl font-serif font-bold text-sun mb-4">Teaching Excellence</h3>
                <ul className="space-y-3 text-mist/90">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-sun mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Maintain competence through continued study and practice</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-sun mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Teach within scope of training and experience</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-sun mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Provide clear, accurate information about practices</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-sun mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Acknowledge lineage and honor the teachings</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-sun mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Create safe, inclusive learning environments</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-2xl font-serif font-bold text-sun mb-4">Student Relationships</h3>
                <ul className="space-y-3 text-mist/90">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-sun mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Respect boundaries and maintain appropriate relationships</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-sun mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Never exploit position of trust or power</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-sun mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Maintain confidentiality of student information</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-sun mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Honor each student's individual journey and pace</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-sun mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Provide compassionate, non-judgmental guidance</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-2xl font-serif font-bold text-sun mb-4">Health & Safety</h3>
                <ul className="space-y-3 text-mist/90">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-sun mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Screen students for health conditions and injuries</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-sun mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Never diagnose medical conditions or prescribe treatments</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-sun mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Recommend medical consultation when appropriate</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-sun mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Ensure safe practice environment and equipment</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-sun mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Obtain informed consent for hands-on adjustments</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-2xl font-serif font-bold text-sun mb-4">Professional Conduct</h3>
                <ul className="space-y-3 text-mist/90">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-sun mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Represent credentials and experience accurately</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-sun mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Honor commitments and maintain punctuality</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-sun mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Charge fair fees and be transparent about costs</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-sun mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Respect other teachers and avoid disparagement</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-sun mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Address conflicts with integrity and compassion</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-serif font-bold text-ink mb-6">
                Personal Practice & Growth
              </h2>
              <p className="text-lg text-ink/80 mb-6 leading-relaxed">
                We cannot give what we do not have. Teachers must maintain their own practice, continue learning,
                and engage in self-inquiry to serve students authentically.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-earth mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-ink">Daily Sadhana:</strong>
                    <p className="text-ink/70">Maintain regular personal practice of asana, pranayama, and meditation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-earth mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-ink">Continuing Education:</strong>
                    <p className="text-ink/70">Engage in ongoing study, workshops, and advanced training</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-earth mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-ink">Self-Reflection:</strong>
                    <p className="text-ink/70">Regular self-inquiry and honest assessment of motivations and actions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-earth mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-ink">Mentorship:</strong>
                    <p className="text-ink/70">Seek guidance from senior teachers and remain open to feedback</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-earth mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-ink">Healthy Living:</strong>
                    <p className="text-ink/70">Maintain physical, mental, and emotional well-being</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ImagePlaceholder width={600} height={600} text="Personal Practice" className="rounded-lg shadow-2xl" />
            </div>
          </div>

          <div className="bg-gradient-to-b from-sand to-mist rounded-2xl p-12 mb-16">
            <h2 className="text-4xl font-serif font-bold text-ink text-center mb-8">
              Community Responsibility
            </h2>
            <p className="text-lg text-ink/70 text-center mb-8 max-w-3xl mx-auto">
              As representatives of Tayi Sadhana Yoga, teachers have a responsibility to uphold the reputation
              of our lineage and contribute to the wellbeing of the yoga community.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-earth mb-2">Authentic Representation</h3>
                <p className="text-sm text-ink/70">
                  Represent Tayi Sadhana Yoga teachings accurately and with integrity
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-earth mb-2">Service Orientation</h3>
                <p className="text-sm text-ink/70">
                  Contribute time and energy to community seva and collective wellbeing
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-earth mb-2">Environmental Consciousness</h3>
                <p className="text-sm text-ink/70">
                  Practice and promote sustainable, eco-friendly living aligned with yoga values
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-earth mb-2">Inclusive Approach</h3>
                <p className="text-sm text-ink/70">
                  Welcome all seekers regardless of background, ability, or identity
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-earth mb-2">Collaborative Spirit</h3>
                <p className="text-sm text-ink/70">
                  Support fellow teachers and work cooperatively for the good of all
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-earth mb-2">Cultural Sensitivity</h3>
                <p className="text-sm text-ink/70">
                  Honor yoga's roots while respecting diverse cultural contexts
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-serif font-bold text-ink text-center mb-6">
              Accountability & Resolution
            </h2>
            <p className="text-lg text-ink/70 text-center mb-8 max-w-3xl mx-auto">
              When ethical questions or violations arise, we address them with transparency and compassion,
              seeking resolution that serves the highest good.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-earth mb-4">Reporting Concerns</h3>
                <p className="text-ink/70 mb-4">
                  Students, teachers, or community members who witness or experience ethical violations
                  should report concerns to:
                </p>
                <ul className="space-y-2 text-ink/70">
                  <li>• Direct communication with the teacher (when safe and appropriate)</li>
                  <li>• Senior teachers or program directors</li>
                  <li>• Ethics committee at ethics@tayiyoga.org</li>
                  <li>• Anonymous reporting mechanism available</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-earth mb-4">Resolution Process</h3>
                <p className="text-ink/70 mb-4">
                  Reported concerns are handled with:
                </p>
                <ul className="space-y-2 text-ink/70">
                  <li>• Confidential investigation by ethics committee</li>
                  <li>• Fair hearing for all parties involved</li>
                  <li>• Appropriate remedial actions when needed</li>
                  <li>• Support for affected individuals</li>
                  <li>• Commitment to learning and growth</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-earth text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Our Sacred Promise
          </h2>
          <p className="text-xl text-mist/90 mb-8">
            By adhering to this Code of Discipline, we honor the lineage, serve our students with integrity,
            and contribute to the preservation and evolution of authentic yoga for future generations.
          </p>
          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <p className="text-lg italic text-mist/90">
              "Teaching yoga is not about performing—it is about serving. Not about impressing—but about
              transforming. Not about taking—but about giving. May we always remember this sacred responsibility."
            </p>
            <p className="text-sun font-semibold mt-4">— Guruji</p>
          </div>
        </div>
      </section>
    </div>
  );
}
