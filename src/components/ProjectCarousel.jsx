import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight,FaGithub, FaLink } from 'react-icons/fa';

const ProjectCarousel = ({ projects }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const goToPrevSlide = () => {
      setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    };
  
    const goToNextSlide = () => {
      setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    };
  
    return (
      <div className="relative flex flex-col items-center md:mt-8">
        {projects.map((item, index) => (
          <div
            key={index}
            className={`transition-transform duration-100 transform ${
              index === currentSlide ? 'visible' : 'hidden'
            }`}
          >
            <div
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-8 md:gap-4 md:mx-16 items-center justify-center h-[30rem] md:h-[20rem]`}
            >
              <img
                src={item.image}
                alt={`${item.name} image`}
                className="md:w-3/6 md:h-[25rem] w-[15rem]"
              />
              <div className="md:w-3/6 h-full gap-4 md:gap-8 flex flex-col mx-4">
                <h2 className="text-4xl text-red-600 font-bold">
                  {item.name.toUpperCase()}
                </h2>
                <p className="line-clamp-2 sm:line-clamp-none">{item.description}</p>
                <ul className="flex flex-row gap-2" id="tags">
                  {item.technologies.map((tech, index) => (
                    <li
                      className="bg-gray-700 text-red-400 text-lg font-bold py-1 px-2 rounded-lg border-white hover:border-2"
                      key={index}
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <div id="buttons" className="flex flex-row md:gap-8 gap-4">
                  <a
                    href={item.live}
                    className="flex flex-row items-center gap-2 text-xl font-bold bg-red-600 p-2 px-4 rounded-2xl hover:text-red-600 hover:bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
                  >
                    <FaLink size={30} /> Live
                  </a>
                  <a
                    href={item.github}
                    className="flex flex-row items-center gap-2 text-xl font-bold border-2 border-white p-2 px-4 rounded-2xl hover:text-red-600 hover:bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
                  >
                    <FaGithub size={30} /> Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
  
        {/* Left and Right Arrow Buttons */}
        <button
          className="absolute top-[15%] md:top-[30%] left-4 bg-red-600 rounded-full text-2xl p-2 hover:animate-bounce duration-150"
          onClick={goToPrevSlide}
        >
          <FaArrowLeft />
        </button>
        <button
          className="absolute top-[15%] md:top-[30%] right-4 bg-red-600 rounded-full text-2xl p-2 hover:animate-bounce duration-150"
          onClick={goToNextSlide}
        >
          <FaArrowRight />
        </button>
  
        {/* Dot Slider */}
        <div className="flex my-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 mx-1  md:mt-12 border-2 rounded-full border-red-600 hover:border-white ${
                index === currentSlide ? 'bg-red-600' : 'opacity-50'
              } focus:outline-none`}
            ></button>
          ))}
        </div>
      </div>
    );
  };
  
  export default ProjectCarousel;