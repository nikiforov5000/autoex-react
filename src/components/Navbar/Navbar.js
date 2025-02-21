import React, { useState } from 'react';
import './Navbar.css';

const Notepad = () => {
  const [note, setNote] = useState('');

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  return (
    <div class="navbar-container">
      <div class="navbar-list">
        <div class="navbar-item"><a href="#"></a></div>
        <div class="navbar-item"><a href="#">Portfolio</a></div>
        <div class="navbar-item"><a href="#">Services</a></div>
        <div class="navbar-item"><a href="#">About</a></div>
        <div class="navbar-item"><a href="#">Contact</a></div>
      </div>
    </div>
  );
};

export default Notepad;