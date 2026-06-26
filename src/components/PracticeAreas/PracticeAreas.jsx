
import { useState, useEffect } from "react";
import LandingNavbar from "../Navbar/LandingNavbar";
import CtaBand from "../CtaBand/CtaBand";
import Footer from "../Footer/Footer";
import { assets } from "../../assets";
import "./PracticeAreas.css";
import { Link } from "react-router-dom";

const practiceAreaColumns = [
  [
    {link: "./litigation",
      title: "Litigation",
      description:
        "Representing clients before courts and tribunals across Nigeria, from commercial disputes to high-stakes appeals.",
    },
    {
      title: "Projects & Infrastructure",
      description:
        "Advising on the structuring, financing, and execution of large-scale infrastructure and development projects.",
    },
    {
      title: "Taxation",
      description:
        "Guiding individuals and businesses through tax planning, compliance, and dispute resolution with regulatory authorities.",
    },
    {
      title: "Corporate Secretarial",
      description:
        "Handling company secretarial compliance, statutory filings, and corporate governance advisory services.",
    },
    {
      title: "Asset Management & Receivership",
      description:
        "Supporting the preservation, recovery, and management of distressed or contested assets on behalf of stakeholders.",
    },
    {
      title: "Labour & Immigration",
      description:
        "Advising employers and employees on labour relations, workplace policy, and cross-border immigration matters.",
    },
  ],
  [
    {
      title: "Divestment Matters",
      description:
        "Guiding clients through the legal and regulatory steps involved in divesting business interests and assets.",
    },
    {
      title: "Finance",
      description:
        "Structuring and negotiating debt, equity, and project finance transactions across multiple sectors.",
    },
    {
      title: "Alternative Dispute Resolution",
      description:
        "Resolving disputes through arbitration, mediation, and negotiation as efficient alternatives to litigation.",
    },
    {
      title: "Intellectual Property",
      description:
        "Protecting and enforcing trademarks, patents, copyrights, and other intellectual property rights.",
    },
    {
      title: "Entertainment & Sports",
      description:
        "Advising talent, brands, and organisations on contracts, rights, and regulatory matters in entertainment and sports.",
    },
    {
      title: "Citizenship Legal Appreciation & Beneficiation",
      description:
        "Advising on citizenship, residency, and beneficiation matters within Nigeria's legal and regulatory framework.",
    },
  ],
  [
    {
      title: "Property and Real Estate",
      description:
        "Handling property acquisitions, leases, titling, and development matters for individuals and corporates.",
    },
    {
      title: "Mergers & Acquisitions",
      description:
        "Leading clients through deal structuring, due diligence, and negotiation in mergers and acquisitions.",
    },
    {
      title: "Transactions",
      description:
        "Structuring and closing commercial transactions with a focus on risk mitigation and value protection.",
    },
    {
      title: "Insolvency & Debt Recovery",
      description:
        "Advising creditors and debtors on insolvency proceedings, restructuring, and debt recovery strategies.",
    },
    {
      title: "Law & Private Equity",
      description:
        "Supporting private equity sponsors and portfolio companies through fund formation, investment, and exit.",
    },
  ],
];

const standardPoints = [
  "Better legal solutions that meet clients' real-world needs — pursuing the most efficient, value-driven path to the outcome our clients need.",
  "Treat every client as a partner in forward motion — partnering through each matter together, not managing them from a distance.",
  "Find the best way forward, whether that means a creative settlement, a negotiated resolution, or a hard-fought courtroom victory.",
];

function CheckIcon() {
  return (
    <svg
      className="standard-check-icon"
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

export default function PracticeArea() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openItem, setOpenItem] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleItem = (key) => {
    setOpenItem((prev) => (prev === key ? null : key));
  };

  return (
    <div className="practice-area-page">
      {/* Navigation */}
      <LandingNavbar
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      {/* Hero Section */}
      <section className="practice-hero">
        <div className="practice-hero__bg">
          <img src={assets.practiceherobg} alt="" />
        </div>
        <div className="practice-hero__overlay" />
        <div className="practice-hero__content">
          <h1 className="practice-hero__title">Practice Areas</h1>
          <p className="practice-hero__text">
            Midlex was built around a single conviction: that legal practice,
            done well, changes outcomes. Not just case outcomes; business
            outcomes, community outcomes, the kind that compound over years. We
            took that conviction and assembled a firm around it. Across 17
            practice areas and a growing roster of industries, our attorneys
            bring deep subject-matter knowledge into every mandate. A banking
            dispute is not just a litigation file to us, it sits inside a
            regulatory context, a business relationship, and a client's
            financial reality. We read all of it. We work all of it. The Midas
            Touch is not a tagline we inherited. It is the standard our team
            holds itself to on every brief, in every courtroom appearance,
            across every negotiation table. Clients who come to us with tangled
            problems leave with a clear path forward. That is the work. That is
            what we do.
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <div className="practice-hero-image">
        <div className="practice-hero-image__wrapper">
          <img src={assets.practiceAreasImage} alt="Legal practice at Midlex" />
        </div>
      </div>

      {/* Practice Areas List */}
      <div className="practice-list">
        <div className="practice-list__grid">
          {practiceAreaColumns.map((column, colIdx) => (
            <div className="practice-list__column" key={colIdx}>
              {column.map((item, itemIdx) => {
                const key = `${colIdx}-${itemIdx}`;
                const isOpen = openItem === key;
                return (
                  <div
                    className={`practice-item ${isOpen ? "open" : ""}`}
                    key={key}
                  >
                    
                      <button
                        className="practice-item__header"
                        onClick={() => toggleItem(key)}
                        type="button"
                      >
                        <span className="practice-item__title">
                          {item.title}
                        </span>
                        <span className="practice-item__icon">
                          <img src={assets.arrowIcon} alt="" />
                        </span>
                      </button>
                    

                    {/* {isOpen && (
                      <p className="practice-item__description">
                        {item.description}
                      </p>
                    )} */}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* The Midlex Standard */}
      <section className="midlex-standard">
        <div className="midlex-standard__container">
          <h2 className="midlex-standard__title">The Midlex Standard</h2>
          <p className="midlex-standard__text">
            At Midlex, every client relationship is built to last. We have
            deliberately chosen to practice across areas of Nigerian law that
            sit at the core of what our clients care about most: their
            businesses, their wealth, their rights, and their futures, whether
            they are established corporations, emerging ventures, or public
            institutions. Our attorneys bring depth and range to every mandate.
            Across every practice area, our approach holds firm. Specifically,
            we:
          </p>
          <div className="midlex-standard__list">
            {standardPoints.map((point, idx) => (
              <div className="midlex-standard__item" key={idx}>
                <CheckIcon />
                <p>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaBand />

      {/* Footer */}
      <Footer />
    </div>
  );
}
