import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mx-8 md:mx-12 lg:mx-[5%] border-t-4 border-primary-dark-red text-white max-h-28 py-4 md:py-6">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <a
            href="https://fevenseyfu.tech/"
            aria-label="Feven's Portfolio"
            className="font-semibold underline-offset-4  text-primary-dark-red hover:cursor-pointer hover:underline"
          >
            Feven Seyfu
          </a>
          . All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="https://www.linkedin.com/in/fevenseyfu/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-dark-red"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin size={24} aria-hidden="true" />
          </a>
          <a
            href="https://github.com/FevenSeyfu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-dark-red"
            aria-label="GitHub profile"
          >
            <FaGithub size={24} aria-hidden="true" />
          </a>
          <a
            href="https://twitter.com/FevenSeyfu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-dark-red"
            aria-label="Twitter profile"
          >
            <FaTwitter size={24} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
