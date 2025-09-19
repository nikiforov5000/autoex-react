import { useState, useRef } from "react";
import "./ContactForm.css";
import SendFormStatus from "../SendFormStatus/SendFormStatus";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(" ");
  const timerId = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
        break;
    }
  };

  const resetInput = () => {
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/sendmail.php", {
        method: "POST",
        body: new URLSearchParams({name, message, email}),
      });
      const result = await response.text();
      resetInput();

      if (result === "success") {
        setStatus("Message sent!");
        setTimeout(() => setStatus(" "), 5000);
      } else {
        setStatus("Failed to send. Try again later.");
      }
    } catch (err) {
      setStatus("Error sending message.");
    }
  };

  return (
    <div className="contact-form">
      <div class="wrapper">
        <form class="form-contact">
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
            required
          />
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Enter your phone number"
            value={phone}
            onChange={handleInputChange}
            required
          />
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
          <button className="button" onClick={handleSubmit}>Send</button>
          <SendFormStatus status={status} />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
