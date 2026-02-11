import PageHero from '../../components/PageHero';
import ImagePlaceholder from '../../components/ImagePlaceholder';
import { Link } from 'react-router-dom';

export default function EducationSupport() {
  return (
    <div>
      <PageHero
        title="Education Support"
        subtitle="Empowering communities through knowledge and opportunity"
        imagePlaceholder="Education Support Hero"
        height="medium"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 className="text-4xl font-serif font-bold text-ink mb-6">
              Education as a Path to Liberation
            </h2>
            <p className="text-xl text-ink/80 leading-relaxed">
              We believe that education is not just academic learning, but a holistic development of body, mind, and spirit.
              Through our education support initiatives, we provide opportunities for underprivileged children and youth
              to access quality education and spiritual guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-sand rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-earth rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-earth mb-3">Scholarships</h3>
              <p className="text-ink/70">
                Providing full and partial scholarships to deserving students for academic and yoga education
              </p>
            </div>

            <div className="bg-sand rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-leaf rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-leaf mb-3">Schools</h3>
              <p className="text-ink/70">
                Supporting rural schools with infrastructure, teaching materials, and yoga programs
              </p>
            </div>

            <div className="bg-sand rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-clay rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-clay mb-3">Skill Training</h3>
              <p className="text-ink/70">
                Vocational training programs to empower youth with practical skills and livelihood opportunities
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <ImagePlaceholder width={600} height={400} text="Students Learning" className="rounded-lg shadow-2xl" />
            </div>
            <div>
              <h3 className="text-3xl font-serif font-bold text-ink mb-6">
                Our Impact
              </h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="text-4xl font-bold text-earth mr-6">500+</div>
                  <div>
                    <p className="font-semibold text-ink">Students Supported</p>
                    <p className="text-sm text-ink/70">Through scholarships and sponsorships</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-4xl font-bold text-leaf mr-6">25</div>
                  <div>
                    <p className="font-semibold text-ink">Rural Schools</p>
                    <p className="text-sm text-ink/70">Receiving ongoing support and programs</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-4xl font-bold text-clay mr-6">200+</div>
                  <div>
                    <p className="font-semibold text-ink">Youth Trained</p>
                    <p className="text-sm text-ink/70">In vocational skills and yoga teaching</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-sand to-mist rounded-2xl p-12">
            <h3 className="text-3xl font-serif font-bold text-ink text-center mb-8">
              Programs We Support
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6">
                <h4 className="text-xl font-semibold text-earth mb-3">Free Yoga Classes</h4>
                <p className="text-ink/70 mb-4">
                  Daily yoga classes for school children in underserved communities, promoting physical health and mental well-being.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h4 className="text-xl font-semibold text-earth mb-3">Library Development</h4>
                <p className="text-ink/70 mb-4">
                  Establishing libraries in rural schools with books on yoga, spirituality, science, and general knowledge.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h4 className="text-xl font-semibold text-earth mb-3">Teacher Training</h4>
                <p className="text-ink/70 mb-4">
                  Free yoga teacher training for aspiring teachers from economically disadvantaged backgrounds.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h4 className="text-xl font-semibold text-earth mb-3">Nutritional Support</h4>
                <p className="text-ink/70 mb-4">
                  Providing healthy, sattvic meals to students and education on proper nutrition and lifestyle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-earth text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-serif font-bold mb-4">
            Sponsor a Student's Education
          </h3>
          <p className="text-lg text-mist/90 mb-8">
            Your contribution can transform a life through the gift of education and yogic wisdom
          </p>
          <Link
            to="/divine-project/donation"
            className="inline-block px-8 py-3 bg-sun text-ink rounded-full font-semibold hover:bg-white transition-colors"
          >
            Make a Difference Today
          </Link>
        </div>
      </section>
    </div>
  );
}
