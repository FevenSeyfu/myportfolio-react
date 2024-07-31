import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary-dark-red text-white max-h-28 py-4 md:py-6">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} <a href="">Feven Seyfu</a>. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://www.linkedin.com/in/fevenseyfu/ " target="_blank" rel="noopener noreferrer" className="hover:text-primary-dark-blue">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/FevenSeyfu" target="_blank" rel="noopener noreferrer" className="hover:text-primary-dark-blue">
            <FaGithub size={24} />
          </a>
          <a href="https://twitter.com/FevenSeyfu" target="_blank" rel="noopener noreferrer" className="hover:text-primary-dark-blue">
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;