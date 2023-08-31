import React from 'react';
import { DM_Sans } from "next/font/google";
import Partnerbottom from './Partnerbottom';

const DmSans = DM_Sans(
    {
      subsets:["latin"],
      weight:"500",
    }
  );


const Partner = () => {
  return (
   <>
  <div className='row'>
    <div className='col-lg-12'>
    <div className='partner'>
     <div className='partner-title'>
       <h3 className={DmSans.className}>Reputed Partners</h3>
     </div>
   <div>
    <Partnerbottom/>
   </div>
   </div>
    </div>
  </div>
   </>
  )
}

export default Partner;
