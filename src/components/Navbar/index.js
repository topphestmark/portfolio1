import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import avatar from "../../images/ninja-avatar.png";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  HamburgerMenu,
  NavMenu,
  NavItem,
  NavLinks,
  LogoAvatar,
} from "./styles/navbar";

export default function Navbar({ toggleHamburger }) {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    let scrollingPosition = Math.ceil(window.scrollY);
    return scrollingPosition >= 80 ? setScrollNav(true) : setScrollNav(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <LogoAvatar src={avatar} />
          </NavLogo>
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
                offset={-80}
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
                offset={-80}
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
                offset={-80}
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
                offset={-80}
              >
                Contact
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
}
