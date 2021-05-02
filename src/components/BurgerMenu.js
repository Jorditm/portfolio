import React from "react";
import {
  Link,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const BurgerMenu = () => {
  return (
    <div className="burger-menu">
      <input type="checkbox" id="toggle" />
      <label class="toggle-btn toggle-btn__cross" for="toggle">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </label>
      <div className="burger-links">
        <ul>
          <li>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={0}
            >
              <p>HOME</p>
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={0}
            >
              <p>ABOUT</p>
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="works"
              spy={true}
              smooth={true}
              offset={0}
              duration={0}
            >
              <p>WORKS</p>
            </Link>
          </li>
          <li>
            <Link
              activeClass="active "
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={0}
            >
              <p>CONTACT</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
