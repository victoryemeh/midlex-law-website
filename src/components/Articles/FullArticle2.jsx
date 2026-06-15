import { useState, useEffect } from "react";
import "./FullArticle2.css";
import { assets } from "../../assets";
import LandingNavbar from "../Navbar/LandingNavbar";
import CtaBand from "../CtaBand/CtaBand";
import Footer from "../Footer/Footer";

export default function FullArticle2() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const relatedArticles = [
    {
      title: "CAF, AFCON & the Limits of Sporting Justice: A Legal Perspective",
      date: "25th May, 2026",
      image: assets.AfconCup,
      excerpt:
        "The recent decision by the Confederation of African Football (CAF) to overturn the outcome of the AFCON final and award victory to Morocco has generated widespread legal and sporting controversy. Beyond the headlines, the issue raises a fundamental question in sports law: Can a governing body lawfully overturn a completed match",
    },
    {
      title: "THE EFFECT OF REMOTEWORK ON EMPLOYEE PRODUCTIVITY",
      date: "25th May, 2026",
      image: assets.CouchMan,
      excerpt:
        "The outbreak of the Coronavirus in 2020 led to different nations issuing directives to their citizens to stay indoors in order to contain the spread of the virus. For instance, in the United Kingdom, the Prime Minister issued various directives ordering UK residents to stay at home and also empowered the Police to breakup public gatherings and fine residents that disobey the directives.",
    },
    {
      title: "CAF, AFCON & the Limits of Sporting Justice: A Legal Perspective",
      date: "25th May, 2026",
      image: assets.AfconCup,
      excerpt:
        '"Nothing is to be done which creates even a suspicion that there has been an improper interference with the course of justice" It is not merely of some importance but is of fundamental importance that justice should not only be done, but should manifestly and undoubtedly be seen to be done". Per Lord Hewart (Lord Chief Justice of England) Rex v. Sussex Justices,',
    },
  ];

  return (
    <div className="full-article-root">
      {/* Navigation */}
      <LandingNavbar
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      {/* Hero Section */}
      {/* <section className="full-article-hero">
        <div className="full-article-hero-overlay" />
        <div className="full-article-hero-content">
          <h1 className="full-article-hero-title">Modern Legal Excellence</h1>
          <p className="full-article-hero-subtitle">
            A curated collection of legal insights and thought leadership,
            delivering clarity, relevance, and value in an ever-evolving legal
            landscape.
          </p>
        </div>
      </section> */}

      {/* Article Content */}
      <section className="article-content-section">
        <div className="article-container">
          <a href="/articles" className="back-link">
            Back to all
          </a>

          <article className="article-content">
            <header className="article-header">
              <h1 className="article-title">
                CAF, AFCON & the Limits of Sporting Justice: A Legal Perspective
              </h1>
              <time className="article-date">25th May, 2026</time>
            </header>

            <div className="article-featured-image">
              <img src={assets.AfconCup} alt="CAF AFCON" />
            </div>

            <div className="article-body">
              <section className="article-section">
                <h2 className="section-heading">Introduction</h2>
                <p>
                  The recent decision by the Confederation of African Football
                  (CAF) to overturn the outcome of the AFCON final and award
                  victory to Morocco has generated widespread legal and sporting
                  controversy. Beyond the headlines, the issue raises a
                  fundamental question in sports law: Can a governing body
                  lawfully overturn a completed match result based on
                  disciplinary considerations?
                </p>
                <p>
                  This article examines CAF's legal justification, the competing
                  regulatory framework, and the potential implications if the
                  dispute proceeds to the Court of Arbitration for Sport (CAS).
                </p>
              </section>

              <section className="article-section">
                <h2 className="section-heading">CAF's Legal Justification</h2>
                <p>
                  CAF's decision is anchored in its competition regulations,
                  particularly provisions dealing with match abandonment and
                  misconduct. Under Articles 82 and 84 of the CAF AFCON
                  Regulations, a team that abandons a match without
                  authorization may be deemed to have forfeited. CAF may award
                  the match 3–0 against the defaulting team.
                </p>
                <p>
                  CAF's Appeal Board reportedly classified Senegal's temporary
                  walk-off during the final as constructive abandonment, thereby
                  justifying forfeiture and reassignment of victory to Morocco.
                  At face value, this reflects a strict application of
                  regulatory provisions designed to preserve discipline and
                  order in competition.
                </p>
              </section>

              <section className="article-section">
                <h2 className="section-heading">
                  The Clash with the Laws of the Game
                </h2>
                <p>
                  However, CAF's decision appears to conflict with a
                  foundational principle under the IFAB Laws of the Game. Law 5
                  (The Referee) provides that: "The referee's decisions
                  regarding facts connected with play are final."
                </p>
                <p>
                  In this instance, the referee permitted play to resume after
                  the disruption, the match was completed in full, and the
                  result was determined on the field of play. This raises a
                  critical legal issue: Can an administrative body override a
                  completed match outcome where the referee has exercised final
                  authority?
                </p>
              </section>

              <section className="article-section">
                <h2 className="section-heading">
                  Disciplinary Powers vs Sporting Outcomes
                </h2>
                <p>
                  CAF undeniably possesses disciplinary jurisdiction over teams
                  and competitions. However, a key distinction must be made
                  between disciplinary sanctions (e.g., fines, suspensions) and
                  sporting sanctions (e.g., forfeiture, reversal of results).
                </p>
                <p>
                  While misconduct may justify punishment, critics argue that
                  retroactively altering a match result after completion
                  constitutes regulatory overreach, particularly where the match
                  was neither abandoned in fact nor terminated by the referee.
                  This introduces the doctrine of ultra vires—whether CAF acted
                  beyond the scope of its lawful authority.
                </p>
              </section>

              <section className="article-section">
                <h2 className="section-heading">
                  The Principle of Proportionality
                </h2>
                <p>
                  Another central issue is proportionality. In sports law,
                  sanctions must be commensurate with the misconduct. Key
                  considerations include: the walk-off was temporary, not
                  permanent; Senegal returned and completed the match; and no
                  official termination of the game occurred.
                </p>
                <p>
                  Against this background, stripping a team of a continental
                  title may be viewed as excessive and disproportionate,
                  particularly where less severe sanctions were available.
                </p>
              </section>

              <section className="article-section">
                <h2 className="section-heading">The Likely Role of CAS</h2>
                <p>
                  If challenged, the dispute will likely be determined by the
                  Court of Arbitration for Sport (CAS), the highest authority in
                  international sports arbitration. CAS will examine whether
                  Senegal's actions legally amount to abandonment under CAF
                  regulations, whether CAF exceeded its regulatory powers,
                  whether due process was observed, and whether the sanction
                  imposed satisfies the principle of proportionality.
                </p>
                <p>
                  CAS jurisprudence generally reflects caution in overturning
                  match results, especially where the integrity of on-field
                  decisions is implicated.
                </p>
              </section>

              <section className="article-section">
                <h2 className="section-heading">Conclusion</h2>
                <p>
                  CAF's decision illustrates the ongoing tension between
                  regulatory enforcement and sporting justice. While CAF can
                  rely on its rules to justify disciplinary action, its decision
                  to overturn a completed match raises serious legal concerns,
                  including conflict with the referee's final authority,
                  potential jurisdictional overreach, and questions of
                  proportionality.
                </p>
              </section>

              <section className="article-section">
                <h2 className="section-heading">Final Take</h2>
                <p>
                  CAF's ruling may be legally arguable under its regulations,
                  but it remains highly vulnerable on appeal and could be
                  overturned if subjected to scrutiny before CAS.
                </p>
              </section>

              <section className="article-section">
                <h2 className="section-heading">References</h2>
                <p>
                  • CAF, Africa Cup of Nations Regulations, Articles 82 & 84.
                  <br />
                  • CAF Appeal Board, Official Media Statement.
                  <br />
                  • IFAB, Laws of the Game, Law 5.
                  <br />• CAS jurisprudence on match forfeiture and sporting
                  sanctions.
                </p>
                <p>
                  For practitioners and enthusiasts of sports law, this case
                  serves as a compelling reminder: the line between discipline
                  and overreach in sports governance is often thinner than it
                  appears.
                </p>
              </section>
            </div>
          </article>
          </div>
          </section>

          {/* Related Articles */}
          <section className="article-section">
          <div className="related-articles">
            {relatedArticles.map((article, index) => (
              <div key={index} className="article-card">
                <div className="article-card-header">
                  <h3 className="article-card-title">{article.title}</h3>
                </div>
                <div className="article-card-content">
                  <div className="article-card-image">
                    <img src={article.image} alt={article.title} />
                  </div>
                  <time className="article-card-date">{article.date}</time>
                  <p className="article-card-excerpt">{article.excerpt}</p>
                  <button className="read-more-btn">Read more</button>
                </div>
              </div>
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
