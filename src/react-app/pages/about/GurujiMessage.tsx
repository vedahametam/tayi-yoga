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
                "Let us join hands together.
              </p>
              <p className="text-lg text-ink/80 mb-6 leading-relaxed">
                Let us come together as the children of Nature, to rebuild our connection with the Universal Mother.
              </p>
              <p className="text-lg text-ink/80 mb-6 leading-relaxed">
                This sacred space will be created using ancient Vedic methods, expressed through pure scientific principles and precise geometric patterns — without modern industrial materials such as iron or concrete. Instead, it will be formed only from natural elements like earth (mud), stone, and lime, allowing the structure to live, breathe, and resonate with pranic energy.
              </p>
              <p className="text-lg text-ink/80 mb-6 leading-relaxed">
                Every dimension will follow sacred geometry, aligned with the five elements and the seven chakras, so the space itself becomes a living field of healing.
              </p>
              <p className="text-lg text-ink/80 mb-6 leading-relaxed">
                This is not a religious structure.<br />
                This is not a temple of belief.
              </p>
              <p className="text-lg text-ink/80 mb-6 leading-relaxed">
                It is a space for the Mother — where all her children can enter without hesitation, beyond religion, nationality, or identity.
              </p>
              <p className="text-lg text-ink/80 mb-6 leading-relaxed">
                Yoga today is universal.<br />
                Nature is universal.<br />
                The Mother belongs to all.
              </p>
              <p className="text-lg text-ink/80 mb-6 leading-relaxed">
                Through this vision, we aim to upgrade yoga responsibly for future generations, creating a place where science, nature, geometry, and life come together in harmony.
              </p>
              <p className="text-lg text-ink/80 mb-6 leading-relaxed">
                Let us join hands together —<br />
                to allow trees, birds, animals, and human beings to coexist again,<br />
                to restore balance,<br />
                and to offer healing not to one community,<br />
                but to the entire universe.
              </p>
              <p className="text-xl text-ink/90 mt-8 italic text-right">
                She is the Universal Mother.<br />
                <span className="font-serif font-bold">And this space is for all her children"</span>
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
