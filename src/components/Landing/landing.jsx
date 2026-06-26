import { useState, useEffect, useRef } from "react";
import "./landing.css";
import { assets } from "../../assets";
import LandingNavbar from "../Navbar/LandingNavbar";
import CtaBand from "../CtaBand/CtaBand";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

/* ── Data ─────────────────────────────────────────────────── */

const SERVICES = [
  { name: "Litigation", img: assets.litigationService },
  { name: "Finance", img: assets.financeService },
  { name: "Property and Real Estate", img: assets.realEstateService },
  { name: "Electoral Matters", img: assets.Election },
  { name: "Projects & Infrastructure", img: assets.Infrastructure },
  { name: "Mergers & Acquisitions", img: assets.Merger },
  { name: "Company Secretarial", img: assets.CompanySecretarial },
  { name: "Debt Recovery", img: assets.DebtRecovery },
  { name: "Taxation", img: assets.Taxation },
  { name: "Dispute Resolution", img: assets.DisputeResolution },
  { name: "Transactions", img: assets.Transaction },
  { name: "Intellectual Property", img: assets.IntellectualProperty },
  { name: "Assets Management", img: assets.AssetsManagement },
  { name: "Entertainment & Sports", img: assets.Entertainment },
  { name: "Law and Private Equity", img: assets.LawAndPrivateEquity },
  { name: "Labour & Immigration", img: assets.LabourAndImmigration },
  {
    name: "Citizens Legal Appreciation",
    img: assets.CitizensLegalAppreciation,
  },
];

const STATS = [
  { value: "1M+", label: "OUTREACH IMPRESSIONS" },
  { value: "10+", label: "ADVISORY CLIENTS" },
  { value: "4", label: "LANDMARK SETTLEMENTS" },
];

const TESTIMONIALS = [
  {
    quote:
      "You have helped the Edo State Government burst a conundrum with aggrieved staff... you salvaged the situation and got the parties to agree on a compromise that is mutually beneficial to all.",
    name: "Mr. Osabon Abbe",
    title:
      "Permanent Secretary, Edo State Pension Bureau - College of Agriculture Settlement",
  },
  {
    quote:
      "The injustice I suffered is so much; my salary was locked up for over a year. But thanks to this firm, once they stepped in, the game changed entirely.",
    name: "Mr. Ajayi Stanley Ozavsaha",
    title: "Claimant - Suit No: IE/104m/2023 vs. First City Monument Bank",
  },
  {
    quote:
      "I am grateful for what this firm has done for me, for the love and care shown me. Instead of paying a lawyer, the lawyer was paying the bills every time we went to the probate registry.",
    name: "Mrs. Happiness Omoye Ambrose",
    title:
      "Pro Bono Client - Letters of Administration over late husband's estate",
  },
  {
    quote:
      "Your firm’s approach to dispute resolution is exceptional. Through mediation and sound counsel, you helped us achieve a respected and mutually beneficial settlement despite our difficult circumstances.",
    name: "Mr. Martin Omon Imherhion",
    title: "Judgment Creditor · College of Agriculture Dispute Settlement",
  },
  {
    quote:
      "Winning this case was made possible through your firm’s professionalism, swift execution, and constant feedback throughout the litigation process. Even from abroad, I felt fully involved every step of the way.",
    name: "Gabriel Imafidon",
    title: "Judgment Creditor · Civil Litigation Matter",
  },
  {
    quote:
      "Through professionalism and strategic mediation, the Firm successfully resolved a long-standing land dispute and secured full compensation for our losses.",
    name: "Mr. Cooper Suara",
    title:
      "Land Dispute Mediation · Multi-Door Court House Settlement Week 2024",
  },
  {
    quote:
      "Midlex provided exceptional legal representation and support throughout our tax dispute matter, ensuring clarity, professionalism, and a favorable resolution.",
    name: "Divine Wisdom International School Ltd/Gte",
    title: "Tax Dispute Resolution · Edo State Board of Internal Revenue",
  },
  {
    quote:
      "After years of prolonged litigation, the Firm’s dedication and ADR expertise helped us achieve a final settlement and monetary compensation from the Edo State Government.",
    name: "Disengaged Staff of the College of Agriculture",
    title: "Post-Judgment Settlement · Edo State Government Litigation",
  },
];

