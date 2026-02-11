import { useState } from 'react';
import PageHero from '../../components/PageHero';
import ImagePlaceholder from '../../components/ImagePlaceholder';

export default function Videos() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Videos' },
    { id: 'teachings', name: 'Teachings & Talks' },
    { id: 'practice', name: 'Practice Videos' },
    { id: 'meditation', name: 'Guided Meditations' },
    { id: 'documentaries', name: 'Documentaries' },
    { id: 'testimonials', name: 'Testimonials' }
  ];

  const videos = [
    { id: 1, category: 'teachings', title: 'Introduction to Tayi Sadhana Yoga', duration: '15:32', description: 'Guruji explains the foundations of our system' },
    { id: 2, category: 'practice', title: 'Morning Asana Sequence', duration: '45:20', description: 'Complete morning practice for all levels' },
    { id: 3, category: 'meditation', title: 'Chakra Meditation Journey', duration: '30:15', description: 'Guided meditation through the seven chakras' },
    { id: 4, category: 'teachings', title: 'Yoga Sutras Study - Part 1', duration: '28:45', description: 'Deep dive into Patanjali\'s wisdom' },
    { id: 5, category: 'documentaries', title: 'Building the Divine Mother Temple', duration: '22:10', description: 'Documentary on our temple construction' },
    { id: 6, category: 'practice', title: 'Pranayama Fundamentals', duration: '18:30', description: 'Essential breathing techniques' },
    { id: 7, category: 'testimonials', title: 'Student Transformations', duration: '12:45', description: 'Stories from our graduates' },
    { id: 8, category: 'meditation', title: 'Evening Peace Meditation', duration: '20:00', description: 'Calming practice for deep rest' },
    { id: 9, category: 'teachings', title: 'The Path of Devotion', duration: '35:20', description: 'Understanding Bhakti Yoga' },
    { id: 10, category: 'practice', title: 'Restorative Yoga Flow', duration: '40:15', description: 'Gentle practice for healing' },
    { id: 11, category: 'documentaries', title: 'A Day at the Ashram', duration: '18:50', description: 'Experience daily life in our community' },
    { id: 12, category: 'testimonials', title: 'Teachers Share Their Journey', duration: '25:30', description: 'Our disciples reflect on their path' }
  ];

  const filteredVideos = selectedCategory === 'all'
    ? videos
    : videos.filter(video => video.category === selectedCategory);

  return (
    <div>
      <PageHero
        title="Video Library"
        subtitle="Teachings, practices, and insights from Tayi Sadhana Yoga"
        imagePlaceholder="Videos Hero"
        height="medium"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-ink mb-6">
              Watch & Learn
            </h2>
            <p className="text-xl text-ink/70 max-w-3xl mx-auto">
              Access our growing collection of video teachings, practice sessions, and guided meditations
            </p>
          </div>

          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    selectedCategory === category.id
                      ? 'bg-earth text-white shadow-lg scale-105'
                      : 'bg-sand text-earth hover:bg-earth/10'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                className="group bg-gradient-to-br from-sand to-mist rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
              >
                <div className="relative">
                  <ImagePlaceholder
                    width={400}
                    height={225}
                    text={`Video Thumbnail ${video.id}`}
                    className="rounded-t-xl"
                  />
                  <div className="absolute inset-0 bg-ink/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-earth ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-ink/80 backdrop-blur-sm text-white px-2 py-1 rounded text-sm font-semibold">
                    {video.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-ink mb-2 group-hover:text-earth transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-sm text-ink/70 mb-4">{video.description}</p>
                  <button className="text-earth font-semibold text-sm hover:text-clay transition-colors">
                    Watch Now →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredVideos.length === 0 && (
            <div className="text-center py-20">
              <svg className="w-24 h-24 mx-auto text-earth/30 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <p className="text-xl text-ink/60">No videos in this category yet</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-sand to-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-ink mb-4">
              Featured Playlists
            </h2>
            <p className="text-xl text-ink/70">
              Curated video collections for deeper study
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-earth rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-ink mb-2">Beginner's Journey</h3>
                  <p className="text-ink/70 mb-4">
                    Complete series for those new to yoga - 12 videos covering foundations
                  </p>
                  <button className="text-earth font-semibold hover:text-clay transition-colors">
                    Start Series →
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-leaf rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-ink mb-2">Meditation Mastery</h3>
                  <p className="text-ink/70 mb-4">
                    Progressive meditation techniques from basic to advanced - 15 videos
                  </p>
                  <button className="text-leaf font-semibold hover:text-earth transition-colors">
                    Start Series →
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-clay rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-ink mb-2">Pranayama Practice</h3>
                  <p className="text-ink/70 mb-4">
                    Complete breathwork training from fundamentals to advanced - 10 videos
                  </p>
                  <button className="text-clay font-semibold hover:text-earth transition-colors">
                    Start Series →
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-sun rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-ink mb-2">Philosophy Deep Dive</h3>
                  <p className="text-ink/70 mb-4">
                    Explore Yoga Sutras, Bhagavad Gita, and more - 20 video lectures
                  </p>
                  <button className="text-sun font-semibold hover:text-earth transition-colors">
                    Start Series →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-earth text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Subscribe for New Videos
          </h2>
          <p className="text-xl text-mist/90 mb-8">
            Get notified when we release new teachings and practice videos
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
        </div>
      </section>
    </div>
  );
}
