import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, animateScroll as scroller } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleclick = () => setNav(!nav);
  return (
    <>
      <nav className="relative z-20">
        {/* menu */}
        <ul className="hidden md:flex flex-row gap-8">
          {["home", "about", "Portfolio", "skills", "contact"].map(
            (section) => (
              <li key={section}>
                <Link
                  activeClass="text-primary-dark-red border-b-4 border-primary-dark-red text-lg"
                  to={section}
                  spy={true}
                  smooth={true}
                  duration={500}
                  isDynamic={true}
                  className="text-lg font-bold hover:text-lighter-red hover:border-b-4 border-lighter-red pb-7 hover:cursor-pointer"
                  href={`#${section}`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            )
          )}
        </ul>
        {/* Hamburger */}
        <button
          onClick={handleclick}
          className="md:hidden text-2xl z-20  text-white"
        >
          {!nav ? <FaBars /> : <FaTimes />}
        </button>
      </nav>
      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 right-0 max-w-[45%] h-screen  pt-16 bg-primary-dark-red flex flex-col items-center z-10"
        }
      >
        {["home", "about", "Portfolio", "skills", "contact"].map((section) => (
          <li
            key={section}
            className="py-2 text-2xl w-full font-semibold text-left text-white  hover:bg-lighter-red hover:text-primary-dark-blue px-8 md:px-12"
          >
            <Link to={section} spy={true} smooth={true} duration={500} href={`#${section}`}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Navbar;