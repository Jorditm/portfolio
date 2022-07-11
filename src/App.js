import "./App.css";
import { useState } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Element } from "react-scroll";

import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import BurgerMenu from "./components/BurgerMenu";
import Maintenance from "./pages/Maintenance";

function App() {
  const [maintenance, setMaintenance] = useState(true);

  return (
    <div className="app-container">
      {maintenance ? (
        <Maintenance />
      ) : (
        <>
          <Navbar />
          <BurgerMenu />
          <Element name="home">
            <Home />
          </Element>

          <Element name="about">
            <About />
          </Element>

          <Element name="works">
            <Works />
          </Element>

          <Element name="contact">
            <Contact />
          </Element>
        </>
      )}{" "}
    </div>
  );
}

export default App;
