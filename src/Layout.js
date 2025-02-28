import React, { useState } from 'react';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
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
      <Navbar />
      {/* 
      <Banner service={selectedService} />
      <Services onServiceSelect={handleServiceSelect} />
      <Contact />
      <Footer /> 
      */}
    </div>

  );
};

export default Layout;