import { useState } from "react";
import { useTranslation } from "react-i18next";

import "./ContactForm.css";
import SendFormStatus from "../SendFormStatus/SendFormStatus";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(" ");

  const { t } = useTranslation();

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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(t("contact-form.send-status.sending"));

    try {
      const response = await fetch("/api/sendmail.php", {
        method: "POST",
        body: new URLSearchParams({ name, message, email }),
      });
      const result = await response.text();
      resetInput();

      if (result === "success") {
        setStatus(t("contact-form.send-status.success"));
        setTimeout(() => setStatus(" "), 5000);
      } else {
        setStatus(t("contact-form.send-status.error"));
      }
    } catch (err) {
      setStatus(t("contact-form.send-status.fail"));
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
            placeholder={t("contact-form.placeholder.name")}
            value={name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder={t("contact-form.placeholder.email")}
            value={email}
            onChange={handleInputChange}
            required
          />
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder={t("contact-form.placeholder.phone")}
            value={phone}
            onChange={handleInputChange}
            required
          />
          <textarea
            className="text"
            type="text"
            name="message"
            id="message"
            placeholder={t("contact-form.placeholder.message")}
            value={message}
            onChange={handleInputChange}
            minLength="5"
            maxLength="256"
            required
          />
          <button className="button" onClick={handleSubmit}>
            {t("contact-form.send-button")}
          </button>
          <SendFormStatus status={status} />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
