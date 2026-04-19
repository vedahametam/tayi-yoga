import PageHero from '../../components/PageHero';

export default function SadhanaYogaCulture() {
  return (
    <div>
      <PageHero
        title="Sadhana Yoga Culture"
        subtitle="Yoga is the Way of Life"
        imagePlaceholder="Sadhana Yoga Culture Hero"
        height="medium"
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-earth font-bold tracking-widest text-sm uppercase mb-4">By Sadhana Yogi Venkataram Hemanth Kumar</h2>
            <p className="text-2xl font-serif text-ink leading-relaxed mb-8">
              At Sadhanayogalaya, we do not run only a yoga school. <br/>
              <span className="font-bold text-earth">We live in a Tayi Yoga culture.</span>
            </p>
            <p className="text-xl text-ink/80 leading-relaxed mb-6">
              This is a family space and a sacred living school. Everyone who enters becomes part of our spiritual lineage.
            </p>
            <div className="inline-block bg-sand/50 px-8 py-4 rounded-xl border border-earth/20 shadow-sm mt-4">
              <p className="text-lg font-medium text-ink italic">"Students are not customers. They are disciples walking the path of Sadhana."</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-mist to-sand">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 bg-white rounded-3xl p-10 lg:p-16 shadow-xl border border-earth/10">
            <div>
              <h2 className="text-3xl font-serif font-bold text-ink mb-6">Tayi Yoga Understanding</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start text-ink/80"><span className="text-earth mr-3 text-xl leading-none">•</span> <span className="font-medium">Every action is learning</span></div>
                <div className="flex items-start text-ink/80"><span className="text-earth mr-3 text-xl leading-none">•</span> <span className="font-medium">Every responsibility is yoga</span></div>
                <div className="flex items-start text-ink/80"><span className="text-earth mr-3 text-xl leading-none">•</span> <span className="font-medium">Every service becomes spiritual merit (Punya)</span></div>
              </div>
              <p className="text-lg text-ink/80 leading-relaxed mb-4">
                Whatever you do inside this sacred space — cleaning, arranging, teaching, learning, welcoming — all of it contributes directly to your spiritual growth.
              </p>
              <p className="text-lg font-bold text-earth">Nothing is small. Nothing is wasted.</p>
              <p className="text-lg font-medium text-ink/90 mt-2 italic">Right action done with awareness becomes Sadhana.</p>
            </div>

            <div className="bg-gradient-to-br from-earth to-clay rounded-2xl p-10 text-white shadow-inner">
              <h2 className="text-3xl font-serif font-bold text-white mb-6">Law of Merit (Punya)</h2>
              <p className="mb-6 opacity-90 text-lg">In Tayi Sadhana Yoga culture:</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start border-b border-white/20 pb-3"><span className="text-sun mr-3 shrink-0">❖</span> <span>Work done with ego gives tiredness</span></li>
                <li className="flex items-start border-b border-white/20 pb-3"><span className="text-sun mr-3 shrink-0">❖</span> <span>Work done with awareness gives merit</span></li>
                <li className="flex items-start border-b border-white/20 pb-3"><span className="text-sun mr-3 shrink-0">❖</span> <span>Work done with devotion gives inner growth</span></li>
              </ul>
              <p className="text-white/90 leading-relaxed mb-4">
                Each selfless action adds subtle energy to your system. This merit cleans past impressions, strengthens discipline, sharpens intelligence, calms emotions, and prepares the body and mind for higher yoga practices.
              </p>
              <p className="font-bold text-sun text-lg mt-4 border-l-4 border-sun pl-4">
                What you give to the space returns to you multiplied.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sm tracking-widest text-earth font-bold uppercase mb-4">Teaching of Yoga Guru Hemanth</h2>
          <h3 className="text-5xl font-serif font-bold text-ink mb-12">The AUM Energy</h3>
          
          <div className="text-2xl font-serif italic text-ink/80 mb-12">"Every action is AUM."</div>
          
          <div className="grid gap-8 text-left max-w-3xl mx-auto">
            <div className="bg-sand/30 rounded-2xl p-8 border border-earth/20 flex flex-col md:flex-row gap-6 items-start hover:shadow-lg transition-transform transform hover:-translate-y-1">
              <div className="w-16 h-16 shrink-0 bg-earth rounded-full flex justify-center items-center text-3xl font-serif font-bold text-white shadow-md">A</div>
              <div>
                <h4 className="text-xl font-bold text-ink mb-2">Creation Energy</h4>
                <p className="text-ink/80 leading-relaxed">When action is done with full attention, creativity is born.</p>
              </div>
            </div>

            <div className="bg-sand/30 rounded-2xl p-8 border border-earth/20 flex flex-col md:flex-row gap-6 items-start hover:shadow-lg transition-transform transform hover:-translate-y-1">
              <div className="w-16 h-16 shrink-0 bg-leaf rounded-full flex justify-center items-center text-3xl font-serif font-bold text-white shadow-md">U</div>
              <div>
                <h4 className="text-xl font-bold text-ink mb-2">Preservation Energy</h4>
                <p className="text-ink/80 leading-relaxed">When action is done with love, care, and wisdom, life is protected and nourished.</p>
              </div>
            </div>

            <div className="bg-sand/30 rounded-2xl p-8 border border-earth/20 flex flex-col md:flex-row gap-6 items-start hover:shadow-lg transition-transform transform hover:-translate-y-1">
              <div className="w-16 h-16 shrink-0 bg-clay rounded-full flex justify-center items-center text-3xl font-serif font-bold text-white shadow-md">M</div>
              <div>
                <h4 className="text-xl font-bold text-ink mb-2">Destruction Energy</h4>
                <p className="text-ink/80 leading-relaxed">When action is careless, lazy, or ego-based, it damages both outer space and inner being.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 inline-block bg-ink text-sand px-8 py-4 rounded-full font-medium text-lg shadow-md tracking-wide">
            A true disciple learns to act mainly through A and U energies.
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-mist to-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-ink mb-6">Responsibilities of a Disciple</h2>
            <p className="text-xl text-ink/70">The Gurukula Discipline</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border-t-4 border-earth flex flex-col h-full hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-ink mb-4 flex items-center"><span className="w-8 h-8 rounded-full bg-earth/10 text-earth flex items-center justify-center mr-3 text-sm">1</span> Sacred Space Care</h3>
              <p className="text-ink/80 mb-4 text-sm font-medium italic">The yoga shala is not a building. It is a living energy field.</p>
              <ul className="mb-6 space-y-2 text-ink/80 text-sm flex-grow">
                <li>• Take care of the space as your own body</li>
                <li>• Love it selflessly</li>
                <li>• Maintain cleanliness and order daily</li>
              </ul>
              <div className="bg-sand/50 p-4 rounded-lg">
                <p className="text-sm font-bold text-earth mb-2">Cleaning Sequence:</p>
                <ol className="list-decimal list-inside text-sm text-ink/80 space-y-1 mb-3">
                  <li>Dust cleaning</li>
                  <li>Water cleaning</li>
                  <li>Proper arrangement of all items</li>
                </ol>
                <p className="text-xs text-ink/70 italic border-t border-earth/20 pt-2">Correct arrangement creates harmony. Harmony supports deeper practice.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border-t-4 border-leaf flex flex-col h-full hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-ink mb-4 flex items-center"><span className="w-8 h-8 rounded-full bg-leaf/10 text-leaf flex items-center justify-center mr-3 text-sm">2</span> Personal Purity</h3>
              <ul className="space-y-4 text-ink/80 flex-grow">
                <li className="flex items-start"><span className="text-leaf mr-2">•</span> Wear neat and clean clothes</li>
                <li className="flex items-start"><span className="text-leaf mr-2">•</span> Maintain cleanliness of body and mind</li>
                <li className="flex items-start"><span className="text-leaf mr-2">•</span> Speak gently inside the space</li>
                <li className="flex items-start"><span className="text-leaf mr-2">•</span> Walk, sit, and move with awareness</li>
              </ul>
              <div className="mt-8 border-l-4 border-leaf pl-4 py-2">
                <p className="text-sm font-bold text-ink">Your presence itself should bring calmness to others.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border-t-4 border-clay flex flex-col h-full hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-ink mb-4 flex items-center"><span className="w-8 h-8 rounded-full bg-clay/10 text-clay flex items-center justify-center mr-3 text-sm">3</span> Seva (Selfless Service)</h3>
              <p className="text-ink/80 mb-4 text-sm font-medium italic">Seva is not work. Seva is yoga in action.</p>
              <ul className="space-y-3 text-ink/80 mb-6 flex-grow">
                <li className="flex items-start"><span className="text-clay mr-2">•</span> Welcome students and guests with warmth</li>
                <li className="flex items-start"><span className="text-clay mr-2">•</span> Serve without expectation</li>
                <li className="flex items-start"><span className="text-clay mr-2">•</span> Serve without comparison</li>
              </ul>
              <div className="bg-clay/5 p-4 rounded-lg">
                <p className="text-sm text-ink/80 italic leading-relaxed">When service is done without "I" and "mine," the heart naturally expands. This expansion is spiritual growth.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border-t-4 border-sun flex flex-col h-full hover:shadow-xl transition-shadow lg:col-span-1 lg:col-start-1">
              <h3 className="text-xl font-bold text-ink mb-4 flex items-center"><span className="w-8 h-8 rounded-full bg-sun/10 text-sun flex items-center justify-center mr-3 text-sm">4</span> Time Discipline</h3>
              <p className="text-ink/80 mb-4 text-sm font-medium italic">Time discipline is life discipline.</p>
              <ul className="space-y-2 text-ink/80 mb-6 flex-grow">
                <li>• Fixed wake-up time</li>
                <li>• Fixed sleep time</li>
                <li>• No delay, no excuses</li>
              </ul>
              <div className="bg-sand/50 p-4 rounded-lg">
                <p className="text-sm font-bold text-earth mb-2 underline decoration-sun underline-offset-4">Daily at 8:00 AM</p>
                <p className="text-sm text-ink/80 mb-3">One full hour dedicated to cleaning and maintaining the school.</p>
                <p className="text-xs text-ink/70 italic border-t border-sun/20 pt-2">This hour is powerful — because the energy you invest becomes part of the school, and the school slowly becomes part of you.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border-t-4 border-ink flex flex-col h-full hover:shadow-xl transition-shadow lg:col-span-2">
              <h3 className="text-xl font-bold text-ink mb-4 flex items-center"><span className="w-8 h-8 rounded-full bg-ink/10 text-ink flex items-center justify-center mr-3 text-sm">5</span> Gurukula Awareness</h3>
              <p className="text-ink/80 mb-6 font-medium italic">In Gurukula culture:</p>
              <div className="grid sm:grid-cols-2 gap-6 flex-grow">
                <div className="flex items-start text-ink/80 bg-mist/50 p-4 rounded-xl">
                  <span className="text-2xl mr-3 opacity-50">🙏</span> Teacher is respected as guide, not authority
                </div>
                <div className="flex items-start text-ink/80 bg-mist/50 p-4 rounded-xl">
                  <span className="text-2xl mr-3 opacity-50">⚖️</span> Discipline is followed with understanding, not fear
                </div>
                <div className="flex items-start text-ink/80 bg-mist/50 p-4 rounded-xl">
                  <span className="text-2xl mr-3 opacity-50">🤫</span> Silence is valued more than unnecessary words
                </div>
                <div className="flex items-start text-ink/80 bg-mist/50 p-4 rounded-xl">
                  <span className="text-2xl mr-3 opacity-50">👁️</span> Observation is higher than questioning
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-lg font-bold text-ink">By living this way, the disciple matures naturally.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-ink text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none flex justify-center items-center">
          <div className="w-[1000px] h-[1000px] rounded-full border border-white/20 blur-sm"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl font-serif font-bold text-sand mb-12 border-b border-earth/30 pb-6 inline-block">Final Understanding</h2>
          
          <p className="text-xl text-mist/90 font-medium italic mb-10">
            Tayi Sadhana Yoga is not only asana and pranayama.
          </p>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 mb-12 shadow-2xl">
            <p className="text-2xl text-sand mb-8 font-serif leading-relaxed">It is...</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center text-lg text-white mb-10">
              <div className="flex flex-col items-center">How you <span className="font-bold text-earth mt-1 uppercase tracking-widest">walk</span></div>
              <div className="flex flex-col items-center">How you <span className="font-bold text-leaf mt-1 uppercase tracking-widest">clean</span></div>
              <div className="flex flex-col items-center">How you <span className="font-bold text-sun mt-1 uppercase tracking-widest">speak</span></div>
              <div className="flex flex-col items-center">How you <span className="font-bold text-clay mt-1 uppercase tracking-widest">care</span></div>
              <div className="flex flex-col items-center">How you <span className="font-bold text-sand mt-1 uppercase tracking-widest">serve</span></div>
            </div>
            
            <p className="text-2xl font-serif text-white leading-relaxed italic border-t border-white/10 pt-8 mt-2">
              "When daily life becomes yoga, life itself becomes your teacher."
            </p>
          </div>
          
          <p className="text-white/70 mb-16 font-medium">
            This is the path shown by Yoga Guru Hemanth and lived through Sadhana Yoga Culture.
          </p>

          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl text-earth font-bold tracking-widest uppercase mb-6">Blessings</h3>
            <p className="text-lg text-mist leading-relaxed italic mb-6">
              May every action you perform with awareness and love bring you merit, peace, and spiritual growth.
            </p>
            <p className="text-lg text-mist leading-relaxed italic mb-10">
              May the sacred space of Hemanth Yoga Academy inspire your heart and mind, and may your journey in Sadhana Yoga awaken your inner light and wisdom.
            </p>
            <p className="text-2xl font-serif text-sand font-bold">Om Shanti Shanti Shanti 🌿</p>
          </div>
        </div>
      </section>
    </div>
  );
}
