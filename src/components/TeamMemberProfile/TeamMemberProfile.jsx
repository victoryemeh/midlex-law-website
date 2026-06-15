import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import LandingNavbar from "../Navbar/LandingNavbar";
import CtaBand from "../CtaBand/CtaBand";
import Footer from "../Footer/Footer";
import { assets } from "../../assets";
import {
  getTeamMemberById,
  getOtherTeamMembers,
} from "../../data/teamMembersData";
import "./TeamMemberProfile.css";

export default function TeamMemberProfile() {
  const { memberId } = useParams();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const teamMember = getTeamMemberById(memberId);
  const otherMembers = getOtherTeamMembers(memberId, 3);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Redirect if member not found
  useEffect(() => {
    if (!teamMember) {
      navigate("/our-team");
    }
  }, [teamMember, navigate]);

  if (!teamMember) {
    return null;
  }

  return (
    <div className="team-member-profile-page">
      {/* Navigation */}
      <LandingNavbar
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      {/* Hero Section */}
      <section className="team-member-hero">
        <div className="team-member-hero__bg">
          <img src={assets.herobg} alt="Hero background" />
        </div>
        <div className="team-member-hero__overlay" />
        <div className="team-member-hero__container">
          {/* Left Side - Image in Hero */}
          <div className="team-member-hero__image-wrapper">
            <img
              src={teamMember.fullimage}
              alt={teamMember.name}
              className="team-member-hero__image"
            />
          </div>

          {/* Right Side - Header and Content in Hero */}
          <div className="team-member-hero__info">
            <div className="team-member-hero__header">
              <h1 className="team-member-hero__name">{teamMember.name}</h1>
              <p className="team-member-hero__title">{teamMember.title}</p>
              <p className="team-member-hero__email">{teamMember.email}</p>
            </div>

            {/* Content Sections */}
            <div className="team-member__content">
              {/* Personal Information */}
              <div className="team-member__section">
                <h3 className="team-member__section-title">
                  Personal Information
                </h3>
                <p className="team-member__section-text">
                  {teamMember.personalInfo}
                </p>
              </div>

              {/* Professional Membership */}
              {teamMember.professionalMemberships.length > 0 && (
                <div className="team-member__section">
                  <h3 className="team-member__section-title">
                    Professional Membership
                  </h3>
                  <div className="team-member__list">
                    {teamMember.professionalMemberships.map(
                      (membership, idx) => (
                        <p key={idx} className="team-member__list-item">
                          {membership}
                        </p>
                      ),
                    )}
                  </div>
                </div>
              )}

              {/* Educational Acquisitions */}
              {teamMember.education.length > 0 && (
                <div className="team-member__section">
                  <h3 className="team-member__section-title">
                    Educational Acquisitions
                  </h3>
                  <div className="team-member__list">
                    {teamMember.education.map((edu, idx) => (
                      <p key={idx} className="team-member__list-item">
                        {edu}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="team-member-divider" />

      {/* See More Section */}
      <section className="team-member-see-more">
        <div className="container">
          <h2 className="team-member-see-more__title">See More</h2>

          <div className="team-member-carousel">
            {otherMembers.map((member) => (
              <div
                key={member.id}
                className="team-member-card"
                onClick={() => navigate(`/team/${member.id}`)}
              >
                <div className="team-member-card__image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-member-card__info">
                  <h3 className="team-member-card__name">{member.name}</h3>
                  <p className="team-member-card__title">{member.title}</p>
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
