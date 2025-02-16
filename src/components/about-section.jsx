import React, { useEffect, useState } from "react";
import { useAxios } from "../boot/AxiosContext";
const AboutSection = () => {
  const estilo = {
    width: "100%",
  };
  const textAlign = {
    textAlign: "justify",
  };
  const axios = useAxios();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/finduser")
      .then((response) => setData(response.data[0]))
      .catch((error) => console.error("Error al cargar imágenes:", error));
  }, [axios]);
  return (
    <div>
      <section className="mt-5" id="about-section">
        <div className="container">
          <div className="row d-flex">
            <div className="col-md-6 col-lg-5 d-flex">
              <div className="img-about img d-flex align-items-stretch">
                <div className="overlay"></div>
                <div className="img d-flex align-self-stretch align-items-center">
                  <img src="/images/IMG_6544.webp" style={estilo} alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-7 pl-lg-5 pb-5">
              <div className="row justify-content-start pb-3">
                <div className="col-md-12 heading-section">
                  <h1 className="big">About</h1>
                  <h2 className="mb-4">About Me</h2>
                  <p style={textAlign}>{data.description}</p>
                  <ul className="about-info mt-4 px-md-0 px-2">
                    <li className="d-flex ">
                      <span className="mr-3">
                        <strong className="text-white">Name:</strong>
                      </span>
                      <span>
                        {data.name} {data.lastname}
                      </span>
                    </li>
                    <li className="d-flex ">
                      <span className="mr-3">
                        <strong className="text-white">Date of birth:</strong>
                      </span>
                      <span>{data.birth}</span>
                    </li>
                    <li className="d-flex ">
                      <span className="mr-3">
                        <strong className="text-white">Nationality:</strong>
                      </span>
                      <span>Colombian 🇨🇴</span>
                    </li>
                    <li className="d-flex ">
                      <span className="mr-3">
                        <strong className="text-white">Email:</strong>
                      </span>
                      <span>{data.email}</span>
                    </li>
                    <li className="d-flex ">
                      <span className="mr-3">
                        <strong className="text-white">Location:</strong>
                      </span>
                      <span>{data.location}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="counter-wrap d-flex mt-md-3">
                <div className="text ">
                  <a
                    href="/JESUS_POSSO_CV_ES.pdf"
                    download="/JESUS_POSSO_CV_ES.pdf"
                    className="btn btn-primary py-3 px-3 me-2"
                  >
                    <div style={{ fontSize: "12px", marginTop: "-4px" }}>
                      <i className="fa-solid fa-download"></i>
                      CV Spanish
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
