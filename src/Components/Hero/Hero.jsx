import React from "react";
import ReactGA from "react-ga4";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import SocialLinks from "./SocialLinks";

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
    <section
      name="home"
      className="relative h-screen pt-24 md:pr-[160px] flex flex-col md:gap-4 justify-center overflow-x-hidden"
      onMouseEnter={handleMouseEnter}
    >
      <p className="text-[#ccd6f6] text-md md:text-lg lg:text-xl">
        Hey There, I'm
      </p>
      <div>
        <h2 className="text-secondary-lighter-red text-xl md:text-2xl lg:text-4xl font-bold">
          Feven Seyfu
        </h2>
        <h1 className="text-primary-dark-red text-4xl md:4xl lg:text-5xl font-bold">
          I'm a Full Stack Developer.
        </h1>
      </div>
      <p className="text-gray-300 text-md md:text-xl lg:text-2xl py-4 lg:max-w-[900px]">
        With hands-on experience in remote software development. I've built
        scalable{" "}
        <a
          href="https://drive.google.com/file/d/1UNninKfbEY3o9QiSTstYagHJwaL7ITzo/view?usp=drive_link"
          className="text-secondary-lighter-red hover:text-primary-dark-red"
          aria-label="View Web Application"
        >
          Web Application
        </a>{" "}
        for a governmental organization, excelled in my{" "}
        <a
          href="https://drive.google.com/file/d/1YnPsy89JXayNF4c7nuTMg1fywsmzFMqW/view?usp=drive_link"
          className="text-secondary-lighter-red hover:text-primary-dark-red"
          aria-label="View Computer Engineering Degree"
        >
          Computer Engineering Degree
        </a>
        , and polished my skills at{" "}
        <a
          href="https://drive.google.com/file/d/13vZ9FqHuxbYWAjOH1ddba4agLXrrve-K/view?usp=drive_link"
          className="text-secondary-lighter-red hover:text-primary-dark-red"
          aria-label="View Microverse"
        >
          Microverse
        </a>
        . I'd love to discuss how I can bring my expertise to your team.{" "}
        <a
          href="mailto:fevenseyfu00@gmail.com"
          className="text-secondary-lighter-red hover:text-primary-dark-red"
          aria-label="Get in Touch via Email"
        >
          Get in Touch!
        </a>
      </p>
      <SocialLinks handleLinkClick={handleLinkClick} />
      <div className="flex flex-row gap-2 md:gap-4 lg:gap-12 items-center text-base lg:text-xl">
        <a
          href="https://drive.google.com/file/d/1RAFSlRP88BpNChu9Ns5iYck7wCgalOAu/view?usp=drive_link"
          className="text-white border-2 px-3 md:px-6 py-3 my-2 flex items-center rounded-md hover:border-primary-dark-red hover:text-primary-dark-red"
          aria-label="Get Resume"
        >
          Get Resume
        </a>

        <Link to="Portfolio" smooth={true} duration={500}>
          <button
            className="bg-primary-dark-red border-primary-dark-red text-white hover:text-primary-dark-red hover:bg-primary-dark-blue border-2 hover:border-primary-dark-red group px-3 md:px-6 py-3 my-2 flex items-center rounded-md"
            aria-label="View Work"
          >
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;