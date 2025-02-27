import React, { useState } from 'react';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Sidebar from './components/Sidebar/Sidebar';
import LowerPart from './components/LowerPart/LowerPart';
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

        <div className='section section-content'>
          <div className='wrapper'>
            <main className='col col-9 col-wrapper left-side'>
              <Banner service={selectedService} />
              <LowerPart />
            </main>

            <aside className='col col-3 right-side'>
              <Sidebar onServiceSelect={handleServiceSelect} />
            </aside>

            <footer className='footer'>
            </footer>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Layout;