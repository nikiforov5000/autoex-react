import React, { useState } from "react";
import './ContactForm.css'

const ContactForm = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    console.log(name, value);

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'message':
        setMessage(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //replace with actual request
    console.log("Sending data to a server... piupiu..");

    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  }


  return (
    <div className="contact-form">
      <div class="wrapper">
        <form action="" method="get" class="form-contact">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your e-mail"
            value={email}
            onChange={handleInputChange}
            required />
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Enter your phone number"
            value={phone}
            onChange={handleInputChange}
            required />
          <textarea
            className="text"
            type="text"
            name="message"
            id="message"
            placeholder="Enter your message"
            value={message}
            onChange={handleInputChange}
            minLength="5"
            maxLength="256"
            required
          />
          <input className="button" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
