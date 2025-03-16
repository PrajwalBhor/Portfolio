import React from "react";
import { Element } from "react-scroll";
import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
import Education from "./Pages/Education";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Project";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div>
      <Element name="home"><HomePage /></Element>
      <Element name="about"><About /></Element>
      <Element name="education"><Education /></Element>
      <Element name="projects"><Projects /></Element>
      <Element name="skills"><Skills /></Element>
      <Element name="contact"><Contact /></Element>
    </div>
  );
}

export default App;
