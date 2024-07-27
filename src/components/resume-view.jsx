import React, { useEffect, useState } from "react";
import { useAxios } from "../boot/AxiosContext";

const ResumeView = () => {
  const axios = useAxios();
  const [user, setUser] = useState({});
  const [data, setData] = useState([]);
  const [userNameSkill, setUserNameSkill] = useState([]);
  const [userProjects, setUserProjects] = useState([]);
  const [userProfessionalSkill, setUserProfessionalSkill] = useState([]);
  const [userCertificate, setUserCertificate] = useState([]);
  const [userLanguage, setUserLanguage] = useState([]);
  const [userInterest, setUserInterest] = useState([]);
  const [userSocialMedia, setUserSocialMedia] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userResult = await axios.get("/finduser");
        const userData = userResult.data[0];
        setUser(userData);

        // Fetch Location
        const locationResult = await fetch(
          "https://api.ipgeolocation.io/ipgeo?apiKey=90e559ce20d0431eb3d3d31f560e913d"
        );
        const location = await locationResult.json();
        setUser((prevState) => ({
          ...prevState,
          userLocation:
            location.continent_name !== "South America"
              ? "United Kingdom"
              : "Colombia",
        }));
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    const fetchExperience = async () => {
      try {
        const result = await axios.get("/findexperience");
        setData(result.data);
      } catch (error) {
        console.error("Error fetching experience data:", error);
      }
    };

    const fetchSkill = async () => {
      try {
        const result = await axios.get("/findskill");
        setUserNameSkill(result.data);
      } catch (error) {
        console.error("Error fetching skill data:", error);
      }
    };

    const fetchProjects = async () => {
      try {
        const result = await axios.get("/findproject");
        setUserProjects(result.data.slice(0, 4));
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    const fetchProfessionalSkill = async () => {
      try {
        const result = await axios.get("/findprofessionalskill");
        setUserProfessionalSkill(result.data);
      } catch (error) {
        console.error("Error fetching professional skill data:", error);
      }
    };

    const fetchCertificate = async () => {
      try {
        const result = await axios.get("/findcertificate");
        setUserCertificate(result.data);
      } catch (error) {
        console.error("Error fetching certificate data:", error);
      }
    };

    const fetchLanguage = async () => {
      try {
        const result = await axios.get("/findlanguage");
        setUserLanguage(result.data);
      } catch (error) {
        console.error("Error fetching language data:", error);
      }
    };

    const fetchInterest = async () => {
      try {
        const result = await axios.get("/findinterest");
        setUserInterest(result.data);
      } catch (error) {
        console.error("Error fetching interest data:", error);
      }
    };

    const fetchSocialMedia = async () => {
      try {
        const result = await axios.get("/findsocialmedia");
        setUserSocialMedia(result.data);
      } catch (error) {
        console.error("Error fetching social media data:", error);
      }
    };

    fetchUser();
    fetchExperience();
    fetchSkill();
    fetchProjects();
    fetchProfessionalSkill();
    fetchCertificate();
    fetchLanguage();
    fetchInterest();
    fetchSocialMedia();
  }, [axios]);

  const formatDate = (dateString) => {
    const dateObject = new Date(dateString);
    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1;
    return `${month.toString().padStart(2, "0")}-${year}`;
  };

  return (
    <div className="main-wrapper">
      <div className="container resume-container px-3 px-lg-5">
        <article className="resume-wrapper mx-auto theme-bg-light p-5 mb-5 my-5 shadow-lg">
          <div className="resume-header">
            <div className="row align-items-center">
              <div className="resume-title col-12 col-md-6 col-lg-8 col-xl-9">
                <h2 className="resume-name mb-0 text-uppercase">
                  {user.name} {user.lastname}
                </h2>
                <div className="resume-tagline mb-3 mb-md-0">
                  {user.ocupation}
                </div>
              </div>
              <div className="resume-contact col-12 col-md-6 col-lg-4 col-xl-3">
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">
                    <i className="fas fa-envelope-square fa-fw fa-lg me-2"></i>
                    <a className="resume-link" href={`mailto:${user.email}`}>
                      {user.email}
                    </a>
                  </li>
                  <li className="mb-2">
                    <i className="fa-solid fa-cake-candles fa-fw fa-lg me-2"></i>
                    {user.birth}
                  </li>
                  <li className="mb-0">
                    <i className="fas fa-map-marker-alt fa-fw fa-lg me-2"></i>
                    {user.location}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
          <div className="resume-intro py-3">
            <div className="row align-items-center">
              <div className="col-12 col-md-3 col-xl-2 text-center">
                <img
                  className="resume-profile-image mb-3 mb-md-0 me-md-5 ms-md-0 rounded mx-auto"
                  src={
                    user.imgProfileResume
                      ? `${process.env.BACKEND_URI}/image/${user.imgProfileResume}`
                      : "/images/useresume.webp"
                  }
                  alt="Profile"
                />
              </div>
              <div className="col text-start">
                <p className="mb-0">{user.description}</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="resume-body">
            <div className="row">
              <div className="resume-main col-12 col-lg-8 col-xl-9 pe-0 pe-lg-5">
                <section className="work-section py-3">
                  <h3 className="text-uppercase resume-section-heading mb-4">
                    Work Experiences
                  </h3>
                  {data.map((item, index) => (
                    <div className="item mb-3" key={index}>
                      <div className="item-heading row align-items-center mb-2">
                        <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                          {item.title}
                        </h4>
                        <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end">
                          {item.company} | {formatDate(item.datefrom)} -{" "}
                          {formatDate(item.dateto)}
                        </div>
                      </div>
                      <div className="item-content">
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </section>

                <section className="project-section py-3">
                  <h3 className="text-uppercase resume-section-heading mb-4">
                    Projects
                  </h3>
                  {userProjects.map((item) => (
                    <div className="item mb-3" key={item.id}>
                      <div className="item-heading row align-items-center mb-2">
                        <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                          {item.name}
                        </h4>
                      </div>
                      <div className="item-content">
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </section>
              </div>
              <aside className="resume-aside col-12 col-lg-4 col-xl-3 px-lg-4 pb-lg-4">
                <section className="skills-section py-3">
                  <h3 className="text-uppercase resume-section-heading mb-4">
                    Skills
                  </h3>
                  <div className="item">
                    <h4 className="item-title">Technical</h4>
                    <ul className="list-unstyled resume-skills-list">
                      {userNameSkill.map((item, index) => (
                        <li className="mb-2" key={index}>
                          {item.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="item">
                    <h4 className="item-title">Professional</h4>
                    <ul className="list-unstyled resume-skills-list">
                      {userProfessionalSkill.map((item, index) => (
                        <li className="mb-2" key={index}>
                          {item.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>

                <section className="education-section py-3">
                  <h3 className="text-uppercase resume-section-heading mb-4">
                    Certificates
                  </h3>
                  <ul className="list-unstyled resume-awards-list">
                    {userCertificate.map((item, index) => (
                      <li className="mb-3" key={index}>
                        <div className="font-weight-bold">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={item.link}
                          >
                            {item.name}
                          </a>
                        </div>
                        <div className="text-muted">
                          {item.company} ({formatDate(item.expedition)})
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>
                <section className="skills-section py-3">
                  <h3 className="text-uppercase resume-section-heading mb-4">
                    Languages
                  </h3>
                  <ul className="list-unstyled resume-lang-list">
                    {userLanguage.map((item, index) => (
                      <li className="mb-2" key={index}>
                        {item.name}
                        <span className="text-muted">({item.description})</span>
                      </li>
                    ))}
                  </ul>
                </section>
                <section className="skills-section py-3">
                  <h3 className="text-uppercase resume-section-heading mb-4">
                    Interests
                  </h3>
                  <ul className="list-unstyled resume-interests-list mb-0">
                    {userInterest.map((item, index) => (
                      <li className="mb-2" key={index}>
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </section>
              </aside>
            </div>
          </div>
          <hr />
          <div className="resume-footer text-center">
            <ul className="resume-social-list list-inline mx-auto mb-0 d-inline-block text-muted">
              {userSocialMedia.map((item, index) => (
                <li className="list-inline-item mb-lg-0 me-3" key={index}>
                  <a
                    className="resume-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={item.link}
                  >
                    <i className={item.icon} data-fa-transform="down-4"></i>
                    <span className="d-none d-lg-inline-block text-muted">
                      {item.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ResumeView;
