import styled from "styled-components/macro";
import { Link as LinkScroll } from "react-scroll";
import theme from "../../shared/theme";

export const Nav = styled.nav`
  height: 60px;
  margin-top: -60px;
  display: flex;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 20;

  background: ${({ scrollNav }) =>
    scrollNav ? theme.colors.light : "transparent"};

  ${({ scrollNav }) => (scrollNav ? theme.navShadow : "")}

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 60px;
  width: 100%;
  padding: 0 20px;
  max-width: 1100px;
  z-index: 1;
`;

export const HamburgerMenu = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: -17px;
    right: -15px;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${(props) => props.theme.colors.dark};
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
  height: 60px;
`;

export const NavLinks = styled(LinkScroll)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  border-bottom: 4px solid transparent;

  &.active {
    border-bottom: 4px solid ${theme.colors.primary};
    color: ${theme.colors.primary};
  }

  &:hover {
    color: ${theme.colors.primary};
    transition: 0.2 ease-in-out;
  }
`;
