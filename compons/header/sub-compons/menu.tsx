'use client'
import { DarkThemeToggle, Navbar } from "flowbite-react";
import { Link } from "react-scroll";

const Menu = () => {
    return ( 
        <Navbar rounded>
        <Navbar.Brand  className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo">
          <span className="self-center whitespace-nowrap text-xl font-semibold
           dark:text-white">
            mustapha <b 
            className="absolute w-[10px] h-[10px] rounded-full bg-blue-500 shadow-shadow">
            </b></span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
         <Link className="dark:text-gray-400 hover:text-blue-500" to="Aboutme" smooth={true} duration={1000}>About</Link>
          <Link className="dark:text-gray-400 hover:text-blue-500" to="Myskills" smooth={true} duration={1000}>
          Myskills</Link>
          <Link className=" dark:text-gray-400 hover:text-blue-500" to="Myprojects" smooth={true} duration={1000}>
          Myprojects</Link>
          <Link className="dark:text-gray-400 hover:text-blue-500" to="Contact" smooth={true} duration={1000}>
          Contact</Link>
        </Navbar.Collapse>
        <DarkThemeToggle />
      </Navbar>
     )
}
 
export default Menu;