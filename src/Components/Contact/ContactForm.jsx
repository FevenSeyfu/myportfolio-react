import React, { useState } from "react";
import ErrorMessage from "../Utility/ErrorMessage";

const ContactForm = () => {
  const initialState = {
    name: { value: '', touched: false, error: '' },
    email: { value: '', touched: false, error: '' },
    message: { value: '', touched: false, error: '' },
  };
  const [formData, setFormData] = useState(initialState);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let error = "";

    if (name === "email" && !validateEmail(value)) {
      error = "Invalid email format";
    } else if (name === "message" && value.length < 25) {
      error = "Message must be at least 25 chars";
    } else if (value.trim() === "") {
      error = "This field is required";
    }

    setFormData({
      ...formData,
      [name]: { ...formData[name], value, error }
    });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setFormData({
      ...formData,
      [name]: { ...formData[name], touched: true }
    });
  };

  const handleFocus = (e) => {
    const { name } = e.target;
    setFormData({
      ...formData,
      [name]: { ...formData[name], touched: false }
    });
  };

  const isFormValid = () => {
    return (
      formData.name.value.trim() !== "" &&
      validateEmail(formData.email.value) &&
      formData.message.value.length >= 25 &&
      !formData.name.error &&
      !formData.email.error &&
      !formData.message.error
    );
  };

  return (
    <form
      method="POST"
      action="https://formspree.io/f/mlevqpbd"
      className="w-full flex flex-col gap-4 items-start text-white placeholder:opacity-70"
    >
      <div className="w-full">
        <input
          type="text"
          className={`bg-primary-dark-blue p-2  pl-4  border-b-2 ${
            formData.name.error && formData.name.touched ? "border-red-500" : "border-gray-400"
          } focus:border-b-3 focus:border-primary-dark-red outline-none w-full`}
          placeholder="Full Name"
          name="name"
          value={formData.name.value}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
        {formData.name.error && formData.name.touched && <ErrorMessage message={formData.name.error} />}
      </div>
      <div className="w-full">
        <input
          className={`bg-primary-dark-blue p-2  pl-4  border-b-2 ${
            formData.email.error && formData.email.touched ? "border-red-500" : "border-gray-400"
          } focus:border-b-3 focus:border-primary-dark-red outline-none w-full`}
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email.value}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
        {formData.email.error && formData.email.touched && <ErrorMessage message={formData.email.error} />}
      </div>
      <div className="w-full">
        <textarea
          className={`bg-primary-dark-blue p-2  pl-4  border-b-2 ${
            formData.message.error && formData.message.touched ? "border-red-500" : "border-gray-400"
          } focus:border-b-3 focus:border-primary-dark-red outline-none w-full`}
          name="message"
          rows="5"
          placeholder="Message"
          value={formData.message.value}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
        ></textarea>
        {formData.message.error && formData.message.touched && <ErrorMessage message={formData.message.error} />}
      </div>
      <button
        className="text-white font-bold rounded-lg border-2 hover:bg-primary-dark-red hover:border-primary-dark-red px-4 py-3 mb-6 md:mb-8 outline-primary-dark-red disabled:cursor-not-allowed disabled:bg-gray-700 disabled:border-gray-800"
        disabled={!isFormValid()}
      >
        Let's Collaborate!
      </button>
    </form>
  );
};

export default ContactForm;