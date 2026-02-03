import { useEffect, useMemo, useState } from "react";
import "./App.css";

const menuItems = [
	{ label: "Home", href: "#home" },
	{ label: "About Us", href: "#about" },
	{ label: "Tayi Sadhana Yoga", href: "#tayi" },
	{ label: "Programs", href: "#programs" },
	{ label: "Vision & Mission", href: "#vision" },
	{ label: "Founder's Message", href: "#founder" },
	{ label: "Donate", href: "#donate" },
	{ label: "Volunteer", href: "#volunteer" },
	{ label: "Blog / Knowledge", href: "#blog" },
	{ label: "Contact Us", href: "#contact" },
];

const programs = [
	{
		title: "Sadhana Foundations",
		summary: "Daily practices for mobility, breath alignment, and energetic stability.",
		details:
			"Build joint mobility, refine breath awareness, and cultivate steady inner focus with guided sequences rooted in classical yogic science.",
		label: "Core Program",
	},
	{
		title: "Divine Mother Immersion",
		summary:
			"Experiential retreats centered on chakra shrines, sacred geometry, and nature-based healing.",
		details:
			"Participate in consecrated shrine practices, elemental rituals, and quiet contemplative sessions designed to reconnect you with the universal Mother energy.",
		label: "Immersive Retreat",
	},
	{
		title: "Raja Yoga Mastery",
		summary: "Guidance into Dharana, Dhyana, and Samadhi for advanced seekers.",
		details:
			"Deepen discipline, stabilize the mind, and explore advanced inner sciences such as Samyama through structured mentorship and practice.",
		label: "Advanced Path",
	},
];

const faqs = [
	{
		question: "Is Tayi Sadhana Yoga open to people of all faiths?",
		answer:
			"Yes. The Divine Mother shrine is a unifying space that welcomes all backgrounds. The practice emphasizes inner experience beyond religion or nationality.",
	},
	{
		question: "Do I need prior yoga experience to begin?",
		answer:
			"No. Foundational programs are designed to meet you where you are and restore the body and mind steadily.",
	},
	{
		question: "What makes Tayi Sadhana Yoga different?",
		answer:
			"It combines classical Raja Yoga with ongoing research into modern health challenges, focusing on long-term protection, prevention, and inner mastery.",
	},
];

const blogCards = [
	{
		title: "Living with the Elements",
		summary: "How earth, water, fire, air, and space shape our inner well-being.",
	},
	{
		title: "Science of the Spine",
		summary: "Why spinal alignment is the gateway to vitality and clarity.",
	},
	{
		title: "Return to the Mother",
		summary: "Practices for reconnecting with the nurturing energy of the Divine Mother.",
	},
];

const revealSelector = "[data-reveal]";

