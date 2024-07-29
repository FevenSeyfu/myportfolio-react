import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, animateScroll as scroller } from "react-scroll";
import SocialLinks from "./SocialLinks";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleclick = () => setNav(!nav);

  const scrollTo = (section) => {
    scroller.scrollTo(section, {
      duration: 500,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -50,
    });
    handleclick();
  };

  return (
      <div className="fixed w-full h-16  flex justify-between items-center bg-primary-dark-blue text-gray-300  z-10 px-8 md:px-12">
        {/* logo */}
          <h1 className="text-2xl font-croissant  text-primary-dark-red italic">
            Feven S.
          </h1>
        <div>
          {/* menu */}
          <ul className="hidden lg:flex flex-row gap-8">
            {["home", "about", "Portfolio", "skills", "contact"].map(
              (section) => (
                <li key={section}>
                  <Link
                    activeClass="text-primary-dark-red border-b-4 border-primary-dark-red text-xl"
                    to={section}
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="text-xl font-bold hover:text-secondary-lighter-red hover:border-b-4 border-secondary-lighter-red pb-7"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Link>
                </li>
              )
            )}
          </ul>
          {/* Hamburger */}
          <div
            onClick={handleclick}
            className="lg:hidden text-2xl z-10 hover:text-primary-dark-red"
          >
            {!nav ? <FaBars /> : <FaTimes />}
          </div>
        </div>
        {/* Mobile menu */}
        <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-16 right-0 w-[75%] h-screen bg-primary-dark-blue flex flex-col items-center px-8 md:px-12"
        }
      >
        {["home", "about", "Portfolio", "skills", "contact"].map((section) => (
          <li
            key={section}
            className="py-2 text-2xl w-full text-right text-white  hover:bg-primary-dark-red "
          >
            <span onClick={() => scrollTo(section)}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </span>
          </li>
        ))}
      </ul>
      </div>
  );
};

export default Navbar;
