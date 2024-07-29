import React from "react";
import { FaLinkedin, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const socialLinks = [
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/fevenseyfu/",
    socialIcon: <FaLinkedin />,
    label: "Linkedin",
  },
  {
    id: "github",
    href: "https://github.com/FevenSeyfu",
    socialIcon: <FaGithub />,
    label: "Github",
  },
  {
    id: "email",
    href: "mailto:fevenseyfu00@gmail.com",
    socialIcon: <HiOutlineMail />,
    label: "E-mail",
  },
  {
    id: "resume",
    href: "https://drive.google.com/drive/folders/1c4RNtiJOljbwXU03DlUrGGfFYBDdYYVM?usp=sharing",
    socialIcon: <BsFillPersonLinesFill />,
    label: "Resume",
  },
];

const SocialLinks = ({ handleLinkClick }) => (
  <>
    <div className="hidden md:flex flex-col fixed top-[35%] right-0 z-10">
      <ul>
        {socialLinks.map(({ id, href, socialIcon, label }) => (
          <li key={id} className="w-[160px] h-16 flex justify-start items-center">
            <a
              className="w-[160px] flex items-center gap-4 hover:gap-2 transform translate-x-[120px] hover:translate-x-0 duration-300 hover:rounded-xl hover:bg-primary-dark-red text-white font-bold text-xl"
              href={href}
              onClick={() => handleLinkClick(label)}
            >
              <span className="bg-primary-dark-red p-3 rounded-full hover:bg-none md:text-xl lg:text-2xl">
                {socialIcon}
              </span>
              <span className="whitespace-nowrap pr-2">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
    <div className="flex gap-2 my-4 md:hidden">
      {socialLinks.map(({ id, href, socialIcon }) => (
        <a
          key={id}
          href={href}
          className="bg-primary-dark-red text-white text-xl rounded-full p-2 hover:animate-bounce duration-500"
          onClick={() => handleLinkClick(id)}
        >
          {socialIcon}
        </a>
      ))}
    </div>
  </>
);

export default SocialLinks;
