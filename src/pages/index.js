import { HeroSection } from "../components";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";

import { Container } from "./pages";

export default function Pages() {
  return (
    <>
      <HeroSection />

      <Container>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </Container>
    </>
  );
}
