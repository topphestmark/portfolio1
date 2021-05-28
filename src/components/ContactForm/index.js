import {
  FormHeader,
  Form,
  Label,
  Input,
  TextArea,
  Button,
} from "./contactForm";

const ContactForm = () => {
  return (
    <div>
      <FormHeader>Say Hi.</FormHeader>
      <Form name="contact" method="post" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />

        <Label>Name:</Label>
        <Input type="text" name="name" required />

        <Label>Email:</Label>
        <Input type="email" name="email" required />

        <Label>Message:</Label>
        <TextArea minLength="12" name="message" rows="4" />

        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default ContactForm;
