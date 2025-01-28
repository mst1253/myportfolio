"use client"
import { DarkThemeToggle, Navbar } from "flowbite-react";
import {Play} from '@next/font/google'
const roboto = Play({
    weight: ['400', '700'],
    subsets: ['latin'],
  });
const Menu = () => {
    return ( 
        <Navbar rounded>
        <Navbar.Brand  className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo">
          <span className="self-center whitespace-nowrap text-xl font-semibold
           dark:text-white" style={{fontFamily:roboto.style.fontFamily}}>
            mustapha <b 
            className="absolute w-[10px] h-[10px] rounded-full bg-blue-500 shadow-shadow">
            </b></span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse >
          <Navbar.Link  href="#">
            About
          </Navbar.Link>
          <Navbar.Link className="hover:text-blue-500" href="#">Myskills</Navbar.Link>
          <Navbar.Link href="#">Myprojects</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
        <DarkThemeToggle />
      </Navbar>
     )
}
 
export default Menu;