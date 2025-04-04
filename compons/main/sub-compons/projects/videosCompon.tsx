'use client'
import { Card } from "flowbite-react"
import Link from "next/link"
import Image from "next/image";
interface Props  {
  title: string;
  para1:string;
  para2:string;
  para3:string;
  para4:string;
  moreCompon?:React.ReactNode
  lk1:string;
  lk2:string;
  lk3:string;
  lk4:string;
  src1:string;
  src2:string;
  src3:string;
  src4:string;
  imgArr1?:[string,string,string]
  imgArr2?:[string,string,string,string,string]
  imgArr3?:[string,string,string,string,string]
};

const VideosCompon:React.FC<Props>=({title,para1,para2,para3,para4,
  moreCompon,lk1,lk2,lk3,lk4,
 src1,src2,src3,src4,imgArr1,imgArr2,imgArr3
})=>{
   return(
    <div className="container grid gap-4 place-items-center">
        <h1 className="dark:text-white font-bold text-md mx-44">{title}</h1>
        <div className="container grid lg:grid-cols-4 sm:grid-cols-2 gap-2 place-items-center">
         <Card className="border-md hover:border-blue-500 shadow-sm hover:shadow-white">
         <Link  className="grid place-items-center text-sm gap-4" href={lk1}>
         <video className="rounded-md" autoPlay muted loop width="300">
          <source src={src1}  type="video/mp4" />
           Your browser does not support the video tag.
         </video>
         <p className="dark:text-gray-300 text-center">{para1}</p></Link>
         <div  className="container flex gap-2 justify-center">
           {imgArr1?.map((img,inx)=>(
            <Image  key={inx} className="rounded-full" src={img} alt="tool image" width={30} height={30}/> 
            ))}
          </div>
         </Card>
         <Card className="border-md hover:border-blue-500 shadow-sm hover:shadow-white">
          <Link className="grid place-items-center text-sm gap-4" href={lk2}>
         <video className="rounded-md" autoPlay loop muted width="300">
          <source  src={src2} type="video/mp4" />
          Your browser does not support the video tag.
         </video>
         <p className="dark:text-gray-300 text-center">{para2}</p></Link>
         <div  className="container flex gap-2 justify-center">
           {imgArr1?.map((img,inx)=>(
            <Image  key={inx} className="rounded-full" src={img} alt="tool image" width={30} height={30}/> 
            ))}
          </div>
         </Card>
         <Card className="border-md hover:border-blue-500 shadow-sm hover:shadow-white">
           <Link  className="grid place-items-center text-sm gap-4" href={lk3}>
         <video className="rounded-md"  autoPlay loop muted width="300">
          <source src={src3} type="video/mp4" />
           Your browser does not support the video tag.
         </video>
         <p className="dark:text-gray-300 text-center">{para3}</p></Link>
         <div className="container flex gap-2 justify-center">
           {imgArr2?.map((img,inx)=>(
            <Image  key={inx} className="rounded-full" src={img} alt="tool image" width={30} height={30}/> 
            ))}
          </div>
         </Card>
         <Card className="border-md hover:border-blue-500 shadow-sm hover:shadow-white">
          <Link className="grid place-items-center text-sm gap-4" href={lk4}>
         <video className="rounded-md"  autoPlay muted loop width="300">
          <source src={src4} type="video/mp4" />
           Your browser does not support the video tag.
         </video>
         <p className="dark:text-gray-300 text-center text-sm">{para4}</p></Link>
         <div className="container flex gap-2 justify-center">
           {imgArr3?.map((img,inx)=>(
            <Image  key={inx} className="rounded-full" src={img} alt="tool image" width={30} height={30}/> 
            ))}
          </div>
         </Card>
        </div>
       {moreCompon}
    </div>
   )
}
export default VideosCompon