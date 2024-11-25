import React, { useEffect, useState } from "react";
import { useAxios } from "../boot/AxiosContext";
import TitleWithLines from "./titlelinea";
import "@fortawesome/fontawesome-free/css/all.min.css";

const SkillsSection = () => {
  const [data, setData] = useState([]);
  const axios = useAxios();

  const selectedIdsLanguages = [1, 4, 6, 10];
  const selectedIdsFramework = [2, 3, 5, 9];
  const selectedIdsStyle = [15, 16, 17];
  const selectedIdsOthers = [7, 8];

  const itemsToShow = data.filter((item) =>
    selectedIdsLanguages.includes(item.id)
  );
  const itemsToShowFramework = data.filter((item) =>
    selectedIdsFramework.includes(item.id)
  );
  const itemsToShowStyle = data.filter((item) =>
    selectedIdsStyle.includes(item.id)
  );
  const itemsToShowOthers = data.filter((item) =>
    selectedIdsOthers.includes(item.id)
  );
  useEffect(() => {
    axios
      .get("/findskill")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error al cargar datos:", error));
  }, [axios]);
  return (
    <section className="ftco-section" id="skills-section">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center ">
            <h1 className="big big-2">Skills</h1>
            <h2 className="mb-4">My Skills</h2>
            <p>
              Descubra las herramientas, tecnologías y conocimientos que he
              adquirido a lo largo de mi carrera. Cada sección destaca mis
              competencias clave y cómo las aplico en proyectos reales.
            </p>
          </div>
        </div>

        <TitleWithLines title="Programming Languages" />
        <div style={{ gridGap: "2px" }} className="row">
          {itemsToShow.map((item, index) => (
            <div
              key={index}
              className="cardskills container mb-3 col-3 "
              bis_skin_checked="1"
            >
              <h4 className="titleSkill">{item.name}</h4>
              <i className={`${item.icon} pm-10 skill-icon`}></i>
            </div>
          ))}
        </div>

        <TitleWithLines title="Frameworks & Libraries" />
        <div style={{ gridGap: "2px" }} className="row">
          {itemsToShowFramework.map((item, index) => (
            <div
              key={index}
              className="cardskills container mb-3 col-3 "
              bis_skin_checked="1"
            >
              <h4 className="titleSkill">{item.name}</h4>

              <i className={`${item.icon} pm-10 skill-icon`}></i>
            </div>
          ))}
        </div>
        <TitleWithLines title="Other Tools & Technologies" />

        <div style={{ gridGap: "2px" }} className="row">
          {itemsToShowStyle.map((item, index) => (
            <div
              key={index}
              className="cardskills container mb-3 col-3 "
              bis_skin_checked="1"
            >
              <h4 className="titleSkill">{item.name}</h4>

              <i className={`${item.icon} pm-10 skill-icon`}></i>
            </div>
          ))}
        </div>
        <div style={{ gridGap: "2px" }} className="row">
          {itemsToShowOthers.map((item, index) => (
            <div
              key={index}
              className="cardskills container mb-3 col-3 "
              bis_skin_checked="1"
            >
              <h4 className="titleSkill">{item.name}</h4>
              <i className={`${item.icon} pm-10 skill-icon`}></i>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
