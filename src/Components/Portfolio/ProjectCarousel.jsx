import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaGithub, FaLink } from "react-icons/fa";
import ReactGA from "react-ga4";

const ProjectCarousel = ({ projects }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  // GA tracker for button clicks on project demo or code
  const handleButtonClick = (projectName, buttonType) => {
    ReactGA.event({
      category: `projectName=${projectName}`,
      action: buttonType,
    });
  };

  return (
    <div className="relative flex flex-col items-center justify-center mt-2 md:mt-8">
      {projects.map((item, index) => (
        <div
          key={index}
          className={`transition-transform duration-100 transform ${
            index === currentSlide ? "visible" : "hidden"
          }`}
        >
          <div
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } gap-8 md:gap-4  md:mx-16 md:mb-4 mt-2 items-center justify-center `}
          >
            <img
              src={item.image}
              alt={`${item.name} image`}
              className="w-[calc(100vw-50%)] md:w-1/2 h-auto"
              width={item.width}
              height={item.height}
              style={{ aspectRatio: `${item.width} / ${item.height}` }}
            />
            <div className="flex flex-col w-full  md:w-3/6 justify-center md:items-start gap-6 md:gap-4">
              <h2 className="text-xl md:text-4xl text-primary-dark-red font-bold">
                {item.name.toUpperCase()}
              </h2>
              <p className="line-clamp-5 sm:line-clamp-none">
                {item.description}
              </p>
              <ul
                className="flex flex-row w-full items-start gap-2 md:gap-4 "
                id="tags"
              >
                {item.technologies.map((tech, index) => (
                  <li
                    className="border-2 bg-black border-gray-700 text-lighter-red text-nowrap text-md md:text-lg font-bold py-2 md:py-1 px-2 rounded-md"
                    key={index}
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <div
                id="buttons"
                className="flex flex-row w-full items-start md:gap-8 gap-4"
              >
                <a
                  href={item.live}
                  onClick={() => handleButtonClick(item.name, "live")}
                  className="flex flex-row items-center gap-2  text-primary-dark-blue text-lg md:text-xl font-bold p-2 px-4 rounded-md border border-primary-dark-red bg-primary-dark-red hover:text-primary-dark-red hover:border-white hover:bg-white hover:cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
                  aria-label={`View live demo of ${item.name}`}
                >
                  <FaLink size={20} /> Live
                </a>
                <a
                  href={item.github}
                  onClick={() => handleButtonClick(item.name, "code")}
                  className="flex flex-row items-center gap-2 text-lg lg:text-xl font-bold p-2 px-4 rounded-md border border-white hover:text-primary-dark-red hover:cursor-pointer hover:bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
                  aria-label={`View code of ${item.name}`}
                >
                  <FaGithub size={20} /> Code
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Left and Right Arrow Buttons */}
      <button
        className="absolute top-[20%] md:top-[30%] left-0 bg-primary-dark-red rounded-full text-lg md:text-2xl p-2 hover:animate-bounce duration-150"
        onClick={goToPrevSlide}
        aria-label="Previous slide"
      >
        <FaArrowLeft />
      </button>
      <button
        className="absolute top-[20%] md:top-[30%] right-0 bg-primary-dark-red rounded-full text-lg md:text-2xl p-2 hover:animate-bounce duration-150"
        onClick={goToNextSlide}
        aria-label="Next slide"
      >
        <FaArrowRight />
      </button>

      {/* Dot Slider */}
      <div className="flex mt-4 md:mt-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 mx-1 my-2 md:my-6 border-2 rounded-full border-primary-dark-red hover:border-white ${
              index === currentSlide ? "bg-primary-dark-red" : "opacity-50"
            } focus:outline-none`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
