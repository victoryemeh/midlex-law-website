import { useState, useEffect } from "react";
import "./AboutUs.css";
import { assets } from "../../assets";
import { TEAM_MEMBERS_DATA } from "../../data/teamMembersData";
import LandingNavbar from "../Navbar/LandingNavbar";
import CtaBand from "../CtaBand/CtaBand";
import Footer from "../Footer/Footer";

// function BlinkingImages() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % TEAM_MEMBERS_DATA.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const teamMember = TEAM_MEMBERS_DATA[current];

//   return (
//     <div className="blinking-team-section">
//       <div className="blinking-team__image">
//         <img src={teamMember.fullimage} alt={teamMember.name} />
//       </div>
//       <div className="blinking-team__content">
//         <h3 className="blinking-team__name">{teamMember.name}</h3>
//         <p className="blinking-team__title">{teamMember.title}</p>
//       </div>
//     </div>
//   );
// }
function BlinkingImages() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out first
      setVisible(false);

      // Swap image halfway through the fade, then fade back in
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % TEAM_MEMBERS_DATA.length);
        setVisible(true);
      }, 600); // must match the CSS transition duration below
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const teamMember = TEAM_MEMBERS_DATA[current];

  return (
    <div className="blinking-team-section">
      <div
        className="blinking-team__image"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 600ms ease-in-out",
        }}
      >
        <img src={teamMember.fullimage} alt={teamMember.name} />
      </div>
      <div
        className="blinking-team__content"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 600ms ease-in-out",
        }}
      >
        <h3 className="blinking-team__name">{teamMember.name}</h3>
        <p className="blinking-team__title">{teamMember.title}</p>
      </div>
    </div>
  );
}

