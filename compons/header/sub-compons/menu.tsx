
"use client";
import { DarkThemeToggle, Navbar } from "flowbite-react";
import dynamic from "next/dynamic";
const ScrollLink = dynamic(() => import("react-scroll").then(mod => mod.Link), { ssr: false });
const Menu = () => {
  return ( 
    <Navbar rounded>
      <Navbar.Brand href="#" className="mr-3 h-6 sm:h-9">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          mustapha 
          <b className="absolute w-[10px] h-[10px] rounded-full bg-blue-500 shadow-shadow"></b>
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <ScrollLink className="dark:text-gray-400 hover:text-blue-500" to="Aboutme" smooth duration={1000}>
          About
        </ScrollLink>
        <ScrollLink className="dark:text-gray-400 hover:text-blue-500" to="Myskills" smooth duration={1000}>
          Myskills
        </ScrollLink>
        <ScrollLink className="dark:text-gray-400 hover:text-blue-500" to="Myprojects" smooth duration={1000}>
          Myprojects
        </ScrollLink>
        <ScrollLink className="dark:text-gray-400 hover:text-blue-500" to="Contact" smooth duration={1000}>
          Contact
        </ScrollLink>
      </Navbar.Collapse>
      <DarkThemeToggle />
    </Navbar>
  );
};

export default Menu;
