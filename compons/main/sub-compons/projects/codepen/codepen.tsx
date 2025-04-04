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
       src1="https://firebasestorage.googleapis.com/v0/b/history-app-462f7.appspot.com/o/images%2Fvideos%2FsnowBall.mp4?alt=media&token=41867997-f273-4f58-8f1a-dc6e2227baee"
       src2="https://firebasestorage.googleapis.com/v0/b/history-app-462f7.appspot.com/o/images%2Fvideos%2Feye.mp4?alt=media&token=9e9ffb20-a2ee-45f5-9250-b7a1e1f24cd0"
       src3="https://firebasestorage.googleapis.com/v0/b/history-app-462f7.appspot.com/o/images%2Fvideos%2Fillusion.mp4?alt=media&token=da2321da-e883-41e3-9381-ef779f9dfe5e"
       src4="https://firebasestorage.googleapis.com/v0/b/history-app-462f7.appspot.com/o/images%2Fvideos%2FchangeCoin.mp4?alt=media&token=b2111e9a-f768-46c9-b269-11ad6f72e810"
       />
     );
}
 
export default CodePen;