const ARTICLES = [
  {
    title: "CAF, AFCON & the Limits of Sporting Justice: A Legal Perspective",
    img: assets.AfconCup,
  },
  {
    title: "The Effect of Remote work on Employee Productivity",
    img: assets.CouchMan,
  },
  {
    title: "Rebuilding Public Trust in the Nigerian Justice System",
    img: assets.LawScale,
  },
];

const FAQS = [
  {
    q: "What is Midlex and what does the name mean?",
    a: "Midlex is a full-service law firm delivering interactive legal services with excellence. The name blends 'Midas' (the mythological king with the golden touch) and 'Lex' (Latin for law), symbolising our commitment to delivering golden results for every client.",
  },
  {
    q: "What practice areas does Midlex cover?",
    a: "Midlex covers Litigation, Mediation, Consultation, Corporate Law, Real Estate, Finance, and more. We provide a three-layered dispute resolution model anchored on consultation, mediation, and litigation.",
  },
  {
    q: "What is your approach to resolving disputes?",
    a: "We begin with consultation, attempt mediation and alternative dispute resolution, and proceed to litigation only when necessary. This three-layered approach saves clients time and money.",
  },
  {
    q: "What happens during the initial consultation?",
    a: "The initial consultation involves a detailed review of your matter, an assessment of your legal position, and advice on the best course of action. We listen carefully before recommending any strategy.",
  },
  {
    q: "How are legal fees structured at Midlex?",
    a: "Legal fees at Midlex are transparent and structured based on the complexity of the matter. We offer fixed fees, retainers, and in select pro bono cases, we provide services at no cost.",
  },
  {
    q: "How do I get started?",
    a: "Simply click 'Book a Consultation' on our website, call us, or visit our office in Benin City, Edo State. We'll schedule a meeting and begin reviewing your matter promptly.",
  },
];

/* ── Sub-components ───────────────────────────────────────── */

function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner">
        {/* LEFT: text content */}
        <div className="hero-content">
          <h1 className="hero__heading hero-anim">
            Proferring Solutions.
            <br />
            Advancing Possibilities.
          </h1>

          <p className="hero__sub sans hero-anim-2">
            Exploring an ecosystem where law is practiced with a Midas Touch.
            <br className="hero__sub-break" />A unique, full-service law firm
            delivering interactive legal services with excellence.
          </p>

          <div className="hero__cta-group hero-anim-3">
            <Link to= "/contact">
            <button className="btn-primary">Book a Consultation</button>
            </Link>
            <Link to="/about">
            <button className="btn-outline">Learn more</button>
            </Link>
          </div>
        </div>

        {/* RIGHT: Lady Justice statue — absolutely pinned bottom-right */}
        <div className="hero__image-wrap">
          <div className="hero__image-frame">
            <img src={assets.heroImg} alt="Lady Justice" />
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="about__grid">
          <div className="about__text">
            <p className="section-tag">ABOUT US</p>
            <h2 className="about__heading">
              Passion, Precision, and <br />
              Professionalism in Law
            </h2>
            <p className="about__body">
              We are a unique and full-service law firm providing a wide range
              of legal services to clients both within and outside Nigeria.
            </p>
            <Link to="/about">
              <button className="btn-primary">Read more</button>
            </Link>
          </div>

          <div className="about__images">
            <img
              className="about__img about__img--wide"
              src={assets.about1}
              alt="Legal team meeting"
            />
            <img
              className="about__img about__img--narrow"
              src={assets.about2}
              alt="Lawyers in robes"
            />
          </div>
        </div>
      </div>
    </section>
  );
}


