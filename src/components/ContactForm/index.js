import React from "react";

const ContactForm = () => {
  return (
    <form name="contact" method="POST" data-netlify="true">
      <p>
        <label>Your Name:</label>
        <input type="text" name="name" />
      </p>
      <p>
        <label>Your Email:</label>
        <input type="email" name="email" />
      </p>
      <p>
        <label>Message:</label>
        <textarea name="message"></textarea>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  );
};

export default ContactForm;
