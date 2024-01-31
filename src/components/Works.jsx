import React from "react";
import { data } from "../data/data.js";
import ProjectCarousel from "./ProjectCarousel.jsx";

const Works = () => {
  const project = data;
  return (
    <div
      name="Portfolio"
      className="w-full pt-2 md:pt-16 text-gray-300 bg-[#0a192f] h-screen"
    >
      <div className="max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-4 md:ml-16">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-red-600">
            Projects
          </p>
          <p className="py-2">// Check out some of my recent Projects</p>
        </div>
        <ProjectCarousel projects={project}/>
      </div>
    </div>
  );
};

export default Works;
