import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
const SocialBar = () => {
  const socialBars = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} className="text-blue-600" />
        </>
      ),
      href: "https://www.linkedin.com/in/vidya-darekar-002495195/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} className="text-gray-600" />
        </>
      ),
      href: "https://github.com/Vidyadarekar1500",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} className="text-red-600" />
        </>
      ),
      href: "mailto: darekarvidya1500@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} className="text-gray-600" />
        </>
      ),
      href: "https://drive.google.com/file/d/1gcRlKtL76_HhudTiaZjEMsdDcs6SubGS/view?usp=sharing",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {socialBars.map(({ id, child, href, style, download }) => {
          return (
            <li
              key={id}
              className={`flex justify-between items-center h-14 px-4 w-40 ml-[-100px] transition-all duration-500 ease-in-out hover:ml-[-10px] hover:border-l-0 hover:rounded-md bg-gray-500 ${style}`}
            >
              <a
                href={href}
                className="flex justify-between items-center w-full text-white"
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                {child}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialBar;
