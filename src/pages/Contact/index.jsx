import { HeaderSection } from "../../shared/typography";
import { Section } from "./Contact.styles";
import { ContactForm } from "../../components";

const Contact = () => {
  return (
    <Section id="contact">
      {" "}
      <HeaderSection>CONTACT</HeaderSection>
      <ContactForm />
    </Section>
  );
};

export default Contact;
