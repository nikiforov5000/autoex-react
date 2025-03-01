import React from "react";

const ContactForm = () => {
  return (
    <div className="contact-form">
      <form action="" method="get" class="form-contact">
        <div class="form-contact">
          <label for="name">Enter your name: </label>
          <input type="text" name="name" id="name" required />
        </div>
        <div class="form-contact">
          <label for="email">Enter your email: </label>
          <input type="email" name="email" id="email" required />
        </div>
        <div class="form-contact">
          <label for="phone">Enter your phone: </label>
          <input type="phone" name="phone" id="phone" required />
        </div>
        <div class="form-contact">
          <label for="message">Enter your message: </label>
          <input type="text" name="message" id="message" required />
        </div>
        <div class="form-contact">
          <input type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
