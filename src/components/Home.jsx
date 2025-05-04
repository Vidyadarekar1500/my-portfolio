import React from "react";
import Profile from "../assets/profile.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {Link} from "react-scroll";
const Home = () => {
  return (
    <>
      <div
        name="home"
        className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800"
      >
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-4xl sm:text-7xl font-bold text-white">
              I'm a Frontend Developer{" "}
            </h2>
            <p className="text-gray-500 py-4 max-w-md">
            I'm a Frontend Developer focused on building fast, accessible, and responsive web applications using modern technologies like React and TypeScript.
            </p>
            <div className="flex flex-row gap-4">
              <Link to="portfolio" smooth={true} duration={500} className="group text-white group rounded-md px-6 py-3 my-2 flex items-center bg-gradient-to-r from-cyan-500 to-blue-500">
                Portfolio
                <span className="group-hover:rotate-90 duration-500 ml-1">
                  <MdOutlineKeyboardArrowRight size={25} />
                </span>
              </Link>
            </div>
          </div>
          <div>
            <img
              src={Profile}
              alt="profile"
              className="rounded-2xl mx-auto w-2/3 md:w-full"
            />
            <br/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
