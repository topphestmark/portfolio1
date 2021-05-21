import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  HamburgerMenu,
  NavMenu,
  NavItem,
  NavLinks,
} from "./navbar";

const Navbar = ({ toggleHamburger }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    let scrollingPosition = Math.ceil(window.scrollY);
    return scrollingPosition >= 140 ? setScrollNav(true) : setScrollNav(false);
  };

  useEffect(() => {
    window.onscroll = changeNav;
  }, []);

  return (
    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        <HamburgerMenu onClick={toggleHamburger}>
          <FaBars />
        </HamburgerMenu>
        <NavMenu>
          <NavItem>
            <NavLinks
              to="about"
              smooth={true}
              duration={200}
              spy={true}
              exact="true"
              offset={-60}
            >
              About
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="projects"
              smooth={true}
              duration={200}
              spy={true}
              exact="true"
              offset={-60}
            >
              Projects
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="skills"
              smooth={true}
              duration={200}
              spy={true}
              exact="true"
              offset={-60}
            >
              Skills
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="contact"
              smooth={true}
              duration={200}
              spy={true}
              exact="true"
              offset={-60}
            >
              Contact
            </NavLinks>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
