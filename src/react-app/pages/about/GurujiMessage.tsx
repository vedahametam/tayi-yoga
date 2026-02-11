import PageHero from '../../components/PageHero';
import ImagePlaceholder from '../../components/ImagePlaceholder';

export default function GurujiMessage() {
  return (
    <div>
      <PageHero
        title="Guruji's Message"
        subtitle="Words of wisdom from our spiritual guide"
        imagePlaceholder="Guruji Hero Image"
        height="medium"
      />

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ImagePlaceholder width={300} height={300} text="Guruji Portrait" className="rounded-full mx-auto mb-6 shadow-2xl" />
            <h2 className="text-3xl font-serif font-bold text-ink mb-2">
              Guruji's Name
            </h2>
            <p className="text-lg text-earth">
              Founder & Spiritual Guide, Tayi Sadhana Yoga
            </p>
          </div>

          <div className="bg-gradient-to-br from-sand to-mist rounded-2xl p-12 mb-12 shadow-lg">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-ink/90 mb-6 leading-relaxed italic">
                "Beloved seekers of truth,
              </p>
              <p className="text-lg text-ink/80 mb-6 leading-relaxed">
                In this age of constant movement and distraction, the ancient call of yoga becomes more vital than ever.
                Tayi Sadhana Yoga is not a new invention—it is the rediscovery of eternal truths that have guided humanity
                toward liberation for millennia.
              </p>
              <p className="text-lg text-ink/80 mb-6 leading-relaxed">
                The Divine Mother, in her infinite compassion, has graced us with this path. She is the supreme source,
                the nurturing force that sustains all creation. When we surrender to her embrace, we find the peace that
                the world cannot give. In her lap, all suffering dissolves, all questions find their answers, and the
                soul remembers its eternal nature.
              </p>
              <p className="text-lg text-ink/80 mb-6 leading-relaxed">
                This practice we share is holistic—it addresses not only the physical body but the subtle energies,
                the mind, the emotions, and ultimately, the spirit. Through disciplined practice, sincere devotion,
                and the grace of the Mother, transformation is inevitable.
              </p>
              <p className="text-lg text-ink/80 mb-6 leading-relaxed">
                I invite you to approach this path with humility and dedication. Yoga is not about achieving perfection
                in postures; it is about becoming intimate with your true self. It is about recognizing the divinity
                within and allowing that light to shine forth in service to all beings.
              </p>
              <p className="text-lg text-ink/80 mb-6 leading-relaxed">
                May the Divine Mother guide your steps. May your practice be sincere and your heart be open.
                Remember that you are never alone on this journey—the entire lineage of masters supports you,
                and the Mother herself walks beside you.
              </p>
              <p className="text-xl text-ink/90 mt-8 italic">
                With blessings and love,<br/>
                <span className="font-serif font-bold">Guruji</span>"
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-serif font-bold text-earth mb-6">
                Guruji's Vision
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-earth mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-ink/80">
                    Creating sacred spaces where seekers can experience the Divine Mother's presence
                  </p>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-earth mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-ink/80">
                    Preserving and sharing authentic yogic wisdom for future generations
                  </p>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-earth mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-ink/80">
                    Building a global community united in spiritual practice and service
                  </p>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-earth mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-ink/80">
                    Integrating yoga with nature cure for complete holistic wellness
                  </p>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-serif font-bold text-earth mb-6">
                Life & Teachings
              </h3>
              <p className="text-ink/80 mb-4 leading-relaxed">
                Guruji's spiritual journey began in early childhood with profound mystical experiences.
                After years of intensive sadhana under realized masters, Guruji was guided by the Divine Mother
                to establish Tayi Sadhana Yoga as a comprehensive path to liberation.
              </p>
              <p className="text-ink/80 mb-4 leading-relaxed">
                Drawing from multiple yogic traditions—Hatha, Raja, Bhakti, and Jnana—Guruji has synthesized
                a unique approach that addresses the needs of modern seekers while maintaining the purity of
                ancient teachings.
              </p>
              <p className="text-ink/80 leading-relaxed">
                Known for profound compassion, clarity of teaching, and unwavering dedication to the path,
                Guruji continues to guide thousands of students worldwide on their spiritual journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-earth to-clay text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-serif font-bold mb-4">
            Walking the Path Together
          </h3>
          <p className="text-lg text-mist/90 mb-8">
            Under Guruji's guidance, thousands have transformed their lives and awakened to their true nature
          </p>
          <a
            href="/education/overview"
            className="inline-block px-8 py-3 bg-sun text-ink rounded-full font-semibold hover:bg-white transition-colors"
          >
            Begin Your Journey
          </a>
        </div>
      </section>
    </div>
  );
}
