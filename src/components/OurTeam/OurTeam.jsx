import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./OurTeam.css";
import { assets } from "../../assets";
import LandingNavbar from "../Navbar/LandingNavbar";
import CtaBand from "../CtaBand/CtaBand";
import Footer from "../Footer/Footer";
import { TEAM_MEMBERS_DATA } from "../../data/teamMembersData";

export default function OurTeam() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleCardClick = (memberId) => {
    navigate(`/team/${memberId}`);
  };

  return (
    <div className="our-team-root">
      {/* Navigation */}
      <LandingNavbar
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      {/* Hero Section */}
      <section
        className="our-team-hero"
        style={{ backgroundImage: `url(${assets.herobg})` }}
      >
        <div className="our-team-hero__overlay" />
        <div className="container">
          <div className="our-team-hero__content">
            <h1 className="our-team-hero__heading">Modern Legal Excellence</h1>
            <p className="our-team-hero__desc">
              A curated collection of legal insights and thought leadership,
              delivering clarity, relevance, and value in an ever-evolving legal
              landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="legal-fire-brands">
        <div className="container">
          <div className="legal-fire-brands__header">
            <h2 className="legal-fire-brands__title">Legal Fire-Brands</h2>
          </div>

          <div className="team-grid">
            {TEAM_MEMBERS_DATA.map((member) => (
              <div
                key={member.id}
                className="team-card"
                onClick={() => handleCardClick(member.id)}
              >
                <div className="team-card__image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-card__content">
                  <h3 className="team-card__name">{member.name}</h3>
                  <p className="team-card__title">{member.title}</p>
                </div>
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
