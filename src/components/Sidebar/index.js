import React from "react";
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarWrapper,
} from "./styles/sidebar";

export default function Sidebar({ isOpen, toggleHamburger }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggleHamburger}>
      <Icon onClick={toggleHamburger}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggleHamburger}>
            About
          </SidebarLink>
          <SidebarLink to="projects" onClick={toggleHamburger}>
            Projects
          </SidebarLink>
          <SidebarLink to="skills" onClick={toggleHamburger}>
            Skills
          </SidebarLink>
          <SidebarLink to="contact" onClick={toggleHamburger}>
            Contact
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
}
