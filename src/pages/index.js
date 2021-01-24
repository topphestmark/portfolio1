import React, { useState } from "react";
import {
  Sidebar,
  Navbar,
  HeroSection,
  InfoSection,
  Projects,
  Footer,
} from "../components";

import {
  aboutSection,
  skillsSection,
  contactSection,
} from "../components/infoSection/data";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggleHamburger={toggleHamburger} />
      <Navbar toggleHamburger={toggleHamburger} />
      <HeroSection />
      <InfoSection {...aboutSection} />
      <Projects />
      <InfoSection {...skillsSection} />
      <InfoSection {...contactSection} />
      <Footer />
    </>
  );
}
