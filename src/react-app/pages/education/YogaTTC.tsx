import PageHero from '../../components/PageHero';
import { Link } from 'react-router-dom';

export default function YogaTTC() {
  return (
    <div>
      <PageHero
        title="Tayi Yoga Mastery Life System"
        subtitle="12 Days • 12 Months • 12 Years | One Path. Three Levels. Complete Human Transformation."
        imagePlaceholder="Tayi Yoga Mastery Hero"
        height="medium"
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-2xl text-ink/90 font-serif leading-relaxed mb-8">
            Tayi Yoga Mastery Life is a structured system of human evolution designed to rebuild the body, stabilize the mind, and expand consciousness through progressive stages of practice.
          </p>
          <div className="inline-block bg-sand/50 px-8 py-6 rounded-2xl border border-earth/20 shadow-sm">
            <p className="text-lg font-medium text-earth mb-2">It is not a fitness program.</p>
            <p className="text-lg font-medium text-earth mb-4">It is not a short course.</p>
            <p className="text-xl font-bold font-serif text-ink">It is a complete mastery path for modern human transformation.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-sand to-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-ink text-center mb-16">The Three Levels of Tayi Yoga</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Level 1 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-earth flex flex-col h-full transform transition hover:-translate-y-2 hover:shadow-2xl">
              <div className="p-8 flex-grow">
                <div className="text-earth font-bold tracking-widest text-sm uppercase mb-2">Level 1</div>
                <h3 className="text-2xl font-serif font-bold text-ink mb-2">12 Days Tayi Yoga</h3>
                <h4 className="text-lg text-earth/80 font-medium mb-6">Foundation Reset Program</h4>
                <p className="text-ink/80 leading-relaxed mb-6">
                  The 12 Days Tayi Yoga is an intensive foundation experience designed to reset the entire human system. It introduces the core principles of body alignment, breath awareness, and mental stability.
                </p>
                <h5 className="font-bold text-ink mb-4">What You Develop:</h5>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start"><span className="text-earth mr-2">•</span><span className="text-ink/80">Basic musculoskeletal alignment awareness</span></li>
                  <li className="flex items-start"><span className="text-earth mr-2">•</span><span className="text-ink/80">Foundational breath control practices</span></li>
                  <li className="flex items-start"><span className="text-earth mr-2">•</span><span className="text-ink/80">Nervous system calming and grounding</span></li>
                  <li className="flex items-start"><span className="text-earth mr-2">•</span><span className="text-ink/80">Mental clarity and focus restoration</span></li>
                  <li className="flex items-start"><span className="text-earth mr-2">•</span><span className="text-ink/80">Daily discipline and body awareness habits</span></li>
                </ul>
              </div>
              <div className="bg-sand/30 p-6 border-t border-earth/10">
                <h5 className="font-bold text-earth mb-2">Outcome:</h5>
                <p className="text-ink/80 text-sm">A complete physical and mental reset that prepares the practitioner for deeper transformation.</p>
              </div>
            </div>

            {/* Level 2 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-leaf flex flex-col h-full transform transition hover:-translate-y-2 hover:shadow-2xl">
              <div className="p-8 flex-grow">
                <div className="text-leaf font-bold tracking-widest text-sm uppercase mb-2">Level 2</div>
                <h3 className="text-2xl font-serif font-bold text-ink mb-2">12 Months Tayi Yoga</h3>
                <h4 className="text-lg text-leaf/80 font-medium mb-6">Transformation & Stabilization Program</h4>
                <p className="text-ink/80 leading-relaxed mb-6">
                  The 12 Months Tayi Yoga is a structured one-year discipline designed to transform the body and stabilize the inner system. It builds strength, consistency, and internal balance through progressive training.
                </p>
                <h5 className="font-bold text-ink mb-4">What You Develop:</h5>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start"><span className="text-leaf mr-2">•</span><span className="text-ink/80">Musculoskeletal strength and structural alignment</span></li>
                  <li className="flex items-start"><span className="text-leaf mr-2">•</span><span className="text-ink/80">Advanced pranayama and energy control practices</span></li>
                  <li className="flex items-start"><span className="text-leaf mr-2">•</span><span className="text-ink/80">Digestive and metabolic system strengthening</span></li>
                  <li className="flex items-start"><span className="text-leaf mr-2">•</span><span className="text-ink/80">Emotional stability and mental focus</span></li>
                  <li className="flex items-start"><span className="text-leaf mr-2">•</span><span className="text-ink/80">Foundational teaching and practice discipline</span></li>
                </ul>
              </div>
              <div className="bg-sand/30 p-6 border-t border-leaf/10">
                <h5 className="font-bold text-leaf mb-2">Outcome:</h5>
                <p className="text-ink/80 text-sm">A stable, strong, and transformed practitioner with long-term physical and mental balance.</p>
              </div>
            </div>

            {/* Level 3 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-clay flex flex-col h-full transform transition hover:-translate-y-2 hover:shadow-2xl">
              <div className="p-8 flex-grow">
                <div className="text-clay font-bold tracking-widest text-sm uppercase mb-2">Level 3</div>
                <h3 className="text-2xl font-serif font-bold text-ink mb-2">12 Years Tayi Yoga</h3>
                <h4 className="text-lg text-clay/80 font-medium mb-6">Mastery & Conscious Evolution Path</h4>
                <p className="text-ink/80 leading-relaxed mb-6">
                  The 12 Years Tayi Yoga is a lifelong mastery discipline rooted in Sanātana Dharma principles. It is a complete system of human evolution — from body mastery to consciousness expansion.
                </p>
                <h5 className="font-bold text-ink mb-4">Mastery Structure:</h5>
                <ul className="space-y-4 mb-8">
                  <li>
                    <strong className="text-clay block mb-1">Phase 1: Physical Body Mastery (Years 1–3)</strong>
                    <span className="text-ink/80 text-sm">Musculoskeletal system alignment, joint intelligence, and physical stability</span>
                  </li>
                  <li>
                    <strong className="text-clay block mb-1">Phase 2: Organ & Breath Mastery (Years 4–8)</strong>
                    <span className="text-ink/80 text-sm">Internal system regulation, breath precision, and energy balance</span>
                  </li>
                  <li>
                    <strong className="text-clay block mb-1">Phase 3: Spine & Consciousness Mastery (Years 9–12)</strong>
                    <span className="text-ink/80 text-sm">Nervous system refinement, deep awareness, and inner silence</span>
                  </li>
                  <li>
                    <strong className="text-clay block mb-1">Phase 4: Integration State</strong>
                    <span className="text-ink/80 text-sm">Full stability in life, teaching mastery, and leadership presence</span>
                  </li>
                </ul>
              </div>
              <div className="bg-sand/30 p-6 border-t border-clay/10">
                <h5 className="font-bold text-clay mb-2">Outcome:</h5>
                <p className="text-ink/80 text-sm">A fully integrated human being with physical strength, emotional neutrality, mental clarity, and teaching authority.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-ink mb-6">What Makes Tayi Yoga Unique</h2>
              <p className="text-lg text-ink/80 mb-6 leading-relaxed">
                Tayi Yoga is designed for the modern world where human systems are under stress from:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-ink/80"><span className="text-earth mr-3 font-bold">✗</span> Lifestyle imbalance</li>
                <li className="flex items-center text-ink/80"><span className="text-earth mr-3 font-bold">✗</span> Reduced physical resilience</li>
                <li className="flex items-center text-ink/80"><span className="text-earth mr-3 font-bold">✗</span> Mental overload and distraction</li>
                <li className="flex items-center text-ink/80"><span className="text-earth mr-3 font-bold">✗</span> Emotional instability</li>
                <li className="flex items-center text-ink/80"><span className="text-earth mr-3 font-bold">✗</span> Weak internal energy systems</li>
              </ul>
              <p className="text-xl font-medium text-earth leading-relaxed">
                Tayi Yoga restores the human system through structured mastery progression.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-earth to-clay rounded-3xl p-10 text-white shadow-xl">
              <h3 className="text-2xl font-serif font-bold mb-8">Core Transformation Principles</h3>
              <p className="mb-6 opacity-90">Across all levels, the system builds:</p>
              <ul className="space-y-4 mb-8 font-medium">
                <li className="flex items-center border-b border-white/20 pb-3"><span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-4">✓</span> Stability over instability</li>
                <li className="flex items-center border-b border-white/20 pb-3"><span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-4">✓</span> Awareness over distraction</li>
                <li className="flex items-center border-b border-white/20 pb-3"><span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-4">✓</span> Strength over weakness</li>
                <li className="flex items-center border-b border-white/20 pb-3"><span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-4">✓</span> Clarity over confusion</li>
                <li className="flex items-center border-b border-white/20 pb-3"><span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-4">✓</span> Mastery over dependency</li>
              </ul>
              <div className="text-center bg-white/10 py-3 rounded-lg font-bold tracking-widest mt-6">
                UNION WITH NATURE
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-ink text-white text-center relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 opacity-10 pointer-events-none flex justify-center items-center">
          <div className="w-[800px] h-[800px] rounded-full border border-white/20 blur-sm"></div>
        </div>
        
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-5xl font-serif font-bold text-sand mb-8">
            12 Days. 12 Months. 12 Years.
          </h2>
          <p className="text-2xl text-mist/90 mb-10 font-medium">
            One system. Three levels. One complete path.
          </p>
          <div className="w-24 h-1 bg-earth mx-auto mb-10 border-none"></div>
          <p className="text-xl text-white/90 leading-relaxed italic font-serif">
            "Tayi Yoga is not just practice — <br />
            it is a structured journey of human mastery and evolution."
          </p>
          
          <div className="mt-16">
            <Link
              to="/contact"
              className="px-10 py-4 bg-earth text-white rounded-full font-bold text-lg hover:bg-clay transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
            >
              Begin Your Journey
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
