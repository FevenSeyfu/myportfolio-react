import React from "react";
import ReactGA from "react-ga4";

const About = () => {
  const handleMouseEnter = () => {
    ReactGA.event({
      category: "Section View",
      action: "Viewed About Section",
    });
  };
  
  return (
    <div name="about" className="w-full h-screen bg-primary-dark-blue text-gray-300 " onMouseEnter={handleMouseEnter}>
      <div className="flex flex-col  gap-4 justify-center items-center w-full h-full">
        <div className="md:max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right text-left pb-2 md:pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-primary-dark-red">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="md:max-w-[1000px] w-full grid sm:grid-cols-2 gap-4">
          <div className="sm:text-right text-left  text-2xl md:text-4xl font-bold">
            <p>
              Hi! <br />
              I'm Feven, Nice to meet you.Please Take a look around.
            </p>
          </div>
          <div>
            <p>
              I'm a Computer Engineering graduate with 2+ years in the tech
              industry. Passionate about creating practical solutions and
              enhancing user experiences, I specialize in building
              pixel-perfect, accessible, and responsive full-stack applications.
              Explore my previous works to see the skills I bring to the table.
              If you have an exciting project in mind, don't hesitate to reach
              out! Let's collaborate to transform your ideas into exceptional
              software solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
