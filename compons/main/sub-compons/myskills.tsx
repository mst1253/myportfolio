import Image from "next/image";
import "@/app/globals.css";
const Myskills = () => {
    return ( 
        <div id="Myskills" className="container p-4 grid place-items-center gap-16">
            <h1 className="dark:text-white font-bold text-lg">My Skills</h1>
            <div className="container grid place-items-center">
            <div className="container box py-4  flex items-center justify-center relative h-[400px]">
             <span  className='circle dark:text-gray-300 rounded-full'style={{'--i':1} as React.CSSProperties} data-text='Html5'>
               <Image src="/images/html-5.png" className="rounded-full" width={50} height={50}  alt="html5 image" />
             </span>
             <span  className='circle dark:text-gray-300 rounded-full'style={{'--i':2} as React.CSSProperties} data-text='Css3'>
               <Image src="/images/css-3.png" className="rounded-full" width={50} height={50}  alt="css3 image" />
             </span>
             <span  className='circle dark:text-gray-300 rounded-full'style={{'--i':3} as React.CSSProperties} data-text='Javascript'>
               <Image src="/images/js.png" className="rounded-full" width={50} height={50}  alt="javascript image" />
             </span>
              <span   className='circle dark:text-gray-300 rounded-full'style={{'--i':4} as React.CSSProperties} data-text='React Js'>
               <Image src="/images/react.png" className="rounded-full" width={50} height={50}  alt="react image"  />
              </span>
              <span   className='circle dark:text-gray-300 rounded-full'style={{'--i':5} as React.CSSProperties} data-text='Next Js'>
               <Image src="/images/next.js.png" className="rounded-full" width={50} height={50}  alt="nextjs image"  />
              </span>
              <span  className='circle dark:text-gray-300 rounded-full'style={{'--i':6} as React.CSSProperties} data-text='Express Js'>
                <Image src="/images/express-js.png" className="rounded-full" width={50} height={50}  alt="expressjs image" />
              </span>
              <span  className='circle dark:text-gray-300 rounded-full'style={{'--i':7} as React.CSSProperties} data-text='Firebase'>
              <Image src="/images/firebase.png" className="rounded-full" width={50} height={50}  alt="firebase image" />
              </span>
              <span  className='circle dark:text-gray-300 rounded-full'style={{'--i':8} as React.CSSProperties} data-text='Git'>
                 <Image src="/images/Git.png" className="rounded-full" width={50} height={50}  alt="git image" />
              </span>
              <span  className='circle dark:text-gray-300 rounded-full'style={{'--i':9} as React.CSSProperties} data-text='Typescript'>
                 <Image src="/images/Typescript.png" className="rounded-full" width={50} height={50}  alt="typescript image" />
               </span>
               <span  className='circle dark:text-gray-300 rounded-full'style={{'--i':10} as React.CSSProperties} data-text='Api'>
                 <Image src="/images/api.png" className="rounded-full" width={50} height={50}  alt="api image" />
                </span>
                <span  className='circle dark:text-gray-300 rounded-full'style={{'--i':11} as React.CSSProperties} data-text='React query'>
                 <Image src="/images/reactQuery.png" className="rounded-full" width={50} height={50}  alt="react query image" />
                </span>
                <span  className='circle dark:text-gray-300 rounded-full'style={{'--i':12} as React.CSSProperties} data-text='Bootstrap'>
                 <Image src="/images/Bootstrap.png" className="rounded-full" width={50} height={50}  alt="Bootsrap image" />
                </span>
                <span  className='circle dark:text-gray-300 rounded-full'style={{'--i':13} as React.CSSProperties} data-text='Tailwind Css'>
                 <Image src="/images/tailwind CSS.png" className="rounded-full" width={50} height={50}  alt="api image" />
                </span>
            </div>
            </div>
        </div>
     );
}
export default Myskills