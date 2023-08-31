import React from 'react';
import { DM_Sans } from "next/font/google";
import { Open_Sans } from "next/font/google";
import { AiOutlineArrowRight } from 'react-icons/ai';

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

const Subscribe = () => {
  return (
    <>
    <div className='container'>
       <div className='main-part'>
       <div className='row'>
            <div className='col-lg-12'>
               <div className='row'>
                <div className='col-lg-7'>
                <div className='left-side'>
                <h2 className={DmSans.className}>Subscirbe to Our Newsletter</h2>
                  <p className={OpenSans.className}>There are many variations of passages of Lorem Ipsum available, but the majority.</p>
                </div>
                </div>
                <div className='col-lg-5'>
                   <div className='form'>
                   <input className={DmSans.className} type="email" placeholder="email"/>
                   <button>
                   <AiOutlineArrowRight/>
                   </button>
                   </div>
                </div>
               </div>
            </div>
        </div>
       </div>
    </div>
    
    </>
  )
}

export default Subscribe;
