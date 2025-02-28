import React from "react";
import './ContactsList.css';
import contactData from '../../data/contacts.json'

const ContactsList = () => {
  return (
    <div className="contacts-list">
      <h3>{contactData.phoneNumber}</h3>
      <h3>{contactData.email}</h3>
    </div>
  );
};

export default ContactsList;