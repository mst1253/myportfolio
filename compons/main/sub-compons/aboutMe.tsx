'use client'
import Lottie from "lottie-react";
import data from '@/public/json/Animation - 1737565702728.json'
const AboutMe = () => {
    return ( 
        <div className="container grid gap-8 place-items-center">
             <h1 className="dark:text-white font-bold text-lg">About Me</h1>
            <div className="p-4 rounded-lg 
            border border-white sm:flex sm:justify-evenly grid place-items-center">
            <Lottie className="sm:w-1/4 w-1/2"  animationData={data} />
            <p className="text-center dark:text-white sm:w-1/2 text-black">
            Hi, I’m Mustapha from Morocco, a web developer with experience in front-end and some of the back-end 
            development. I’m passionate about learning new technologies and leveraging them 
            to build user-friendly applications. My goal is
            to continuously improve my skills to solve real-world problems, stay updated with the latest tools, 
            and one day create
            my own innovations to shape the future
            </p>
        </div>
        </div>
     );
}
 
export default AboutMe

