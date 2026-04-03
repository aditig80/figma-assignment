import React, { useState, useEffect } from 'react';
import './App.css';

// ─── NAVBAR ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__logo">Elementum</div>
      <ul className={`navbar__links ${menuOpen ? 'open' : ''}`}>
        {['Home', 'Studio', 'Services', 'Contact', 'FAQs'].map(item => (
          <li key={item}><a href="/#" onClick={() => setMenuOpen(false)}>{item}</a></li>
        ))}
      </ul>
      <button className="navbar__hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
        <span /><span /><span />
      </button>
    </nav>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
const teamMembers = [
  { id: 1, name: 'rubul',     img: 'https://randomuser.me/api/portraits/men/32.jpg',  style: { top: '52%', left: '4%' } },
  { id: 2, name: 'nish Nath', img: 'https://randomuser.me/api/portraits/men/11.jpg',  style: { top: '35%', left: '0%' } },
  { id: 3, name: '',          img: 'https://randomuser.me/api/portraits/men/45.jpg',  style: { top: '18%', left: '28%' } },
  { id: 4, name: '',          img: 'https://randomuser.me/api/portraits/women/44.jpg',style: { top: '38%', left: '38%' } },
  { id: 5, name: '',          img: 'https://randomuser.me/api/portraits/men/67.jpg',  style: { top: '20%', left: '52%' } },
  { id: 6, name: '',          img: 'https://randomuser.me/api/portraits/men/85.jpg',  style: { top: '22%', left: '70%' } },
  { id: 7, name: '',          img: 'https://randomuser.me/api/portraits/women/63.jpg',style: { top: '42%', left: '77%' } },
  { id: 8, name: '',          img: 'https://randomuser.me/api/portraits/men/22.jpg',  style: { top: '58%', left: '42%' } },
];

