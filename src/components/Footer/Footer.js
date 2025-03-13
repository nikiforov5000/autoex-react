import React from "react";
import './Footer.css';


const date = new Date();

const Footer = () => {
  return (
    <div className="section section-footer">
      <div className="wrapper">
        <p>&copy; {date.getFullYear()} All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;