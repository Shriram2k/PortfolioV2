import React, { useState } from "react";
import projectIcon from "../assets/project.png";
import Aos from "aos";

const projects = [
  {
    id: 1,
    title: "Booksky",
    description:
      "A book search and management application for discovering and tracking books.",
    link: "https://shriram2k.github.io/Booksky/",
    code: "https://github.com/Shriram2k/Booksky",
  },
  {
    id: 2,
    title: "Calendar App",
    description: "An interactive calendar to view and manage events.",
    link: "https://shriram2k.github.io/Calendar-App/",
    code: "https://github.com/Shriram2k/Calendar-App",
  },
  {
    id: 3,
    title: "QR Code Generator",
    description: "Tool for creating custom QR codes for various purposes.",
    link: "https://shriram2k.github.io/QR-Code-Generator/",
    code: "https://github.com/Shriram2k/QR-Code-Generator",
  },
  {
    id: 4,
    title: "Currency Converter",
    description: "Converts amounts between different currencies.",
    link: "https://shriram2k.github.io/Currency-Converter/",
    code: "https://github.com/Shriram2k/Currency-Converter",
  },
  {
    id: 5,
    title: "Weather Forecast",
    description:
      "Provides weather information and forecasts for different locations.",
    link: "https://shriram2k.github.io/Weather-Forecast/",
    code: "https://github.com/Shriram2k/Weather-Forecast",
  },
  {
    id: 6,
    title: "BMI App",
    description: "Calculates Body Mass Index based on weight and height.",
    link: "https://shriram2k.github.io/BMI-Calculator/",
    code: "https://github.com/Shriram2k/BMI-Calculator",
  },
];

const Project = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const handleTouchToggle = (id) => {
    setHoveredId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className="project-element flex items-center md:h-full flex-col md:flex-row min-h-screen text-center perspective-1000 " id="projects">
      <div className="project-heading shadow-yellow-500/40 shadow-lg bg-yellow-500 p-3 flex pt-4 pb-4 md:pt-40 md:pb-40 flex-none rounded-lg md:m-5 text-xl md:text-2xl item-center justify-center">
        <img src={projectIcon} alt="Project Icon" className="mr-2" />
        <h1 className="text-xl md:text-2xl">Projects</h1>
      </div>

      <div
        data-aos="fade-up"
        className="project-content grid grid-cols-1 md:grid-cols-3 gap-4 w-full p-4"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-item-container w-full h-72 perspective-1000"
          >
            <div
              className={`project-item relative w-full h-full shadow-yellow-500/40 shadow-lg transform-style-preserve-3d transition-transform duration-700 ${
                hoveredId === project.id ? "rotate-y-180" : ""
              }`}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              onTouchStart={() => handleTouchToggle(project.id)}
            >
              <div className="front absolute w-full h-full bg-gradient-to-tr  from-orange-600 to-yellow-400 text-black rounded-lg  flex items-center justify-center p-4 box-border backface-hidden">
                <h4 className="text-2xl bg-yellow-600 shadow-lg shadow-yellow-700 text-black rounded-lg p-2">
                  {project.title}
                </h4>
              </div>

              <div className="back absolute w-full h-full bg-gradient-to-tl from-orange-600 to-yellow-400 rounded-lg text-gray-800 flex flex-col items-center justify-center p-4 box-border rotate-y-180 backface-hidden">
                <h1 className="text-2xl bg-yellow-600 shadow-lg shadow-yellow-700 text-black rounded-lg p-2 mb-4">
                  {project.title}
                </h1>
                <p className="text-lg bg-yellow-600 shadow-lg shadow-yellow-700 text-white rounded-md p-5">
                  {project.description}
                </p>
                <div className="buttons flex flex-row gap-4 mt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button flex bg-yellow-400 shadow-lg font-bold shadow-yellow-700 hover:bg-gradient-to-br hover:from-yellow-400 hover:to-orange-800 text-black rounded-lg py-2 px-4 text-center"
                  >
                    View{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 ml-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button flex bg-yellow-400 shadow-lg font-bold shadow-yellow-700 hover:bg-gradient-to-br hover:from-yellow-400 hover:to-orange-800 text-black rounded-lg py-2 px-4 text-center"
                  >
                    Code
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 ml-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
