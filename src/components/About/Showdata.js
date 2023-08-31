import React from 'react'
import { motion } from "framer-motion";
import { DM_Sans } from "next/font/google";


const DmSans = DM_Sans(
    {
      subsets:["latin"],
      weight: ["700","400"],
    }
  );


const Showdata = ({ title, para, btn}) => {
  return (
    <>
    
<motion.div initial={{
    x:200,
}} 
animate={{
    x:0,
}}
transition={{
    duration:0.4,
    ease:"easeInOut",
    staggerChildren:0.4,
}}
className='showdata'>
<h3 className={DmSans.className}>{title}</h3>
      <p className={DmSans.className}>{para}</p>
      <motion.button className={DmSans.className} whileHover={{scale:1.05}}
        transition={{
        type:'spring',
        stiffness:200,
      }}
        >{btn}</motion.button>
</motion.div>
     
    </>
  )
}

export default Showdata;
