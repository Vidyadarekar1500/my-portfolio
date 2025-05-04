import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { navItems } from "./utils";
import { Link } from "react-scroll";
const Navbar = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);

  return (
    <div className="flex justify-between items-center text-white fixed bg-black w-full h-20 px-4">
      <div>
        <h1 className="text-5xl ml-2 font-great-vibes">Vidya</h1>
      </div>
      <ul className="hidden md:flex">
        {navItems.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize text-gray-500 hover:scale-110 duration-700"
          >
            <Link to={link} smooth={true} duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div className="md:hidden">
        <div
          className="cursor-pointer pr-4 z-10 text-gray-500 hover:text-white"
          onClick={() => setIsOpenNav(!isOpenNav)}
        >
          {isOpenNav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {isOpenNav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 z-[-1]">
            {navItems.map(({ id, link }) => (
              <li
                key={id}
                className="text-4xl cursor-pointer px-4 py-6 capitalize hover:text-white"
              >
                <Link
                  onClick={() => setIsOpenNav(!isOpenNav)}
                  to={link}
                  smooth={true}
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