export default function AboutUs() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="about-us-root">
      {/* Navigation */}
      <LandingNavbar
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      {/* Hero Section with Background */}
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${assets.herobg})` }}
      >
        <div className="about-hero__overlay" />
        <div className="container">
          <div className="about-hero__content">
            <h1 className="about-hero__heading">About Midlex</h1>
            <p className="about-hero__desc">
              Midlex is a forward-thinking law firm combining innovation and
              tradition to deliver precise, client-focused legal solutions while
              advancing justice and meaningful impact.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="who-we-are">
        <div className="container">
          <div className="who-we-are__grid">
            <div className="who-we-are__content">
              <p className="section-tag">WHO WE ARE</p>
              <h2 className="who-we-are__heading">
                We deliver the legal results you desire
              </h2>
              <p className="who-we-are__desc">
                Where innovation meets tradition to deliver precise,
                client-focused legal solutions that drive justice and impact.
              </p>
              <ul className="who-we-are__list">
                <li className="who-we-are__item">
                  Resolve disputes. Deliver justice. Advance possibilities.
                </li>
                <li className="who-we-are__item">
                  Innovative legal strategies. Measurable outcomes. Every time.
                </li>
                <li className="who-we-are__item">
                  Client-first. Solution-driven. Midas Touch guaranteed.
                </li>
              </ul>
            </div>
            <div className="who-we-are__image">
              <img src={assets.TheTeam} alt="Legal Team" />
            </div>
          </div>
        </div>
      </section>
      {/* Mission & Vision Section */}
      <section className="mission-vision">
        <div className="container">
          <div className="mission-vision__grid">
            <div className="mission-vision__card">
              <div className="mission-vision__icon">
                <img src={assets.VisionIcon} alt="Vision" />
              </div>
              <h3 className="mission-vision__title">Our Vision</h3>
              <p className="mission-vision__text">
                To positively change the face of legal practice in Nigeria
              </p>
            </div>
            <div className="mission-vision__card">
              <div className="mission-vision__icon">
                <img src={assets.MissionIcon} alt="Mission" />
              </div>
              <h3 className="mission-vision__title">Our Mission</h3>
              <p className="mission-vision__text">
                To proffer viable solutions using the law as an instrument to
                attain justice and advance possibilities for our clients, our
                communities, our country and citizens of the free world
              </p>
            </div>
            <div className="mission-vision__card">
              <div className="mission-vision__icon">
                <img src={assets.GoalsIcon} alt="Goals" />
              </div>
              <h3 className="mission-vision__title">Our Goals</h3>
              <p className="mission-vision__text">
                To deliver innovative and precise legal solutions that achieve
                justice for our clients. To uphold excellence, professionalism,
                and integrity in all aspects of our practice. To create
                meaningful impact and advance opportunities within our
                communities and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="our-team">
        <div className="team-container">
          <p className="section-tag">MEET OUR TEAM</p>
          <div className="our-team-grid">
            <BlinkingImages />
          </div>
        </div>
      </section>

      {/* Team Slider Section */}
      {/* <section className="team-slider-section">
        <div className="team-slider-wrapper">
          <Slider />
        </div>
      </section> */}

      {/* Our Story Section */}
      <section className="our-story">
        <div className="our-story-container">
          <h2 className="our-story__heading">Our Story</h2>
          <div className="our-story__content">
            <div className="story-section">
              <h4 className="story-section__title">Synopsis</h4>
              <p>
                Midlex is a unique and full-service law firm that provides a
                wide range of legal services to clients both within and outside
                Nigeria.
              </p>
              <p>
                At Midlex, we take great pride in our adopted model of service
                which is 'interactive legal service'. In executing this unique
                service mode, we have built a reputation for quality work,
                prompt service, and profound professionalism.
              </p>
            </div>

            <div className="story-section">
              <h4 className="story-section__title">Starting Blocks</h4>
              <p>
                Midlex started with a seeming leap of faith, the foundation of
                our firm was birthed on 1st May, 2023 when E.C. Abednego, Esq
                launched Leges Prudentia Interactive Legal Consult which
                initially set out on a business of limited legal consultancy and
                a forum for legal education and justice-based campaigns. This
                initiative would later metamorphose into a full-fledged law firm
                and today operates as an incorporated limited liability
                partnership under the name and style of Midlex.
              </p>
              <p>
                On the 1st day of May, 2024 which was the anniversary of the
                full transformation of Leges Prudentia as a legal-service firm,
                our founding Partner decided it was time to extend the Midas
                Touch to the practice of law. On this note, Midlex was birthed
                with a schedule to be officially adopted as the name of the law
                firm from the 1st day of September, 2024.
              </p>
            </div>

            <div className="story-section">
              <h4 className="story-section__title">Stirrings</h4>
              <p>
                Midlex is a testament to the enduring passion of our founding
                Partner to push the frontiers of legal practice and create
                unique models that can incorporate the finest traditions of
                legal practice from the days of old, together with the
                innovative high grounds of information technology that has
                opened the door to endless possibilities.
              </p>
              <p>
                Operating alongside our Partners are a core team of seasoned
                professionals ranging from Accountants to Administrators and
                Librarians; all functioning to provide a structure of support to
                our team of creative and dynamic legal practitioners who are
                dogged in their commitment to our shared vision.
              </p>
            </div>

            <div className="story-section">
              <h4 className="story-section__title">Stock</h4>
              <p>
                To our clients; our focus is to provide viable legal solutions
                that helps them navigate complexities that may occur as part of
                their daily lives; from domestic challenges, corporate puzzles
                and sundry conflicts.
              </p>
              <p>
                To the community; our firm represents a bold paradigm shift from
                the sole focus of servicing clients, to a beacon of
                responsibility in acting as the conscience of our immediate
                communities and the larger society as we confront the raging
                issues at the core of our collective quest for a truly
                egalitarian society.
              </p>
              <p>
                To our country; we hope to continue being a leading light in
                fostering the dialogue and shaping the narratives that would
                nurture our democracy and collective commitment to
                constitutionalism, justice and respect for the rule of law.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The MIDLEX Module Section */}
      <section className="midlex-module">
        <div className="midlex-container">
          <h2 className="midlex-module__heading">
            The <span>MIDLEX</span> Module
          </h2>
          <p className="midlex-module__subtitle">
            At Midlex, we believe in and operate with these principles
          </p>

          <div className="midlex-module__grid">
            <div className="module-item">
              <div className="module-item__letter">M</div>
              <h4 className="module-item__title">Motivation for mastery</h4>
              <p className="module-item__desc">
                Being on top of our game is a driving force for every member of
                our firm.
              </p>
            </div>

            <div className="module-item">
              <div className="module-item__letter">I</div>
              <h4 className="module-item__title">Impact through Innovations</h4>
              <p className="module-item__desc">
                Pushing frontiers beyond the traditional modules of legal
                practice.
              </p>
            </div>

            <div className="module-item">
              <div className="module-item__letter">D</div>
              <h4 className="module-item__title">Delivery with Dexterity</h4>
              <p className="module-item__desc">
                Legal practice with a Midas Touch — expert and creative like no
                one else.
              </p>
            </div>

            <div className="module-item">
              <div className="module-item__letter">L</div>
              <h4 className="module-item__title">Leadership by Loyalty</h4>
              <p className="module-item__desc">
                Sworn to stay committed to the cause of our clients within the
                bounds of the law.
              </p>
            </div>

            <div className="module-item">
              <div className="module-item__letter">E</div>
              <h4 className="module-item__title">Earnestness for Excellence</h4>
              <p className="module-item__desc">
                A perpetual commitment to excellence as a culture code and
                corporate identity.
              </p>
            </div>

            <div className="module-item">
              <div className="module-item__letter">X</div>
              <h4 className="module-item__title">Xeroxing the X-factor</h4>
              <p className="module-item__desc">
                In our firm, every client is king - a daily consciousness
                reproduced in every brief.
              </p>
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
