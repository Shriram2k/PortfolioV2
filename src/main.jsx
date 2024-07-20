import React from "react";
import ReactDOM from "react-dom/client";
import Aos from "aos";
import "aos/dist/aos.css";
import "./index.css";
import About from "./Components/About";
import Nav from "./Components/Nav";
import Head from "./Components/Head";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";
import Project from "./Components/Projects";
import Contact from "./Components/Contact";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Nav />
    <Head />
    <About />
    <Education />
    <Experience />
    <Skills />
    <Project />
    <Contact />
  </React.StrictMode>
);
