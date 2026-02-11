import { useState } from 'react';
import PageHero from '../../components/PageHero';
import ImagePlaceholder from '../../components/ImagePlaceholder';
import { Link } from 'react-router-dom';

export default function NewsEvents() {
  const [selectedTab, setSelectedTab] = useState<'upcoming' | 'past' | 'news'>('upcoming');

  const upcomingEvents = [
    {
      id: 1,
      title: 'Annual Divine Mother Festival',
      date: 'March 15-17, 2026',
      type: 'Festival',
      description: 'Three-day celebration honoring the Divine Mother with special pujas, kirtans, and community gatherings',
      registration: 'Open'
    },
    {
      id: 2,
      title: '200-Hour Yoga Teacher Training',
      date: 'April 1 - April 28, 2026',
      type: 'Training',
      description: 'Intensive residential program for aspiring yoga teachers',
      registration: 'Limited Spots'
    },
    {
      id: 3,
      title: 'Spring Meditation Retreat',
      date: 'May 10-14, 2026',
      type: 'Retreat',
      description: 'Five-day silent meditation retreat in the peaceful ashram setting',
      registration: 'Open'
    },
    {
      id: 4,
      title: 'Workshop: Advanced Pranayama',
      date: 'June 5-6, 2026',
      type: 'Workshop',
      description: 'Weekend intensive on advanced breathing techniques with senior teacher',
      registration: 'Open'
    },
    {
      id: 5,
      title: 'Nature Cure Teacher Training',
      date: 'July 15 - August 25, 2026',
      type: 'Training',
      description: 'Comprehensive certification in natural healing modalities',
      registration: 'Open'
    },
    {
      id: 6,
      title: 'Community Seva Day',
      date: 'August 15, 2026',
      type: 'Community',
      description: 'Join us for a day of service, working on ashram grounds and temple construction',
      registration: 'Free - All Welcome'
    }
  ];

  const pastEvents = [
    {
      id: 1,
      title: 'Winter Teacher Training Graduation',
      date: 'February 28, 2026',
      type: 'Ceremony',
      description: 'Celebrated the graduation of 24 new certified yoga teachers'
    },
    {
      id: 2,
      title: 'Bhagavad Gita Study Intensive',
      date: 'January 20-25, 2026',
      type: 'Workshop',
      description: 'Six-day deep dive into the teachings of the Bhagavad Gita'
    },
    {
      id: 3,
      title: 'New Year Meditation Marathon',
      date: 'January 1, 2026',
      type: 'Special Event',
      description: '12-hour meditation practice to welcome the new year'
    }
  ];

  const newsItems = [
    {
      id: 1,
      date: 'March 1, 2026',
      title: 'Construction Begins on Fourth Chakra Shrine',
      category: 'Divine Project',
      excerpt: 'We are excited to announce that construction has begun on the Anahata (Heart) Chakra shrine. This beautiful structure will be dedicated to cultivating love and compassion...'
    },
    {
      id: 2,
      date: 'February 15, 2026',
      title: 'New Scholarship Program Announced',
      category: 'Education',
      excerpt: 'Tayi Sadhana Yoga is proud to launch a new scholarship program to support aspiring teachers from underserved communities. Applications now open...'
    },
    {
      id: 3,
      date: 'February 1, 2026',
      title: 'Featured in International Yoga Journal',
      category: 'Media',
      excerpt: 'Our unique approach to integrating yoga with nature cure was featured in the February issue of International Yoga Journal. Read the full article...'
    },
    {
      id: 4,
      date: 'January 20, 2026',
      title: 'Organic Garden Expansion Complete',
      category: 'Ashram News',
      excerpt: 'Our expanded organic garden is now producing fresh vegetables and herbs for our community kitchen. This supports our commitment to sattvic, locally-grown nutrition...'
    }
  ];

  const getTypeColor = (type: string) => {
    const colors: { [key: string]: string } = {
      'Festival': 'bg-sun',
      'Training': 'bg-earth',
      'Retreat': 'bg-leaf',
      'Workshop': 'bg-clay',
      'Community': 'bg-blue-500',
      'Ceremony': 'bg-purple-500',
      'Special Event': 'bg-pink-500'
    };
    return colors[type] || 'bg-earth';
  };

  return (
    <div>
      <PageHero
        title="News & Events"
        subtitle="Stay connected with our latest happenings, programs, and community updates"
        imagePlaceholder="News & Events Hero"
        height="medium"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedTab('upcoming')}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                selectedTab === 'upcoming'
                  ? 'bg-earth text-white shadow-lg scale-105'
                  : 'bg-sand text-earth hover:bg-earth/10'
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setSelectedTab('past')}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                selectedTab === 'past'
                  ? 'bg-earth text-white shadow-lg scale-105'
                  : 'bg-sand text-earth hover:bg-earth/10'
              }`}
            >
              Past Events
            </button>
            <button
              onClick={() => setSelectedTab('news')}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                selectedTab === 'news'
                  ? 'bg-earth text-white shadow-lg scale-105'
                  : 'bg-sand text-earth hover:bg-earth/10'
              }`}
            >
              News & Updates
            </button>
          </div>

          {selectedTab === 'upcoming' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-serif font-bold text-ink mb-4">
                  Upcoming Events
                </h2>
                <p className="text-xl text-ink/70">
                  Join us for these transformative experiences
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="bg-gradient-to-br from-sand to-mist rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                    <ImagePlaceholder width={600} height={300} text={`${event.title} Image`} className="rounded-t-xl" />
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`${getTypeColor(event.type)} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                          {event.type}
                        </span>
                        <span className="text-sm text-ink/60 font-semibold">{event.date}</span>
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-ink mb-3">{event.title}</h3>
                      <p className="text-ink/70 mb-4">{event.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-leaf">
                          Registration: {event.registration}
                        </span>
                        <button className="px-6 py-2 bg-earth text-white rounded-full font-semibold hover:bg-clay transition-colors">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedTab === 'past' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-serif font-bold text-ink mb-4">
                  Past Events
                </h2>
                <p className="text-xl text-ink/70">
                  Highlights from recent gatherings and programs
                </p>
              </div>

              <div className="space-y-6">
                {pastEvents.map((event) => (
                  <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="md:col-span-1">
                        <ImagePlaceholder width={400} height={300} text={`${event.title} Photo`} className="rounded-l-xl h-full" />
                      </div>
                      <div className="md:col-span-2 p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className={`${getTypeColor(event.type)} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                            {event.type}
                          </span>
                          <span className="text-sm text-ink/60 font-semibold">{event.date}</span>
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-ink mb-3">{event.title}</h3>
                        <p className="text-ink/70 mb-4">{event.description}</p>
                        <div className="flex gap-4">
                          <button className="text-earth font-semibold hover:text-clay transition-colors">
                            View Photos →
                          </button>
                          <button className="text-earth font-semibold hover:text-clay transition-colors">
                            Watch Video →
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedTab === 'news' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-serif font-bold text-ink mb-4">
                  Latest News
                </h2>
                <p className="text-xl text-ink/70">
                  Updates from our community and programs
                </p>
              </div>

              <div className="space-y-8">
                {newsItems.map((item) => (
                  <article key={item.id} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-sm font-semibold text-earth bg-earth/10 px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                      <span className="text-sm text-ink/60">{item.date}</span>
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-ink mb-4">{item.title}</h3>
                    <p className="text-lg text-ink/70 mb-6 leading-relaxed">{item.excerpt}</p>
                    <button className="text-earth font-semibold text-lg hover:text-clay transition-colors">
                      Read Full Article →
                    </button>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-sand to-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-ink mb-4">
              Monthly Calendar
            </h2>
            <p className="text-xl text-ink/70 mb-8">
              Regular programs and activities at the ashram
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-earth mb-4">Weekly Classes</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-earth pl-4">
                  <p className="font-semibold text-ink">Monday - Friday</p>
                  <p className="text-sm text-ink/70">6:00 AM - Morning Sadhana</p>
                  <p className="text-sm text-ink/70">6:00 PM - Evening Practice</p>
                </div>
                <div className="border-l-4 border-leaf pl-4">
                  <p className="font-semibold text-ink">Saturdays</p>
                  <p className="text-sm text-ink/70">7:00 AM - Community Class</p>
                  <p className="text-sm text-ink/70">5:00 PM - Kirtan & Meditation</p>
                </div>
                <div className="border-l-4 border-clay pl-4">
                  <p className="font-semibold text-ink">Sundays</p>
                  <p className="text-sm text-ink/70">8:00 AM - Philosophy Discussion</p>
                  <p className="text-sm text-ink/70">4:00 PM - Restorative Yoga</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-earth mb-4">Monthly Gatherings</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-sun pl-4">
                  <p className="font-semibold text-ink">First Sunday</p>
                  <p className="text-sm text-ink/70">Full Moon Meditation</p>
                </div>
                <div className="border-l-4 border-sun pl-4">
                  <p className="font-semibold text-ink">Second Saturday</p>
                  <p className="text-sm text-ink/70">Community Potluck Dinner</p>
                </div>
                <div className="border-l-4 border-sun pl-4">
                  <p className="font-semibold text-ink">Third Sunday</p>
                  <p className="text-sm text-ink/70">Seva Day - Service Projects</p>
                </div>
                <div className="border-l-4 border-sun pl-4">
                  <p className="font-semibold text-ink">Last Friday</p>
                  <p className="text-sm text-ink/70">Evening Satsang with Guruji</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-earth mb-4">Special Observances</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-purple-500 pl-4">
                  <p className="font-semibold text-ink">Ekadashi Days</p>
                  <p className="text-sm text-ink/70">Fasting & Special Meditation</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <p className="font-semibold text-ink">New Moon</p>
                  <p className="text-sm text-ink/70">Silent Meditation Evening</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <p className="font-semibold text-ink">Full Moon</p>
                  <p className="text-sm text-ink/70">Community Kirtan & Celebration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-earth text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-mist/90 mb-8">
            Subscribe to receive event announcements and community news
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-6 py-3 rounded-full text-ink focus:outline-none focus:ring-2 focus:ring-sun"
            />
            <button className="px-8 py-3 bg-sun text-ink rounded-full font-semibold hover:bg-white transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-mist/70 mt-6">
            You can unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-ink mb-4">
              Get Involved
            </h2>
            <p className="text-xl text-ink/70">
              Join our community in various ways
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-earth rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold text-ink mb-3">Attend Programs</h3>
              <p className="text-ink/70 mb-6">
                Join our workshops, retreats, and teacher training programs
              </p>
              <Link
                to="/education/overview"
                className="inline-block px-6 py-2 bg-earth text-white rounded-full font-semibold hover:bg-clay transition-colors"
              >
                View Programs
              </Link>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-leaf rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold text-ink mb-3">Volunteer</h3>
              <p className="text-ink/70 mb-6">
                Offer your time and skills in service to the community
              </p>
              <Link
                to="/contact"
                className="inline-block px-6 py-2 bg-leaf text-white rounded-full font-semibold hover:bg-earth transition-colors"
              >
                Get Involved
              </Link>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-clay rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold text-ink mb-3">Support</h3>
              <p className="text-ink/70 mb-6">
                Make a donation to support our programs and temple construction
              </p>
              <Link
                to="/divine-project/donation"
                className="inline-block px-6 py-2 bg-clay text-white rounded-full font-semibold hover:bg-earth transition-colors"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
