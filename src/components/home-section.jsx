import React, { useEffect, useState } from "react";
import { useAxios } from "../boot/AxiosContext";
const HomeSection = () => {
  const axios = useAxios();
  const [data, setData] = useState([]);
  const [socialMedia, setSocialMedia] = useState([]);
  useEffect(() => {
    const userData = async () => {
      try {
        axios
          .get("/finduser")
          .then((response) => setData(response.data[0]))
          .catch((error) => console.error("Error al cargar datos:", error));
      } catch (error) {
        console.error("Error al cargar datos del usuario:", error);
      }
    };
    const socialMediaData = async () => {
      try {
        axios
          .get("/findsocialmedia")
          .then((response) => setSocialMedia(response.data[1]))
          .catch((error) => console.error("Error al cargar datos:", error));
      } catch (error) {
        console.error("Error al cargar datos de las redes sociales:", error);
      }
    };
    const fetchData = async () => {
      await Promise.all([userData(), socialMediaData()]);
    };

    fetchData();
  }, [axios]);

  return (
    <div>
      <section id="home-section" className="hero">
        <div className="home-slider owl-carousel">
          <div className="slider-item">
            <div className="overlay"></div>
            <div className="container">
              <div
                className="row d-md-flex no-gutters slider-text align-items-end justify-content-end"
                data-scrollax-parent="true"
              >
                <div className="one-third js-fullheight order-md-last img">
                  <img src="/images/userprofile.webp" alt="" />

                  <div className="overlay"></div>
                </div>
                <div
                  className="one-forth d-flex align-items-center "
                  data-scrollax=" properties: { translateY: '70%' }"
                >
                  <div className="text">
                    <span className="subheading">Hello!</span>
                    <h1 className="mb-4 mt-3">
                      I'm{" "}
                      <span>
                        {data.name} {data.lastname}
                      </span>
                    </h1>
                    <h2 className="mb-4">{data.ocupation}</h2>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gridGap: "5px",
                      }}
                    >
                      <a
                        href="#contact-section"
                        className="btn btn-primary py-3 px-4"
                      >
                        <div style={{ fontSize: "14px", marginTop: "-4px" }}>
                          Hire me
                        </div>
                      </a>
                      <a
                        href={socialMedia.link}
                        className="btn btn-white btn-outline-white py-3 px-4"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          style={{ width: "80px", marginTop: "-10px" }}
                          src="/images/linkedin-logo.svg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="slider-item">
            <div className="overlay"></div>
            <div className="container">
              <div
                className="row d-flex no-gutters slider-text align-items-end justify-content-end"
                data-scrollax-parent="true"
              >
                <div className="one-third js-fullheight order-md-last img">
                  <div className="overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeSection;
