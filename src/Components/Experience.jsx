import React, { useState, useEffect } from "react";
import experienceIcon from "../assets/experience.png";
import ExperienceGIF from "../assets/ExperienceGIF.gif";
const Experience = () => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const section = document.getElementById("experience");
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
        className="experience-element flex items-center md:h-full flex-col md:flex-row min-h-screen text-center"
        id="experience"
      >
        <div className="experience-heading shadow-yellow-500/40 shadow-lg bg-yellow-500 p-3 flex pt-4 pb-4 md:pt-40 md:pb-40 flex-none rounded-lg md:m-5 text-xl md:text-2xl item-center justify-center ">
          <img src={experienceIcon} alt="Experience" className="m-2" />
          <h1 className="md:mr-2 mt-1">Experience</h1>
        </div>
        <div className="experience-image m-4 md:m-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <img
            src={ExperienceGIF}
            alt="Experience"
            className="h-48 md:h-60 rounded-md border-2 mt-4 md:mt-0  shadow-yellow-500/40 shadow-lg border-yellow-500"
            style={{
              opacity: showImage ? 1 : 0,
              transition: "opacity 2s ease",
            }}
          />
        </div>
        <div
          className="experience-content bg-gradient-to-tl shadow-yellow-500/40 shadow-md flex-auto p-5 m-4 m text-xl from-orange-600 to-yellow-400"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <h2 className="uppercase text-2xl underline">Sagility Health</h2>
          <h3 className="italic p-3 text-l">Sr. Process Consultant</h3>
          <h5>
            Feb - 2022 <b>To</b> Jun - 2024
          </h5>
          <div className="discrption md:hidden p-5 ">
            <hr />
            <p>
              I process insurance claims for the US-based healthcare industry,
              determining approval or denial based on client criteria. By
              maintaining a very low record of escalations through effective
              problem-solving and a thorough knowledge of procedures, I have
              been able to ensure smooth operations. My exceptional performance
              was recognized when I received the <b>"Star of the Batch"</b>{" "}
              award in my first year of work. Additionally, I collaborate
              closely with clients to ensure accurate and efficient claim
              processing.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
