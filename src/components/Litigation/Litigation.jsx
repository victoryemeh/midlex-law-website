import { useState, useEffect } from "react";
import LandingNavbar from "../Navbar/LandingNavbar";
import CtaBand from "../CtaBand/CtaBand";
import Footer from "../Footer/Footer";
import { assets } from "../../assets";
import "./Litigation.css";

const experienceColumns = [
  {
    title: "Experience Representing Clients Across Industries",
    text: "Our Litigation and Dispute Resolution team represents corporations, financial institutions, government agencies, multinational companies, entrepreneurs, and high-net-worth individuals in complex disputes across Nigeria. Led by seasoned advocates with extensive courtroom and arbitral experience, our team regularly appears before superior courts of record, specialised tribunals, arbitral panels, and regulatory bodies. We understand that every dispute is unique and requires a tailored strategy aligned with our clients' commercial and personal objectives. In addition to representing claimants and defendants, we advise clients seeking to prevent disputes, manage legal risk, and resolve conflicts efficiently before they escalate into litigation.",
  },
  {
    title: "Expertise in Complex Commercial Disputes",
    text: "Our lawyers are recognised for their ability to navigate high-stakes disputes involving intricate legal, regulatory, and commercial issues. Whether pursuing claims, defending actions, enforcing contractual rights, or protecting valuable business interests, we provide strategic guidance at every stage of the dispute resolution process. Our experience spans both traditional litigation and alternative dispute resolution mechanisms, enabling us to recommend and implement the most effective approach for each matter. Our reputation for thorough preparation, persuasive advocacy, and practical problem-solving has earned the trust of clients facing some of their most challenging legal disputes.",
  },
];

const litigationChecklist = [
  [
    "Commercial and contractual disputes",
    "Corporate and shareholder disputes",
    "Banking and financial services litigation",
  ],
  [
    "Employment and labour disputes",
    "Real estate and property disputes",
    "Construction and infrastructure disputes",
  ],
];

const handlingParagraphs = [
  "In handling these matters, our team draws upon extensive experience in corporate law, finance, banking, employment law, and matters of regulatory compliance, public law, and commercial transactions. This multidisciplinary perspective enables us to develop comprehensive litigation strategies that address both the legal and commercial realities facing our clients.",
  "We approach every dispute with the understanding that success is not measured solely by winning in court, but by protecting our clients' interests and helping them achieve their broader objectives. While our courtroom advocacy is a cornerstone of our practice, our ability to provide practical, business-focused counsel is equally important in guiding clients through complex and challenging disputes.",
  "Whether through litigation, arbitration, mediation, or negotiated settlement, we act as trusted partners committed to securing the most effective and commercially sensible outcome for every client.",
];

function CheckIcon() {
  return (
    <svg
      className="litigation-check-icon"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 4.5L6.75 13.5L3 9.75"
        stroke="#10633b"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Litigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="litigation-page">
      {/* Navigation */}
      <LandingNavbar
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      {/* Hero Section */}
      <section className="litigation-hero">
        <div className="litigation-hero__bg">
          <img src={assets.practiceherobg} alt="" />
        </div>
        <div className="litigation-hero__overlay" />
        <div className="litigation-hero__content">
          <h1 className="litigation-hero__title">
            Resolving disputes and protecting your interests when the stakes are
            highest
          </h1>
          <p className="litigation-hero__text">
            Business disputes can arise without warning and quickly threaten an
            organisation's operations, reputation, financial stability, and
            strategic objectives. Contract breaches, shareholder disagreements,
            regulatory investigations, employment claims, and commercial
            conflicts often require swift and decisive legal action. When
            litigation becomes unavoidable, you deserve experienced advocates
            who combine strategic thinking, technical excellence, and relentless
            commitment to achieving the best possible outcome.
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <div className="litigation-hero-image">
        <div className="litigation-hero-image__wrapper">
          <img
            src={assets.litigationImage}
            alt="Litigation and dispute resolution at Midlex"
          />
        </div>
      </div>

      {/* Experience / Expertise two-column section */}
      <section className="litigation-experience">
        <div className="litigation-experience__grid">
          {experienceColumns.map((col, idx) => (
            <div className="litigation-experience__col" key={idx}>
              <h2 className="litigation-experience__title">{col.title}</h2>
              <p className="litigation-experience__text">{col.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Handling All Aspects of Litigation */}
      <section className="litigation-handling">
        <div className="litigation-handling__container">
          <h2 className="litigation-handling__title">
            Handling All Aspects of Litigation and Dispute Resolution
          </h2>
          <p className="litigation-handling__intro">
            Whether you are a business owner, investor, employee, financial
            institution, government entity, or private individual, you can rely
            on our skilled litigators to handle every legal dispute that may
            arise in contentious matters, including:
          </p>

          <div className="litigation-handling__grid">
            {litigationChecklist.map((column, colIdx) => (
              <div className="litigation-handling__col" key={colIdx}>
                {column.map((item, itemIdx) => (
                  <div className="litigation-handling__item" key={itemIdx}>
                    <CheckIcon />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {handlingParagraphs.map((para, idx) => (
            <p className="litigation-handling__text" key={idx}>
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <CtaBand />

      {/* Footer */}
      <Footer />
    </div>
  );
}
