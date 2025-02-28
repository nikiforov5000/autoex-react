import React, { useState } from 'react';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Sidebar from './components/Sidebar/Sidebar';
import LowerPart from './components/LowerPart/LowerPart';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import servicesData from './data/services.json';
import middlewareWrapper from 'cors';


const Layout = () => {

  const [selectedService, setSelectedService] = useState(servicesData.services.audio);

  const handleServiceSelect = (serviceKey) => {
    const service = servicesData.services[serviceKey];
    if (service) {
      setSelectedService(service);
    }
  };

  return (
    <div className="main-wrap">
      <div id="page-wrapper">
        <header className='section section-navbar'>
          <Navbar />
        </header>
        <main className='section section-banner'>
          <Banner service={selectedService} />
          <Sidebar onServiceSelect={handleServiceSelect} />
        </main>
        <about className='section section-about'>
          <About />
        </about>
        <contact>
          <Contact />
        </contact>

        <footer className='section section-footer'>
          <Footer />
        </footer>

      </div>
    </div>

  );
};

export default Layout;