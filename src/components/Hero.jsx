import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
const Hero = () => {
  return (
    <div name='home' className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#ccd6f6]">Hey There, I'm</p>
        <h2 className="text-red-400 text-4xl sm:text-7xl font-bold">
          Feven Seyfu
        </h2>
        <h1 className="text-red-600 text-4xl sm:text-7xl font-bold">
          I'm a Full Stack Developer.
        </h1>
        <p className=" text-[#8892b0] py-4 max-w-[700px]">
          I can help you build exceptional digital experiences.I focus on
          building responsive Full-stack web applications. Look through some of
          my work and experience, if you like what you see,don't hesitate to
          contact me.
          <div>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-600 hover:border-red-600">
              View Work
                <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight  className="ml-3"/>
                </span> 
            </button>
          </div>
        </p>
      </div>
    </div>
  );
};

export default Hero;
