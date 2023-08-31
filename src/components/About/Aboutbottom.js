import Aboutdata from '@/data/Aboutdata';
import React, { useState } from 'react';
import { DM_Sans } from "next/font/google";
import { motion } from "framer-motion";
import Showdata from './Showdata';

const DmSans = DM_Sans(
    {
      subsets:["latin"],
      weight: ["700","400"],
    }
  );



const Aboutbottom = () => {

    const [active,setActive] = useState(0);

    const handleActive=(i)=>{
       setActive(i)
    }
  return (
   <>
  <div className='about-item'>
  <div className="row">
     <div className='col-lg-6'>
        <div className='row row-gap-4'>
          {
            Aboutdata.map((item,i)=>(
                <>
                <motion.div className='col-lg-6' whileHover={{scale:1.05}}
          transition={{
          type:'spring',
          stiffness:200,
        }}
        onClick={()=>handleActive(i)}
        >
                   <div className='about-box'>
                       <h4 className={DmSans.className}>{item.heading}</h4>
                       <p className={DmSans.className}>{item.paragraph}</p>
                   </div>
                </motion.div>
                </>
            ))
          }
        </div>
     </div>
     <div className='col-lg-5 ms-auto'>
        <div className='right-inner-about'>
        {
        active == 0 && <Showdata title="Get So Many Awards In 5 years"
        para="There are many variations of passages of Lorem Ipsum available, but the majority." btn="Visit Now"/>
       }
        {
        active == 1 && <Showdata title="Get So Many Awards In 6 years"
        para="There are many variations of passages of Lorem Ipsum available, but the majority." btn="Show Now"/>
       }
        {
        active == 2 && <Showdata title="Get So Many Awards In 7 years"
        para="There are many variations of passages of Lorem Ipsum available, but the majority." btn="Check Now"/>
       }
        {
        active == 3 && <Showdata title="Get So Many Awards In 8 years"
        para="There are many variations of passages of Lorem Ipsum available, but the majority." btn="Click Now"/>
       }
        </div>
     </div>
   </div>
  </div>
   </>
  )
}

export default Aboutbottom;
