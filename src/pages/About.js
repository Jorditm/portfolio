import React from "react";

const About = () => {
  return (
    <div className="about-bg">
      <div className="about-container" id="about">
        <div className="text-about">
          <h1>ABOUT ME</h1>
          <hr />
          <p>
            Hi! I'm Jordi, front-end developer. I started learning programming
            in a self-taught way combining it with my job. I graduated from the
            Bootcamp of full-stack web development at Ironhack, I did a master's
            degree in Digital Marketing & E-Commerce, technology has always
            fascinated me for everything that can be created, for how it can be
            done and has motivated me to keep learning more and more.
          </p>
          <p>
            I adapt myself to any position and situation in order to solve all
            the problems and overcome the proposed challenges to keep growing!
          </p>
          <hr />
          <div className="imgs-links">
            <a href="https://www.linkedin.com/in/jorditm/" target="_blank">
              <img src="images/linkedin-logo.png" alt="LinkedIn Logo" />
            </a>
            <a href="https://github.com/Jorditm" target="_blank">
              <img src="images/github-logo.png" alt="GitHub Logo" />
            </a>
            <a
              href="https://drive.google.com/file/d/15Nbmv_qrBTUiSd7uE9RQHTn6xVNkbvyx/view?usp=sharing"
              target="_blank"
            >
              <img src="images/printer.png" alt="printer CV Logo" />
            </a>
          </div>
        </div>
        <div className="photo-about">
          <img src="images/IMG_1888.jpg" alt="foto flama" />
        </div>
      </div>
    </div>
  );
};

export default About;
