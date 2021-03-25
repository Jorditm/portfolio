import React from "react";

const Works = () => {
  return (
    <div className="works-container" id="works">
      <div className="works-title">
        <h1>WORKS</h1>
      </div>
      <div className="card-container">
        <div className="project-card-box">
          <a
            className="project-card-btn"
            target="_blank"
            href="https://github.com/Jorditm/ProjectM1-superheroes"
          >
            <h4 className="text">
              aqui va la descripcion del proyecto aqui va la descripcion del
              proyecto aqui va la descripcion del proyecto aqui va la
              descripcion del proyecto aqui va la descripcion del proyecto
            </h4>
            <div className="project-card-one"></div>
          </a>
        </div>

        <div className="project-card-box">
          <a
            className="project-card-btn"
            target="_blank"
            href="https://github.com/Jorditm/EventMaster"
          >
            <h4 className="text">aqui va la descripcion del proyecto</h4>

            <div className="project-card-two"></div>
          </a>
        </div>
        <div className="project-card-box">
          <a
            className="project-card-btn"
            target="_blank"
            href="https://github.com/Jorditm/M3-Dietum-frontend"
          >
            <h4 className="text">aqui va la descripcion del proyecto</h4>

            <div className="project-card-three"></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Works;
