import React from "react";
import ReactGA from "react-ga4";

const Contact = () => {
  const handleMouseEnter = () => {
    ReactGA.event({
      category: "Section View",
      action: "Viewed Contact Section",
    });
  };
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
      onMouseEnter={handleMouseEnter}
    >
      <form
        method="POST"
        action="https://formspree.io/f/mlevqpbd"
        className="flex flex-col max-w-[400px] w-full text-gray-300"
      >
        <div className="pb-8 mt-[80px]">
          <p className="text-4xl font-bold inline border-b-4 border-red-600  text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            I'm always interested in hearing about new projects, so if you'd
            like to chat please get in touch.
          </p>
        </div>
        <input
          type="text"
          className="bg-[#ccd6f] p-2 text-black placeholder-slate-700"
          placeholder="Full Name"
          name="name"
        />
        <input
          className="my-4 p-2 text-black focus:outline-red-500 bg-[#ccd6f6] placeholder-slate-700"
          type="Your E-mail"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2 text-black focus:outline-red-500 placeholder-slate-700"
          name="message"
          rows="5"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-red-600 hover:border-red-600 px-4 py-3 my-8 mx-auto flex items-center">
          Get in touch!
        </button>
      </form>
    </div>
  );
};

export default Contact;
