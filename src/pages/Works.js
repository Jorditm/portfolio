import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Works = () => {
  AOS.init({ duration: 1500 });
  return (
    <div className="works-container" id="works">
      <div className="works-title">
        <h1>WORKS</h1>
      </div>
      <div className="card-container">
        <div className="project-card-box" data-aos="fade-right">
          <a
            className="project-card-btn"
            target="_blank"
            href="https://github.com/Jorditm/ProjectM1-superheroes"
          >
            <h4 className="text">
              My first project. It is a search engine by words of fictional
              characters.
              <hr></hr>
              Javascript | HTML | CSS
            </h4>
            <div className="project-card-one"></div>
          </a>
        </div>

        <div className="project-card-box" data-aos="zoom-out-down">
          <a
            className="project-card-btn"
            target="_blank"
            href="https://github.com/Jorditm/EventMaster"
          >
            <h4 className="text">
              My second project. It is a search engine for events, you can
              search by artist or event name. add or remove from favorites with
              links to purchase tickets.
              <hr></hr>
              NodeJS | ExpressJS | Handlebars | MongoDB | Javascript | HTML |
              CSS
            </h4>

            <div className="project-card-two"></div>
          </a>
        </div>
        <div className="project-card-box" data-aos="fade-left">
          <a
            className="project-card-btn"
            target="_blank"
            href="https://github.com/Jorditm/M3-Dietum-frontend"
          >
            <h4 className="text">
              My third project. A manager for dietitians where you can register
              your patients and keep track of all the parameters for the
              evolution of the patients.
              <hr></hr>
              ReactJS | MongoDB |  NodeJS | ExpressJS | Javascript | HTML | CSS
            </h4>

            <div className="project-card-three"></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Works;
