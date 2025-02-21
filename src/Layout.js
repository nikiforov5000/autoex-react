import React, { useState } from 'react';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Sidebar from './components/Sidebar/Sidebar';
import LowerPart from './components/LowerPart/LowerPart';
import middlewareWrapper from 'cors';


const Layout = () => {

  return (
    <div className="main-wrap">
      <div id="page-wrapper">
        <header className='section section-navbar'>
          <Navbar />
        </header>

        <div className='section section-content'>
          <main className='wrapper'>
            <div class="col col-9 col-wrapper left-side">
              <Banner />
              <LowerPart />
            </div>
          </main>

          <aside className='sidebar'>
            <Sidebar />
          </aside>

          <footer className='footer'>
          </footer>
        </div>
      </div>
    </div>

  );
};

export default Layout;