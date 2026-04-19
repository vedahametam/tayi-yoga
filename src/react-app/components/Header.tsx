import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [educationDropdownOpen, setEducationDropdownOpen] = useState(false);
  const [systemDropdownOpen, setSystemDropdownOpen] = useState(false);
  const [divineDropdownOpen, setDivineDropdownOpen] = useState(false);
  const [certificationDropdownOpen, setCertificationDropdownOpen] = useState(false);
  const [mediaDropdownOpen, setMediaDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-sand/95 backdrop-blur-sm shadow-md">
      {/* Top Navigation Bar */}
      <div className="hidden lg:block bg-earth/10 border-b border-earth/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-end items-center space-x-6 py-2 text-sm">
            {/* About Us Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button
                className="text-ink hover:text-earth transition-colors font-medium flex items-center py-1"
              >
                About Us
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {aboutDropdownOpen && (
                <div className="absolute top-full right-0 mt-0 w-56 bg-white shadow-lg rounded-lg py-2">
                  <Link to="/about/tayi-sadhana-yoga" className="block px-4 py-2 text-sm hover:bg-sand transition-colors">
                    About Tayi Sadhana Yoga
                  </Link>
                  <Link to="/about/sadhana-yogi" className="block px-4 py-2 text-sm hover:bg-sand transition-colors">
                    Sadhana Yogi
                  </Link>
                  <Link to="/about/guruji-message" className="block px-4 py-2 text-sm hover:bg-sand transition-colors">
                    Guruji's Message
                  </Link>
                  <Link to="/about/vision-mission" className="block px-4 py-2 text-sm hover:bg-sand transition-colors">
                    Vision &amp; Mission
                  </Link>
                </div>
              )}
            </div>

            {/* Divine Project Link */}
            <Link
              to="/divine-project"
              className="text-ink hover:text-earth transition-colors font-medium flex items-center py-1"
            >
              Divine Project
            </Link>

            {/* The System Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setSystemDropdownOpen(true)}
              onMouseLeave={() => setSystemDropdownOpen(false)}
            >
              <button
                className="text-ink hover:text-earth transition-colors font-medium flex items-center py-1"
              >
                The System
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {systemDropdownOpen && (
                <div className="absolute top-full right-0 mt-0 w-56 bg-white shadow-lg rounded-lg py-2">
                  <Link to="/system/tayi-culture" className="block px-4 py-2 text-sm hover:bg-sand transition-colors">
                    Tayi Culture
                  </Link>
                  <Link to="/system/tayi-sadhana-yoga" className="block px-4 py-2 text-sm hover:bg-sand transition-colors">
                    Tayi Sadhana Yoga
                  </Link>
                  <Link to="/system/nature-cure" className="block px-4 py-2 text-sm hover:bg-sand transition-colors">
                    Tayi Sadhana Nature Cure
                  </Link>
                </div>
              )}
            </div>

          </nav>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo - Links to Home */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-serif font-bold text-earth">
              Tayi Sadhana Yoga
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">

            {/* Education & Training Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setEducationDropdownOpen(true)}
              onMouseLeave={() => setEducationDropdownOpen(false)}
            >
              <button
                className="text-ink hover:text-earth transition-colors font-medium flex items-center py-2"
              >
                Education
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {educationDropdownOpen && (
                <div className="absolute top-full left-0 mt-0 w-64 bg-white shadow-lg rounded-lg py-2">
                  <Link to="/education/overview" className="block px-4 py-2 hover:bg-sand transition-colors">
                    Courses Overview
                  </Link>
                  <Link to="/education/yoga-ttc" className="block px-4 py-2 hover:bg-sand transition-colors">
                    Tayi Sadhana Yoga TTC
                  </Link>
                  <Link to="/education/nature-cure-ttc" className="block px-4 py-2 hover:bg-sand transition-colors">
                    Tayi Sadhana Nature Cure TTC
                  </Link>
                  <Link to="/education/master-ttc" className="block px-4 py-2 hover:bg-sand transition-colors">
                    Sadhana Master TTC
                  </Link>
                  <Link to="/education/philosophy-ttc" className="block px-4 py-2 hover:bg-sand transition-colors">
                    Yoga Philosophy TTC
                  </Link>
                </div>
              )}
            </div>

            <Link to="/disciples" className="text-ink hover:text-earth transition-colors font-medium">
              Disciples
            </Link>

            {/* Certification Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setCertificationDropdownOpen(true)}
              onMouseLeave={() => setCertificationDropdownOpen(false)}
            >
              <button
                className="text-ink hover:text-earth transition-colors font-medium flex items-center py-2"
              >
                Certification
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {certificationDropdownOpen && (
                <div className="absolute top-full left-0 mt-0 w-56 bg-white shadow-lg rounded-lg py-2">
                  <Link to="/certification/teacher-certification" className="block px-4 py-2 hover:bg-sand transition-colors">
                    Teacher Certification
                  </Link>
                  <Link to="/certification/code-of-discipline" className="block px-4 py-2 hover:bg-sand transition-colors">
                    Code of Discipline
                  </Link>
                </div>
              )}
            </div>

            {/* Media & Resources Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setMediaDropdownOpen(true)}
              onMouseLeave={() => setMediaDropdownOpen(false)}
            >
              <button
                className="text-ink hover:text-earth transition-colors font-medium flex items-center py-2"
              >
                Media
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mediaDropdownOpen && (
                <div className="absolute top-full left-0 mt-0 w-56 bg-white shadow-lg rounded-lg py-2">
                  <Link to="/media/gallery" className="block px-4 py-2 hover:bg-sand transition-colors">
                    Gallery
                  </Link>
                  <Link to="/media/videos" className="block px-4 py-2 hover:bg-sand transition-colors">
                    Videos
                  </Link>
                  <Link to="/media/news-events" className="block px-4 py-2 hover:bg-sand transition-colors">
                    News &amp; Events
                  </Link>
                </div>
              )}
            </div>

            <Link to="/contact" className="text-ink hover:text-earth transition-colors font-medium">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <Link
            to="/divine-project/donation"
            className="hidden lg:block bg-earth text-white px-6 py-2 rounded-full hover:bg-clay transition-colors"
          >
            Donate Now
          </Link>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-ink"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-earth/20">
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="px-4 py-2 hover:bg-mist rounded" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>

              <details className="px-4">
                <summary className="cursor-pointer py-2 font-medium">About Us</summary>
                <div className="pl-4 mt-2 space-y-2">
                  <Link to="/about/tayi-sadhana-yoga" className="block py-1" onClick={() => setMobileMenuOpen(false)}>
                    About Tayi Sadhana Yoga
                  </Link>
                  <Link to="/about/sadhana-yogi" className="block py-1" onClick={() => setMobileMenuOpen(false)}>
                    Sadhana Yogi
                  </Link>
                  <Link to="/about/guruji-message" className="block py-1" onClick={() => setMobileMenuOpen(false)}>
                    Guruji's Message
                  </Link>
                  <Link to="/about/vision-mission" className="block py-1" onClick={() => setMobileMenuOpen(false)}>
                    Vision &amp; Mission
                  </Link>
                </div>
              </details>

              <Link to="/divine-project" className="px-4 py-2 hover:bg-mist rounded font-medium" onClick={() => setMobileMenuOpen(false)}>
                Divine Project
              </Link>

              <details className="px-4">
                <summary className="cursor-pointer py-2 font-medium">The System</summary>
                <div className="pl-4 mt-2 space-y-2">
                  <Link to="/system/tayi-culture" className="block py-1" onClick={() => setMobileMenuOpen(false)}>
                    Tayi Culture
                  </Link>
                  <Link to="/system/tayi-sadhana-yoga" className="block py-1" onClick={() => setMobileMenuOpen(false)}>
                    Tayi Sadhana Yoga
                  </Link>
                  <Link to="/system/nature-cure" className="block py-1" onClick={() => setMobileMenuOpen(false)}>
                    Tayi Sadhana Nature Cure
                  </Link>
                </div>
              </details>

              <details className="px-4">
                <summary className="cursor-pointer py-2 font-medium">Education</summary>
                <div className="pl-4 mt-2 space-y-2">
                  <Link to="/education/overview" className="block py-1" onClick={() => setMobileMenuOpen(false)}>
                    Courses Overview
                  </Link>
                  <Link to="/education/yoga-ttc" className="block py-1" onClick={() => setMobileMenuOpen(false)}>
                    Tayi Sadhana Yoga TTC
                  </Link>
                  <Link to="/education/nature-cure-ttc" className="block py-1" onClick={() => setMobileMenuOpen(false)}>
                    Tayi Sadhana Nature Cure TTC
                  </Link>
                  <Link to="/education/master-ttc" className="block py-1" onClick={() => setMobileMenuOpen(false)}>
                    Sadhana Master TTC
                  </Link>
                  <Link to="/education/philosophy-ttc" className="block py-1" onClick={() => setMobileMenuOpen(false)}>
                    Yoga Philosophy TTC
                  </Link>
                </div>
              </details>

              <Link to="/disciples" className="px-4 py-2 hover:bg-mist rounded" onClick={() => setMobileMenuOpen(false)}>
                Disciples
              </Link>

              <details className="px-4">
                <summary className="cursor-pointer py-2 font-medium">Certification</summary>
                <div className="pl-4 mt-2 space-y-2">
                  <Link to="/certification/teacher-certification" className="block py-1" onClick={() => setMobileMenuOpen(false)}>
                    Teacher Certification
                  </Link>
                  <Link to="/certification/code-of-discipline" className="block py-1" onClick={() => setMobileMenuOpen(false)}>
                    Code of Discipline
                  </Link>
                </div>
              </details>

              <details className="px-4">
                <summary className="cursor-pointer py-2 font-medium">Media</summary>
                <div className="pl-4 mt-2 space-y-2">
                  <Link to="/media/gallery" className="block py-1" onClick={() => setMobileMenuOpen(false)}>
                    Gallery
                  </Link>
                  <Link to="/media/videos" className="block py-1" onClick={() => setMobileMenuOpen(false)}>
                    Videos
                  </Link>
                  <Link to="/media/news-events" className="block py-1" onClick={() => setMobileMenuOpen(false)}>
                    News &amp; Events
                  </Link>
                </div>
              </details>

              <Link to="/contact" className="px-4 py-2 hover:bg-mist rounded" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>

              <Link
                to="/divine-project/donation"
                className="mx-4 mt-4 bg-earth text-white px-6 py-2 rounded-full text-center hover:bg-clay transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Donate Now
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
