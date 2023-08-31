"use client";
import Menudata from '@/data/Menudata';
import Logo from '@/svg/Logo';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { DM_Sans } from "next/font/google";
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

const DmSans = DM_Sans(
  {
    subsets:["latin"],
    weight:"500",
  }
)

const Menubar = () => {
const [showNavbar,setShownav] = useState(false);
const [showsidebar,setshowsidebar] = useState(false);

useEffect(()=>{
   const handleScroll = () => {
    if(window.scrollY > 80) {
        setShownav(true)
      } else {
        setShownav(false)
      }
   } 
   window.addEventListener('scroll' , handleScroll)
}, []);

  return (
    <>
  
    <Navbar expand="lg" className={showNavbar ? "navbar stickynav d-none d-lg-block" : "navbar py-3 d-none d-lg-block"}>
      <Container>
        <Link href="#">
          <Logo/>
          
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {
              Menudata?.map((menu,i)=>(
                <Link key={i} className={DmSans.className + " " + "mx-3"} href={menu.url}>{menu.title}</Link>
              ))
            }
            
           
          </Nav>
         
          <motion.button  whileHover={{
          scale: 1.1,
          transition: { duration: 0.5 },
          }}
          className={DmSans.className + " "}>Contact Now</motion.button>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className='mobile-menu d-lg-none py-4'>
      <div className='container'>
        <div className='d-flex justify-content-between'>
          <div>
            <Logo/>
          </div>
          <div className='bars-mobile' onClick={()=>setshowsidebar(true)}>
<FaBars size={30}/>
        </div>
       
        <motion.div className='sidebar' animate={{
          right : showsidebar ? 0 : '-100%', 
          transition:{
            duration:0.5,
          }
        //   opacity: showsidebar ? 1 : 0 ,
        // visibility: showsidebar ? 'visible' : 'hidden'
        }}>
        <div className='cross' onClick={()=>setshowsidebar(false)}>
          <ImCross/>
        </div>
     <ul>
     {
            Menudata?.map((menu,i)=>(
              <li key={i}>
<Link className={DmSans.className + " " + "mx-3"} href={menu.url}>{menu.title}</Link>
              </li>
            
            ))
          }
     </ul>
     <motion.button  whileHover={{
        scale: 1.1,
        transition: { duration: 0.5 },
        }}
        className={DmSans.className + " "}>Contact Now</motion.button>
      </motion.div>
       
        </div>
      </div>
    </div>
    </>
  )
}

export default Menubar;
