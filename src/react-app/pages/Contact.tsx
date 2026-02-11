import { useState } from 'react';
import PageHero from '../components/PageHero';
import ImagePlaceholder from '../components/ImagePlaceholder';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out with any questions or to begin your journey"
        imagePlaceholder="Contact Hero"
        height="medium"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-4xl font-serif font-bold text-ink mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-ink/80 mb-8 leading-relaxed">
                Whether you have questions about our programs, want to schedule a visit, or are ready to
                begin your training, we're here to support you on your journey.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-earth rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-earth mb-2">Visit Us</h3>
                    <p className="text-ink/70">
                      Tayi Sadhana Yoga Ashram<br />
                      [Address Line 1]<br />
                      [City, State, PIN Code]<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-leaf rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-leaf mb-2">Call Us</h3>
                    <p className="text-ink/70">
                      Phone: +91 [Phone Number]<br />
                      WhatsApp: +91 [WhatsApp Number]<br />
                      Available: 9 AM - 6 PM IST
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-clay rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-clay mb-2">Email Us</h3>
                    <p className="text-ink/70">
                      General: info@tayiyoga.org<br />
                      Admissions: admissions@tayiyoga.org<br />
                      Donations: donate@tayiyoga.org
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-sun rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sun mb-2">Follow Us</h3>
                    <div className="flex gap-3">
                      <a href="#" className="text-ink/70 hover:text-earth transition-colors">Facebook</a>
                      <a href="#" className="text-ink/70 hover:text-earth transition-colors">Instagram</a>
                      <a href="#" className="text-ink/70 hover:text-earth transition-colors">YouTube</a>
                      <a href="#" className="text-ink/70 hover:text-earth transition-colors">Twitter</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <ImagePlaceholder width={600} height={400} text="Ashram Location Map" className="rounded-lg shadow-lg" />
              </div>
            </div>

            <div className="bg-gradient-to-br from-sand to-mist rounded-2xl p-8 shadow-xl">
              <h3 className="text-3xl font-serif font-bold text-ink text-center mb-8">
                Send Us a Message
              </h3>

              {submitted && (
                <div className="mb-6 p-4 bg-leaf/10 border border-leaf rounded-lg">
                  <p className="text-leaf font-semibold text-center">
                    Thank you for your message! We'll get back to you within 24-48 hours.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-ink mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-earth/30 focus:border-earth focus:outline-none bg-white"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-ink mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-earth/30 focus:border-earth focus:outline-none bg-white"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-ink mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-earth/30 focus:border-earth focus:outline-none bg-white"
                      placeholder="+91 00000 00000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-ink mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-earth/30 focus:border-earth focus:outline-none bg-white"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="yoga-ttc">Yoga Teacher Training</option>
                    <option value="nature-cure-ttc">Nature Cure Training</option>
                    <option value="master-ttc">Master Teacher Training</option>
                    <option value="philosophy-ttc">Philosophy Training</option>
                    <option value="visit">Schedule a Visit</option>
                    <option value="donation">Donation Information</option>
                    <option value="media">Media & Press</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-ink mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border-2 border-earth/30 focus:border-earth focus:outline-none bg-white resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-earth text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-clay transition-colors shadow-lg"
                >
                  Send Message
                </button>

                <p className="text-sm text-ink/60 text-center">
                  We typically respond within 24-48 hours during business days
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-sand to-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-ink mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-ink/70">
              Quick answers to common questions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-earth mb-2">How do I apply for a teacher training program?</h3>
              <p className="text-sm text-ink/70">
                Fill out the contact form above selecting your program of interest, and we'll send you detailed
                application information and requirements.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-earth mb-2">Can I visit the ashram before enrolling?</h3>
              <p className="text-sm text-ink/70">
                Yes! We welcome visitors. Please contact us in advance to schedule your visit and arrange
                accommodation if needed.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-earth mb-2">Do you offer accommodation?</h3>
              <p className="text-sm text-ink/70">
                Yes, residential accommodation is included in all intensive programs. Commuter options are
                available for some weekend programs.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-earth mb-2">Are scholarships available?</h3>
              <p className="text-sm text-ink/70">
                We offer partial scholarships for deserving students. Scholarship applications are reviewed
                on a case-by-case basis.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-earth mb-2">What should I bring for training?</h3>
              <p className="text-sm text-ink/70">
                A detailed packing list will be provided upon enrollment. Generally: comfortable clothes,
                yoga mat, journal, and personal items.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-earth mb-2">Is vegetarian food provided?</h3>
              <p className="text-sm text-ink/70">
                Yes, all meals are sattvic vegetarian prepared with love and awareness. Special dietary needs
                can be accommodated with advance notice.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-earth text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Ready to Begin?
          </h2>
          <p className="text-xl text-mist/90 mb-8">
            Your journey toward transformation and service starts with a single step
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="px-8 py-3 bg-sun text-ink rounded-full font-semibold hover:bg-white transition-colors"
            >
              Send a Message
            </a>
            <a
              href="tel:+91"
              className="px-8 py-3 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-earth transition-colors"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
