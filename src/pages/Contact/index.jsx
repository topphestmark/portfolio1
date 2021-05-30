import { HeaderSection } from "../../shared/typography";
import { ContactForm } from "../../components";
import { data } from "./contactData";
import {
  Section,
  Container,
  LeftWrapper,
  HeaderRight,
  Description,
  Icon,
  EmailLink,
  RightWrapper,
} from "./Contact.styles";

const Contact = () => {
  return (
    <Section id="contact">
      <HeaderSection>CONTACT</HeaderSection>

      <Container>
        <LeftWrapper>
          <Description> {data.description} </Description>
          <EmailLink href={data.email}>
            <Icon />
            top_hestmark@yahoo.no
          </EmailLink>
        </LeftWrapper>

        <RightWrapper>
          <HeaderRight> {data.title} </HeaderRight>
          <ContactForm />
        </RightWrapper>
      </Container>
    </Section>
  );
};

export default Contact;
