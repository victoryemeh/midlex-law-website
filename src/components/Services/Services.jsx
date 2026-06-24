import { useState, useEffect } from "react";
import LandingNavbar from "../Navbar/LandingNavbar";
import CtaBand from "../CtaBand/CtaBand";
import Footer from "../Footer/Footer";
import { assets } from "../../assets";
import "./Services.css";
import { Link } from "react-router-dom";

const INDUSTRIES = [
  {
    id: "finance",
    title: "Finance",
    description:
      "We advise banks, investment houses, fintechs, and borrowers on regulatory compliance, structured finance, lending frameworks, and the resolution of financial disputes with speed and precision.",
    tags: "BANKING · FINTECH · CAPITAL MARKETS",
    icon: assets.financeIcon,
    bgColor: "#e6f3ed",
    BGcolor: "#ffffff",
  },
  {
    id: "governance",
    title: "Governance",
    description:
      "We support public institutions, MDAs, corporate boards, and civil society with constitutional law, regulatory frameworks, institutional design, and governance compliance to build stronger, accountable structures.",
    tags: "PUBLIC LAW · CORPORATE GOVERNANCE",
    icon: assets.governanceIcon,
    bgColor: "#ffffff",
    BGcolor: "#e6f3ed",
  },
  {
    id: "real-estate",
    title: "Real Estate",
    description:
      "From title verification and land acquisition to estate development disputes and mortgage enforcement, we guide clients through Nigeria's complex property landscape with certainty and precision.",
    tags: "TITLE · CONVEYANCING · DISPUTES",
    icon: assets.realestateIcon,
    bgColor: "#e6f3ed",
    BGcolor: "#ffffff",
  },
  {
    id: "corporate",
    title: "Corporate and Commercial",
    description:
      "We structure and advise on mergers, acquisitions, joint ventures, corporate reorganisations, shareholder agreements, and complex commercial contracts — covering the full life cycle of Nigerian businesses.",
    tags: "M&A · CONTRACTS · STRUCTURING",
    icon: assets.corporateIcon,
    bgColor: "#e6f3ed",
    BGcolor: "#ffffff",
  },
  {
    id: "labour",
    title: "Labour",
    description:
      "Navigating the Nigerian employment landscape requires expertise in PENCOM regulations, trade union relations, wrongful termination, workplace rights, and industrial arbitration — all areas where Midlex excels.",
    tags: "EMPLOYMENT · UNIONS · ARBITRATION",
    icon: assets.labourIcon,
    icon2: assets.labourIcon2,
    bgColor: "#ffffff",
    BGcolor: "#e6f3ed",
  },
  {
    id: "entertainment",
    title: "Entertainment",
    description:
      "Nigeria's creative economy is booming. We protect artists, producers, labels, and agencies through contract structuring, IP registration, royalty enforcement, and resolution of creative industry disputes.",
    tags: "MUSIC · FILM · MEDIA · TALENT",
    icon: assets.entertainmentIcon,
    bgColor: "#e6f3ed",
    BGcolor: "#ffffff",
  },
  {
    id: "sports",
    title: "Sports",
    description:
      "From athlete representation and federation disputes to sponsorship agreements and doping proceedings, we are building Nigeria's next generation of sports law — one contract and one match at a time.",
    tags: "ATHLETES · FEDERATIONS · CONTRACTS",
    icon: assets.sportIcon,
    bgColor: "#e6f3ed",
    BGcolor: "#ffffff",
  },
  {
    id: "migration",
    title: "Migration",
    description:
      "We assist individuals, families, and corporations with Nigerian and international immigration matters: from work permits and business visas to residency applications and deportation challenges.",
    tags: "VISAS · PERMITS · RESIDENCY",
    icon: assets.migrationIcon,
    bgColor: "#ffffff",
    BGcolor: "#e6f3ed",
  },
  {
    id: "investment",
    title: "Investment",
    description:
      "We guide local and foreign investors through Nigeria's regulatory environment — structuring FDI transactions, advising on NIPC compliance, negotiating investment agreements, and protecting investor rights.",
    tags: "FDI · PRIVATE EQUITY · NIPC",
    icon: assets.investmentIcon,
    bgColor: "#e6f3ed",
    BGcolor: "#ffffff",
  },
  {
    id: "construction",
    title: "Construction and Infrastructure",
    description:
      "We handle procurement disputes, construction contract negotiations, regulatory approvals, project finance documentation, and infrastructure concession agreements for developers and public sector clients.",
    tags: "PROJECTS · PROCUREMENT · PPP",
    icon: assets.constructionIcon,
    bgColor: "#e6f3ed",
    BGcolor: "#ffffff",
  },
  {
    id: "business",
    title: "Business",
    description:
      "From startup incorporation and SME legal support to board advisory and business succession planning, Midlex provides the legal backbone for businesses at every stage of their growth journey.",
    tags: "SME · STARTUP · ADVISORY",
    icon: assets.businessIcon,
    bgColor: "#ffffff",
    BGcolor: "#e6f3ed",
  },
  {
    id: "legal-advisory",
    title: "General Legal Advisory & Compliance",
    description:
      "For clients requiring ongoing legal retainer services, Midlex provides holistic legal advisory, regulatory compliance monitoring, contract review, and proactive risk management — your law firm partner on call.",
    tags: "RETAINER · COMPLIANCE · RISK",
    icon: assets.legalIcon,
    bgColor: "#e6f3ed",
    BGcolor: "#ffffff",
  },
];

