import React from "react";

const ServiceSection = () => {
  return (
    <section className="ftco-section" id="services-section">
      <div className="container">
        <div className="row justify-content-center py-5 mt-5">
          <div className="col-md-12 heading-section text-center ">
            <h1 className="big big-2">Servicios</h1>
            <h2 className="mb-4">Servicios</h2>
            <p>
              Descubra los servicios profesionales que ofrezco. Desde
              consultoría desarrollo de proyectos, descubra cómo puedo ayudarle
              a alcanzar sus objetivos.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 text-center d-flex ">
            <div className="services-1">
              <span className="icon">
                <i className="flaticon-analysis"></i>
              </span>
              <div className="desc">
                <h3 className="mb-5">Database and Cloud Services</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center d-flex ">
            <div className="services-1">
              <span className="icon">
                <i className="flaticon-flasks"></i>
              </span>
              <div className="desc">
                <h3 className="mb-5">Systems integration</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center d-flex ">
            <div className="services-1">
              <span className="icon">
                <i className="flaticon-ideas"></i>
              </span>
              <div className="desc">
                <h3 className="mb-5">Web Developer</h3>
              </div>
            </div>
          </div>

          <div className="col-md-4 text-center d-flex ">
            <div className="services-1">
              <span className="icon">
                <i className="flaticon-analysis"></i>
              </span>
              <div className="desc">
                <h3 className="mb-5">Performance Optimization</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center d-flex ">
            <div className="services-1">
              <span className="icon">
                <i className="flaticon-flasks"></i>
              </span>
              <div className="desc">
                <h3 className="mb-5">Apps maintenance and support</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center d-flex ">
            <div className="services-1">
              <span className="icon">
                <i className="flaticon-ideas"></i>
              </span>
              <div className="desc">
                <h3 className="mb-5">Process Automation</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
