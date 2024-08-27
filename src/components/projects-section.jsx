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
            <h2 className="mb-4">Projects</h2>
            <p>
              Explore the projects I have completed and contributed to. Each
              entry showcases my practical experience, problem-solving skills,
              and the impact of my work.
            </p>
          </div>
        </div>
        <div className="row">
          {data.map((item, index) => (
            <div key={index} className="col-md-4">
              <div className="container">
                <div className="card">
                  <div className="image">
                    <img src={`${apiUrl}/image/${item.image}`} alt="Profile" />
                    <a href={item.link}>
                      <h5 style={{ color: "black" }}> {item.name}</h5>
                    </a>
                  </div>
                  <div className="content">
                    <div className="div-scrollbar">
                      <p>{item.description}</p>
                    </div>
                  </div>
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
