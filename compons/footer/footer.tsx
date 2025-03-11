
import { Button, Card ,TextInput,Textarea} from "flowbite-react";
import { MdOutlineMail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaCodepen } from "react-icons/fa";
import Link from "next/link";
export default function Footer(){
    return (  
       <div id="Contact" className="container grid gap-10 place-items-center p-4">
        <div className="flex">
            <div className="container contact">
                <Card className="shadow hover:shadow-blue-500">
                    
                        <TextInput  type="email" id="email" name="email" required className="p-2" placeholder="Enter your email"/>
                        <Textarea className="p-2" placeholder="Enter your message"  id="message" name="message" required/>
                      <Button type="submit">send</Button>
                      <div className="grid gap-2">
                       <span className="text-blue-500 flex gap-2">
                        <FaSquarePhone className="text-black dark:text-white"/> 
                          +212 0656975656</span>
                         <span className="text-blue-500 flex gap-2">
                        <MdOutlineMail  className="text-black dark:text-white"/> 
                        nzero8198@gmail.com</span>
            </div>
                    
                </Card>
            </div>
        </div>
        <div className="flex gap-8 justify-center">
         <Link href="https://www.linkedin.com/in/mustapha-el-hinte-73324a256/"><FaLinkedin  className="dark:text-white hover:text-blue-500" size={30}/></Link>
         <Link href="https://github.com/mst1253"><FaGithub className="hover:text-blue-500 dark:text-white " size={30}/></Link>
         <Link href="https://codepen.io/Mst2"><FaCodepen  className="dark:text-white hover:text-blue-500" size={30}/></Link>
        </div>
       </div>
    );
}
//<form action="https://formspree.io/f/myzegprz" method="POST" className="grid gap-6">
