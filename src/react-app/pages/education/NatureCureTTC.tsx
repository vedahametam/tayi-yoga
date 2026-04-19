import PageHero from '../../components/PageHero';
import { Link } from 'react-router-dom';

export default function NatureCureTTC() {
  return (
    <div>
      <PageHero
        title="Sadhana Nature Cure TTC"
        subtitle="Teacher Training Course Overview"
        imagePlaceholder="Nature Cure TTC Hero"
        height="medium"
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-ink mb-8">Introduction</h2>
          <p className="text-xl text-ink/80 leading-relaxed mb-6 font-medium">
            The Sadhana Nature Cure TTC is a holistic teacher training program that integrates nature-based healing principles with yogic science.
          </p>
          <p className="text-lg text-ink/80 leading-relaxed mb-8">
            It is designed to train practitioners in natural healing, lifestyle correction, and preventive health care, helping the body return to its original balance through simple, powerful, and natural methods.
          </p>
          <div className="inline-block bg-leaf/10 px-8 py-6 rounded-2xl border border-leaf/20 shadow-sm text-leaf">
            <h3 className="font-serif font-bold text-xl italic text-ink text-center">“This course is rooted in the understanding that nature itself is the ultimate healer.”</h3>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-sand to-mist">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-10 lg:p-16 shadow-xl relative overflow-hidden">
            {/* Background Element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-earth/5 rounded-bl-full pointer-events-none"></div>

            <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <h2 className="text-4xl font-serif font-bold text-ink mb-6">Course Vision</h2>
                <p className="text-lg text-ink/80 mb-6 leading-relaxed">
                  The vision of Sadhana Nature Cure TTC is to restore harmony between:
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-lg text-ink/90 font-medium"><span className="text-leaf mr-3 text-2xl">🌿</span> Body and nature</li>
                  <li className="flex items-center text-lg text-ink/90 font-medium"><span className="text-leaf mr-3 text-2xl">🌿</span> Mind and lifestyle</li>
                  <li className="flex items-center text-lg text-ink/90 font-medium"><span className="text-leaf mr-3 text-2xl">🌿</span> Diet and digestion</li>
                  <li className="flex items-center text-lg text-ink/90 font-medium"><span className="text-leaf mr-3 text-2xl">🌿</span> Energy and environment</li>
                </ul>
              </div>
              <div className="md:w-1/2 bg-leaf text-white p-8 rounded-2xl shadow-lg">
                <p className="text-xl leading-relaxed italic font-serif text-center">
                  It prepares teachers to guide individuals toward a drug-free, balanced, and sustainable way of living.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-ink mb-4">Course Structure</h2>
            <p className="text-xl text-ink/70">A comprehensive 9-module journey</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Foundations of Nature Cure',
                items: ['Principles of natural healing', 'Five elements (Pancha Mahabhutas) and the human body', 'Body’s self-healing mechanism', 'Acute vs chronic imbalance understanding'],
                icon: '1'
              },
              {
                title: 'Anatomy & Natural Physiology',
                items: ['Digestive system and elimination process', 'Liver, kidney, and detox pathways', 'Respiratory and circulatory system basics', 'Lifestyle impact on body functions'],
                icon: '2'
              },
              {
                title: 'Yogic Lifestyle Science',
                items: ['Daily routine (Dinacharya)', 'Sleep, rest, and natural rhythms', 'Stress and nervous system balance', 'Simple living principles'],
                icon: '3'
              },
              {
                title: 'Diet & Nutrition Therapy',
                items: ['Natural diet principles', 'Fasting and detox methods', 'Food combinations and digestion science', 'Seasonal eating practices'],
                icon: '4'
              },
              {
                title: 'Hydrotherapy & Natural Treatments',
                items: ['Water therapy principles', 'Hot & cold applications', 'Steam therapy basics', 'Natural cleansing techniques'],
                icon: '5'
              },
              {
                title: 'Yoga for Healing',
                items: ['Therapeutic asana practices', 'Pranayama for detox and energy balance', 'Relaxation and stress release techniques', 'Yoga for lifestyle diseases'],
                icon: '6'
              },
              {
                title: 'Mind & Emotional Healing',
                items: ['Stress and emotional imbalance understanding', 'Meditation for mental detox', 'Mind-body connection principles', 'Lifestyle psychology basics'],
                icon: '7'
              },
              {
                title: 'Detox & Cleansing Systems',
                items: ['Natural body detox methods', 'Digestive cleansing principles', 'Toxin accumulation awareness', 'Seasonal cleansing routines'],
                icon: '8'
              },
              {
                title: 'Teaching Methodology',
                items: ['How to conduct nature cure sessions', 'Lifestyle counseling basics', 'Patient observation and guidance', 'Building trust and healing environment'],
                icon: '9'
              }
            ].map((module, index) => (
              <div key={index} className="bg-sand/30 rounded-2xl p-8 border hover:border-leaf/50 transition-colors shadow-sm hover:shadow-md">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-leaf text-white rounded-full flex items-center justify-center font-bold text-lg mr-4 shrink-0 shadow-sm">{module.icon}</div>
                  <h3 className="text-xl font-bold text-ink leading-tight">{module.title}</h3>
                </div>
                <ul className="space-y-3">
                  {module.items.map((item, i) => (
                    <li key={i} className="flex items-start text-ink/80 text-sm">
                      <span className="text-leaf mr-2 text-lg leading-none">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-earth to-clay text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-8">Course Outcomes</h2>
              <p className="text-xl text-white/90 mb-8 font-medium">After completion of Sadhana Nature Cure TTC, students will be able to:</p>
              <ul className="space-y-4">
                <li className="flex items-start text-lg"><span className="text-sun mr-3 font-bold">✓</span> Understand and apply natural healing principles</li>
                <li className="flex items-start text-lg"><span className="text-sun mr-3 font-bold">✓</span> Guide lifestyle correction programs</li>
                <li className="flex items-start text-lg"><span className="text-sun mr-3 font-bold">✓</span> Teach basic yoga for health and recovery</li>
                <li className="flex items-start text-lg"><span className="text-sun mr-3 font-bold">✓</span> Support detox and preventive health systems</li>
                <li className="flex items-start text-lg"><span className="text-sun mr-3 font-bold">✓</span> Promote a natural, balanced way of living</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-xl">
              <h2 className="text-3xl font-serif font-bold mb-6 text-sand">Core Philosophy</h2>
              <p className="text-white/90 italic mb-6">This course is based on a simple truth:</p>
              <div className="space-y-6">
                <div className="border-l-4 border-sun pl-4 py-1">
                  <p className="font-bold text-lg text-white">Nature heals when given the right conditions</p>
                </div>
                <div className="border-l-4 border-sun pl-4 py-1">
                  <p className="font-bold text-lg text-white">Disease is imbalance, not destruction</p>
                </div>
                <div className="border-l-4 border-sun pl-4 py-1">
                  <p className="font-bold text-lg text-white">The body is designed to restore itself</p>
                </div>
                <div className="border-l-4 border-sun pl-4 py-1">
                  <p className="font-bold text-lg text-white">Lifestyle is the foundation of health</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-leaf text-white text-center relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 opacity-10 pointer-events-none flex justify-center items-center">
          <div className="w-[800px] h-[800px] rounded-full border-2 border-white/20 blur-md"></div>
        </div>
        
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl font-serif font-bold text-sand mb-8 leading-tight">
            Sadhana Nature Cure TTC is not just a course — <br/>
            it is a return to natural living.
          </h2>
          <div className="w-24 h-1 bg-sun mx-auto mb-10 border-none"></div>
          <p className="text-xl text-white/90 leading-relaxed font-serif italic mb-12 flex justify-center">
            It trains teachers to become guides of healing, balance,<br/> and simplicity in a modern world of complexity.
          </p>
          
          <div className="mt-8">
            <Link
              to="/contact"
              className="px-10 py-4 bg-sand text-ink rounded-full font-bold text-lg hover:bg-white transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
            >
              Start Natural Healing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
