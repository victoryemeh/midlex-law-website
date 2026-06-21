
import React from "react";
import { Link } from "react-router-dom";

import { assets } from "../../assets";

const COMPANY_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Practice Areas", href: "/services" },
  { label: "Our Team", href: "/our-team" },
  { label: "Contact Us", href: "/contact" },
];

const PRACTICE_AREAS = [
  "Litigation",
  "Mediation",
  "Consultation",
  "Corporate Law",
  "Real Estate",
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__brand">
          <div className="footer__logo">
            <img
              src={assets.logo}
              alt="Midlex Logo"
              className="footer__logo-image"
            />
          </div>
          <p className="footer__tagline">
            Proffering Solutions. Advancing Possibilities. Exploring an
            ecosystem where law is practiced with a Midas Touch.
          </p>
        </div>

        <div className="footer-info-container">
          <div className="footer-content-company">
            <p className="footer__col-heading">Company</p>
            <div className="footer__links">
              {COMPANY_LINKS.map((link) => (
                <Link key={link.label} to={link.href} className="footer__link">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="footer-content-practice">
            <p className="footer__col-heading">Practice Areas</p>
            <div className="footer__links">
              {PRACTICE_AREAS.map((l) => (
                <p key={l} className="footer__link">
                  {l}
                </p>
              ))}
            </div>
          </div>

          <div className="footer-content-contact">
            <p className="footer__col-heading">Contact Us</p>
            <div className="footer__contact">
              <div className="footer__contact-line">
                <img
                  src={assets.locationArrow}
                  alt="Location Icon"
                  className="footer__icon"
                />
                <span>
                  1, Owa Street, Off Wire Road
                  <br />
                  Beside Samotaka Generators
                  <br />
                  Benin City, Edo State
                </span>
              </div>
              <div className="footer__contact-line">
                <img
                  src={assets.telephone}
                  alt="Phone Icon"
                  className="footer__icon"
                />
                <span className="footer__phone-number">+234 703 456 9498</span>
              </div>
              <div className="footer__contact-line">
                <img
                  src={assets.envelope}
                  alt="Email Icon"
                  className="footer__icon"
                />
                <span className="footer__email">info@midlex.org</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copy">
          © 2026 Midlex — Litigation | Mediation | Consultation. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}