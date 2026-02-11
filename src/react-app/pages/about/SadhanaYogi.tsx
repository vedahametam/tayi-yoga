import PageHero from '../../components/PageHero';
import ImagePlaceholder from '../../components/ImagePlaceholder';

export default function SadhanaYogi() {
  return (
    <div>
      <PageHero
        title="Sadhana Yogi"
        subtitle="Meet the dedicated practitioners embodying the teachings"
        imagePlaceholder="Sadhana Yogi Hero"
        height="medium"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-ink mb-6 text-center">
              Who is a Sadhana Yogi?
            </h2>
            <p className="text-lg text-ink/80 mb-6 leading-relaxed">
              A Sadhana Yogi is one who has committed their life to the practice of yoga as a sacred discipline—
              a sadhana. Beyond mere physical practice, a Sadhana Yogi embodies the teachings in every aspect of life,
              becoming a living example of the path.
            </p>
            <p className="text-lg text-ink/80 mb-12 leading-relaxed">
              In the Tayi tradition, a Sadhana Yogi is characterized by unwavering dedication to self-purification,
              devotion to the Divine Mother, service to humanity, and the pursuit of self-realization through
              disciplined practice and surrender.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <ImagePlaceholder width={600} height={800} text="Sadhana Yogi Portrait" className="rounded-lg shadow-2xl" />
            </div>
            <div>
              <h3 className="text-3xl font-serif font-bold text-ink mb-6">
                Qualities of a Sadhana Yogi
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-earth mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-earth">Discipline (Tapas):</strong>
                    <span className="text-ink/80"> Commitment to daily practice regardless of circumstances</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-earth mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-earth">Self-Study (Svadhyaya):</strong>
                    <span className="text-ink/80"> Continuous inquiry into the nature of self and reality</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-earth mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-earth">Surrender (Ishvara Pranidhana):</strong>
                    <span className="text-ink/80"> Complete devotion to the Divine Mother</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-earth mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-earth">Service (Seva):</strong>
                    <span className="text-ink/80"> Selfless action for the benefit of all beings</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-earth mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-earth">Purity (Sattva):</strong>
                    <span className="text-ink/80"> Maintaining physical, mental, and spiritual cleanliness</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-sand to-mist rounded-2xl p-12 mb-16">
            <h3 className="text-3xl font-serif font-bold text-ink text-center mb-8">
              The Path of a Sadhana Yogi
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6">
                <div className="text-4xl font-serif font-bold text-earth mb-4">1</div>
                <h4 className="text-xl font-semibold text-ink mb-3">Initiation</h4>
                <p className="text-ink/70">
                  Beginning the journey with formal commitment to the practice and receiving guidance from a teacher.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <div className="text-4xl font-serif font-bold text-earth mb-4">2</div>
                <h4 className="text-xl font-semibold text-ink mb-3">Purification</h4>
                <p className="text-ink/70">
                  Years of dedicated practice to purify the body, mind, and energy through asana, pranayama, and meditation.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <div className="text-4xl font-serif font-bold text-earth mb-4">3</div>
                <h4 className="text-xl font-semibold text-ink mb-3">Realization</h4>
                <p className="text-ink/70">
                  Attaining deeper states of consciousness and embodying the wisdom of the tradition.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-serif font-bold text-ink mb-6 text-center">
              Daily Life of a Sadhana Yogi
            </h3>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="space-y-6">
                <div className="border-l-4 border-earth pl-6">
                  <p className="text-sm text-earth font-semibold mb-1">4:00 AM - 6:00 AM</p>
                  <h4 className="text-lg font-semibold text-ink mb-2">Morning Sadhana</h4>
                  <p className="text-ink/70">Meditation, pranayama, and prayer to the Divine Mother</p>
                </div>
                <div className="border-l-4 border-leaf pl-6">
                  <p className="text-sm text-leaf font-semibold mb-1">6:00 AM - 8:00 AM</p>
                  <h4 className="text-lg font-semibold text-ink mb-2">Asana Practice</h4>
                  <p className="text-ink/70">Physical practice to purify and strengthen the body</p>
                </div>
                <div className="border-l-4 border-clay pl-6">
                  <p className="text-sm text-clay font-semibold mb-1">8:00 AM - 12:00 PM</p>
                  <h4 className="text-lg font-semibold text-ink mb-2">Seva (Service)</h4>
                  <p className="text-ink/70">Selfless service to the community and ashram</p>
                </div>
                <div className="border-l-4 border-sun pl-6">
                  <p className="text-sm text-sun font-semibold mb-1">12:00 PM - 4:00 PM</p>
                  <h4 className="text-lg font-semibold text-ink mb-2">Study & Rest</h4>
                  <p className="text-ink/70">Scriptural study, teaching, and midday rest</p>
                </div>
                <div className="border-l-4 border-earth pl-6">
                  <p className="text-sm text-earth font-semibold mb-1">4:00 PM - 6:00 PM</p>
                  <h4 className="text-lg font-semibold text-ink mb-2">Evening Practice</h4>
                  <p className="text-ink/70">Gentle asana, pranayama, and contemplation</p>
                </div>
                <div className="border-l-4 border-ink pl-6">
                  <p className="text-sm text-ink font-semibold mb-1">6:00 PM - 9:00 PM</p>
                  <h4 className="text-lg font-semibold text-ink mb-2">Community & Rest</h4>
                  <p className="text-ink/70">Satsang, community activities, and preparation for rest</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
