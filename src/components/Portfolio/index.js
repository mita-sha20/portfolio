"use client";
import Image from 'next/image';
import React from 'react'; 
import leftimage from '../../images/smith.png'
import { DM_Sans } from "next/font/google";
import portfoliodata from '@/data/Portfoliodata';
import { AiOutlineCheck } from 'react-icons/ai';
import { motion } from "framer-motion";
import { Open_Sans } from "next/font/google";
import Port from './Port';


const DmSans = DM_Sans(
  {
    subsets:["latin"],
    weight:"500",
  }
);

const OpenSans = Open_Sans({
    subsets:["latin"],
    weight:"500",
  }
);

const Portfolio = () => {
  return (
   <>
   <div className='portfolio'>
   <div className='container'>
    <div className='row align-items-center'>
      <div className='col-lg-6'>
        <div className='left-port'>
          <Image src={leftimage} alt="leftimage"/>
          <div className='experience'>
            <div className='ex-text'>
              <h4 className={DmSans.className}>5+</h4>
              <h5 className={DmSans.className}>Year</h5>
              <p className={DmSans.className}>Experience</p>
            </div>
          </div>
        </div>
      </div>
      <div className='col-lg-6'>
         <div className='right-port'>
           <h3>
           We <span>Run</span>   Agency<span> Smartly</span> With
           Our <span>Team</span>  Member.
           </h3>
           <p>
           There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look.
           </p>
           <ul>
            {
                portfoliodata.map((item,i)=>(
                    <li className={DmSans.className} key={i}>
                      <AiOutlineCheck/>
                      <span>{item.text}</span>
                    </li>
                ))
            }
           </ul>
           <motion.button whileHover={{scale:1.05}}
        transition={{
          type:'spring',
          stiffness:200,
        }}
        className={OpenSans.className}>
              Explore More
           </motion.button>
         </div>
         <div className='count'>
           <Port/>
         </div>
      </div>
    </div>
   </div>
   </div>
   </>
  )
}

export default Portfolio;
