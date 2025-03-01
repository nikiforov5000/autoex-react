import React from 'react';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


const Layout = () => {



  return (
    <div className="main-wrap">
      <Navbar />
      <Banner />
      <Services />
      <Contact />
      <Footer />
    </div>

  );
};

export default Layout;