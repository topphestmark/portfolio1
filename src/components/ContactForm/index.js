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
  return (
    <>
      <FormHeader>Comments</FormHeader>
      <Form name="contact" method="post">
        <input type="hidden" name="contact" value="contact" />

        <Label>Name:</Label>
        <Input type="text" name="name" required />

        <Label>Email:</Label>
        <Input type="email" name="email" />

        <Label>Message:</Label>
        <TextArea name="message" rows="4" />

        <Button type="submit">Send</Button>
      </Form>
    </>
  );
};

export default ContactForm;
