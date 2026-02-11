import PageHero from '../../components/PageHero';
import ImagePlaceholder from '../../components/ImagePlaceholder';
import { Link } from 'react-router-dom';

export default function PhilosophyTTC() {
  return (
    <div>
      <PageHero
        title="Yoga Philosophy Teacher Training"
        subtitle="Deep exploration of yogic scriptures, philosophy, and spiritual wisdom"
        imagePlaceholder="Philosophy TTC Hero"
        height="medium"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-serif font-bold text-ink mb-6">
                The Wisdom Tradition
              </h2>
              <p className="text-lg text-ink/80 mb-4 leading-relaxed">
                Yoga philosophy is the foundation upon which all authentic practice rests. This comprehensive
                program takes you deep into the sacred texts, revealing the timeless wisdom that has guided
                seekers for millennia.
              </p>
              <p className="text-lg text-ink/80 mb-6 leading-relaxed">
                Through systematic study, Sanskrit learning, contemplative practice, and direct experience,
                you'll gain a profound understanding of yoga's philosophical framework and learn to share
                these teachings with clarity and authenticity.
              </p>
              <div className="bg-gradient-to-r from-sand to-mist rounded-lg p-6">
                <h4 className="font-semibold text-earth mb-3">Program Details:</h4>
                <ul className="space-y-2 text-ink/80">
                  <li>• <strong>Duration:</strong> 300 hours over 6 weeks or 5 months weekends</li>
                  <li>• <strong>Prerequisites:</strong> 200-Hour YTT recommended but not required</li>
                  <li>• <strong>Format:</strong> Intensive or modular weekend format</li>
                  <li>• <strong>Certification:</strong> Yoga Philosophy Teacher Certificate</li>
                </ul>
              </div>
            </div>
            <div>
              <ImagePlaceholder width={600} height={800} text="Philosophy Study" className="rounded-lg shadow-2xl" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-sand to-mist rounded-2xl p-12 mb-16">
            <h2 className="text-4xl font-serif font-bold text-ink text-center mb-12">
              Sacred Texts & Teachings
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-earth rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-earth">Yoga Sutras of Patanjali</h3>
                </div>
                <p className="text-ink/70 mb-4">
                  Complete study of all four chapters covering the nature of consciousness, practice methods,
                  powers, and liberation.
                </p>
                <ul className="space-y-2 text-sm text-ink/60">
                  <li>• Samadhi Pada: The science of meditation</li>
                  <li>• Sadhana Pada: The path of practice</li>
                  <li>• Vibhuti Pada: Powers and attainments</li>
                  <li>• Kaivalya Pada: Ultimate liberation</li>
                  <li>• Sanskrit verse analysis</li>
                  <li>• Multiple commentary traditions</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-leaf rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-leaf">Bhagavad Gita</h3>
                </div>
                <p className="text-ink/70 mb-4">
                  Verse-by-verse exploration of Krishna's teachings on dharma, karma, devotion, and the
                  paths to liberation.
                </p>
                <ul className="space-y-2 text-sm text-ink/60">
                  <li>• All 18 chapters in depth</li>
                  <li>• Karma, Jnana, and Bhakti Yoga</li>
                  <li>• The battlefield as metaphor</li>
                  <li>• Practical application in daily life</li>
                  <li>• Traditional and modern commentaries</li>
                  <li>• Memorization and chanting</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-clay rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-clay">Upanishads</h3>
                </div>
                <p className="text-ink/70 mb-4">
                  Study of major Upanishads revealing the nature of reality, self, and the path to
                  self-realization through knowledge.
                </p>
                <ul className="space-y-2 text-sm text-ink/60">
                  <li>• Isha, Kena, Katha Upanishads</li>
                  <li>• Mundaka and Mandukya</li>
                  <li>• Taittiriya and Chandogya</li>
                  <li>• Atman and Brahman philosophy</li>
                  <li>• The great statements (Mahavakyas)</li>
                  <li>• Vedantic interpretation</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-sun rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-sun">Hatha Yoga Pradipika</h3>
                </div>
                <p className="text-ink/70 mb-4">
                  Classical text on Hatha Yoga covering asana, pranayama, mudras, and the awakening of
                  subtle energy.
                </p>
                <ul className="space-y-2 text-sm text-ink/60">
                  <li>• Philosophical foundations of Hatha</li>
                  <li>• Practices and techniques</li>
                  <li>• Kundalini and chakras</li>
                  <li>• Samadhi through body-mind unity</li>
                  <li>• Integration with Raja Yoga</li>
                  <li>• Traditional lineage teachings</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <ImagePlaceholder width={600} height={500} text="Sanskrit Learning" className="rounded-lg shadow-2xl" />
            </div>
            <div>
              <h2 className="text-4xl font-serif font-bold text-ink mb-6">
                Sanskrit Fundamentals
              </h2>
              <p className="text-lg text-ink/80 mb-6 leading-relaxed">
                Learn to read, write, and chant in the sacred language of yoga. Understanding Sanskrit opens
                doors to the deeper meanings within the texts and empowers authentic teaching.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-earth mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong className="text-ink">Devanagari Script:</strong>
                    <p className="text-ink/70">Reading and writing Sanskrit characters</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-earth mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong className="text-ink">Pronunciation:</strong>
                    <p className="text-ink/70">Correct articulation of Sanskrit sounds</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-earth mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong className="text-ink">Chanting:</strong>
                    <p className="text-ink/70">Vedic chanting techniques and traditional mantras</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-earth mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong className="text-ink">Grammar Basics:</strong>
                    <p className="text-ink/70">Fundamental grammatical structures for text analysis</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-earth mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong className="text-ink">Key Terms:</strong>
                    <p className="text-ink/70">Vocabulary essential for understanding yoga texts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-serif font-bold text-ink text-center mb-8">
              Additional Topics
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-earth mb-4">Six Schools of Philosophy</h3>
                <p className="text-ink/70 mb-4">
                  Overview of the six orthodox (Astika) philosophies of India and their relationship to yoga.
                </p>
                <ul className="space-y-2 text-sm text-ink/60">
                  <li>• Samkhya dualism</li>
                  <li>• Yoga practice system</li>
                  <li>• Nyaya logic</li>
                  <li>• Vaisheshika atomism</li>
                  <li>• Mimamsa ritual</li>
                  <li>• Vedanta non-dualism</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-earth mb-4">Tantric Philosophy</h3>
                <p className="text-ink/70 mb-4">
                  Understanding Tantra's unique perspective on reality, energy, and spiritual practice.
                </p>
                <ul className="space-y-2 text-sm text-ink/60">
                  <li>• Shiva-Shakti principles</li>
                  <li>• Chakra cosmology</li>
                  <li>• Kundalini philosophy</li>
                  <li>• Sacred texts (Tantras)</li>
                  <li>• Ritual and practice</li>
                  <li>• Integration with yoga</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-earth mb-4">Applied Philosophy</h3>
                <p className="text-ink/70 mb-4">
                  Bringing ancient wisdom into modern life through practical application and teaching.
                </p>
                <ul className="space-y-2 text-sm text-ink/60">
                  <li>• Teaching philosophy effectively</li>
                  <li>• Making texts accessible</li>
                  <li>• Contemporary relevance</li>
                  <li>• Ethical considerations</li>
                  <li>• Integration with practice</li>
                  <li>• Creating study groups</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-ink mb-6">
                Contemplative Practice
              </h2>
              <p className="text-lg text-ink/80 mb-4 leading-relaxed">
                Philosophy is not merely intellectual study—it must be lived and experienced. Daily
                contemplative practices help integrate philosophical insights into direct realization.
              </p>
              <p className="text-lg text-ink/80 mb-6 leading-relaxed">
                Through meditation, self-inquiry, journaling, and guided contemplation, abstract concepts
                become living wisdom that transforms consciousness.
              </p>
              <div className="bg-gradient-to-r from-sand to-mist rounded-lg p-6">
                <h4 className="font-semibold text-earth mb-3">Daily Practices:</h4>
                <ul className="space-y-2 text-ink/80">
                  <li>• Morning contemplation on key verses</li>
                  <li>• Self-inquiry (Atma Vichara)</li>
                  <li>• Philosophical journaling</li>
                  <li>• Group discussion and debate</li>
                  <li>• Evening reflection and integration</li>
                </ul>
              </div>
            </div>
            <div>
              <ImagePlaceholder width={600} height={500} text="Contemplation Practice" className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-sand to-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-ink mb-4">
              Who Should Enroll
            </h2>
            <p className="text-xl text-ink/70 max-w-3xl mx-auto">
              This program is ideal for various seekers and practitioners
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Yoga Teachers', desc: 'Deepen understanding to enrich your teaching' },
              { title: 'Serious Practitioners', desc: 'Ground your practice in authentic philosophy' },
              { title: 'Philosophy Enthusiasts', desc: 'Systematic study of yogic wisdom' },
              { title: 'Spiritual Seekers', desc: 'Find answers to life\'s deepest questions' },
              { title: 'Sanskrit Students', desc: 'Learn to read texts in original language' },
              { title: 'Writers & Scholars', desc: 'Research yoga philosophy authentically' },
              { title: 'Meditation Teachers', desc: 'Understand philosophical foundations' },
              { title: 'Life Coaches', desc: 'Integrate timeless wisdom into guidance' }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg text-center">
                <h3 className="font-semibold text-earth mb-2">{item.title}</h3>
                <p className="text-sm text-ink/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-clay to-sun text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Embark on the Journey of Wisdom
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Transform your understanding and discover the profound depths of yoga philosophy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-white text-ink rounded-full font-semibold hover:bg-mist transition-colors"
            >
              Enroll Now
            </Link>
            <Link
              to="/education/overview"
              className="px-8 py-3 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-clay transition-colors"
            >
              View All Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
