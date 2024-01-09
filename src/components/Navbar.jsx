import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link, animateScroll as scroll, scroller } from "react-scroll";
import Logo from '../assets/logos/Logo.png'
import LogoMobile from '../assets/logos/Logo-mobile.png'

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
    <div className="fixed w-full h-[50px] md:h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 shadow-md shadow-gray-700 ">
      {/* logo */}
      <div>
        <img src={Logo} alt="site logo" className="hidden md:flex w-[200px]"/>
        <img src={LogoMobile} alt="site logo"  className="md:hidden w-[50px]" />
      </div>
      {/* menu */}
      <ul className="hidden md:flex">
        {["home", "about", "Portfolio", "skills", "contact"].map((section) => (
          <li key={section}>
            <Link
              activeClass="text-pink-600 text-lg"
              to={section}
              spy={true}
              smooth={true}
              duration={500}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
      {/* Hamburger */}
      <div onClick={handleclick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile menue */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        {["home", "about", "Portfolio", "skills", "contact"].map((section) => (
          <li key={section} className="py-6 text-4xl">
            <span onClick={() => scrollTo(section)}>{section}</span>
          </li>
        ))}
      </ul>
      {/* social icons */}
      <div className="hidden lg:flex flex-col fixed top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-900 hover:rounded-2xl">
            <a
              className="flex justify-between items-center w-full text-gray-300 font-bold text-lg pl-2"
              href="https://www.linkedin.com/in/fevenseyfu/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] hover:rounded-2xl">
            <a
              className="flex justify-between items-center w-full text-gray-300 font-bold text-lg pl-2"
              href="https://github.com/FevenSeyfu"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-900 hover:rounded-2xl">
            <a
              className="flex justify-between items-center w-full text-gray-300 font-bold text-lg pl-2"
              href="mailto:fevensey@gmail.com"
            >
              E-mail <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] hover:rounded-2xl">
            <a
              className="flex justify-between items-center w-full text-gray-300 font-bold text-lg pl-2"
              href="https://drive.google.com/drive/folders/1c4RNtiJOljbwXU03DlUrGGfFYBDdYYVM?usp=sharing"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
