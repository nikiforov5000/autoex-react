import React from "react";
import './ContactForm.css'

const ContactForm = () => {
  return (
    <div className="contact-form">
      <div class="wrapper">
        <form action="" method="get" class="form-contact">
          <input type="text" name="name" id="name" placeholder="Enter your name" required />
          <input type="email" name="email" id="email" placeholder="Enter your e-mail" required />
          <input type="phone" name="phone" id="phone" placeholder="Enter your phone number" required />
          <textarea className="text" type="text" name="message" id="message" placeholder="Enter your message" required minLength="5" maxLength="256" />
          <input className="button" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
