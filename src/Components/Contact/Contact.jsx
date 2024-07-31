import React from "react";
import ReactGA from "react-ga4";
import ContactForm from "./ContactForm";

const Contact = () => {
  const handleMouseEnter = () => {
    ReactGA.event({
      category: "Section View",
      action: "Viewed Contact Section",
    });
  };
  return (
    <section
      name="contact"
      className="w-full sm:pt-6 bg-primary-dark-blue flex flex-col items-center  justify-start md:flex-row gap-2 md:gap-8 md:items-start md:justify-center md:pr-12 lg:pr-[5%]"
      onMouseEnter={handleMouseEnter}
    >
      <div className="w-full md:w-1/2">
        <p className="text-4xl font-bold inline border-b-4 border-primary-dark-red  text-gray-300 ">
          Contact
        </p>
        <p className="text-gray-300 pt-4 md:pt-8 lg:pr-24">
          //  I would love to hear about your project and how I could help. Please fill in the form, and I will get back to you as soon as possible
        </p>
      </div>
      <div className="w-full md:w-1/2">
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
