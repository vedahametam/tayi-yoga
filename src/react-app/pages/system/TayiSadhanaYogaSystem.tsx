import PageHero from '../../components/PageHero';
import ImagePlaceholder from '../../components/ImagePlaceholder';
import { Link } from 'react-router-dom';

export default function TayiSadhanaYogaSystem() {
  return (
    <div>
      <PageHero
        title="Tayi Sadhana Yoga System"
        subtitle="A comprehensive path to complete transformation of body, mind, and spirit"
        imagePlaceholder="Yoga System Hero"
        height="medium"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-serif font-bold text-ink mb-6">
                The Complete Yoga System
              </h2>
              <p className="text-lg text-ink/80 mb-4 leading-relaxed">
                Tayi Sadhana Yoga is a holistic system that integrates the classical eight limbs of yoga with
                devotional practices, energy work, and the healing power of nature. This comprehensive approach
                addresses every dimension of human experience.
              </p>
              <p className="text-lg text-ink/80 mb-4 leading-relaxed">
                Unlike systems that focus solely on physical postures, our approach recognizes that true yoga is
                a journey of complete transformation—purifying the body, calming the mind, awakening the heart,
                and illuminating the spirit.
              </p>
              <p className="text-lg text-ink/80 leading-relaxed">
                Through systematic practice under expert guidance, practitioners progress through clearly defined
                stages, from foundational practices to advanced spiritual awakening.
              </p>
            </div>
            <div>
              <ImagePlaceholder width={600} height={800} text="Yoga Practice" className="rounded-lg shadow-2xl" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-sand to-mist rounded-2xl p-12 mb-16">
            <h2 className="text-4xl font-serif font-bold text-ink text-center mb-12">
              The Eight Dimensions of Practice
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-earth rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-semibold text-earth mb-3">Yama</h3>
                <p className="text-ink/70">
                  Ethical principles: non-violence, truthfulness, non-stealing, continence, and non-possessiveness
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-earth rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-semibold text-earth mb-3">Niyama</h3>
                <p className="text-ink/70">
                  Personal observances: purity, contentment, discipline, self-study, and surrender to the divine
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-earth rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-semibold text-earth mb-3">Asana</h3>
                <p className="text-ink/70">
                  Physical postures that strengthen, purify, and prepare the body for meditation and energy work
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-earth rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-semibold text-earth mb-3">Pranayama</h3>
                <p className="text-ink/70">
                  Breath control techniques that regulate life force energy and expand consciousness
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-leaf rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">5</span>
                </div>
                <h3 className="text-xl font-semibold text-leaf mb-3">Pratyahara</h3>
                <p className="text-ink/70">
                  Withdrawal of senses from external objects to cultivate inner awareness and focus
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-leaf rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">6</span>
                </div>
                <h3 className="text-xl font-semibold text-leaf mb-3">Dharana</h3>
                <p className="text-ink/70">
                  Concentration practices that train the mind to remain steady on a single point
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-clay rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">7</span>
                </div>
                <h3 className="text-xl font-semibold text-clay mb-3">Dhyana</h3>
                <p className="text-ink/70">
                  Meditation states where awareness flows continuously without effort or interruption
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-clay rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">8</span>
                </div>
                <h3 className="text-xl font-semibold text-clay mb-3">Samadhi</h3>
                <p className="text-ink/70">
                  Ultimate union with the divine, transcending individual consciousness into universal awareness
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-earth to-clay text-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif font-bold mb-4">Asana Practice</h3>
              <ImagePlaceholder width={400} height={300} text="Asana Practice" className="rounded-lg mb-4" />
              <p className="text-mist/90 mb-4 leading-relaxed">
                Our asana sequences are carefully designed to systematically open energy channels, strengthen the
                physical body, and prepare practitioners for advanced pranayama and meditation.
              </p>
              <ul className="space-y-2 text-sm text-mist/80">
                <li>• Traditional Hatha Yoga postures</li>
                <li>• Dynamic vinyasa sequences</li>
                <li>• Restorative and therapeutic poses</li>
                <li>• Alignment and adjustments</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-leaf to-earth text-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif font-bold mb-4">Pranayama</h3>
              <ImagePlaceholder width={400} height={300} text="Pranayama" className="rounded-lg mb-4" />
              <p className="text-mist/90 mb-4 leading-relaxed">
                Advanced breathing techniques that purify the energy body, balance the nervous system, and awaken
                dormant spiritual potential through mastery of the breath.
              </p>
              <ul className="space-y-2 text-sm text-mist/80">
                <li>• Nadi Shodhana (channel purification)</li>
                <li>• Kapalabhati (skull shining breath)</li>
                <li>• Bhastrika (bellows breath)</li>
                <li>• Ujjayi and other advanced techniques</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-clay to-sun text-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif font-bold mb-4">Meditation</h3>
              <ImagePlaceholder width={400} height={300} text="Meditation" className="rounded-lg mb-4" />
              <p className="text-mist/90 mb-4 leading-relaxed">
                Systematic meditation practices that guide the mind from scattered thoughts to deep stillness,
                culminating in direct experience of the divine consciousness.
              </p>
              <ul className="space-y-2 text-sm text-mist/80">
                <li>• Mantra meditation</li>
                <li>• Chakra meditation</li>
                <li>• Kundalini awakening practices</li>
                <li>• Contemplation and self-inquiry</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <ImagePlaceholder width={600} height={400} text="Energy Work" className="rounded-lg shadow-2xl" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-serif font-bold text-ink mb-6">
                Energy and Chakra Work
              </h2>
              <p className="text-lg text-ink/80 mb-4 leading-relaxed">
                A unique aspect of our system is the systematic work with the chakras and subtle energy channels.
                Through specific practices, we awaken and balance the seven major energy centers.
              </p>
              <p className="text-lg text-ink/80 mb-6 leading-relaxed">
                This energy work accelerates spiritual growth, removes blockages, and allows the free flow of
                life force throughout the body-mind system, leading to enhanced vitality and consciousness.
              </p>
              <Link
                to="/divine-project/seven-chakra-shrines"
                className="inline-flex items-center text-earth font-semibold text-lg hover:text-clay transition-colors"
              >
                Learn About the Seven Chakra Shrines
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
              The Path of Practice
            </h2>
            <p className="text-xl text-ink/70 max-w-3xl mx-auto">
              Progressive stages of development from beginner to master
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif font-bold text-earth mb-4">Foundation</h3>
              <p className="text-ink/70 mb-6">
                Building strong fundamentals in basic postures, breathing techniques, and meditation practices.
                Establishing discipline and correct understanding.
              </p>
              <Link
                to="/education/yoga-ttc"
                className="inline-flex items-center text-earth font-semibold hover:text-clay transition-colors"
              >
                200-Hour TTC
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif font-bold text-leaf mb-4">Intermediate</h3>
              <p className="text-ink/70 mb-6">
                Deepening practice with advanced postures, pranayama techniques, and intensive meditation.
                Refining teaching skills and personal sadhana.
              </p>
              <Link
                to="/education/yoga-ttc"
                className="inline-flex items-center text-leaf font-semibold hover:text-earth transition-colors"
              >
                300-Hour TTC
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif font-bold text-clay mb-4">Mastery</h3>
              <p className="text-ink/70 mb-6">
                Advanced practices for experienced practitioners. Deep spiritual work, energy mastery, and
                preparation to guide others on the path.
              </p>
              <Link
                to="/education/master-ttc"
                className="inline-flex items-center text-clay font-semibold hover:text-earth transition-colors"
              >
                Master TTC
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-earth text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Begin Your Practice
          </h2>
          <p className="text-xl text-mist/90 mb-8">
            Experience the transformative power of Tayi Sadhana Yoga through our comprehensive training programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/education/overview"
              className="px-8 py-3 bg-sun text-ink rounded-full font-semibold hover:bg-white transition-colors"
            >
              View All Programs
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
