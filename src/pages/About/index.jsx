import { aboutObj } from "./data";
import { Section, LeftContainer, RightContainer } from "./About";

const About = () => (
  <Section id="about">
    <LeftContainer>
      <h2> {aboutObj.header} </h2>
      <p> {aboutObj.paragraph1} </p>
      <p> {aboutObj.paragraph2} </p>
    </LeftContainer>
    <RightContainer>
      <img src={aboutObj.image} alt="Topp Hestmark" />
    </RightContainer>
  </Section>
);

export default About;