const PRACTICE_AREAS = [
  {
    id: "litigation",
    title: "Litigation",
    description:
      "Aggressive, strategic, and meticulous courtroom advocacy across all courts and tribunals in Nigeria. We go tactful and thorough, from filing to final judgment.",
    tags: "COURTS · TRIBUNALS · ENFORCEMENT",
  },
  {
    id: "electoral",
    title: "Electoral Matters",
    description:
      "Pre-election, election petition, and post-election legal services. We navigate Nigeria's electoral jurisprudence with the precision demanded by democratic accountability.",
    tags: "ELECTIONS · PETITIONS · INEC",
  },
  {
    id: "property",
    title: "Property & Real Estate",
    description:
      "Title investigations, conveyancing, land documentation, governor's consent processing, landlord-tenant disputes, and real estate transaction structuring across Nigeria.",
    tags: "LAND · TITLE · CONVEYANCING",
  },
  {
    id: "projects",
    title: "Projects & Infrastructure",
    description:
      "End-to-end legal support for infrastructure development, from project finance documentation and concession agreements to procurement disputes and regulatory approvals.",
    tags: "PPP · CONCESSIONS · FINANCE",
  },
];

export default function Services() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="services-page">
      {/* Navigation */}
      <LandingNavbar
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero__bg">
          <img src={assets.serviceHero} alt="Hero background" />
        </div>
        <div className="services-hero__content">
          <span className="services-hero__label">SERVICES</span>
          <h1 className="services-hero__title">
            Full-Service Legal Excellence, Delivered with the Midas Touch
          </h1>
          <p className="services-hero__description">
            From boardrooms to courtrooms, our multidisciplinary team delivers
            the Midas Touch across every sector, every dispute, and every
            transaction.
          </p>
          <div className="services-hero__buttons">
            <Link to="/industries">
              <button className="services-hero__btn services-hero__btn--primary">
                Industries
              </button>
            </Link>
            <Link to="/practice-areas">
              <button className="services-hero__btn services-hero__btn--secondary">
                Practice Areas
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="services-industries">
        <div className="services-industries__header">
          <span className="services-industries__label">
            INDUSTRIES WE SERVE
          </span>
          <h2 className="services-industries__title">
            Sector-Specific Legal Intelligence
          </h2>
          <p className="services-industries__description">
            Midlex brings focused, sector-informed legal counsel to clients
            across Nigeria's most dynamic industries. Our attorneys don't just
            know the law, they understand the unique commercial realities,
            regulatory pressures, and human dynamics of every industry they
            serve.
          </p>
        </div>

        <div className="services-industries__grid">
          {INDUSTRIES.map((industry) => (
            <div
              key={industry.id}
              className="industry-card"
              style={{
                backgroundImage: `linear-gradient(-45.5deg, ${industry.bgColor} 7.4%, ${industry.BGcolor} 92.9%)`,
              }}
            >
              <div className="industry-card__icon">
                <img src={industry.icon} alt={industry.title} />
                {!!industry.icon2 && (
                  <img src={industry.icon2} alt={`${industry.title} icon 2`} />
                )}
                {/* <img
                  src={industry.icon2}
                  alt={`${industry.title} icon 2`}
                /> */}
              </div>
              <div className="industry-card__content">
                <h3 className="industry-card__title">{industry.title}</h3>
                <p className="industry-card__description">
                  {industry.description}
                </p>
              </div>
              <div className="industry-card__tags">
                <span className="industry-card__tag">{industry.tags}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="services-practice">
        <div className="services-practice__container">
          <div className="services-practice__left">
            <span className="services-practice__label">PRACTICE AREAS</span>
            <h2 className="services-practice__title">
              A Full-Service Legal Practice Built for Every Possibility
            </h2>
            <div className="services-practice__text">
              <p>
                Nigeria's evolving business landscape and governance environment
                demand more from legal practitioners than ever before.
              </p>
              <p>
                The increasing complexity of commercial transactions, the
                growing sophistication of disputes, and the public's heightened
                awareness of rights and accountability mean that individuals,
                corporations, and institutions must operate with greater legal
                precision. Equally, business leaders, community stakeholders,
                and public figures require the guidance of attorneys who are not
                only exceptionally skilled, but deeply invested in delivering
                outcomes.
              </p>
              <p>
                At Midlex, we are a truly full-service law firm, built on the
                philosophy of interactive legal service and driven by our
                unwavering commitment to proffering viable solutions and
                advancing possibilities for every client we serve. We bring the
                Midas Touch to a wide range of legal matters, including:
              </p>
            </div>
            <button className="services-practice__btn">
              Areas of Practice
            </button>
          </div>

          <div className="services-practice__right">
            <div className="practice-grid">
              {PRACTICE_AREAS.map((area) => (
                <div key={area.id} className="practice-card">
                  <h3 className="practice-card__title">{area.title}</h3>
                  <p className="practice-card__description">
                    {area.description}
                  </p>
                  <div className="practice-card__tags">
                    <span className="practice-card__tag">{area.tags}</span>
                  </div>
                </div>
              ))}
            </div>
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
