import { React, useEffect, useState } from "react";
import { useAxios } from "../boot/AxiosContext";
const ContactSection = () => {
  const estilo = {
    width: "100%",
  };

  const axios = useAxios();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("/finduser")
      .then((response) => setData(response.data[0]))
      .catch((error) => console.error("Error al cargar datos:", error));
  }, [axios]);

  return (
    <section
      className="ftco-section contact-section ftco-no-pb"
      id="contact-section"
    >
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section text-center ">
            <h1 className="big big-2">Contact</h1>
            <h2 className="mb-4">Contact Me</h2>
            <p>
              Are you interested in hiring me for your project or simply want to
              say hello? You can fill out the contact form below or send me an
              email at johan.posito@gmail.com.
            </p>
          </div>
        </div>

        <div className="row d-flex contact-info mb-5">
          <div className="col-md-6 col-lg-3 d-flex ">
            <div className="align-self-stretch box p-4 text-center">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="icon-map-signs"></span>
              </div>
              <h3 className="mb-4">Address</h3>
              <p>{data.location}</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex ">
            <div className="align-self-stretch box p-4 text-center">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="icon-phone2"></span>
              </div>
              <h3 className="mb-4">Contact Number</h3>
              <p>
                <a href="tel://1234567920">+ 1235 2355 98</a>
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex ">
            <div className="align-self-stretch box p-4 text-center">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="icon-paper-plane"></span>
              </div>
              <h3 className="mb-4">Email Address</h3>
              <p>
                <a href="mailto:info@yoursite.com">{data.email}</a>
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex ">
            <div className="align-self-stretch box p-4 text-center">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="icon-globe"></span>
              </div>
              <h3 className="mb-4">Website</h3>
              <p>
                <a href="https://example.com">yoursite.com</a>
              </p>
            </div>
          </div>
        </div>
        <div className="row no-gutters block-9">
          <div className="col-md-6 order-md-last d-flex">
            <form
              action="https://example.com"
              className="bg-light p-4 p-md-5 contact-form"
            >
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Email"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                />
              </div>
              <div className="form-group">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="7"
                  className="form-control"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="Send Message"
                  className="btn btn-primary py-3 px-5"
                />
              </div>
            </form>
          </div>

          <div className="col-md-6 d-flex">
            <div
              className="img"
              // style="background-image: url(images/about.jpg)"
            >
              <img style={estilo} src="/images/about.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
