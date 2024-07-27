import React, { useEffect, useState } from "react";
import { useAxios } from "../boot/AxiosContext";
import TitleWithLines from "./titlelinea";

const SkillsSection = () => {
  const [data, setData] = useState([]);
  const axios = useAxios();

  const selectedIdsLanguages = [1, 4, 6];
  const selectedIdsFramework = [2, 3, 5];
  const selectedIdsStyle = [15, 16, 17];
  const selectedIdsOthers = [14, 18, 19, 20, 21, 22];

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
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>
          </div>
        </div>

        <TitleWithLines title="Programming Languages" />
        <div style={{ gridGap: "2px" }} className="row">
          {itemsToShow.map((item, index) => (
            <div
              className="cardskills container mb-3 col-3 "
              bis_skin_checked="1"
            >
              <h4>{item.name}</h4>
              <img
                className="pm-10"
                style={{ width: "100px", paddingLeft: "37px" }}
                src="/images/postgresql.svg"
                alt=""
              />
            </div>
          ))}
        </div>

        <TitleWithLines title="Frameworks & Libraries" />
        <div style={{ gridGap: "2px" }} className="row">
          {itemsToShowFramework.map((item, index) => (
            <div
              className="cardskills container mb-3 col-3 "
              bis_skin_checked="1"
            >
              <h4>{item.name}</h4>
              <img
                className="pm-10"
                style={{ width: "100px", paddingLeft: "37px" }}
                src="/images/postgresql.svg"
                alt=""
              />
            </div>
          ))}
        </div>
        <TitleWithLines title="Markup & Style" />
        <div style={{ gridGap: "2px" }} className="row">
          {itemsToShowStyle.map((item, index) => (
            <div
              className="cardskills container mb-3 col-3 "
              bis_skin_checked="1"
            >
              <h4>{item.name}</h4>
              <img
                className="pm-10"
                style={{ width: "100px", paddingLeft: "37px" }}
                src="/images/postgresql.svg"
                alt=""
              />
            </div>
          ))}
        </div>
        <TitleWithLines title="Other Tools & Technologies" />
        <div style={{ gridGap: "2px" }} className="row">
          {itemsToShowOthers.map((item, index) => (
            <div
              className="cardskills container mb-3 col-3 "
              bis_skin_checked="1"
            >
              <h4>{item.name}</h4>
              <img
                className="pm-10"
                style={{ width: "100px", paddingLeft: "37px" }}
                src="/images/postgresql.svg"
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
