import { useState } from 'react';
import PageHero from '../../components/PageHero';
import ImagePlaceholder from '../../components/ImagePlaceholder';

export default function Donation() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    amount: '',
    donationType: 'one-time',
    purpose: 'general',
    dedication: ''
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
        title="Support Our Mission"
        subtitle="Your generosity helps spread the light of yoga and support communities in need"
        imagePlaceholder="Donation Hero"
        height="medium"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-4xl font-serif font-bold text-ink mb-6">
                Why Your Support Matters
              </h2>
              <p className="text-lg text-ink/80 mb-6 leading-relaxed">
                Every contribution, no matter the size, makes a profound difference in our ability to serve,
                teach, and create sacred spaces for transformation.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-earth mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-ink">Temple Construction:</strong>
                    <p className="text-ink/70">Complete the seven chakra shrines and meditation halls</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-earth mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-ink">Education Support:</strong>
                    <p className="text-ink/70">Provide scholarships and free yoga education to deserving students</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-earth mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-ink">Teacher Training:</strong>
                    <p className="text-ink/70">Sponsor aspiring yoga teachers from underprivileged backgrounds</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-earth mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-ink">Nature Cure Center:</strong>
                    <p className="text-ink/70">Build facilities for holistic healing and wellness retreats</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ImagePlaceholder width={600} height={600} text="Shrine Construction" className="rounded-lg shadow-2xl" />
            </div>
          </div>

          <div className="max-w-2xl mx-auto bg-gradient-to-br from-sand to-mist rounded-2xl p-8 shadow-xl">
            <h3 className="text-3xl font-serif font-bold text-ink text-center mb-8">
              Make a Donation
            </h3>

            {submitted && (
              <div className="mb-6 p-4 bg-leaf/10 border border-leaf rounded-lg">
                <p className="text-leaf font-semibold text-center">
                  Thank you for your generous support! We will contact you shortly with payment details.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-ink mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-earth/30 focus:border-earth focus:outline-none bg-white"
                    placeholder="Enter your name"
                  />
                </div>

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

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-ink mb-2">
                    Donation Amount (₹) *
                  </label>
                  <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    required
                    min="100"
                    className="w-full px-4 py-3 rounded-lg border-2 border-earth/30 focus:border-earth focus:outline-none bg-white"
                    placeholder="Enter amount"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-ink mb-2">
                    Donation Type *
                  </label>
                  <select
                    name="donationType"
                    value={formData.donationType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-earth/30 focus:border-earth focus:outline-none bg-white"
                  >
                    <option value="one-time">One-Time</option>
                    <option value="monthly">Monthly</option>
                    <option value="annual">Annual</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-ink mb-2">
                  Purpose *
                </label>
                <select
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-earth/30 focus:border-earth focus:outline-none bg-white"
                >
                  <option value="general">General Fund</option>
                  <option value="shrine">Shrine Construction</option>
                  <option value="education">Education Support</option>
                  <option value="teacher-training">Teacher Training Scholarships</option>
                  <option value="nature-cure">Nature Cure Center</option>
                  <option value="specific">Specific Project</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-ink mb-2">
                  Dedication / Message (Optional)
                </label>
                <textarea
                  name="dedication"
                  value={formData.dedication}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border-2 border-earth/30 focus:border-earth focus:outline-none bg-white resize-none"
                  placeholder="Dedicate your donation or leave a message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-earth text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-clay transition-colors shadow-lg"
              >
                Proceed to Donate
              </button>

              <p className="text-sm text-ink/60 text-center">
                All donations are tax-exempt under Section 80G. You will receive a receipt via email.
              </p>
            </form>
          </div>

          <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-serif font-bold text-ink text-center mb-8">
              Other Ways to Contribute
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-earth rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                </div>
                <h4 className="font-semibold text-ink mb-2">Bank Transfer</h4>
                <p className="text-sm text-ink/70">
                  Direct bank transfer for larger donations
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-leaf rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                </div>
                <h4 className="font-semibold text-ink mb-2">Check/DD</h4>
                <p className="text-sm text-ink/70">
                  Send checks payable to Tayi Sadhana Yoga
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-clay rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                </div>
                <h4 className="font-semibold text-ink mb-2">In-Kind</h4>
                <p className="text-sm text-ink/70">
                  Donate materials, equipment, or services
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
