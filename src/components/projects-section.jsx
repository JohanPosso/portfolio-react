import { React, useEffect, useState } from "react";
import { useAxios } from "../boot/AxiosContext";

const ProjectSection = () => {
  const [data, setData] = useState([]);
  const axios = useAxios();
  const apiUrl = process.env.REACT_APP_API_URL;
  useEffect(() => {
    axios
      .get("/findproject")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error al cargar proyectos:", error));
  }, [axios]);
  return (
    <section className="ftco-section ftco-project" id="projects-section">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center ">
            <h1 className="big big-2">Projects</h1>
            <h2 className="mb-4">Our Projects</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>
          </div>
        </div>
        <div className="row">
          {data.map((item, index) => (
            <div key={index} className="col-md-4">
              <div className="card card-efect">
                <img src={`${apiUrl}/image/${item.image}`} alt="Profile" />
                <div className="badge mt-1 mb-0">
                  <span className="badge red">JavaScript</span>
                  <span className="badge blue">Python</span>
                  <span className="badge red">JavaScript</span>
                  <span className="badge blue">Python</span>
                </div>
                <div className="card-body py-1">
                  <p className="card-text">{item.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
