import "./App.css";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Element } from "react-scroll";

import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Works from "./pages/Works";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="app-container">
      <Navbar />
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
    </div>
  );
}

export default App;
