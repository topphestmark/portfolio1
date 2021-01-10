import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/infoSection";
import {
  aboutSection,
  homeObjTwo,
  homeObjThree,
} from "../components/infoSection/data";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

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
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
}
