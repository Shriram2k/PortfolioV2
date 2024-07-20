import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import HamburgerMenu from "../assets/HamburgerMenu.svg";
import HamburgerClose from "../assets/HamburgerClose.svg";

const Nav = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      threshold: 0.25,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav className="navigation bg-yellow-500 fixed w-full top-0 left-0 p-4 drop-shadow-xl z-10">
      <div className="nav-container mx-auto flex flex-wrap items-center justify-between">
        <div className="nav-top flex justify-between w-full md:w-auto">
          <h2 className="font-anton text-3xl ml-3 mt-1 md:mr-auto">
            Shriram K
          </h2>

          <button
            className="nav-toggle md:hidden bg-yellow-600 p-3 rounded-full text-xs m-1 ring-yellow-800 ring-2"
            aria-label="Toggle navigation"
            onClick={handleToggle}
          >
            {" "}
            <img src={isMenuOpen ? HamburgerClose : HamburgerMenu} />
          </button>
        </div>
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex w-full md:w-auto p-1 flex-col md:flex-row md:ml-auto mt-2 md:mt-0 `}
        >
          <li
            className={`${
              activeSection === "home" ? "bg-yellow-700" : ""
            } hover:bg-yellow-700 rounded-lg p-2 m-1 mr-6 md:mr-2 translate ease-in-out delay-75 hover:active:-translate-y-2 hover:active:shadow-xl hover:active:shadow-yellow-600 `}
          >
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li
            className={`${
              activeSection === "about" ? "bg-yellow-700" : ""
            } hover:bg-yellow-700 rounded-lg p-2 m-1 mr-6 md:mr-2 translate ease-in-out delay-75 hover:-translate-y-2 hover:shadow-xl hover:shadow-yellow-600 `}
          >
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              About
            </Link>
          </li>
          <li
            className={`${
              activeSection === "education" ? "bg-yellow-700" : ""
            } hover:bg-yellow-700 rounded-lg p-2 m-1 mr-6 md:mr-2 translate ease-in-out delay-75 hover:-translate-y-2 hover:shadow-xl hover:shadow-yellow-600 `}
          >
            <Link
              to="education"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Education
            </Link>
          </li>
          <li
            className={`${
              activeSection === "experience" ? "bg-yellow-700" : ""
            } hover:bg-yellow-700 rounded-lg p-2 m-1 mr-6 md:mr-2 translate ease-in-out delay-75 hover:-translate-y-2 hover:shadow-xl hover:shadow-yellow-600 `}
          >
            <Link
              to="experience"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Experience
            </Link>
          </li>
          <li
            className={`${
              activeSection === "skills" ? "bg-yellow-700" : ""
            } hover:bg-yellow-700 rounded-lg p-2 m-1 mr-6 md:mr-2 translate ease-in-out delay-75 hover:-translate-y-2 hover:shadow-xl hover:shadow-yellow-600 `}
          >
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Skills
            </Link>
          </li>
          <li
            className={`${
              activeSection === "project" ? "bg-yellow-700" : ""
            } hover:bg-yellow-700 rounded-lg p-2 m-1 mr-6 md:mr-2 translate ease-in-out delay-75 hover:-translate-y-2 hover:shadow-xl hover:shadow-yellow-600 `}
          >
            <Link
              to="project"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Projects
            </Link>
          </li>
          <li
            className={`${
              activeSection === "contact" ? "bg-yellow-700" : ""
            } hover:bg-yellow-700 rounded-lg p-2 m-1 mr-6 md:mr-2 translate ease-in-out delay-75 hover:-translate-y-2 hover:shadow-xl hover:shadow-yellow-600 `}
          >
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
