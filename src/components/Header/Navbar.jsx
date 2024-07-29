import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, animateScroll as scroller } from "react-scroll";

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
      <>
        <nav>
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
                    className="text-lg font-bold hover:text-secondary-lighter-red hover:border-b-4 border-secondary-lighter-red pb-7"
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
            className="md:hidden text-2xl z-10 hover:text-primary-dark-red"
          >
            {!nav ? <FaBars /> : <FaTimes />}
          </div>
        </nav>
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
      </>
  );
};

export default Navbar;