function Services() {
  const [active, setActive] = useState(0);
  const isMobile = useWindowWidth() < 768;
  const visibleCount = isMobile ? 1 : 3;

  const prev = () =>
    setActive((p) => (p - 1 + SERVICES.length) % SERVICES.length);
  const next = () => setActive((p) => (p + 1) % SERVICES.length);

  const visible = Array.from(
    { length: visibleCount },
    (_, offset) => SERVICES[(active + offset) % SERVICES.length],
  );

  /* ── Swipe handling (mobile thumb-swipe) ── */
  const touchStartX = useRef(null);
  const touchDeltaX = useRef(0);
  const SWIPE_THRESHOLD = 40; // px — how far a swipe must travel to count

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };

  const handleTouchMove = (e) => {
    if (touchStartX.current === null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null) return;
    if (touchDeltaX.current <= -SWIPE_THRESHOLD) {
      next(); // swiped left → next card
    } else if (touchDeltaX.current >= SWIPE_THRESHOLD) {
      prev(); // swiped right → previous card
    }
    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

  return (
    <section className="services">
      <div className="container">
        <div className="services__header">
          <p className="section-tag">OUR SERVICES</p>
          <h2 className="services__heading">
            Comprehensive Legal Services Tailored to Your Needs
          </h2>
          <p className="services__sub">
            A three-layered dispute resolution model anchored on consultation,
            mediation, and litigation.
          </p>
          <Link to="./services">
            <button className="btn-primary">View more Services</button>
          </Link>
        </div>

        <div className="services__carousel">
          <button
            className="services__arrow"
            onClick={prev}
            aria-label="Previous"
          >
            &#8249;
          </button>

          <div
            className="services__track"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {visible.map((service, i) => (
              <div key={service.name + i} className="service-card">
                <div className="service-card__inner">
                  <img
                    className="service-card__img"
                    src={service.img}
                    alt={service.name}
                  />
                  <div className="service-card__overlay" />
                  <span className="service-card__label">{service.name}</span>
                </div>
              </div>
            ))}
          </div>

          <button className="services__arrow" onClick={next} aria-label="Next">
            &#8250;
          </button>
        </div>

        <div className="services__dots" />
      </div>
    </section>
  );
}
function Stats() {
  return (
    <section className="stats">
      <div className="stats__row">
        {STATS.map((s) => (
          <div key={s.label} className="stats__item">
            <div className="stats__number">{s.value}</div>
            <div className="stats__label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}


function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials__header">
          <p className="section-tag">HEAR FROM REAL PEOPLE</p>
          <h2 className="testimonials__heading">Tabloid of Testimonials</h2>
        </div>
      </div>

      <div className="testimonials-marquee">
        <div className="testimonials-marquee__track">
          {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
            <div key={i} className="testimonial-card">
              <p className="testimonial-card__quote">"{t.quote}"</p>
              <p className="testimonial-card__name sans">{t.name}</p>
              <p className="testimonial-card__title sans">{t.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="testimonials__mobile">
        {TESTIMONIALS.map((t) => (
          <div key={t.name} className="testimonial-card--mobile">
            <p className="testimonial-card__quote">"{t.quote}"</p>
            <p className="testimonial-card__name sans">{t.name}</p>
            <p className="testimonial-card__title sans">{t.title}</p>
          </div>
        ))}
      </div> */}
    </section>
  );
}
function Articles() {
  return (
    <section className="articles">
      <div className="container">
        <div className="articles__header">
          <p className="section-tag">ARTICLES</p>
        </div>

        <div className="articles__row">
          {ARTICLES.map((a) => (
            <div key={a.title} className="article-card">
              <img className="article-card__img" src={a.img} alt={a.title} />
              <div className="article-card__body">
                <h3 className="article-card__title">{a.title}</h3>
                <Link to="/articles">
                  <button className="btn-read-more">Read more</button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="articles__see-more">
          <Link to="/articles">
            <button className="btn-primary">See more</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function Faqs() {
  const [open, setOpen] = useState(null);
  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <section className="faqs">
      <div className="container--narrow">
        <h2 className="faqs__heading">FAQs</h2>

        {FAQS.map((faq, i) => (
          <div key={faq.q} className="faq-item">
            <button className="faq-btn" onClick={() => toggle(i)}>
              <span>{faq.q}</span>
              <img
                src={assets.backarrow}
                alt="Toggle"
                className={`faq-btn__icon ${open === i ? "open" : ""}`}
              />
            </button>
            {open === i && <p className="faq-answer">{faq.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Hook ─────────────────────────────────────────────────── */
function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200,
  );
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return width;
}

/* ── Root ─────────────────────────────────────────────────── */

export default function MidlexLanding() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="midlex-root">
      <div
        className="hero-wrapper"
        style={{ backgroundImage: `url(${assets.landingherobg})` }}
      >
        <div className="hero-wrapper__overlay" />
        <LandingNavbar
          scrolled={scrolled}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
        <Hero />
      </div>
      <About />
      <Services />
      <Stats />
      <Testimonials />
      <CtaBand />
      <Articles />
      <Faqs />
      <Footer />
    </div>
  );
}
