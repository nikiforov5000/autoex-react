import React from "react";
import About from "../About/About";
import ContactForm from "../ContactForm/ContactForm";
import './Contact.css';

const Contact = () => {
  return (
    <div className="section section-contact">
      <div class="wrapper">
        <div className="col col-6"><About /></div>
        <div className="col col-6"><ContactForm /></div>
      </div>
    </div>
  );
};

export default Contact;
