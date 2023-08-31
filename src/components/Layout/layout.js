import React from 'react';
import Footer from './footer/Footer';
import Menubar from './navbar/Menubar';

const Layout = ({children}) => {
  return (
    <>
    <Menubar/>
    {children}
    <Footer/>
    </>
  )
}

export default Layout;
