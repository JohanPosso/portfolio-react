import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomeSection from "./components/home-section";
import AboutSection from "./components/about-section";
import ResumeSection from "./components/resume-section";
import ServiceSection from "./components/services-section";
import SkillsSection from "./components/skills-section";
import ProjectsSection from "./components/projects-section";
import BlogSection from "./components/blog-section";
import ContactSection from "./components/contact-section";
import FooterSection from "./components/footer-section";
import NavBar from "./components/navbar-section";
import ResumeView from "./components/resume-view";
import FreelanceSection from "./components/freelance-section";
function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar section */}
        <NavBar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <HomeSection />
                <AboutSection />
                <ResumeSection />
                <ServiceSection />
                <SkillsSection />
                <ProjectsSection />
                <BlogSection />
                <ContactSection />
                <FreelanceSection />
                <FooterSection />
              </>
            }
          />
          <Route path="/cvonline" element={<ResumeView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
