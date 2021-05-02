import React from "react";

const Footer = () => {
  return (
    <footer>
      <p>©Jordi Torras</p>
      <div className="imgs-links imgs-footer">
        <a href="https://www.linkedin.com/in/jorditm/" target="_blank">
          <img src="images/linkedin-logo-white.png" alt="LinkedIn Logo" />
        </a>
        <a href="https://github.com/Jorditm" target="_blank">
          <img src="images/github-logo-white.png" alt="GitHub Logo" />
        </a>
        <a
          href="https://drive.google.com/file/d/15Nbmv_qrBTUiSd7uE9RQHTn6xVNkbvyx/view?usp=sharing"
          target="_blank"
        >
          <img src="images/printer-white.png" alt="printer CV Logo" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
