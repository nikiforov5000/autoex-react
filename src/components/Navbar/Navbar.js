import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <section class="section section-navbar">
      <div className="navbar-container">
        <div className="navbar-list">
          <div className="navbar-item"><a href="index.html"><img src="/images/logo-autoex-old.png" alt="logo" className="logo" /></a></div>
          <div className="navbar-item"><a href="#">Portfolio</a></div>
          <div className="navbar-item"><a href="#">Services</a></div>
          <div className="navbar-item"><a href="#">About</a></div>
          <div className="navbar-item"><a href="#">Contact</a></div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;