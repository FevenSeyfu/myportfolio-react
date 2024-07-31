import React from "react";
import ReactGA from "react-ga4";
import HTML from "../assets/icons/html.png";
import CSS from "../assets/icons/css.png";
import JavaScript from "../assets/icons/javascript.png";
import ReactImg from "../assets/icons/react.png";
import Node from "../assets/icons/node.png";
import GitHub from "../assets/icons/github.png";
import Tailwind from "../assets/icons/tailwind.png";
import Mongo from "../assets/icons/mongo.png";

const Skills = () => {
  const handleMouseEnter = () => {
    ReactGA.event({
      category: "Section View",
      action: "Viewed Skills Section",
    });
  };
  return (
    <section name="skills" className="w-full h-screen bg-primary-dark-blue text-gray-300" onMouseEnter={handleMouseEnter}>
      <div className="lg:px-[5%] flex flex-col justify-center h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4
        border-primary-dark-red ">
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
    </section>
  );
};

export default Skills;
