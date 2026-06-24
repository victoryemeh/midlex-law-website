import { useState, useEffect } from "react";
import LandingNavbar from "../Navbar/LandingNavbar";
import CtaBand from "../CtaBand/CtaBand";
import Footer from "../Footer/Footer";
import { assets } from "../../assets";
import "./Industries.css";

const IndustriesColumns = [
  [
    {
      title: "Finance",
      description:
        "Representing clients before courts and tribunals across Nigeria, from commercial disputes to high-stakes appeals.",
    },
    {
      title: "Corporate & Commercial",
      description:
        "Advising on the structuring, financing, and execution of large-scale infrastructure and development projects.",
    },
    {
      title: "Sports",
      description:
        "Guiding individuals and businesses through tax planning, compliance, and dispute resolution with regulatory authorities.",
    },
    {
      title: "Construction & Infrastructure",
      description:
        "Handling company secretarial compliance, statutory filings, and corporate governance advisory services.",
    },
  ],
  [
  {
    title: "Governance",
    description:
      "Supporting the preservation, recovery, and management of distressed or contested assets on behalf of stakeholders.",
  },
  {
    title: "Labour",
    description:
      "Advising employers and employees on labour relations, workplace policy, and cross-border immigration matters.",
  },

  
    {
      title: "Migration",
      description:
        "Guiding clients through the legal and regulatory steps involved in divesting business interests and assets.",
    },
    {
      title: "Business",
      description:
        "Structuring and negotiating debt, equity, and project finance transactions across multiple sectors.",
    },
],
  [
{
      title: "Real Estate",
      description:
        "Resolving disputes through arbitration, mediation, and negotiation as efficient alternatives to litigation.",
    },
    {
      title: "Entertainment",
      description:
        "Protecting and enforcing trademarks, patents, copyrights, and other intellectual property rights.",
    },
    {
      title: "Investment",
      description:
        "Advising talent, brands, and organisations on contracts, rights, and regulatory matters in entertainment and sports.",
    },
    {
      title: "General Legal Advisory & Compliance",
      description:
        "Advising on citizenship, residency, and beneficiation matters within Nigeria's legal and regulatory framework.",
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

export default function Industries() {
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
    <div className="industry-area-page">
      {/* Navigation */}
      <LandingNavbar
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      {/* Hero Section */}
      <section className="industry-hero">
        <div className="industry-hero__bg">
          <img src={assets.practiceherobg} alt="" />
        </div>
        <div className="industry-hero__overlay" />
        <div className="industry-hero__content">
          <h1 className="industry-hero__title">Industries</h1>
          <p className="industry-hero__text">
            Midlex was not assembled by accident. Every attorney on our team
            brings a distinct body of experience across courtrooms, boardrooms,
            government offices, and mediation centers. When a client walks
            through our door, they get a practitioner who has spent years inside
            the specific legal terrain their matter occupies. Our team has
            handled tax disputes with state revenue authorities, enforced
            fundamental rights against commercial banks, brokered eight-year
            litigation battles into clean settlements, and advised corporations,
            communities, and diplomatic missions across the full range of
            challenges Nigerian clients face. A manufacturing company and a
            religious organization do not share the same legal pressures. We
            understand the distinctions. Size does not determine the quality of
            counsel you receive at Midlex. The standard we hold ourselves to
            does, and that standard does not move.
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="industry-hero-image">
        <div className="industry-hero-image__wrapper">
          <img src={assets.industryImage} alt="Legal practice at Midlex" />
        </div>
      </section>

      {/* Practice Areas List */}
      <section className="industry-list">
        <div className="industry-list__grid">
          {IndustriesColumns.map((column, colIdx) => (
            <div className="industry-list__column" key={colIdx}>
              {column.map((item, itemIdx) => {
                const key = `${colIdx}-${itemIdx}`;
                const isOpen = openItem === key;
                return (
                  <div
                    className={`industry-item ${isOpen ? "open" : ""}`}
                    key={key}
                  >
                    <button
                      className="industry-item__header"
                      onClick={() => toggleItem(key)}
                      type="button"
                    >
                      <span className="industry-item__title">{item.title}</span>
                      <span className="industry-item__icon">
                        <img src={assets.arrowIcon} alt="" />
                      </span>
                    </button>
                    {/* {isOpen && (
                      <p className="industry-item__description">
                        {item.description}
                      </p>
                    )} */}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </section>

      {/* The Midlex Standard */}
      <section className="midlex-standard">
        <div className="midlex-standard__container">
          <h2 className="midlex-standard__title">Law That Moves With You</h2>
          <p className="midlex-standard__text">
            The pace of business in Nigeria has never been faster, and the
            demands placed on companies have never been broader. Clients today
            must navigate shifting regulatory frameworks, manage evolving public
            expectations, and maintain credible corporate citizenship alongside
            their commercial objectives. These are no longer peripheral
            concerns. They sit at the centre of how businesses are judged, and
            how they survive. At Midlex, we track these forces because our
            clients live inside them. Our attorneys follow the regulatory
            shifts, the policy debates, the sector disruptions, and the
            governance conversations that shape the industries we serve. We do
            not wait for the law to arrive at our clients' doors. We help them
            see it coming. We built this firm to give clients more than a legal
            response. We give them a legal partner who understands the terrain
            they are operating in, and who is equipped to help them move through
            it with confidence.
          </p>
          
        </div>
      </section>

      {/* CTA Section */}
      <CtaBand />

      {/* Footer */}
      <Footer />
    </div>
  );
}
