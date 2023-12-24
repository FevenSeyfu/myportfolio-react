import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-red-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi.I'm Feven, Nice to meet you.Please Take a look around.
            </p>
          </div>
          <div>
            <p>
              I'm a passionate software developer who enjoys crafting visually
              appealing web applications to enhance users' experiences. My
              expertise lies in building full-stack apps, implementing exciting
              features, and ensuring websites run seamlessly on any device. Take
              a look at my portfolio to explore my work and the skills I bring
              to the table. If you find something you like and have an exciting
              project in mind, don't hesitate to get in touch! Together, we can
              transform your ideas into fantastic software solutions!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
