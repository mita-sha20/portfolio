"use client";
import React from 'react'
import { DM_Sans } from "next/font/google";
import { motion } from "framer-motion";
import Aboutbottom from './Aboutbottom';


const DmSans = DM_Sans(
    {
      subsets:["latin"],
      weight:"500",
    }
  );

 
    const Animation = {
     hidden:{
       y:-10,
       opacity:0,
     },
     visible:{
       y:0,
       opacity:1,
     }
   }


const About = () => {
  return (
   <>
   <motion.div initial="hidden" whileInView="visible" variants={Animation} transition={{staggerChildren:0.2,
  duration:0.4,
  ease:"easeInOut"}} viewport={{once:true}}
  className="about">
      <div className="container">
        <div className='row'>
            <div className='col-lg-6'>
               <div className='power'>
                 <h2 className={DmSans.className}>
                 Failure is The Power
                 that Gives <span>Success</span>   
                 </h2>
               </div>
            </div>
            <div className='col-lg-6'>
                <div className='right-power-content'>
                <p className={DmSans.className}>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised.
                </p>
                <motion.button className={DmSans.className} 
               whileHover={{scale:1.05}}
               transition={{
               type:'spring',
               stiffness:200,}} 
                >Download Now</motion.button>
                </div>
            </div>
        </div>
        <Aboutbottom/>
      </div>
   </motion.div>
   </>
  )
}

export default About;
