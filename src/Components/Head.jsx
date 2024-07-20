import Resume from "../assets/shriramResume.pdf";
import ProjectImage from "../assets/ProjectImage.png";
import { useEffect } from "react";
import Aos from "aos";

const Head = () => {
  const handleDownload = () => {
    const anchor = document.createElement("a");
    anchor.href = Resume;
    anchor.download = "Shriram_Resume.pdf";
    document.body.appendChild(anchor);

    anchor.click();

    document.body.removeChild(anchor);
  };

  useEffect(() => {
    Aos.init();
  });
  return (
    <>
      <section
        className="head-element h-screen md:h-screen items-center grid grid-rows-1 text-center p-5 gap-4 md:grid-cols-2"
        id="home"
      >
        <div className="head-content bg-gradient-to-bl from-black to-transparent rounded-lg place-self-center text-white text-xl w-auto">
          <h4>Hi this is,</h4>
          <h1 className="text-3xl">Shriram</h1>
          <h3>React Developer</h3>
          <p className="pt-5">
            I am a dedicated front-end web developer, committed to creating
            visually appealing and user-friendly websites that enhance user
            experience and engagement.
          </p>
          <button
            onClick={handleDownload}
            title="Click to download CV"
            className="bg-gradient-to-r from-yellow-300 to-yellow-700  p-2 rounded-md text-black shadow-md hover:bg-yellow-600 translate ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-100 shadow-yellow-500/40 hover:shadow-yellow-600 hover:shadow-lg hover:text-white hover:border-yellow-900 mt-5"
          >
            Download CV
          </button>
        </div>
        <img
          data-aos="fade-down"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
          src={ProjectImage}
          alt="Emoji for the person"
          className="head-img h-auto row-span-3 delay-75 hover:animate-none opacity-100"
        />
      </section>
    </>
  );
};

export default Head;
