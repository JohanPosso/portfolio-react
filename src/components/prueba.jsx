import { React, useEffect, useState } from "react";
import { useAxios } from "../boot/AxiosContext";
const PruebaVer = () => {
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
    <div className="row">
      {data.map((item, index) => (
        <div key={index} className="col-md-4">
          <div className="container">
            <div className="card">
              <div className="image">
                <img src={`${apiUrl}/image/${item.image}`} alt="Profile" />
              </div>
              <div className="content">
                <h3 style={{ color: "black" }}> {item.name}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PruebaVer;
