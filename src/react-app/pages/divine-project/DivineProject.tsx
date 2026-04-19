import PageHero from '../../components/PageHero';
import ImagePlaceholder from '../../components/ImagePlaceholder';

export default function DivineProject() {
  return (
    <div>
      <PageHero
        title="Divine Project"
        subtitle="The Universal Mother and the Source of All Life"
        imagePlaceholder="Divine Project Hero Image"
        height="medium"
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-sand to-mist rounded-2xl p-12 shadow-lg mb-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-ink/80 mb-6 leading-relaxed">
                In Tayi Sadhana Yoga, we understand energy as a manifestation of the Divine Mother, the source of all life. She is the universal mother, and we are all her children. Yoga Guru Hemanth emphasizes that God's glory, cosmic energy, and supreme power are best expressed through the motherhood aspect of the Divine—a force of peace, love, and guidance that leads us back to the source of life.
              </p>

              <div className="flex justify-center mb-8 mt-8">
                 <ImagePlaceholder width={600} height={400} text="Divine Mother Shrine" className="rounded-xl shadow-xl" />
              </div>

              <p className="text-lg text-ink/80 mb-6 leading-relaxed">
                The Divine Mother represents the feminine aspect of the primal creator, the spiritual spark within all life. In yogic philosophy, she is associated with supreme goddesses such as Adi Parashakti and Bhagavathi. The Divine Mother embodies true power through love, safety, and transcendental consciousness, in contrast to ego-driven power that seeks dominance or control. She is also identified with Shakti, the active force of the Divine, present in all creation.
              </p>

              <p className="text-lg text-ink/80 mb-6 leading-relaxed">
                Yoga Guru Hemanth established Sadhana Yogalaya in the image and energy of the Divine Mother—a sacred space that radiates love, peace, and life energy. He consecrated her presence using seven chakras, geometric forms, and five elemental materials, creating an energy that practitioners can experience simply by being in her presence.
              </p>

              <p className="text-lg text-ink/80 mb-6 leading-relaxed">
                The Divine Mother mediates between the divinity of nature and the human individual. She embodies love and kindness, but can also use divine force to awaken or remove obstacles, guiding individuals toward spiritual growth. Through Tayi Sadhana Yoga or feminine-focused practices such as Goddess Yoga, practitioners can connect deeply with her energy, experiencing guidance, protection, and inner transformation.
              </p>

              <p className="text-lg text-ink/80 mb-6 leading-relaxed">
                According to Guru Hemanth, the creation of the Mother shrine serves a unifying purpose: it allows people of all religions and backgrounds to come together under one roof, practicing inner spiritual exploration and connecting with the universal energy. This reflects the vision of "one world, one family," emphasizing that Tayi Sadhana Yoga belongs to all human beings, transcending divisions and fostering unity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
