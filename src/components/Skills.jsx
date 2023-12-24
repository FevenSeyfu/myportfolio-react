import React from "react";

import HTML from "../assets/icons/html.png";
import CSS from "../assets/icons/css.png";
import JavaScript from "../assets/icons/javascript.png";
import ReactImg from "../assets/icons/react.png";
import Node from "../assets/icons/node.png";
import GitHub from "../assets/icons/github.png";
import Tailwind from "../assets/icons/tailwind.png";
import Mongo from "../assets/icons/mongo.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto pt-[80px] px-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4
        border-red-600 ">
            Skills
          </p>
          <p className="py-4">//Technologies I have worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-4">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-12 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-2">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-12 mx-auto" src={CSS} alt="HTML icon" />
            <p className="my-2">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-12 mx-auto" src={JavaScript} alt="HTML icon" />
            <p className="my-2">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-12 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-2">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-12 mx-auto" src={GitHub} alt="HTML icon" />
            <p className="my-2">GITHUB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-12 mx-auto" src={Node} alt="HTML icon" />
            <p className="my-2">NODE JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-12 mx-auto" src={Mongo} alt="HTML icon" />
            <p className="my-2">MONGO DB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-12 mx-auto" src={Tailwind} alt="HTML icon" />
            <p className="my-2">TAILWIND</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Skills;
