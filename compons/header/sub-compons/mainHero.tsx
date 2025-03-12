'use client'
import Image from "next/image";
const MainHero = () => {
    return ( 
        <section className="container flex justify-evenly" >
         <div className="flex justify-evenly gap-4  max-w-screen-xl px-4 py-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="mb-4 text-md font-extrabold  tracking-tight leading-none md:text-3xl xl:text-1xl dark:text-white">
               Hi,i&apos;m Mustapha El Hinte</h1>
             <h2 className="text-blue-500 text-lg p-1">web developer</h2>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            i&apos;m a web developer specializing in creating responsive, user-friendly websites 
            and applications.</p>
        </div> 
         </div>  
          <div className="grid place-items-center">
          <Image src='/images/imageProfile.png' className='absolute w-[250px] h-[250px] rounded-full'
           width={500} height={500} alt='image profile'/>
          <span className="w-[280px] h-[280px] rounded-full animate-bounceCustome shadow-shadow'" 
          style={{border:'2px dotted rgb(59, 130, 246)'}}>
          </span>
          </div>
     </section>
     );
}
export default MainHero