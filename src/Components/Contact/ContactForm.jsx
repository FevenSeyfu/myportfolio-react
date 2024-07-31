import React from "react";

const ContactForm = () => {
  return (
    <form
      method="POST"
      action="https://formspree.io/f/mlevqpbd"
      className="flex flex-col gap-2 items-center text-white placeholder:opacity-70"
    >
      <input
        type="text"
        className="bg-primary-dark-blue p-2 border-b-2 focus:border-b-3 border-gray-400 focus:border-primary-dark-red outline-none w-full"
        placeholder="Full Name"
        name="name"
      />
      <input
        className="bg-primary-dark-blue p-2 border-b-2 focus:border-b-3 border-gray-400 focus:border-primary-dark-red outline-none w-full"
        type="Your E-mail"
        placeholder="Email"
        name="email"
      />
      <textarea
        className="bg-primary-dark-blue p-2 border-b-2 focus:border-b-3 border-gray-400 focus:border-primary-dark-red outline-none w-full"
        name="message"
        rows="5"
        placeholder="Message"
      ></textarea>
      <button className="text-white font-bold rounded-lg border-2 hover:bg-primary-dark-red hover:border-primary-dark-red px-4 py-3 my-8 outline-primary-dark-red ">
        Let's Collaborate!
      </button>
    </form>
  );
};

export default ContactForm;
