import React, { useEffect, useState } from "react";
import { useAxios } from "../boot/AxiosContext";
const ResumeSection = () => {
  const axios = useAxios();
  const [dataUser, setDataUser] = useState("");
  const [dataExperience, setDataExperience] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userResponse = await axios.get("/finduser");
        setDataUser(userResponse.data[0]);
      } catch (error) {
        console.error("Error al cargar datos del usuario:", error);
        setError("Error al cargar datos del usuario");
      }
    };

    const fetchExperienceData = async () => {
      try {
        const experienceResponse = await axios.get("/findexperience");
        setDataExperience(experienceResponse.data.reverse().slice(-4));
      } catch (error) {
        console.error("Error al cargar datos de experiencia:", error);
        setError("Error al cargar datos de experiencia");
      }
    };

    const fetchData = async () => {
      await Promise.all([fetchUserData(), fetchExperienceData()]);
      setLoading(false);
    };

    fetchData();
  }, [axios]);

  if (loading) {
    return <p>Cargando datos...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <section className="ftco-section ftco-no-pb" id="resume-section">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-10 heading-section text-center ">
            <h1 className="big big-2">Resume</h1>
            <h2 className="mb-4">Resume</h2>
            <p>{dataUser.whatido}</p>
          </div>
        </div>
        <div className="row">
          {dataExperience.map((item, index) => (
            <div key={index} className="col-md-6">
              <div className="resume-wrap ">
                <span className="date">{item.title}</span>
                <h2> {item.company}</h2>
                <span className="position">
                  {item.datefrom} - {item.dateto}
                </span>
                <p className="mt-4">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
