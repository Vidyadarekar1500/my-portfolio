import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black p-4 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center w-full">
          <form
            action="https://getform.io/f/anlqodpa"
            method="POST"
            className=" flex flex-col gap-3 w-full md:w-1/2"
          >
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded text-white focus:outline-none"
            />
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="p-2 bg-transparent border-2 rounded text-white focus:outline-none"
            />
            <textarea
              rows={5}
              name="message"
              placeholder="Enter your message"
              className="p-2 bg-transparent border-2 rounded text-white focus:outline-none"
            />
            <button
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-2 flex items-center justify-center text-center rounded-md hover:scale-105 duration-300 mx-auto"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
