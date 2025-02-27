import React, { useState } from 'react';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Sidebar from './components/Sidebar/Sidebar';
import LowerPart from './components/LowerPart/LowerPart';
import middlewareWrapper from 'cors';


const Layout = () => {

  const [selectedService, setSelectedService] = useState('About Us');

  const handleServiceSelect = (service) => {
    setSelectedService(service);
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
              <Banner />
              <LowerPart />
            </main>

            <aside className='col col-3 right-side'>
              <Sidebar />
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