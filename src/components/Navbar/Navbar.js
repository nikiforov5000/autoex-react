import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <section class="section section-navbar">
      <div className="navbar-container">
        <div className="logo-container"><a href="index.html"><img src="/images/logo-autoex-old.png" alt="logo" className="logo" /></a></div>
        <div className="navbar-list">
          <div className="navbar-item"><a href="#">info@autoex.kz</a></div>
          {/* <div className="navbar-item"><a href="#">+7 747 495 9462</a></div> */}
        </div>
      </div>
    </section>
  );
};

export default Navbar;