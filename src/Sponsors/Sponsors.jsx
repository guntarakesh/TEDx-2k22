import React from 'react'
import  "./Sponsors.css"
import   SPONSER6 from "./SPONSER6.jpg"
import SPONSER9 from "./SPONSER9.jpg"
import SPONSER3 from "./SPONSER3.jpg"
import SPONSER4 from "./accidental-geek-logo.png"
import doritos from "./doritos.png"
export default function Sponsors() {
  return (
    <div className="main-section">
   <div>
    <span className="heading"> CURRENT SPONSORS</span>
    <div classname="section1">
    <hr className='main-hr'></hr>
    <h3 className="first-heading">ASSOCIATE SPONSORS</h3>
    <div className='image-container1'>
   
 <img  className="image2" src={SPONSER9} alt="first" />
 <span className='image-name'>ASSOCIATE SPONSOR</span>
</div>
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
   <h3 className="first-heading">PLATFORM SPONSORS</h3>
<div className='section2'>
<div className='image-container2'>
 <img  className="image2" src={SPONSER4} alt="first" />
 <span className='image-name'>PLATFORM SPONSOR</span>
</div>
<div className='image-container2'>
 <img  className="image2" src={SPONSER4} alt="first" />
 <span className='image-name'>PLATFORM SPONSOR </span>
</div>
<div className='image-container2'>
 <img  className="image2" src={SPONSER4} alt="first" />
 <span className='image-name'>PLATFORM SPONSOR</span>
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
   <h3 className="first-heading">MEDIA SPONSORS</h3>
   <div className='image-container1'>
 <img  className="image3" src={SPONSER6} alt="first"/>
 <span className='image-name'>MEDIA SPONSOR</span>
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
   <h3 className="first-heading">GIFTING SPONSORS</h3>
<div className='section2'>
<div className='image-container2'>
 <img  className="image2" src={doritos} alt="first" />
 <span className='image-name'>PLATFORM SPONSOR</span>
</div>
<div className='image-container2'>
 <img  className="image2" src={SPONSER4} alt="first" />
 <span className='image-name'>PLATFORM SPONSOR </span>
</div>
<div className='image-container2'>
 <img  className="image4" src={SPONSER3} alt="first" />
 <span className='image-name'>PLATFORM SPONSOR</span>
</div>
    </div>
    </div>
</div>
</div>

  )
}
