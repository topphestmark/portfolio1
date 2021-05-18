import React from "react";
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarWrapper,
  SidebarMenuList,
} from "./sidebar";

export default function Sidebar({ isOpen, toggleHamburger }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggleHamburger}>
      <Icon onClick={toggleHamburger}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarMenuList>
            <SidebarLink to="about" onClick={toggleHamburger}>
              About
            </SidebarLink>
          </SidebarMenuList>
          <SidebarMenuList>
            <SidebarLink to="projects" onClick={toggleHamburger}>
              Projects
            </SidebarLink>
          </SidebarMenuList>
          <SidebarMenuList>
            <SidebarLink to="skills" onClick={toggleHamburger}>
              Skills
            </SidebarLink>
          </SidebarMenuList>
          <SidebarMenuList>
            <SidebarLink to="contact" onClick={toggleHamburger}>
              Contact
            </SidebarLink>
          </SidebarMenuList>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
}
