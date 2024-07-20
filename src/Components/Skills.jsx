import React, { useState, useEffect } from "react";
import htmlIcon from "../assets/htmlIcon.png";
import cssIcon from "../assets/css.png";
import jsIcon from "../assets/js.png";
import tailwindIcon from "../assets/tailwind.png";
import gitIcon from "../assets/git.png";
import reactIcon from "../assets/library.png";
import githubIcon from "../assets/github-logo.png";
import skillsIcon from "../assets/settings.png";
import sassIcon from "../assets/sass.png";
import SkillsGIF from "../assets/SkillsGIF.gif";

const Skills = () => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const section = document.getElementById("skills");
    const options = {
      root: null,
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setShowImage(entry.isIntersecting);
      });
    }, options);

    observer.observe(section);

    return () => {
      observer.unobserve(section);
    };
  }, []);

  return (
    <section
      className="skills-element flex items-center md:justify-between md:h-full flex-col md:flex-row-reverse min-h-screen text-center"
      id="skills"
    >
      <div className="skills-heading shadow-yellow-500/40 shadow-lg bg-yellow-500 p-3 flex pt-4 pb-4 md:pt-40 md:pb-40 rounded-lg md:m-5 text-xl md:text-2xl justify-center">
        <img src={skillsIcon} alt="Skills Icon" className="p-2 pr-1" />
        <h1 className="mt-1 md:mt-1 m-0 md:m-2">Skills</h1>
      </div>
      <div className="skills-image m-4 md:m-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
        <img
          src={SkillsGIF}
          alt="Skills"
          className="h-48 md:h-60 rounded-md border-2 mt-4 md:mt-0  shadow-yellow-500/40 shadow-lg border-yellow-500"
          style={{
            opacity: showImage ? 1 : 0,
            transition: "opacity 2s ease",
          }}
        />
      </div>
      <div className="skills-content grid grid-cols-2 gap-4 mt-8 md:grid-cols-4 text-xl justify-around w-full p-4 md:w-auto">
        <div className="skill flex flex-col items-center bg-gradient-to-br shadow-yellow-500/40 shadow-md from-yellow-400 to-orange-600 rounded-lg space-y-2 p-4">
          <img src={htmlIcon} alt="HTML5 Icon" className="h-14" />
          <span>HTML5</span>
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="100"
          className="skill flex flex-col shadow-yellow-500/40 shadow-md items-center bg-gradient-to-br from-yellow-400 to-orange-600 rounded-lg space-y-2 p-4"
        >
          <img src={cssIcon} alt="CSS3 Icon" className="h-14" />
          <span>CSS3</span>
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="200"
          className="skill flex flex-col shadow-yellow-500/40 shadow-md items-center bg-gradient-to-br from-yellow-400 to-orange-600 rounded-lg space-y-2 p-4"
        >
          <img src={tailwindIcon} alt="TailwindCSS Icon" className="h-14" />
          <span>TailwindCSS</span>
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="300"
          className="skill flex flex-col shadow-yellow-500/40 shadow-md items-center bg-gradient-to-br from-yellow-400 to-orange-600 rounded-lg space-y-2 p-4"
        >
          <img src={sassIcon} alt="TailwindCSS Icon" className="h-14" />
          <span>Sass</span>
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="400"
          className="skill flex flex-col shadow-yellow-500/40 shadow-md items-center bg-gradient-to-br from-yellow-400 to-orange-600 rounded-lg space-y-2 p-4"
        >
          <img src={jsIcon} alt="JavaScript Icon" className="h-14" />
          <span>JavaScript</span>
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="500"
          className="skill flex flex-col shadow-yellow-500/40 shadow-md items-center bg-gradient-to-br from-yellow-400 to-orange-600 rounded-lg space-y-2 p-4"
        >
          <img src={reactIcon} alt="React.js Icon" className="h-14" />
          <span>React.js</span>
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="600"
          className="skill flex flex-col shadow-yellow-500/40 shadow-md items-center bg-gradient-to-br from-yellow-400 to-orange-600 rounded-lg space-y-2 p-4"
        >
          <img src={gitIcon} alt="Git Icon" className="h-14" />
          <span>Git</span>
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="700"
          className="skill flex flex-col shadow-yellow-500/40 shadow-md items-center bg-gradient-to-br from-yellow-400 to-orange-600 rounded-lg space-y-2 p-4"
        >
          <img src={githubIcon} alt="GitHub Icon" className="h-14" />
          <span>GitHub</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
