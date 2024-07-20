import React, { useState, useEffect } from "react";
import infoIcon from "../assets/info.png";
import ShriramImage from "../assets/Shriram.jpg";

const About = () => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const section = document.getElementById("about");
    const options = {
      root: null,
      threshold: 0.5,
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
      className="about-element flex items-center md:h-full flex-col md:flex-row min-h-screen text-center"
      id="about"
    >
      <div className="about-heading shadow-yellow-500/40 shadow-lg bg-yellow-500 p-4 flex pt-4 pb-4 md:pt-40 md:pb-40 flex-none rounded-lg md:m-5 text-xl md:text-2xl item-center justify-center">
        <img src={infoIcon} alt="Info" className="p-1" />
        <h1 className="md:mr-2">About Me</h1>
      </div>
      <div className="about-image transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 min-h-96 mt-5 md:mt-0 flex-none ">
        <img
          src={ShriramImage}
          alt="Shriram"
          className="about-img h-96 md:h-96 m-4 rounded-md border-2 shadow-yellow-500/40 shadow-lg border-yellow-500"
          style={{
            opacity: showImage ? 1 : 0,
            transition: "opacity 2s ease",
          }}
        />
      </div>
      <div
        className="about-content bg-gradient-to-t shadow-yellow-500/40 shadow-md flex-auto p-5 m-4 text-xl from-orange-600 to-yellow-400"
        data-aos="fade-right"
        data-aos-duration="500"
      >
        <h2 className="font-semibold">Shriram</h2>
        <h4 className="italic underline">React.js Developer</h4>
        <p className="pt-3  ">
          I am a Front-End Developer located in Chennai, India, with an academic
          background in Commerce from Patrician College. Fueled by a strong
          passion for technology, I have dedicated myself to advancing my coding
          expertise, particularly in the development of web applications and
          websites utilizing React.js.
        </p>
        <h5 className="pt-8 ">Email: shriramkrishnan11@gmail.com</h5>
        <h5>Place: Chennai.</h5>
      </div>
    </section>
  );
};

export default About;
