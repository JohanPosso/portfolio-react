import { React, useEffect, useState } from "react";
import { useAxios } from "../boot/AxiosContext";
const FooterSection = () => {
  const axios = useAxios();
  const [data, setData] = useState([]);
  const [socialMediaData, setSocialMediaData] = useState([]);
  useEffect(() => {
    const userData = async () => {
      axios
        .get("/finduser")
        .then((response) => setData(response.data))
        .catch((error) => console.error("Error al cargar datos:", error));
    };

    const socialMediaData = () => {
      axios
        .get("/findsocialmedia")
        .then((response) => setSocialMediaData(response.data))
        .catch((error) => console.error("Error al cargar datos:", error));
    };
    const fetchData = async () => {
      await Promise.all([userData(), socialMediaData()]);
    };

    fetchData();
  }, [axios]);
  return (
    <footer className="ftco-footer ftco-section">
      {data.map((item, index) => (
        <div key={index} className="container">
          <div className="row mb-5">
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">About</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                  <li className="">
                    <a href="https://www.example.com">
                      <span className="icon-twitter"></span>
                    </a>
                  </li>
                  <li className="">
                    <a href="https://www.example.com">
                      <span className="icon-facebook"></span>
                    </a>
                  </li>
                  <li className="">
                    <a href="https://www.example.com">
                      <span className="icon-instagram"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4 ml-md-4">
                <h2 className="ftco-heading-2">Links</h2>
                <ul className="list-unstyled">
                  <li>
                    <a href="#home-section">
                      <span className="icon-long-arrow-right mr-2"></span>Home
                    </a>
                  </li>
                  <li>
                    <a href="#about-section">
                      <span className="icon-long-arrow-right mr-2"></span>About
                    </a>
                  </li>
                  <li>
                    <a href="#services-section">
                      <span className="icon-long-arrow-right mr-2"></span>
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#projects-section">
                      <span className="icon-long-arrow-right mr-2"></span>
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="#contact-section">
                      <span className="icon-long-arrow-right mr-2"></span>
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Services</h2>
                <ul className="list-unstyled">
                  <li>
                    <a href="https://www.example.com">
                      <span className="icon-long-arrow-right mr-2"></span>Web
                      Design
                    </a>
                  </li>
                  <li>
                    <a href="https://www.example.com">
                      <span className="icon-long-arrow-right mr-2"></span>Web
                      Development
                    </a>
                  </li>
                  <li>
                    <a href="https://www.example.com">
                      <span className="icon-long-arrow-right mr-2"></span>
                      Business Strategy
                    </a>
                  </li>
                  <li>
                    <a href="https://www.example.com">
                      <span className="icon-long-arrow-right mr-2"></span>Data
                      Analysis
                    </a>
                  </li>
                  <li>
                    <a href="https://www.example.com">
                      <span className="icon-long-arrow-right mr-2"></span>
                      Graphic Design
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Have a Questions?</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li>
                      <span className="icon icon-map-marker"></span>
                      <span className="text">{item.location}</span>
                    </li>
                    <li>
                      <a href="https://www.example.com">
                        <span className="icon icon-phone"></span>
                        <span className="text">+2 392 3929 210</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.example.com">
                        <span className="icon icon-envelope"></span>
                        <span className="text">{item.email}</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              Copyright &copy;
              <script>document.write(new Date().getFullYear());</script> All
              rights reserved | by{" "}
              <a
                href={socialMediaData[1]?.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.name} {item.lastname}
              </a>
            </div>
          </div>
        </div>
      ))}
    </footer>
  );
};

export default FooterSection;
