import React from "react";
import ReactGA from "react-ga4";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiArrowNarrowRight, HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";
const Hero = () => {
  const handleMouseEnter = () => {
    ReactGA.event({
      category: "Section View",
      action: "Viewed Hero Section",
    });
  };
  const handleLinkClick = (platform) => {
    ReactGA.event({
      category: "Social Link",
      action: `Clicked on ${platform}`,
    });
  };

  return (
    <div
      name="home"
      className="w-full h-screen bg-[#0a192f]"
      onMouseEnter={handleMouseEnter}
    >
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full gap-2 pt-4">
        <p className="text-[#ccd6f6]">Hey There, I'm</p>
        <h2 className="text-red-400 text-2xl sm:text-5xl font-bold">
          Feven Seyfu
        </h2>
        <h1 className="text-red-600 text-4xl sm:text-7xl font-bold">
          I'm a Full Stack Developer.
        </h1>
        <p className=" text-gray-300 text-md md:text-lg py-4 max-w-[700px]">
          I can help you build exceptional digital experiences.I focus on
          building responsive Full-stack web applications. Look through some of
          my work and experience, if you like what you see,don't hesitate to
          contact me.
        </p>
        <div className="flex gap-2 md:hidden">
          <a
            href="https://www.linkedin.com/in/fevenseyfu/"
            className="bg-red-600 rounded-full p-2 hover:animate-bounce duration-500"
            onClick={() => handleLinkClick("LinkedIn")}
          >
            <FaLinkedinIn className="text-white" size={20} />
          </a>
          <a
            href="https://github.com/FevenSeyfu"
            className="bg-red-600 rounded-full p-2 hover:animate-bounce duration-500"
            onClick={() => handleLinkClick("Github")}
          >
            <FaGithub className="text-white" size={20} />
          </a>
          <a
            href="mailto:fevensey@gmail.com"
            className="bg-red-600 rounded-full p-2 hover:animate-bounce duration-500"
            onClick={() => handleLinkClick("Email")}
          >
            <HiOutlineMail className="text-white" size={20} />
          </a>
          <a
            href="https://drive.google.com/drive/folders/1c4RNtiJOljbwXU03DlUrGGfFYBDdYYVM?usp=sharing"
            className="bg-red-600 rounded-full p-2 hover:animate-bounce duration-500"
            onClick={() => handleLinkClick("Google Drive - resume")}
          >
            <BsFillPersonLinesFill className="text-white" size={20} />
          </a>
        </div>
        <div>
          <Link to="Portfolio" smooth={true} duration={500}>
            <button className="text-white group border-2 px-3 md:px-6 py-1 md:py-3 my-2 flex items-center rounded-md hover:bg-red-600 hover:border-red-600">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
