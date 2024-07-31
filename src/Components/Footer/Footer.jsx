import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary-dark-red text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Feven Seyfu. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-secondary-lighter-red">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-secondary-lighter-red">
            <FaGithub size={24} />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-secondary-lighter-red">
            <FaTwitter size={24} />
          </a>
        </div>
        <div className="mt-4">
          <a href="#home" className="hover:text-secondary-lighter-red mx-2">Home</a>
          <a href="#about" className="hover:text-secondary-lighter-red mx-2">About</a>
          <a href="#projects" className="hover:text-secondary-lighter-red mx-2">Projects</a>
          <a href="#contact" className="hover:text-secondary-lighter-red mx-2">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;