function App() {
	const [activeSection, setActiveSection] = useState("home");
	const [showTop, setShowTop] = useState(false);
	const [selectedProgram, setSelectedProgram] = useState<(typeof programs)[number] | null>(
		null,
	);
	const [donateSubmitted, setDonateSubmitted] = useState(false);
	const [volunteerSubmitted, setVolunteerSubmitted] = useState(false);
	const [contactSubmitted, setContactSubmitted] = useState(false);

	const sectionIds = useMemo(
		() => menuItems.map((item) => item.href.replace("#", "")),
		[],
	);

	useEffect(() => {
		const sections = sectionIds
			.map((id) => document.getElementById(id))
			.filter((section): section is HTMLElement => Boolean(section));

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{ rootMargin: "-30% 0px -60% 0px", threshold: 0.2 },
		);

		sections.forEach((section) => observer.observe(section));

		return () => observer.disconnect();
	}, [sectionIds]);

	useEffect(() => {
		const revealElements = Array.from(
			document.querySelectorAll<HTMLElement>(revealSelector),
		);
		revealElements.forEach((element) => element.classList.add("reveal"));

		const observer = new IntersectionObserver(
			(entries, obs) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("is-visible");
						obs.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.2 },
		);

		revealElements.forEach((element) => observer.observe(element));

		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		const onScroll = () => {
			setShowTop(window.scrollY > 600);
		};

		window.addEventListener("scroll", onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<div className="page">
			<a className="skip-link" href="#main">
				Skip to content
			</a>
			<header className="site-header">
				<div className="brand">
					<span className="brand-mark">Tayi</span>
					<span className="brand-text">Sadhana Yoga</span>
				</div>
				<nav className="site-nav" aria-label="Main menu">
					{menuItems.map((item) => {
						const id = item.href.replace("#", "");
						return (
							<a
								key={item.href}
								href={item.href}
								className={activeSection === id ? "active" : undefined}
								aria-current={activeSection === id ? "page" : undefined}
							>
								{item.label}
							</a>
						);
					})}
				</nav>
				<a className="nav-cta" href="#donate">
					Donate
				</a>
			</header>

			<main id="main">
				<section id="home" className="hero">
					<div className="hero-content" data-reveal>
						<p className="eyebrow">Tayi Sadhana Yoga</p>
						<h1>
							In the lap of the Divine Mother, the soul finds peace and the body
							finds healing.
						</h1>
						<p className="hero-subtitle">
							Tayi Sadhana Yoga is a sacred, living path rooted in the Divine
							Mother. It unites classical Raja Yoga with modern research to
							protect the health of future generations and awaken inner
							consciousness.
						</p>
						<div className="hero-actions">
							<a className="btn primary" href="#tayi">
								Explore the Path
							</a>
							<a className="btn ghost" href="#programs">
								View Programs
							</a>
						</div>
						<p className="hero-quote">
							"Yoga must evolve to protect the health of future generations."
							<span>- Master Hemanth</span>
						</p>
					</div>
					<div className="hero-panel" data-reveal>
						<div className="hero-card">
							<h3>The Divine Mother</h3>
							<p>
								The source of creation, love, and life itself. She is nature,
								peace, and supreme intelligence guiding every being back to its
								origin.
							</p>
						</div>
						<div className="hero-card">
							<h3>One World, One Family</h3>
							<p>
								A living legacy where people of all backgrounds practice together
								in harmony, guided by universal energy beyond division.
							</p>
						</div>
						<div className="chakra-orbit" aria-hidden="true">
							<svg viewBox="0 0 200 200" role="presentation">
								<defs>
									<linearGradient id="chakra" x1="0" y1="0" x2="1" y2="1">
										<stop offset="0%" stopColor="#f4b44f" />
										<stop offset="100%" stopColor="#2f5d50" />
									</linearGradient>
								</defs>
								<circle cx="100" cy="100" r="84" fill="none" stroke="url(#chakra)" strokeWidth="2" />
								<circle cx="100" cy="100" r="60" fill="none" stroke="#c07b54" strokeWidth="1.5" />
								<circle cx="100" cy="100" r="36" fill="none" stroke="#9b6b43" strokeWidth="1" />
								<g fill="#f4b44f">
									<circle cx="100" cy="16" r="4" />
									<circle cx="164" cy="50" r="4" />
									<circle cx="184" cy="116" r="4" />
									<circle cx="140" cy="174" r="4" />
									<circle cx="60" cy="174" r="4" />
									<circle cx="16" cy="116" r="4" />
									<circle cx="36" cy="50" r="4" />
								</g>
							</svg>
							<p>In the lap of the Divine Mother</p>
						</div>
					</div>
				</section>

				<div className="section-divider" aria-hidden="true">
					<svg viewBox="0 0 1440 120" preserveAspectRatio="none">
						<path
							d="M0,64 C240,120 480,40 720,72 C960,104 1200,24 1440,72 L1440,120 L0,120 Z"
							fill="#fef7ea"
						/>
					</svg>
				</div>

				<section id="about" className="section about" data-reveal>
					<div className="section-header">
						<h2>About Us</h2>
						<p>
							Sadhana Yogalaya is a sacred space established in the image and
							energy of the Divine Mother. It radiates love, peace, and life
							energy for all seekers.
						</p>
					</div>
					<div className="grid two">
						<div className="card">
							<h3>The Path to Our Universal Mother</h3>
							<p>
								In Tayi Yoga, all energy is seen as the expression of the Divine
								Mother. Through practice, we return to her healing energy and
								nurturing presence.
							</p>
						</div>
						<div className="card">
							<h3>In the Lap of the Divine Mother</h3>
							<p>
								Where the soul finds peace and the body finds healing. The heart of
								Tayi Yoga is where all paths unite.
							</p>
							<p className="card-quote">- Master Hemanth</p>
						</div>
					</div>
				</section>

				<section id="tayi" className="section" data-reveal>
					<div className="section-header">
						<h2>Tayi Sadhana Yoga - The Sacred Path</h2>
						<p>
							Rooted in Patanjali's Raja Yoga, Tayi Sadhana Yoga evolves ancient
							wisdom to meet the needs of modern humanity. It restores joint
							functionality, spinal alignment, and nervous system strength while
							preparing practitioners for higher limbs of yoga.
						</p>
					</div>
					<div className="grid three">
						<div className="card">
							<h3>Protect & Prevent</h3>
							<p>
								Created to respond to climate change, lifestyle shifts, and
								technological dependency that have altered human growth patterns.
							</p>
						</div>
						<div className="card">
							<h3>Restore the Spine</h3>
							<p>
								Precise practices restore natural spinal curvature, lubricate
								joints, and stabilize the body for higher consciousness.
							</p>
						</div>
						<div className="card">
							<h3>Live the Yoga</h3>
							<p>
								More than exercise, Tayi Sadhana Yoga is a complete way of living
								that aligns body, breath, and awareness with cosmic order.
							</p>
						</div>
					</div>
				</section>

				<section className="section divine" data-reveal>
					<div className="section-header">
						<h2>The Divine Mother (Full Explanation)</h2>
						<p>
							In Tayi Sadhana Yoga, energy is a manifestation of the Divine
							Mother, the universal mother of all life. Her power is expressed as
							peace, love, and guidance that leads us back to the source.
						</p>
					</div>
					<div className="grid two">
						<div className="card">
							<h3>Shakti & Sacred Presence</h3>
							<p>
								She is the feminine aspect of the primal creator, present as Shakti
								in all creation. Her true power is love, safety, and
								transcendental consciousness.
							</p>
						</div>
						<div className="card">
							<h3>Seven Chakra Consecration</h3>
							<p>
								Yoga Guru Hemanth consecrated the Mother shrine using seven
								chakras, sacred geometry, and five elemental materials so seekers
								experience her energy simply by being present.
							</p>
						</div>
						<div className="card">
							<h3>Guidance & Awakening</h3>
							<p>
								The Divine Mother mediates between nature and the individual,
								awakening growth and removing obstacles with compassion and
								strength.
							</p>
						</div>
						<div className="card">
							<h3>One Roof for All</h3>
							<p>
								Her shrine welcomes all religions and cultures, affirming "one
								world, one family" and uniting people in inner exploration.
							</p>
						</div>
					</div>
				</section>

				<section id="programs" className="section programs" data-reveal>
					<div className="section-header">
						<h2>Programs</h2>
						<p>
							Programs are designed to restore health, deepen awareness, and
							connect seekers to the Divine Mother through disciplined practice.
						</p>
					</div>
					<div className="grid three">
						{programs.map((program) => (
							<button
								key={program.title}
								className="card program-card"
								onClick={() => setSelectedProgram(program)}
								aria-label={`Open details for ${program.title}`}
							>
								<span className="program-label">{program.label}</span>
								<h3>{program.title}</h3>
								<p>{program.summary}</p>
								<span className="program-link">View details</span>
							</button>
						))}
					</div>
				</section>

				<section id="vision" className="section vision" data-reveal>
					<div className="section-header">
						<h2>Vision & Mission</h2>
						<p>
							A spiritual legacy that protects the soul of yoga for the next 100
							years and beyond.
						</p>
					</div>
					<div className="grid two">
						<div className="card">
							<h3>Our Vision</h3>
							<p>
								To create a world where human beings live in harmony with nature,
								universal laws, and inner consciousness, restoring the sacred
								connection between body, mind, earth, and cosmos.
							</p>
							<p>
								Rooted in the Divine Mother, Sadhana envisions one world, one
								nature, one human family - beyond religion or nationality.
							</p>
							<p>
								Through seven chakra shrines, Tayi Sadhana carries a higher vision
								to guide practitioners for the next century and beyond.
							</p>
						</div>
						<div className="card">
							<h3>Our Mission</h3>
							<ul>
								<li>
									Establish seven-chakra Divine Mother shrines consecrated with
									sacred geometry and elemental materials.
								</li>
								<li>
									Preserve authentic yogic science beyond physical exercise.
								</li>
								<li>
									Promote harmony with nature and align human life with universal
									rhythms.
								</li>
								<li>
									Encourage inward living, simplicity, and detachment from
									materialism.
								</li>
								<li>
									Restore physical, energetic, and mental health through
									nature-based yogic practices.
								</li>
								<li>
									Unite humanity under one spiritual roof, welcoming all cultures.
								</li>
							</ul>
						</div>
					</div>
				</section>

				<section id="founder" className="section founder" data-reveal>
					<div className="section-header">
						<h2>Founder's Message</h2>
						<p>
							From Yoga Guru Venkataram Hemanth Kumar, born in Mysore - the
							birthplace of traditional yoga.
						</p>
					</div>
					<div className="grid two">
						<div className="card">
							<p>
								Tayi Sadhana Yoga is the sculptor of human life, body, mind, and
								soul. It is a complete science of life that prepares seekers for
								Dharana, Dhyana, Samadhi, and advanced inner sciences.
							</p>
							<p>
								This path emerged from deep research into modern physiological and
								psychological changes, responding with practices designed to heal,
								protect, and empower future generations.
							</p>
						</div>
						<div className="card highlight">
							<p>
								"Yoga must evolve to protect the health of future generations."
							</p>
							<span>- Master Hemanth</span>
						</div>
					</div>
				</section>

				<section id="donate" className="section donate" data-reveal>
					<div className="section-header">
						<h2>Donate</h2>
						<p>
							Your support sustains the Divine Mother shrines, sacred
							consecrations, and the future of authentic yoga.
						</p>
					</div>
					<div className="cta-panel">
						<div>
							<h3>Support the Living Legacy</h3>
							<p>
								Help protect the soul of yoga, preserve its depth, and pass its
								light forward through time.
							</p>
						</div>
						<a className="btn primary" href="#donate-form">
							Donate Now
						</a>
					</div>
					<form
						id="donate-form"
						className="form-card"
						onSubmit={(event) => {
							event.preventDefault();
							setDonateSubmitted(true);
						}}
					>
						<div className="form-grid">
							<label>
								Full Name
								<input name="donorName" required placeholder="Your name" />
							</label>
							<label>
								Email Address
								<input
									name="donorEmail"
									type="email"
									required
									placeholder="you@example.com"
								/>
							</label>
							<label>
								Donation Amount (USD)
								<input
									name="donationAmount"
									type="number"
									min="10"
									required
									placeholder="50"
								/>
							</label>
							<label>
								Dedication (Optional)
								<input
									name="donationNote"
									placeholder="In honor of ..."
								/>
							</label>
						</div>
						<button className="btn primary" type="submit">
							Submit Donation Interest
						</button>
						{donateSubmitted && (
							<p className="form-success" role="status">
								Thank you. Our team will respond with secure donation details.
							</p>
						)}
					</form>
				</section>

				<section id="volunteer" className="section volunteer" data-reveal>
					<div className="section-header">
						<h2>Volunteer</h2>
						<p>
							Join our seva teams to nurture the shrines, support programs, and
							serve the community.
						</p>
					</div>
					<div className="grid three">
						<div className="card">
							<h3>Temple Care</h3>
							<p>
								Assist in maintaining consecrated spaces and welcoming seekers.
							</p>
						</div>
						<div className="card">
							<h3>Program Support</h3>
							<p>
								Help facilitate classes, retreats, and community gatherings.
							</p>
						</div>
						<div className="card">
							<h3>Nature Service</h3>
							<p>
								Participate in tree care, elemental rituals, and earth honoring
								projects.
							</p>
						</div>
					</div>
					<form
						className="form-card"
						onSubmit={(event) => {
							event.preventDefault();
							setVolunteerSubmitted(true);
						}}
					>
						<div className="form-grid">
							<label>
								Full Name
								<input name="volunteerName" required placeholder="Your name" />
							</label>
							<label>
								Email Address
								<input
									name="volunteerEmail"
									type="email"
									required
									placeholder="you@example.com"
								/>
							</label>
							<label>
								Preferred Service Area
								<select name="serviceArea" required defaultValue="">
									<option value="" disabled>
										Select one
									</option>
									<option value="Temple Care">Temple Care</option>
									<option value="Program Support">Program Support</option>
									<option value="Nature Service">Nature Service</option>
									<option value="Community Outreach">Community Outreach</option>
								</select>
							</label>
							<label>
								Availability
								<input
									name="availability"
									required
									placeholder="Weekends, weekdays, evenings"
								/>
							</label>
						</div>
						<button className="btn primary" type="submit">
							Join the Seva Team
						</button>
						{volunteerSubmitted && (
							<p className="form-success" role="status">
								Thank you for offering seva. We will be in touch soon.
							</p>
						)}
					</form>
				</section>

				<section id="blog" className="section blog" data-reveal>
					<div className="section-header">
						<h2>Blog / Knowledge</h2>
						<p>
							Wisdom, insights, and practices from the Tayi Sadhana tradition.
						</p>
					</div>
					<div className="grid three">
						{blogCards.map((card) => (
							<article key={card.title} className="card">
								<h3>{card.title}</h3>
								<p>{card.summary}</p>
							</article>
						))}
					</div>
					<div className="knowledge-callout">
						<h3>Knowledge that protects the future</h3>
						<p>
							Our blog shares research, contemplative guidance, and daily
							practices to help you live in harmony with the Divine Mother and
							nature's rhythms.
						</p>
						<a className="btn ghost" href="#contact">
							Request the Knowledge Library
						</a>
					</div>
				</section>

				<section className="section faq" data-reveal>
					<div className="section-header">
						<h2>Frequently Asked</h2>
						<p>
							Clear answers for seekers beginning the Tayi Sadhana journey.
						</p>
					</div>
					<div className="faq-grid">
						{faqs.map((item) => (
							<details key={item.question} className="faq-item">
								<summary>{item.question}</summary>
								<p>{item.answer}</p>
							</details>
						))}
					</div>
				</section>

				<section id="contact" className="section contact" data-reveal>
					<div className="section-header">
						<h2>Contact Us</h2>
						<p>
							Reach out to learn about programs, volunteering, and sacred
							initiatives.
						</p>
					</div>
					<div className="contact-card">
						<div>
							<p className="contact-title">Sadhana Yogalaya</p>
							<p>In the heart of the Divine Mother, welcoming all seekers.</p>
							<div className="contact-meta">
								<span>Phone: +91 00000 00000</span>
								<span>Email: connect@tayi-yoga.org</span>
							</div>
						</div>
						<a className="btn ghost" href="#contact-form">
							Schedule a Visit
						</a>
					</div>
					<form
						id="contact-form"
						className="form-card"
						onSubmit={(event) => {
							event.preventDefault();
							setContactSubmitted(true);
						}}
					>
						<div className="form-grid">
							<label>
								Full Name
								<input name="contactName" required placeholder="Your name" />
							</label>
							<label>
								Email Address
								<input
									name="contactEmail"
									type="email"
									required
									placeholder="you@example.com"
								/>
							</label>
							<label>
								Topic
								<select name="contactTopic" required defaultValue="">
									<option value="" disabled>
										Select one
									</option>
									<option value="Programs">Programs</option>
									<option value="Volunteering">Volunteering</option>
									<option value="Donations">Donations</option>
									<option value="Visiting">Visiting</option>
								</select>
							</label>
							<label className="full">
								Message
								<textarea
									name="contactMessage"
									required
									rows={4}
									placeholder="Share your intention or question"
								/>
							</label>
						</div>
						<button className="btn primary" type="submit">
							Send Message
						</button>
						{contactSubmitted && (
							<p className="form-success" role="status">
								Thank you for reaching out. We will respond shortly.
							</p>
						)}
					</form>
				</section>
			</main>

			<footer className="site-footer">
				<p>
					Tayi Sadhana Yoga - A living temple of peace, love, and life energy.
				</p>
				<p>Copyright 2026. All rights reserved.</p>
			</footer>

			{showTop && (
				<a className="back-to-top" href="#home" aria-label="Back to top">
					Top
				</a>
			)}

			{selectedProgram && (
				<div className="modal-backdrop" role="dialog" aria-modal="true">
					<div className="modal">
						<button
							className="modal-close"
							onClick={() => setSelectedProgram(null)}
							aria-label="Close program details"
						>
							Close
						</button>
						<p className="modal-label">{selectedProgram.label}</p>
						<h3>{selectedProgram.title}</h3>
						<p>{selectedProgram.details}</p>
						<button
							className="btn primary"
							onClick={() => setSelectedProgram(null)}
						>
							Return to Programs
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
