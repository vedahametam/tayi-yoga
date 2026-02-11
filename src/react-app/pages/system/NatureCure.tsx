import PageHero from '../../components/PageHero';
import ImagePlaceholder from '../../components/ImagePlaceholder';
import { Link } from 'react-router-dom';

export default function NatureCure() {
  return (
    <div>
      <PageHero
        title="Nature Cure"
        subtitle="Harnessing the healing power of nature for optimal health and vitality"
        imagePlaceholder="Nature Cure Hero"
        height="medium"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-serif font-bold text-ink mb-6">
                Healing Through Nature
              </h2>
              <p className="text-lg text-ink/80 mb-4 leading-relaxed">
                Nature Cure is the art and science of healing through natural elements and processes. It recognizes
                that the body has an innate intelligence and healing capacity when given the right conditions and
                support from nature's abundant resources.
              </p>
              <p className="text-lg text-ink/80 mb-4 leading-relaxed">
                Our approach integrates traditional naturopathy with yogic principles, combining dietary therapy,
                hydrotherapy, mud therapy, sun therapy, fasting, and herbal treatments to restore balance and
                vitality to the body-mind system.
              </p>
              <p className="text-lg text-ink/80 leading-relaxed">
                Unlike symptomatic treatments, Nature Cure addresses the root causes of disease, promoting genuine
                healing and long-term wellness through natural, non-invasive methods.
              </p>
            </div>
            <div>
              <ImagePlaceholder width={600} height={800} text="Natural Healing" className="rounded-lg shadow-2xl" />
            </div>
          </div>

          <div className="bg-gradient-to-r from-sand to-mist rounded-2xl p-12 mb-16">
            <h2 className="text-4xl font-serif font-bold text-ink text-center mb-8">
              Five Elements of Healing
            </h2>
            <p className="text-center text-lg text-ink/70 mb-12 max-w-3xl mx-auto">
              Nature Cure works with the five great elements (Pancha Mahabhutas) that constitute all of creation
            </p>
            <div className="grid md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-earth to-clay rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-earth mb-2">Earth</h3>
                <p className="text-sm text-ink/70">Mud therapy, clay treatments</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-blue-600 mb-2">Water</h3>
                <p className="text-sm text-ink/70">Hydrotherapy, water fasting</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-red-600 mb-2">Fire</h3>
                <p className="text-sm text-ink/70">Sun therapy, digestive fire</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-300 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-cyan-600 mb-2">Air</h3>
                <p className="text-sm text-ink/70">Breathing exercises, fresh air</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-purple-600 mb-2">Ether</h3>
                <p className="text-sm text-ink/70">Meditation, space, silence</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <ImagePlaceholder width={400} height={300} text="Dietary Therapy" className="rounded-t-xl" />
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-earth mb-3">Dietary Therapy</h3>
                <p className="text-ink/70 leading-relaxed">
                  Therapeutic nutrition using whole, plant-based foods to cleanse, nourish, and heal. Customized
                  diets for specific conditions and constitutional types.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <ImagePlaceholder width={400} height={300} text="Hydrotherapy" className="rounded-t-xl" />
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-earth mb-3">Hydrotherapy</h3>
                <p className="text-ink/70 leading-relaxed">
                  Water treatments including hip baths, foot baths, steam baths, and therapeutic water applications
                  to stimulate circulation and detoxification.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <ImagePlaceholder width={400} height={300} text="Mud Therapy" className="rounded-t-xl" />
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-earth mb-3">Mud Therapy</h3>
                <p className="text-ink/70 leading-relaxed">
                  Application of medicinal clay and mud packs to draw out toxins, reduce inflammation, and promote
                  healing of skin and internal organs.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <ImagePlaceholder width={600} height={400} text="Herbal Medicine" className="rounded-lg shadow-2xl" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-serif font-bold text-ink mb-6">
                Herbal Medicine
              </h2>
              <p className="text-lg text-ink/80 mb-4 leading-relaxed">
                Our herbal treatments draw from the rich traditions of Ayurveda and traditional medicine,
                using plants, roots, and natural substances to support the body's healing processes.
              </p>
              <p className="text-lg text-ink/80 mb-6 leading-relaxed">
                Each herb is carefully selected for its therapeutic properties and combined in formulations
                that address specific imbalances while supporting overall vitality and longevity.
              </p>
              <ul className="space-y-3 text-lg text-ink/80">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-earth mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Traditional Ayurvedic formulations
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-earth mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Fresh herb juices and decoctions
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-earth mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Therapeutic essential oils
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-earth mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Customized herbal preparations
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-ink mb-6">
                Fasting and Detoxification
              </h2>
              <p className="text-lg text-ink/80 mb-4 leading-relaxed">
                Therapeutic fasting is one of nature's most powerful healing tools. Under expert guidance,
                various fasting protocols help eliminate accumulated toxins and reset the body's systems.
              </p>
              <p className="text-lg text-ink/80 mb-6 leading-relaxed">
                From juice fasts to water fasts, each protocol is tailored to individual needs and health
                conditions, ensuring safe and effective detoxification and rejuvenation.
              </p>
              <div className="bg-sand rounded-lg p-6">
                <h4 className="font-semibold text-earth mb-3">Fasting Benefits:</h4>
                <ul className="space-y-2 text-ink/80">
                  <li>• Deep cellular detoxification</li>
                  <li>• Enhanced immunity and vitality</li>
                  <li>• Mental clarity and focus</li>
                  <li>• Digestive system rejuvenation</li>
                  <li>• Weight management and metabolism reset</li>
                </ul>
              </div>
            </div>
            <div>
              <ImagePlaceholder width={600} height={500} text="Detoxification" className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-sand to-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-ink mb-4">
              Conditions We Address
            </h2>
            <p className="text-xl text-ink/70 max-w-3xl mx-auto">
              Nature Cure offers effective treatment for a wide range of health concerns
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Digestive disorders',
              'Respiratory conditions',
              'Skin diseases',
              'Joint and muscle pain',
              'Stress and anxiety',
              'Metabolic disorders',
              'Chronic fatigue',
              'Hormonal imbalances'
            ].map((condition, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-leaf mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-ink font-medium">{condition}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-earth text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Learn Nature Cure
          </h2>
          <p className="text-xl text-mist/90 mb-8">
            Become a certified Nature Cure practitioner and help others heal naturally
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/education/nature-cure-ttc"
              className="px-8 py-3 bg-sun text-ink rounded-full font-semibold hover:bg-white transition-colors"
            >
              Nature Cure TTC
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-earth transition-colors"
            >
              Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
