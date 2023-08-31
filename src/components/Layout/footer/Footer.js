"use client";
import Logo from '@/svg/Logo';
import React from 'react';
import { Open_Sans } from "next/font/google";
import Link from 'next/link';
import { DM_Sans } from "next/font/google";
import { BsSend } from 'react-icons/bs';
import Facebook from '@/svg/Facebook';
import Instagram from '@/svg/Instagram';
import Twitter from '@/svg/Twitter';
import Pin from '@/svg/Pin';
import { motion } from "framer-motion";
import { resourceData, serviceData } from '@/components/Footerdata';
import Copyright from './Copyright';


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

const Footer = () => {
  return (
   <>
   <div className="footer">
     <div className="container">
       <div className="row">
       <div className="col-lg-3 col-md-6">
        <div className="footer-content">
        <Logo/>
         <p className={OpenSans.className}>
         There are many variations of passages of available, but the majority have suffered.
         </p>
        </div>
       </div>

       <div className="col-lg-3 col-md-6">
        <div className="footer-content-list">
          <h4 className={DmSans.className}>Service</h4>
          {
            serviceData.map((data,i) => (
              <Link key={i} href={data.link} className={DmSans.className}>{data.title}</Link>
            ))
          }
        </div>
       </div>

       <div className="col-lg-3 col-md-6">
        <div className="footer-content-list">
          <h4 className={DmSans.className}>Resources</h4>
          {
            resourceData.map((data,i) => (
              <Link key={i} href={data.link} className={DmSans.className}>{data.title}</Link>
            ))
          }
        </div>
       </div>

       <div className="col-lg-3 col-md-6">
        <div className="footer-content-subscribe">
          <h4 className={DmSans.className}>Newsletter</h4>
          <p> 
          Subscribe for our upcoming latest 
          address and resources
          </p>
          <div className="newsletter-form d-flex align-items-center justify-content-between">
            <input className={DmSans.className} type="email" placeholder="email"/>
            <button>
              <BsSend/>
            </button>
          </div>
          <div className="social-icons d-flex gap-2 mt-4">
             <motion.div initial = {{opacity:1}}  whileHover={{
    scale: 1.2,
    transition: { duration: 0.5 },
             }}
             className="icons-shape">
                <Facebook/>
             </motion.div>
             <motion.div initial = {{opacity:1}}  whileHover={{
    scale: 1.2,
    transition: { duration: 0.5 },
             }}
             className="icons-shape">
                <Instagram/>
             </motion.div>
             <motion.div initial = {{opacity:1}}  whileHover={{
    scale: 1.2,
    transition: { duration: 0.5 },
             }}
             className="icons-shape">
                <Twitter/>
             </motion.div>
             <motion.div initial = {{opacity:1}}  whileHover={{
    scale: 1.2,
    transition: { duration: 0.5 },
             }}
             className="icons-shape">
                 <Pin/>
             </motion.div>
          </div>
        </div>
       </div>
       </div>
     </div>
   </div>
   <Copyright/>
   </>
  )
}

export default Footer;
