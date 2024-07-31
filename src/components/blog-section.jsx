import React, { useEffect, useState } from "react";
import { useAxios } from "../boot/AxiosContext";

const BlogSection = () => {
  const axios = useAxios();
  const [data, setData] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get("/findblog")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error al cargar blog:", error));
  }, [axios]);

  return (
    <section className="ftco-section" id="blog-section">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-5">
          <div className="col-md-7 heading-section text-center ">
            <h1 className="big big-2">Blog</h1>
            <h2 className="mb-4">Our Blog</h2>
            <p>
              Learn more about me through my writings. In this section, I share
              my thoughts, experiences, and knowledge on various topics.
            </p>
          </div>
        </div>
        <div className="row d-flex">
          {data.map((item, index) => (
            <div key={index} className="col-md-4 d-flex ">
              <div className="blog-entry justify-content-end">
                <a href="single.html" className="block-20">
                  <img
                    style={{ width: "100%" }}
                    src={`${apiUrl}/image/${item.image}`}
                    alt="Profile"
                  />
                </a>
                <div className="text mt-3 float-right d-block">
                  <div className="d-flex align-items-center mb-3 meta">
                    <p className="mb-0">
                      <span className="mr-2">June 21, 2019</span>
                      <a href="https://example.com" className="mr-2">
                        Admin
                      </a>
                      <a href="https://example.com" className="meta-chat">
                        <span className="icon-chat"></span> 3
                      </a>
                    </p>
                  </div>
                  <h3 className="heading">
                    <a href="single.html">{item.name}</a>
                  </h3>
                  <p style={{ textAlign: "justify" }}>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
