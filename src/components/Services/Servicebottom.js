import Servicedata from '@/data/Servicedata';
import React, { useState } from 'react'
import { DM_Sans } from "next/font/google";
import { motion } from "framer-motion";
import Showdatatwo from './Showdatatwo';

const DmSans = DM_Sans(
    {
      subsets:["latin"],
      weight: ["700","400"],
    }
  );


const Servicebottom = () => {
    const [active,setActive] = useState(0);

    const handleActive=(i)=>{
       setActive(i)
    }
  return (
   <>
   <div className='service-item'>
   <div className="row">
   <div className='col-lg-11'>
        <div className='row row-gap-4'>
          {
            Servicedata.map((item,i)=>(
                <>
                <motion.div whileHover={{scale:1.05}}
          transition={{
          type:'spring',
          stiffness:200,
        }}
        onClick={()=>handleActive(i)}
        >
                   <div className='service-box'>
                    <div className='service-icons'>
                    <span className={DmSans.className}>{item.icon}</span>
                    </div>
                      <div className='service-part'>
                      <h4 className={DmSans.className}>{item.heading}</h4>
                       <p className={DmSans.className}>{item.paragraph}</p>
                      </div>
                   </div>
                </motion.div>
                </>
            ))
          }
        </div>
     </div>
{/*     
      <div className='col-lg-5 ms-auto'>
        <div className='right-inner-service'>
        {
        active == 0 && <Showdatatwo title="I Run  Agency Smartly With
        My Team Member."
        para="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look." btn="Visit Now"/>
       }
        {
        active == 1 && <Showdatatwo title="Get So Many Awards In 6 years"
        para="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look." btn="Show Now"/>
       }
        {
        active == 2 && <Showdatatwo title="Get So Many Awards In 7 years"
        para="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look." btn="Check Now"/>
       }
        </div>
     </div>  */}

    
   </div>
  </div>
   </>
  )
}

export default Servicebottom;
