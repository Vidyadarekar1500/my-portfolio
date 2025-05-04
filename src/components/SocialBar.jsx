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
            icon: <FaLinkedin size={20} className="text-blue-600" />,
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
            icon: <FaGithub size={20} className="text-gray-600" />,
            href: "https://github.com/Vidyadarekar1500",
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30} className="text-red-600" />
                </>
            ),
            icon: <HiOutlineMail size={20} className="text-red-600" />,
            href: "mailto:darekarvidya1500@gmail.com",
        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} className="text-gray-600" />
                </>
            ),
            icon: <BsFillPersonLinesFill size={20} className="text-gray-600" />,
            href: "https://drive.google.com/file/d/1gcRlKtL76_HhudTiaZjEMsdDcs6SubGS/view?usp=sharing",
            style: "rounded-br-md",
            download: true,
        },
    ];

    return (
        <>
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
                                    target={id !== 3 ? "_blank" : undefined}
                                    rel="noreferrer"
                                >
                                    {child}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="lg:hidden bottom-0 left-0 w-full bg-gray-950 flex justify-center gap-8 items-center h-16">
                {socialBars.map(({ id, icon, href, download }) => {
                    return (
                        <a
                            key={id}
                            href={href}
                            className="flex flex-col items-center text-white"
                            download={download}
                            target={id !== 3 ? "_blank" : undefined}
                            rel="noreferrer"
                        >
                            {icon}
                        </a>
                    );
                })}
            </div>
            <div>
                <div className="w-full h-16 bg-black bottom-0 left-0 flex justify-center items-center text-gray-400 font-bold">
                    <p>Coded & Created by Vidya Darekar </p>
                </div>
            </div>
        </>
    );
};

export default SocialBar;
