import React from "react";

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="text-about">
        <h1>ABOUT ME</h1>
        <hr />
        <p>
          ¡Hola! Soy Jordi, desarrollador front-end. Empecé aprendiendo
          programación de forma autodidacta combinándolo con mi trabajo. Me
          gradué en el Bootcamp de desarrollo web full-stack en Ironhack y
          anteriormente realicé un máster de Marketing digital & E-Commerce, la
          tecnología siempre me ha apasionado por todo lo que se puede llegar a
          crear, por como se puede hacer y me ha motivado a seguir aprendiendo
          más y más.
        </p>
        <p>
          ¡Dispuesto a adaptarme a cualquier puesto y situación por tal de
          solucionar todos los problemas y superar los retos propuestos para
          seguir creciendo!
        </p>
        <hr />
      </div>
      <div className="photo-about">
        <img src="images/IMG_1888.jpg" alt="foto flama" />
      </div>
    </div>
  );
};

export default About;
