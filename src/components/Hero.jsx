import React, { useState, useEffect } from "react";
import ReactGA from "react-ga4";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiArrowNarrowRight, HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";
const Hero = () => {
  // google analytics
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
      className="w-full h-screen bg-[#0a192f] pt-10 md:pt-24 lg:pt-24 lg:px-[5%] flex flex-row gap-24"
      onMouseEnter={handleMouseEnter}
    >
      <section className="w-full  mx-auto px-8 flex flex-col md:h-full justify-center gap-2">
        <p className="text-[#ccd6f6] text-md md:text-lg lg:text-xl">Hey There, I'm</p>
        <div>
          <h2 className="text-red-400 text-xl md:text-2xl lg:text-4xl font-bold">
            Feven Seyfu
          </h2>
          <h1 className="text-red-600 text-4xl md:4xl lg:text-5xl font-bold">
            I'm a Full Stack Developer.
          </h1>
        </div>
        <p className=" text-gray-300 text-md md:text-xl lg:text-2xl py-4 lg:max-w-[900px]">
          With hands-on experience in remote software development. I've built
          scalable{" "}
          <a
            href="https://drive.google.com/file/d/1UNninKfbEY3o9QiSTstYagHJwaL7ITzo/view?usp=drive_link"
            className="text-red-400 hover:text-red-600"
          >
            Web Application
          </a>{" "}
          for a governmental organization, excelled in my{" "}
          <a
            href="https://drive.google.com/file/d/1YnPsy89JXayNF4c7nuTMg1fywsmzFMqW/view?usp=drive_link"
            className="text-red-400 hover:text-red-600"
          >
            Computer Engineering Degree
          </a>
          , and polished my skills at{" "}
          <a
            href="https://drive.google.com/file/d/13vZ9FqHuxbYWAjOH1ddba4agLXrrve-K/view?usp=drive_link"
            className="text-red-400 hover:text-red-600"
          >
            Microverse
          </a>
          . I'd love to discuss how I can bring my expertise to your team.{" "}
          <a
            href="mailto:fevenseyfu00@gmail.com"
            className="text-red-400 hover:text-red-600"
          >
            Get in Touch!
          </a>
        </p>
        <div className="flex gap-2 my-4 md:hidden">
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
            href="mailto:fevenseyfu00@gmail.com"
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
        <div className="flex fle-row gap-2 md:gap-4 lg:gap-12 items-center text-base lg:text-xl">
          <a
            href="https://drive.google.com/file/d/1RAFSlRP88BpNChu9Ns5iYck7wCgalOAu/view?usp=drive_link"
            className="text-white border-2 px-3 md:px-6 py-3 my-2 flex items-center rounded-md  hover:border-red-600 hover:text-red-600" 
          >
            Get Resume
          </a>

          <Link to="Portfolio" smooth={true} duration={500}>
            <button className="bg-red-600 border-red-600 text-white hover:text-red-600  hover:bg-[#0a192f] border-2 hover:border-red-600 group  px-3 md:px-6 py-3 my-2 flex items-center rounded-md ">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Hero;
