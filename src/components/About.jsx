import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full bg-gradient-to-b from-gray-800 via-gray to-black text-white p-5"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <div>
          <p>Hello! I'm Vidya Darekar, a Frontend Developer based in India.</p>
          <p className="mt-2">
            I have 4 years of experience building responsive and scalable web
            apps using ReactJS, TypeScript, JavaScript, HTML, and CSS, Redux.
            Proficient in creating reusable components, integrating APIs, and
            writing clean, maintainable code. Strong focus on performance,
            accessibility, and modern development best practices.
          </p>
          <p>My current development toolkit includes:</p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default About;
