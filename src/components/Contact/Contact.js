import React from "react";
import About from "../About/About";
import ContactsList from "../ContactsList/ContactsList";
import ContactForm from "../ContactForm/ContactForm";
import './Contact.css';

const Contact = () => {
  return (
    <div className="section section-contact">
      <div className="wrapper">
        <div className="col col-4"><About /></div>
        <div className="col col-4"><ContactForm /></div>
        <div className="col col-4"><ContactsList /></div>
      </div>
    </div>
  );
};

export default Contact;
