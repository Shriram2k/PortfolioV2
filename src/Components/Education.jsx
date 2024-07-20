import React, { useEffect, useState } from "react";
import educationIcon from "../assets/education.png";
import EducationGif from "../assets/EducationGIF.gif";

const Education = () => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const section = document.getElementById("education");
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
    <>
      <section
        className="education-element flex items-center md:justify-between md:h-full flex-col md:flex-row-reverse min-h-screen text-center"
        id="education"
      >
        <div className="education-heading shadow-yellow-500/40 shadow-lg bg-yellow-500 p-3 flex pt-4 pb-4 md:pt-40 md:pb-40 rounded-lg md:m-5 text-xl md:text-2xl justify-center">
          <img src={educationIcon} alt="Education" className="p-2 pl-0" />
          <h1 className="mt-1 md:mt-1 m-0 md:m-2">Education</h1>
        </div>
        <div className="education-image m-0 md:m-6 mt-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300  ">
          <img
            src={EducationGif}
            alt="Education"
            className="h-48 md:h-60 rounded-md border-2 mt-3 md:mt-0 shadow-yellow-500/40 shadow-lg border-yellow-500"
            style={{
              opacity: showImage ? 1 : 0,
              transition: "opacity 2s ease",
            }}
          />
        </div>

        <div className="education-container flex md:flex-row flex-col text-xl justify-between ">
          <div
            data-aos="fade-down"
            data-aos-duration="700"
            className="education-content p-12 m-4 md:m-4 flex-auto bg-gradient-to-r from-orange-600 to-yellow-400  shadow-yellow-500/40 shadow-md"
          >
            <h2 className="uppercase text-2xl underline">B.Com CS</h2>
            <h3>Patrician College of Arts and Science.</h3>
            <h4>(2018-2021)</h4>
            <h5>Adyar, Chennai</h5>
            <p className="italic mt-4 p-3 md:p-1 text-l bg-green-700 text-white rounded-full">
              Graduated with 81%
            </p>
          </div>
          <div
            data-aos="fade-down"
            data-aos-duration="900"
            className="education-content p-12 m-4 md:m-4 flex-auto bg-gradient-to-r from-yellow-400 to-orange-600  shadow-yellow-500/40 shadow-md"
          >
            <h2 className="uppercase text-2xl underline">MBA Finance</h2>
            <h3>Loyola College of Arts and Science.</h3>
            <h4>(2021-2023)</h4>
            <h5>Chennai</h5>
            <p className="italic mt-4 p-3 md:p-1 text-l bg-green-700 text-white rounded-full">
              Graduated with 51%
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
