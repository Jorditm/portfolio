import React from "react";
import {
  Link,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const Navbar = () => {
  return (
    <div className="back">
      <nav>
        {/* <Link to="/">HOME</Link> */}
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={800}
        >
          <p>HOME</p>
        </Link>

        {/* <Link to="/About">ABOUT</Link> */}
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={800}
        >
          <p>ABOUT</p>
        </Link>

        {/* <Link to="/">WORKS</Link> */}
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={0}
          duration={800}
        >
          <p>WORKS</p>
        </Link>

        {/* <Link to="/">CONTACT</Link> */}
        <Link
          activeClass="active "
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={800}
        >
          <p>CONTACT</p>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
