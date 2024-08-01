import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const socialLinks = [
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/fevenseyfu/",
    socialIcon: <FaLinkedin aria-hidden="true" />,
    label: "Linkedin",
  },
  {
    id: "github",
    href: "https://github.com/FevenSeyfu",
    socialIcon: <FaGithub aria-hidden="true" />,
    label: "Github",
  },
  {
    id: "email",
    href: "mailto:fevenseyfu00@gmail.com",
    socialIcon: <HiOutlineMail aria-hidden="true" />,
    label: "E-mail",
  },
  {
    id: "resume",
    href: "https://drive.google.com/drive/folders/1c4RNtiJOljbwXU03DlUrGGfFYBDdYYVM?usp=sharing",
    socialIcon: <BsFillPersonLinesFill aria-hidden="true" />,
    label: "Resume",
  },
];

const SocialLinks = ({ handleLinkClick }) => (
  <>
    <div className="hidden md:flex flex-col absolute top-[35%] right-0 z-10">
      <ul>
        {socialLinks.map(({ id, href, socialIcon, label }) => (
          <li key={id} className="w-[160px] h-12 flex flex-row items-center">
            <a
              className="w-[160px] flex items-center hover:gap-2 transform translate-x-[120px] hover:translate-x-0 duration-300 hover:rounded-xl hover:bg-primary-dark-red text-white font-bold text-xl"
              href={href}
              onClick={() => handleLinkClick(label)}
              aria-label={`Link to ${label}`}
            >
              <span className="bg-primary-dark-red p-2 mr-2 rounded-full hover:bg-none text-2xl">
                {socialIcon}
              </span>
              <span className="whitespace-nowrap pr-2">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
    <div className="flex gap-2 my-4 md:hidden">
      {socialLinks.map(({ id, href, socialIcon, label }) => (
        <a
          key={id}
          href={href}
          className="bg-primary-dark-red text-white text-xl rounded-full p-2 hover:animate-bounce duration-500"
          onClick={() => handleLinkClick(id)}
          aria-label={`Link to ${label}`}
        >
          {socialIcon}
        </a>
      ))}
    </div>
  </>
);

export default SocialLinks;