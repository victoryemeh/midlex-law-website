import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MidlexLanding from "./components/Landing/landing";
import AboutUs from "./components/AboutUs/AboutUs";
import OurTeam from "./components/OurTeam/OurTeam";
import Articles from "./components/Articles/Articles";
import FullArticle from "./components/Articles/FullArticle";
import FullArticle2 from "./components/Articles/FullArticle2";
import Contact from "./components/Contact/Contact";
import TeamMemberProfile from "./components/TeamMemberProfile/TeamMemberProfile";
import Services from "./components/Services/Services";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<MidlexLanding />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/team/:memberId" element={<TeamMemberProfile />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/fullarticle2" element={<FullArticle2 />} />
          <Route path="/articles/:slug" element={<FullArticle />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
