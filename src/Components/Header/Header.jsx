import React from "react";
import Navbar from "./Navbar";

const Header = () => {

  return (
      <header className="fixed w-full h-20 flex justify-between items-center bg-primary-dark-blue text-gray-300 pb-2  px-8 md:px-12 lg:px-[5%] z-10">
        {/* logo */}
          <h1 className="text-2xl font-croissant  text-primary-dark-red italic">
            Feven S.
          </h1>
        <Navbar />
      </header>
  );
};

export default Header;
