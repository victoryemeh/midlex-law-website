import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Articles.css";
import { assets } from "../../assets";
import LandingNavbar from "../Navbar/LandingNavbar";
import CtaBand from "../CtaBand/CtaBand";
import Footer from "../Footer/Footer";

export default function Articles() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const articles = [
    {
      slug: "sporting-justice",
      link: "/fullarticle2",
      title: "CAF, AFCON & the Limits of Sporting Justice: A Legal Perspective",
      date: "25th May, 2026",
      image: assets.AfconCup,
      excerpt:
        "The recent decision by the Confederation of African Football (CAF) to overturn the outcome of the AFCON final and award victory to Morocco has generated widespread legal and sporting controversy. Beyond the headlines, the issue raises a fundamental question in sports law: Can a governing body lawfully overturn a completed match",
    },
    {
      slug: "remotework-productivity",
      title: "THE EFFECT OF REMOTEWORK ON EMPLOYEE PRODUCTIVITY",
      date: "25th May, 2026",
      image: assets.CouchMan,
      excerpt:
        "The outbreak of the Coronavirus in 2020 led to different nations issuing directives to their citizens to stay indoors in order to contain the spread of the virus. For instance, in the United Kingdom, the Prime Minister issued various directives ordering UK residents to stay at home and also empowered the Police to breakup public gatherings and fine residents that disobey the directives.",
    },
    {
      slug: "public-trust-justice",
      title: "Rebuilding Public Trust in the Nigerian Justice System",
      date: "25th May, 2026",
      image: assets.LawScale,
      excerpt:
        '"Nothing is to be done which creates even a suspicion that there has been an improper interference with the course of justice" It is not merely of some importance but is of fundamental importance that justice should not only be done, but should manifestly and undoubtedly be seen to be done". Per Lord Hewart (Lord Chief Justice of England) Rex v. Sussex Justices,',
    },
    {
      slug: "remotework-productivity-2",
      title: "THE EFFECT OF REMOTEWORK ON EMPLOYEE PRODUCTIVITY",
      date: "25th May, 2026",
      image: assets.CouchMan,
      excerpt:
        "The outbreak of the Coronavirus in 2020 led to different nations issuing directives to their citizens to stay indoors in order to contain the spread of the virus. For instance, in the United Kingdom, the Prime Minister issued various directives ordering UK residents to stay at home and also empowered the Police to breakup public gatherings and fine residents that disobey the directives.",
    },
    {
      slug: "sporting-justice-2",
      link: "/fullarticle2",
      title: "CAF, AFCON & the Limits of Sporting Justice: A Legal Perspective",
      date: "25th May, 2026",
      image: assets.AfconCup,
      excerpt:
        "The recent decision by the Confederation of African Football (CAF) to overturn the outcome of the AFCON final and award victory to Morocco has generated widespread legal and sporting controversy. Beyond the headlines, the issue raises a fundamental question in sports law: Can a governing body lawfully overturn a completed match",
    },
    {
      slug: "public-trust-justice-2",
      title: "Rebuilding Public Trust in the Nigerian Justice System",
      date: "25th May, 2026",
      image: assets.LawScale,
      excerpt:
        '"Nothing is to be done which creates even a suspicion that there has been an improper interference with the course of justice" It is not merely of some importance but is of fundamental importance that justice should not only be done, but should manifestly and undoubtedly be seen to be done". Per Lord Hewart (Lord Chief Justice of England) Rex v. Sussex Justices,',
    },
    {
      slug: "sporting-justice-3",
      link: "/fullarticle2",
      title: "CAF, AFCON & the Limits of Sporting Justice: A Legal Perspective",
      date: "25th May, 2026",
      image: assets.LawScale,
      excerpt:
        "The recent decision by the Confederation of African Football (CAF) to overturn the outcome of the AFCON final and award victory to Morocco has generated widespread legal and sporting controversy. Beyond the headlines, the issue raises a fundamental question in sports law: Can a governing body lawfully overturn a completed match",
    },
    {
      slug: "remotework-productivity-3",
      title: "THE EFFECT OF REMOTEWORK ON EMPLOYEE PRODUCTIVITY",
      date: "25th May, 2026",
      image: assets.CouchMan,
      excerpt:
        "The outbreak of the Coronavirus in 2020 led to different nations issuing directives to their citizens to stay indoors in order to contain the spread of the virus. For instance, in the United Kingdom, the Prime Minister issued various directives ordering UK residents to stay at home and also empowered the Police to breakup public gatherings and fine residents that disobey the directives.",
    },
    {
      slug: "sporting-justice-4",
      link: "/fullarticle2",
      title: "CAF, AFCON & the Limits of Sporting Justice: A Legal Perspective",
      date: "25th May, 2026",
      image: assets.AfconCup,
      excerpt:
        "The recent decision by the Confederation of African Football (CAF) to overturn the outcome of the AFCON final and award victory to Morocco has generated widespread legal and sporting controversy. Beyond the headlines, the issue raises a fundamental question in sports law: Can a governing body lawfully overturn a completed match",
    },
  ];

  return (
    <div className="articles-root">
      <LandingNavbar
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      {/* Hero Section */}
      <section className="articles-hero">
        <div className="articles-hero__background">
          <img src={assets.herobg} alt="" className="articles-hero__bg-image" />
        </div>
        <div className="articles-hero__overlay" />
        <div className="articles-hero__content">
          <h1 className="articles-hero__title">Modern Legal Excellence</h1>
          <p className="articles-hero__desc">
            A curated collection of legal insights and thought leadership,
            delivering clarity, relevance, and value in an ever-evolving legal
            landscape.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="articles-section">
        <div className="articles-grid">
          {articles.map((article, index) => (
            <article key={index} className="article-card">
              <h3 className="article-card__title">{article.title}</h3>
              <div className="article-card__content">
                <div className="article-card__image-wrapper">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="article-card__image"
                  />
                </div>
                <p className="article-card__date">{article.date}</p>
                <p className="article-card__excerpt">{article.excerpt}</p>
              </div>
              <Link
                to={article.link || `/articles/${article.slug}`}
                className="article-card__button"
              >
                Read more
              </Link>
            </article>
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
