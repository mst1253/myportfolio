import VideosCompon from "../videosCompon";
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa";
const CodePen = () => {
    return ( 
      <VideosCompon title='code pen'
       para1='snow ball animation'
       para2='eye animation'
       para3='illusion using css gradients'
       para4='simple app about changing coin from dollar or auro to maroccan dh'
       moreCompon={<Link href='https://codepen.io/Mst2' className="flex gap-1"><h2 className="text-blue-500">more </h2>
       <FaArrowRight className="my-1 text-blue-500"/></Link>}
       lk1='https://codepen.io/Mst2/pen/NWzRXNy'
       lk2='https://codepen.io/Mst2/pen/ZERpvOw'
       lk3='https://codepen.io/Mst2/pen/NWzRXOO'
       lk4='https://codepen.io/Mst2/pen/abjKeNx'
       src1="/videos/snowBall.mp4"
       src2="/videos/eye.mp4"
       src3="/videos/illusion.mp4"
       src4="/videos/changeCoin.mp4"
       />
     );
}
 
export default CodePen;