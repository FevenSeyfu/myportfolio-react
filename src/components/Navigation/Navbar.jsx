import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, animateScroll as scroller } from "react-scroll";
import ReactGA from "react-ga4";
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

  // GA tracker for click on social links
  const handleLinkClick = (platform) => {
    ReactGA.event({
      category: "Social Link",
      action: `Clicked on ${platform}`,
    });
  };
  return (
    <div className="fixed w-full h-20  flex justify-between items-center bg-[#0a192f] text-gray-300  z-10 px-8 md:px-12">
      {/* logo */}
      <div>
        <h1 className="text-2xl font-Croissant  text-red-600 italic">
          Feven S.
        </h1>
      </div>
      {/* menu */}
      <ul className="hidden md:flex">
        {["home", "about", "Portfolio", "skills", "contact"].map((section) => (
          <li key={section}>
            <Link
              activeClass="text-red-600 border-b-4 border-red-600 text-xl"
              to={section}
              spy={true}
              smooth={true}
              duration={500}
              className="text-xl font-bold hover:text-red-400 hover:border-b-4 border-red-400 pb-7"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
      {/* Hamburger */}
      <div
        onClick={handleclick}
        className="md:hidden text-3xl z-10 hover:text-red-600"
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        {["home", "about", "Portfolio", "skills", "contact"].map((section) => (
          <li
            key={section}
            className="py-6 text-4xl w-full text-center hover:bg-red-600 "
          >
            <span onClick={() => scrollTo(section)}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </span>
          </li>
        ))}
      </ul>
      {/* social icons */}
      <div className="hidden lg:flex">
        <SocialLinks handleLinkClick={handleclick} />
      </div>
    </div>
  );
};

export default Navbar;
