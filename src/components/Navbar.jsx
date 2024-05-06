import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link, animateScroll as scroll, scroller } from "react-scroll";
import Logo from "../assets/logos/logo.png";
import LogoMobile from "../assets/logos/logo.png";
import ReactGA from "react-ga4";

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
        {/* <img src={Logo} alt="site logo" className="hidden md:flex w-[80px]" />
        <img src={LogoMobile} alt="site logo" className="md:hidden w-[50px]" /> */}
        <h1 className="text-2xl font-Croissant  text-red-600 italic">Feven S.</h1>
      </div>
      {/* menu */}
      <ul className="hidden md:flex">
        {["home", "about", "Portfolio", "skills", "contact"].map((section) => (
          <li key={section}>
            <Link
              activeClass="text-red-600 text-xl"
              to={section}
              spy={true}
              smooth={true}
              duration={500}
              className="text-xl font-bold hover:text-red-400 hover:border-b-2 border-red-600 pb-7"
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
      <div className="hidden lg:flex flex-col fixed top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 hover:rounded-2xl hover:bg-red-600">
            <a
              className="flex justify-between items-center w-full text-gray-300 font-bold text-lg pl-2"
              href="https://www.linkedin.com/in/fevenseyfu/"
              onClick={() => handleLinkClick("LinkedIn")}
            >
              Linkedin{" "}
              <span className="bg-red-600 p-2  rounded-full hover:bg-none">
                <FaLinkedin size={30} />
              </span>
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 hover:rounded-2xl hover:bg-red-600">
            <a
              className="flex justify-between items-center w-full text-gray-300 font-bold text-lg pl-2"
              href="https://github.com/FevenSeyfu"
              onClick={() => handleLinkClick("Github")}
            >
              Github{" "}
              <span className="bg-red-600 p-2 ml-3 rounded-full hover:bg-none">
                <FaGithub size={30} />
              </span>
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 hover:rounded-2xl hover:bg-red-600">
            <a
              className="flex justify-between items-center w-full text-gray-300 font-bold text-lg pl-2"
              href="mailto:fevensey@gmail.com"
              onClick={() => handleLinkClick("Email")}
            >
              E-mail{" "}
              <span className="bg-red-600 p-2 ml-3 rounded-full hover:bg-none">
                <HiOutlineMail size={30} />
              </span>
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 hover:rounded-2xl hover:bg-red-600">
            <a
              className="flex justify-between items-center w-full text-gray-300 font-bold text-lg pl-2"
              href="https://drive.google.com/drive/folders/1c4RNtiJOljbwXU03DlUrGGfFYBDdYYVM?usp=sharing"
              onClick={() => handleLinkClick("Google Drive - resume")}
            >
              Resume{" "}
              <span className="bg-red-600 p-2 ml-3 rounded-full hover:bg-none">
                <BsFillPersonLinesFill size={30} />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
