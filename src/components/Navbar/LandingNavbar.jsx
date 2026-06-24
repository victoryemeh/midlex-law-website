import { Link } from "react-router-dom";
import { assets } from "../../assets";

const NAV_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Team", href: "/our-team" },
  { label: "Articles + News", href: "/articles" },
  { label: "Contact Us", href: "/contact" },
];

export default function LandingNavbar({ scrolled, menuOpen, setMenuOpen }) {
  return (
    <>
      <nav className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
        <div className="navbar__logo">
          <Link to="/">
            <img
              src={assets.Midlex}
              alt="Midlex Logo"
              className="navbar__logo-image"
            />
          </Link>
        </div>

        <div className="navbar__links">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="navbar__hamburger-line" />
          <span className="navbar__hamburger-line" />
          <span className="navbar__hamburger-line" />
        </button>
      </nav>

      <div className={`mobile-menu${menuOpen ? " is-open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <Link
            key={link.label}
            to={link.href}
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}
