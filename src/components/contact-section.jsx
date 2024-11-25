import { React, useEffect, useState } from "react";
import { useAxios } from "../boot/AxiosContext";

const ContactSection = () => {
  const estilo = {
    width: "100%",
  };

  const axios = useAxios();
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [alertMessage, setAlertMessage] = useState(""); // Para manejar mensajes de alerta
  const [alertType, setAlertType] = useState("success"); // Para manejar el tipo de alerta

  useEffect(() => {
    axios
      .get("/finduser")
      .then((response) => setData(response.data[0]))
      .catch((error) => console.error("Error al cargar datos:", error));
  }, [axios]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post("/sendmail", formData);
      setAlertMessage(result.data.message); // Almacenar mensaje de éxito
      setAlertType("success"); // Establecer tipo de alerta como éxito
      setFormData({ name: "", email: "", subject: "", message: "" }); // Limpiar el formulario
    } catch (error) {
      setAlertMessage("Email no enviado"); // Almacenar mensaje de error
      setAlertType("danger"); // Establecer tipo de alerta como peligro
    }

    // Ocultar la alerta después de 4 segundos
    setTimeout(() => {
      setAlertMessage(""); // Limpiar el mensaje de alerta
    }, 4000);
  };

  return (
    <section
      className="ftco-section contact-section ftco-no-pb"
      id="contact-section"
    >
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section text-center">
            <h1 className="big big-2">Contacto</h1>
            <h2 className="mb-4">Contactame</h2>
            <p>
              ¿Estás interesado en contratarme para tu proyecto o simplemente
              quieres saludarme? Puedes rellenar el siguiente formulario de
              contacto o enviarme un correo electrónico a
              johan.posito@gmail.com.
            </p>
          </div>
        </div>

        <div className="row d-flex contact-info mb-5">
          {/* Información de contacto */}
          <div className="col-md-6 col-lg-3 d-flex ">
            <div className="align-self-stretch box p-4 text-center">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="icon-map-signs"></span>
              </div>
              <h3 className="mb-4">Location</h3>
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
                <a href="mailto:johan.posito@gmail.com">{data.email}</a>
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
                <a href="https://www.linkedin.com/in/jesusposso/">
                  jesusposso.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="row no-gutters block-9">
          <div className="col-md-6 order-md-last d-flex">
            <form
              onSubmit={handleSubmit}
              className="bg-light p-4 p-md-5 contact-form"
            >
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  cols="30"
                  rows="7"
                  className="form-control"
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="Enviar mensaje"
                  className="btn btn-primary py-3 px-5"
                />
              </div>
              {/* Mostrar mensaje de alerta */}
              {alertMessage && (
                <div
                  className={`alert alert-${alertType}`} // Cambia el tipo de alerta según el estado
                  style={{ position: "static" }}
                  role="alert"
                >
                  {alertMessage}
                </div>
              )}
            </form>
          </div>

          <div className="col-md-6 d-flex">
            <div className="img">
              <img style={estilo} src="/images/IMG_76972.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
