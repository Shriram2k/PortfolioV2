import React from "react";
import Github from "../assets/github-logo.png";
import Linkedin from "../assets/linkedin-logo.png";
import XLogo from "../assets/twitter-logo.png";
import ArrowIcon from "../assets/arrow-right.png";
import { Link } from "react-scroll";

const Contact = () => {
  return (
    <>
      <section
        className="contact-element bg-yellow-400 text-xl flex flex-col md:flex-row w-full h-auto justify-between"
        id="contact"
      >
        <div className="contact-description bg-yellow-600 rounded-lg m-5 p-5 w-auto md:w-1/4">
          <h3 className="text-2xl">Shriram's Portfolio</h3>
          <p className="mt-2">
            Thank you for visiting my personal portfolio website. Connect with
            me over mail.
          </p>
          <p className="mt-2">
            Designed by{" "}
            <a
              href="https://www.instagram.com/shriramkrishnan/"
              target="_blank"
              rel="noopener noreferrer"
              title="My Instagram"
              className="text-indigo-950"
            >
              Shriram 🎧
            </a>
          </p>
        </div>
        <div className="contact-connect bg-yellow-600 rounded-lg m-5 p-5 w-auto md:w-1/3">
          <h3 className="bg-yellow-800 p-2 rounded-md text-lg">Quick Links</h3>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="flex items-center mt-2 cursor-pointer hover:text-white translate ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 duration-100"
          >
            <img src={ArrowIcon} alt="" className="arrow-icon mr-2" />
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="flex items-center mt-2 cursor-pointer hover:text-white translate ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 duration-100"
          >
            <img src={ArrowIcon} alt="" className="arrow-icon mr-2" />
            About
          </Link>
          <Link
            to="education"
            smooth={true}
            duration={500}
            className="flex items-center mt-2 cursor-pointer hover:text-white translate ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 duration-100"
          >
            <img src={ArrowIcon} alt="" className="arrow-icon mr-2" />
            Education
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            className="flex items-center mt-2 cursor-pointer hover:text-white translate ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 duration-100"
          >
            <img src={ArrowIcon} alt="" className="arrow-icon mr-2" />
            Experience
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="flex items-center mt-2 cursor-pointer hover:text-white translate ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 duration-100"
          >
            <img src={ArrowIcon} alt="" className="arrow-icon mr-2" />
            Skills
          </Link>
          <Link
            to="project"
            smooth={true}
            duration={500}
            className="flex items-center mt-2 cursor-pointer hover:text-white translate ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 duration-100"
          >
            <img src={ArrowIcon} alt="" className="arrow-icon mr-2" />
            Project
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="flex items-center mt-2 cursor-pointer hover:text-white translate ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 duration-100"
          >
            <img src={ArrowIcon} alt="" className="arrow-icon mr-2" />
            Contact
          </Link>
        </div>

        <div className="contact-content bg-yellow-600 flex flex-col items-center rounded-lg m-5 p-5 w-auto md:w-1/3">
          <h1 className="bg-yellow-800 p-2 rounded-xl text-lg">Contact Info</h1>
          <h2 className="text-xl">Shriram K</h2>
          <h3 className="text-lg">+91 99529 05039</h3>
          <h3 className="text-lg">
            Email:{" "}
            <a
              title="Click to send mail"
              className="email text-indigo-950 hover:text-white hover:transition ease-in-out delay-75"
              href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=shriramkrishnan11@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              shriramkrishnan11@gmail.com
            </a>
          </h3>
          <h3 className="text-lg">Chennai, India - 600021</h3>
          <div className="contact-icon bg-yellow-800 flex flex-row justify-center items-center p-5 rounded-xl m-3 mt-10 space-x-4">
            <img
              src={Linkedin}
              alt="Linkedin"
              title="LinkedIn"
              className="contact-img h-10 w-10 cursor-pointer hover:p-1 "
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/shriramkrishnan11",
                  "_blank"
                )
              }
            />
            <img
              src={Github}
              alt="GitHub"
              title="GitHub"
              className="contact-img h-10 w-10 cursor-pointer hover:p-1 "
              onClick={() =>
                window.open("https://github.com/Shriram2k", "_blank")
              }
            />
            <img
              src={XLogo}
              alt="X"
              title="X"
              className="contact-img h-10 w-10 cursor-pointer hover:p-1 "
              onClick={() =>
                window.open("https://x.com/ShriramJupiter", "_blank")
              }
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
