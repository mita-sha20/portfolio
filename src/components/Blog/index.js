"use client";
import React from 'react'
import { DM_Sans } from "next/font/google";
import Blogdata from '@/data/Blogdata';
import Slider from 'react-slick';
import Nextarrow from './Nextarrow';

const DmSans = DM_Sans(
    {
      subsets:["latin"],
      weight:"500",
    }
  );

const Blog = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow:<Nextarrow/> ,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
   <>
   <div className='container'>
    <div className='row'>
        <div className='col-lg-12'>
        <div className='blog'>
        <h1 className={DmSans.className}>Latest Blog</h1>
        <p className={DmSans.className}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised.</p>
      </div>
    </div>
      </div>
      <div>
        
        <Slider {...settings}>
        {
              Blogdata.map((item,i)=>(
                  <>
              
              <div key={i} className='blog-part'>
              
                  <div className='blog-one'>
                      <span>{item.image}</span>
                  </div>
                  <div className='blog-second'>
                      <span>{item.icon}</span>
                      <p>{item.date}</p>
                  </div>
                  <div className='blog-third'>
                      <p className={DmSans.className}>{item.para}</p>
                  </div>
                  <div className='blog-four'>
                      <h6 className={DmSans.className}>{item.text}</h6>
                  </div>
                  </div>
                 
                  </>
              ))
            }
        </Slider>
      </div>
      
                {/* {
              Blogdata.map((item,i)=>(
                  <>
              
              <div className='blog-part'>
              
                  <div className='blog-one'>
                      <span>{item.image}</span>
                  </div>
                  <div className='blog-second'>
                      <span>{item.icon}</span>
                      <p>{item.date}</p>
                  </div>
                  <div className='blog-third'>
                      <p className={DmSans.className}>{item.para}</p>
                  </div>
                  <div className='blog-four'>
                      <h6 className={DmSans.className}>{item.text}</h6>
                  </div>
                  </div>
                 
                  </>
              ))
            } */}
               
            
               
               </div>     
         
    
   </>
  )
}

export default Blog;
