import React from "react";
import { FaLinkedin, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const socialLinks = [
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/fevenseyfu/",
    iconDesktop: <FaLinkedin size={30} />,
    iconMobile: <FaLinkedinIn className="text-white" size={20} />,
    label: "Linkedin",
  },
  {
    id: "github",
    href: "https://github.com/FevenSeyfu",
    iconDesktop: <FaGithub size={30} />,
    iconMobile: <FaGithub className="text-white" size={20} />,
    label: "Github",
  },
  {
    id: "email",
    href: "mailto:fevenseyfu00@gmail.com",
    iconDesktop: <HiOutlineMail size={30} />,
    iconMobile: <HiOutlineMail className="text-white" size={20} />,
    label: "E-mail",
  },
  {
    id: "resume",
    href: "https://drive.google.com/drive/folders/1c4RNtiJOljbwXU03DlUrGGfFYBDdYYVM?usp=sharing",
    iconDesktop: <BsFillPersonLinesFill size={30} />,
    iconMobile: <BsFillPersonLinesFill className="text-white" size={20} />,
    label: "Resume",
  },
];

const SocialLinks = ({ handleLinkClick }) => (
  <>
    <div className="hidden md:flex flex-col fixed top-[35%] right-0">
      <ul>
        {socialLinks.map(({ id, href, iconDesktop, label }) => (
          <li
            key={id}
            className="w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:mr-[-10px] duration-300 hover:rounded-2xl hover:bg-primary-dark-red"
          >
            <a
              className="flex items-center gap-4  w-full text-gray-300 font-bold text-lg"
              href={href}
              onClick={() => handleLinkClick(label)}
            >
              <span className="bg-primary-dark-red p-2  rounded-full hover:bg-none">
                {iconDesktop}
              </span>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
    <div className="flex gap-2 my-4 md:hidden">
      {socialLinks.map(({ id, href, iconMobile }) => (
        <a
          key={id}
          href={href}
          className="bg-primary-dark-red rounded-full p-2 hover:animate-bounce duration-500"
          onClick={() => handleLinkClick(id)}
        >
          {iconMobile}
        </a>
      ))}
    </div>
  </>
);

export default SocialLinks;
