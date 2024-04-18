import React from "react";
import { data } from "../data/data.js";
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
      className="w-full pt-2 md:pt-16 text-gray-300 bg-[#0a192f] h-screen"
      onMouseEnter={handleMouseEnter}>
      <div className="max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-4 md:ml-16">
          <h1 className="text-4xl font-bold inline border-b-4 text-gray-300 border-red-600">
            Portfolio
          </h1>
          <p className="py-2">// Check out some of my recent Projects</p>
        </div>
        <ProjectCarousel projects={project}/>
      </div>
    </div>
  );
};

export default Works;
