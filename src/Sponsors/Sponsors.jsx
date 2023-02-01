import React from 'react'
import "./Sponsors.css"
import SPONSER6 from "./SPONSER6.jpg"
import SPONSER9 from "./SPONSER9.jpg"
import SPONSER3 from "./SPONSER3.jpg"
import SPONSER4 from "./accidental-geek-logo.png"
import doritos from "./doritos.png"
import { useEffect } from 'react'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from "react-intersection-observer";
export default function Sponsors() {
   const { ref, inView } = useInView(
     {  threshold:0.2 }
   );
   const animation = useAnimation();
   const animation1 = useAnimation();
   useEffect(() => {
      
      if (inView) {
         animation.start({ y:0 , opacity:1 });
      }
      if (!inView) {
         animation.start({ y:100 , opacity:0 });
      }
      
   }, [inView]);
   return (
      <div className="main-section">
         <div>
            <motion.span initial={{ y: -200 }} animate={{ y: -2 }} className="heading"> CURRENT SPONSORS</motion.span>
            <div classname="section1">
               <hr className='main-hr'></hr>
               <motion.h3 className="first-heading">Associative Sponsors</motion.h3>
               <motion.div
                  animate={{ x: ['-300px', '0px'] }} className='image-container1'>
                  <img className="image2" src={SPONSER9} alt="first" />
                  <span className='image-name'>Associative Sponsor</span>
               </motion.div>
            </div>
         </div>
         {/* this is second type of sponsors */}
         <div className='main-section1'>
            <div className='dots'>
               <span className='dot'></span>
               <span className='dot'></span>
               <span className='dot'></span>
               <span className='dot'></span>
               <span className='dot'></span>
               <span className='dot'></span>
            </div>
            <motion.h3
               animate={{ x: 0, scale: 1 }} initial={{ x: -100, scale: 0 }}
               className="first-heading">Platform Sponsors</motion.h3>
            <div ref={ref} className='section2'>
               <div className='image-container2'>
                  <motion.img animate={animation} className="image2" src={SPONSER4} alt="first" />
                  <span className='image-name'>Platform Sponsor</span>
               </div>
               <div className='image-container2'>
                  <motion.img animate={animation} className="image2" src={SPONSER4} alt="first" />
                  <span className='image-name'>Platform Sponsor </span>
               </div>
               <div className='image-container2'>
                  <motion.img animate={animation} className="image2" src={SPONSER4} alt="first" />
                  <span className='image-name'>Platform Sponsor</span>
               </div>
            </div>
         </div>
         <div className='main-section1'>
            <div className='dots'>
               <span className='dot'></span>
               <span className='dot'></span>
               <span className='dot'></span>
               <span className='dot'></span>
               <span className='dot'></span>
               <span className='dot'></span>
            </div>
            <motion.h3 animate={{ x: 0, scale: 1 }} initial={{ x: -100, scale: 0 }} className="first-heading">Media Sponsors</motion.h3>
            <div className='image-container3'>
               <img className="image3" src={SPONSER6} alt="first" />
               <span className='image-name'>Media Sponsor</span>
            </div>
            <div className='main-section1'>
               <div className='dots'>
                  <span className='dot'></span>
                  <span className='dot'></span>
                  <span className='dot'></span>
                  <span className='dot'></span>
                  <span className='dot'></span>
                  <span className='dot'></span>
               </div>
               <motion.h3 animate={{ x: 0, scale: 1 }} initial={{ x: -100, scale: 0 }} className="first-heading">Gifting Sponsors</motion.h3>
               <div  className='section2'>
                  <div className='image-container2'>
                     <motion.img  className="image2" src={doritos} alt="first" />
                     <span className='image-name'>Gifting Sponsor</span>
                  </div>
                  <div className='image-container2'>
                     <motion.img  className="image2" src={SPONSER4} alt="first" />
                     <span className='image-name'>Gifting Sponsor </span>
                  </div>
                  <div className='image-container2'>
                     <motion.img  className="image4" src={SPONSER3} alt="first" />
                     <span className='image-name'>Gifting Sponsor</span>
                  </div>
               </div>
            </div>
         </div>
      </div>

   )
}
