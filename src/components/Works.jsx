import React from "react";
import { data } from "../data/data.js";
import { FaGithub, FaLink } from "react-icons/fa";

const Works = () => {
  const project = data;
  return (
    <div
      name="Portfolio"
      className="w-full pt-6 md:pt-24 text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-4 ml-16">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-red-600">
            Projects
          </p>
          <p className="py-2">// Check out some of my recent Projects</p>
        </div>

        {/* container for projects */}
        {project.map((item, index) => (
          <div className="flex flex-col md:flex-row gap-4 md:mx-16 items-center justify-center h-[25rem]">
            <img
              src={item.image}
              alt={`${item.name} image`}
              className="md:w-3/6"
            />
            <div className="md:w-3/6 h-full gap-4 flex flex-col">
              <h2 className="text-4xl text-red-600">{item.name}</h2>
              <p>{item.description}</p>
              <ul className="flex flex-row gap-2" id="tags">
                {item.technologies.map((tech, index) => (
                  <li className="bg-gray-700 text-red-400 text-lg font-bold py-1 px-2 rounded-lg" key={index}>
                    {tech}
                  </li>
                ))}
              </ul>
              <div id="buttons" className="flex flex-row justify-evenly">
                  <a href={item.live} className="flex flex-row items-center gap-2 text-xl font-bold bg-red-600 p-2 rounded-2xl hover:text-red-600 hover:bg-white">
                    <FaLink size={30}/> Live
                  </a>
                  <a href={item.github} className="flex flex-row items-center gap-2 text-xl font-bold border-2 border-red-600 p-2 rounded-2xl hover:text-red-600 hover:bg-white">
                    <FaGithub  size={30}/> Code
                  </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
