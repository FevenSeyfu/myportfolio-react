import React from "react";
import { data } from "../../data/data.js";
import ProjectCarousel from "./ProjectCarousel.jsx";
import ReactGA from "react-ga4";

const Works = () => {
  const project = data;
  const handleMouseEnter = () => {
    ReactGA.event({
      category: "Section View",
      action: "Viewed Portfolio section Section",
    });
  };
  return (
    <div
      name="Portfolio"
      className="w-full pt-20 text-gray-300 bg-primary-dark-blue  md:pr-12 lg:pr-[5%]"
      onMouseEnter={handleMouseEnter}>
      <div className="max-w-full mx-auto flex flex-col justify-center w-full text-left">
        <div className="pb-2">
          <h1 className="text-4xl font-bold inline border-b-4 text-gray-300 border-primary-dark-red">
            Portfolio
          </h1>
          <p className="pt-2">// Check out some of my recent Projects</p>
        </div>
        <ProjectCarousel projects={project}/>
      </div>
    </div>
  );
};

export default Works;
