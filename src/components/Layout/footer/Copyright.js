import Btnfooter from '@/data/Copyrightdata';
import Link from 'next/link';
import React from 'react';
import { Open_Sans } from "next/font/google";

const OpenSans = Open_Sans({
    subsets:["latin"],
    weight:"500",
  }
);

const Copyright = () => {
  return (
    <>
    <div className="copyright-part">
       <div className="container">
          <div className="row">
             <div className="col-lg-8 mx-auto">
             <div className="copyright-lists">
             <ul className="d-flex justify-content-center gap-4">
                {
                   Btnfooter.map((item,i)=>(
                    <li>
                        <Link href={item.link}className={OpenSans.className} key={i}>{item.title}</Link>
                    </li>
                   ))
                }
              </ul>
             </div>
             </div>
          </div>
       </div>
    </div>
    </>
  )
}

export default Copyright;
