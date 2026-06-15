import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./FullArticle.css";
import { assets } from "../../assets";
import LandingNavbar from "../Navbar/LandingNavbar";
import CtaBand from "../CtaBand/CtaBand";
import Footer from "../Footer/Footer";

export default function FullArticle() {
  const { slug } = useParams();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const allArticles = [
    {
      slug: "sporting-justice",
      title: "CAF, AFCON & the Limits of Sporting Justice: A Legal Perspective",
      date: "25th May, 2026",
      image: assets.AfconCup,
    },
    {
      slug: "remotework-productivity",
      title: "THE EFFECT OF REMOTEWORK ON EMPLOYEE PRODUCTIVITY",
      date: "25th May, 2026",
      image: assets.CouchMan,
    },
    {
      slug: "public-trust-justice",
      title: "Rebuilding Public Trust in the Nigerian Justice System",
      date: "25th May, 2026",
      image: assets.LawScale,
    },
  ];

  const currentArticle =
    allArticles.find((article) => article.slug === slug) || allArticles[1];

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
      title: "Rebuilding Public Trust in the Nigerian Justice System",
      date: "25th May, 2026",
      image: assets.LawScale,
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


      {/* Article Content */}
      <section className="article-content-section">
        <div className="article-container">
          <a href="/articles" className="back-link">
            Back to all
          </a>

          <article className="article-content">
            <header className="article-header">
              <h1 className="article-title">
                The Effect of Remote work on Employee Productivity
              </h1>
              <time className="article-date">25th May, 2026</time>
            </header>

            <div className="article-featured-image">
              <img src={assets.CouchMan} alt="Remote work productivity" />
            </div>

            <div className="article-body">
              <section className="article-section">
                <h2 className="section-heading">Introduction</h2>
                <p>
                  The outbreak of the Coronavirus in 2020 led to different
                  nations issuing directives to their citizens to stay indoors
                  in order to contain the spread of the virus. For instance, in
                  the United Kingdom, the Prime Minister issued various
                  directives ordering UK residents to stay at home and also
                  empowered the Police to breakup public gatherings and fine
                  residents that disobey the directives. In the United States,
                  over 316 million residents in about 42 states were urged to
                  stay home.
                </p>
                <p>
                  African nations also issued emergency orders with Nigeria and
                  Ghana directing residents in some selected states to close
                  their offices and stay at home for a period of time. This
                  situation led to employees having to work remotely from home.
                  This has now led to concerns about the productivity of
                  employees working remotely but first, what is remote working?
                </p>
              </section>

              <section className="article-section">
                <h2 className="section-heading">Definition</h2>
                <p>
                  Remote working is the practice of employees doing their jobs
                  from allocation other than a central office operated by the
                  employer. Such locations could include an employee's home, a
                  co-working or other shared space, a private office, or any
                  other place outside of the traditional corporate office
                  building or campus. The big question however is how does it
                  affect an employee's productivity? Studies have shown that it
                  doesn't have any negative effect on employees productivity.
                </p>
              </section>

              <section className="article-section">
                <h2 className="section-heading">Benefits of remote working</h2>
                <p>
                  Omdia's Future of Work survey, which compiled over 300
                  responses from executives at large companies, implies that
                  working away from traditional offices will become the new
                  norm. Fifty eight percent of respondents said they'll either
                  be primarily home-based or adopt a hybrid work style, while
                  68% of enterprises believe employee productivity has improved
                  since the move to remote work.
                </p>
                <p>
                  The report agrees with the conclusions of a recent Stanford
                  study that found working from home increased productivity
                  among a group of 16,000 workers by 13% over the course of nine
                  months. Attrition rates were also cut by 50%, with employees
                  citing a quieter, more convenient working environment as a
                  major advantage.
                </p>
              </section>

              <section className="article-section">
                <h2 className="section-heading">Conclusion</h2>
                <p>
                  "The world of work has under gone significant change due to
                  the disruptions brought about by the pandemic,". This
                  statement Adam Holt by in a press release further corroborated
                  by the the Work survey of Omdia reveals the staggering 13%
                  increase in the productivity of 16,000 workers over the course
                  of nine months. This also provided a quieter working
                  environment thereby reducing attrition rate by 50%.
                </p>
                <p>
                  This changes didn't just come to stay but came with
                  overwhelming benefits of increasing productivity and longevity
                  of workers. It gives us reasons to opt for remote working over
                  the option of Office working.
                </p>
              </section>

              <section className="article-section">
                <h2 className="section-heading">
                  THE EFFECT OF REMOTE WORK ON EMPLOYEE PRODUCTIVITY
                </h2>
                <p>
                  Reducing attrition rate by 50%. This changes didn't just come
                  to stay but came with overwhelming benefits of increasing
                  productivity and longevity of workers. It gives us reasons to
                  opt for remote working over the option of Office working.
                </p>
              </section>
            </div>
          </article>
        </div>
      </section>

      {/* Related Articles Section */}
      <section className="articles-section">
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
