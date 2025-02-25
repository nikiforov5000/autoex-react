import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [note, setNote] = useState('');

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-list">
        <div className="navbar-item"><a href="index.html"><img src="/images/logo-autoex.png" alt="logo" className="logo" /></a></div>
        <div className="navbar-item"><a href="#">Portfolio</a></div>
        <div className="navbar-item"><a href="#">Services</a></div>
        <div className="navbar-item"><a href="#">About</a></div>
        <div className="navbar-item"><a href="#">Contact</a></div>
      </div>
    </div>
  );
};

export default Navbar;