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

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar section */}
        <NavBar />

        {/* Define routes */}
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
                <section className="ftco-section ftco-hireme img margin-top">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-md-7 text-center">
                        <h2>I'm Available for freelancing</h2>
                        <p>
                          A small river named Duden flows by their place and
                          supplies it with the necessary regelialia.
                        </p>
                        <p className="mb-0">
                          <a
                            href="https://www.example.com"
                            className="btn btn-primary py-3 px-5"
                          >
                            Hire me
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <FooterSection />
              </>
            }
          />
          <Route path="/prueba" element={<ResumeView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
