import React from "react";
import html from "../assets/html.jpg";
import css from "../assets/css_sass.svg";
import javascript from "../assets/javascriptES.jpeg";
import react from "../assets/reactjs.png";
import typescript from "../assets/typescript.jpeg";
import storybook from "../assets/storybook.png";
import tailwind from "../assets/tailwind.png";
import github from "../assets/github.png";

const Skills = () => {
    const skillsData = [
        {
            name: "HTML",
            src: html,
            style: "shadow-orange-400",
        },
        {
            name: "CSS/SASS",
            src: css,
            style: "shadow-blue-400",
        },
        {
            name: "JavaScript",
            src: javascript,
            style: "shadow-yellow-400",
        },
        {
            name: "React",
            src: react,
            style: "shadow-blue-400",
        },
        {
            name: "TypeScript",
            src: typescript,
            style: "shadow-blue-400",
        },
        {
            name: "Tailwind CSS",
            src: tailwind,
            style: "shadow-sky-400",
        },
        {
            name: "GitHub",
            src: github,
            style: "shadow-gray-400",
        },
        {
            name: "Storybook",
            src: storybook,
            style: "shadow-pink-400",
        },
    ]
  return (
    <div
      name="skills"
      className="w-full md:h-screen bg-gradient-to-b from-gray-800  to-black text-white p-4"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with : </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 px-12 sm:px-0 text-center">
            {skillsData.map(({name, src, style}) => {
                return (
                    <div key={name} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                        <img src={src} alt={name} className="w-20 mx-auto h-20" />
                        <p className="mt-4 p-2">{name}</p>
                    </div>
                )
            })
            }
            <div>
                
            </div>
        </div>
        
      </div>
    </div>
  );
};

export default Skills;