function Hero() {
  return (
    <section className="hero">
      {/* Decorative shapes */}
      <div className="hero__shape hero__shape--purple" />
      <div className="hero__shape hero__shape--pink" />
      <div className="hero__shape hero__shape--squiggle" />

      <h1 className="hero__heading">
        The <span className="hero__highlight hero__highlight--underline-yellow">thinkers</span> and<br />
        doers were changing<br />
        the <span className="hero__highlight hero__highlight--bg-green">status</span> Quo with
      </h1>
      <p className="hero__sub">
        We are a team of strategists, designers communicators, researchers. Togeather,<br />
        we belive that progress only highappers when you refuse to play things safe.
      </p>

      {/* Floating team members */}
      <div className="hero__team">
        {teamMembers.map(m => (
          <div key={m.id} className="hero__avatar" style={m.style}>
            <img src={m.img} alt={m.name || 'team member'} />
            {m.name && <span className="hero__avatar-label">{m.name}</span>}
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── TOMORROW ─────────────────────────────────────────────────────────────────
function Tomorrow() {
  return (
    <section className="tomorrow">
      <div className="tomorrow__text">
        <h2>Tomorrow should<br />be better than today</h2>
        <p>
          We are a team of strategists, designers communicators, researchers.
          Togeather, we belive that progress only happens when you refuse
          to play things safe.
        </p>
        <a href="/#" className="read-more">Read more <span className="read-more__line" /></a>
      </div>
      <div className="tomorrow__image">
        {/* Decorative triangles */}
        <div className="tomorrow__tri tomorrow__tri--red-lg" />
        <div className="tomorrow__tri tomorrow__tri--red-sm" />
        <div className="tomorrow__tri tomorrow__tri--green" />
        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80" alt="team meeting" />
      </div>
    </section>
  );
}

// ─── PROGRESS ─────────────────────────────────────────────────────────────────
function Progress() {
  return (
    <section className="progress-section">
      <div className="progress-section__image">
        <div className="progress-section__tri progress-section__tri--red-lg" />
        <div className="progress-section__tri progress-section__tri--red-sm" />
        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&q=80" alt="collaboration" />
      </div>
      <div className="progress-section__text">
        <h2>See <span className="highlight-underline">how</span> we can<br />help you progress</h2>
        <p>
          We add a layer of fearless insights and action that allows change
          makers to accelerate their progress in areas such as brand, design
          digital, comms and social research.
        </p>
        <a href="/#" className="read-more">Read more <span className="read-more__line" /></a>
      </div>
      {/* Wavy red line decorative */}
      <div className="progress-section__wave" />
    </section>
  );
}

// ─── SERVICES / WHAT WE OFFER ─────────────────────────────────────────────────
const services = [
  { label: 'Office of multiple interest content',   title: 'Colaborative & partnership' },
  { label: 'The hanger US Air force digital experimental', title: 'We talk about our weight' },
  { label: 'Delta faucet content, social, digital', title: 'Piloting digital confidence' },
];

function WhatWeOffer() {
  return (
    <section className="offer">
      <div className="offer__inner">
        <h2 className="offer__heading">
          What we <span className="offer__highlight">can</span><br />
          <span className="offer__underline">offer</span> you!
        </h2>
        <div className="offer__table">
          {services.map((s, i) => (
            <div key={i} className="offer__row">
              <div className="offer__row-label">{s.label}</div>
              <div className="offer__row-title">{s.title}</div>
              <div className="offer__row-arrow">—</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── TESTIMONIAL ──────────────────────────────────────────────────────────────
const testimonialAvatars = [
  { img: 'https://randomuser.me/api/portraits/men/10.jpg',  style: { top: '5%',  left: '2%' } },
  { img: 'https://randomuser.me/api/portraits/men/20.jpg',  style: { top: '40%', left: '0%' } },
  { img: 'https://randomuser.me/api/portraits/men/30.jpg',  style: { top: '70%', left: '3%' } },
  { img: 'https://randomuser.me/api/portraits/men/40.jpg',  style: { top: '10%', right: '25%' } },
  { img: 'https://randomuser.me/api/portraits/men/50.jpg',  style: { top: '50%', right: '5%' } },
  { img: 'https://randomuser.me/api/portraits/men/60.jpg',  style: { top: '5%',  right: '3%' } },
];

function Testimonials() {
  return (
    <section className="testimonials">
      <h2 className="testimonials__heading">
        What our customer<br />says <span className="highlight-underline">About Us</span>
      </h2>
      <div className="testimonials__avatars">
        {testimonialAvatars.map((a, i) => (
          <div key={i} className="testimonials__avatar" style={a.style}>
            <img src={a.img} alt="customer" />
          </div>
        ))}
      </div>
      <div className="testimonials__card">
        <span className="testimonials__quote testimonials__quote--open">"</span>
        <p>
          Elementum delivered the site with inthe timeline as they requested.
          Inthe end, the client found a 50% increase in traffic with in days
          since its launch. They also had an impressive ability to use
          technologies that the company hasnt used, which have also proved to
          be easy to use and reliable
        </p>
        <span className="testimonials__quote testimonials__quote--close">"</span>
      </div>
    </section>
  );
}

// ─── NEWSLETTER ───────────────────────────────────────────────────────────────
function Newsletter() {
  return (
    <section className="newsletter">
      <div className="newsletter__shape newsletter__shape--yellow" />
      <div className="newsletter__shape newsletter__shape--purple" />
      <div className="newsletter__badge">hp</div>
      <h2>Subscribe to<br />our newsletter</h2>
      <p>To make your stay special and even more memorable</p>
      <button className="newsletter__btn" onClick={() => alert('Subscribed!')}>
        Subscribe Now
      </button>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__col">
          <h4>Company</h4>
          {['Home','Studio','Service','Blog'].map(l => <a key={l} href="/#">{l}</a>)}
        </div>
        <div className="footer__col">
          <h4>Terms & Policies</h4>
          {['Privacy Policy','Terms & Conditions','Explore','Accessibility'].map(l => <a key={l} href="/#">{l}</a>)}
        </div>
        <div className="footer__col">
          <h4>Follow Us</h4>
          {['Instagram','LinkedIn','Youtube','Twitter'].map(l => <a key={l} href="/#">{l}</a>)}
        </div>
        <div className="footer__col">
          <h4>Terms & Policies</h4>
          <p>1498w Fusion sta, STE 20 Chicago, IL 63861.</p>
          <p>(123) 456789000</p>
          <p>info@elementum.com</p>
        </div>
      </div>
      <div className="footer__bottom">©2020 Ueserium. All rights reserved</div>
    </footer>
  );
}

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Tomorrow />
        <Progress />
        <WhatWeOffer />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
