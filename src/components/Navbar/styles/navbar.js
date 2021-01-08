import styled from "styled-components/macro";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import theme from "../../../shared/theme";

export const Nav = styled.nav`
  background: ${({ scrollNav }) =>
    scrollNav ? theme.colors.dark2 : "transparent"};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 20;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
  z-index: 1;
`;

export const NavLogo = styled(LinkRouter)`
  justify-self: flex-start;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 28px;

  @media screen and (max-width: 480px) {
    margin-left: 0px;
  }
`;

export const LogoAvatar = styled.img.attrs({
  alt: "Avatar",
})`
  width: 40px;
`;

export const HamburgerMenu = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkScroll)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid ${(props) => props.theme.colors.primary} !important;
  }
`;
