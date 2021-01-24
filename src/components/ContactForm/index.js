import React from "react";
import {
  FormHeader,
  Form,
  Label,
  Input,
  TextArea,
  Button,
} from "./styles/contactForm";

const ContactForm = () => {
  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  const handleSubmit = (event, name) => {
    event.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        contact: event.target.getAttribute("name"),
        ...name,
      }),
    })
      .then()
      .catch((error) => alert(error));
  };

  return (
    <>
      <FormHeader>Comments</FormHeader>
      <Form name="contact" method="POST" netlify onSubmit={handleSubmit}>
        <input type="hidden" name="contact" value="stranger" />
        <Label>Name:</Label>
        <Input type="text" name="name" onChange={handleSubmit} required />

        <Label>Email:</Label>
        <Input type="email" name="email" onChange={handleSubmit} />

        <Label>Message:</Label>
        <TextArea name="message" rows="4" onChange={handleSubmit} />

        <Button type="submit">Send</Button>
      </Form>
    </>
  );
};

export default ContactForm;
