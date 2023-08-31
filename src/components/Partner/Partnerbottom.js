import React from 'react'
import Partnerdata from "@/data/Partnerdata";
import { Jost } from "next/font/google";


const Jos = Jost(
    {
      subsets:["latin"],
     
    }
  );


const Partnerbottom = () => {
  return (
    <>

    <div className='row'>
        <div className='col-lg-12'>
           <div className='container'>
           <div className='part-main'>
           {
            Partnerdata.map((item,i)=>(
                <>
             
                <div key={i} className='part-item'>
                <span>{item.image}</span>
                <h5 className={Jos.className}>{item.title}</h5>
            
                </div>
               
             
         
                </>
            ))
        }
         </div>
           </div>
        </div>
    </div>
     
    </>
  )
}

export default Partnerbottom;
