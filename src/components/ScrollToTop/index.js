import styled from "styled-components/macro";
import { FaAngleUp } from "react-icons/fa";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [scrollNav, setScrollNav] = useState(false);

  const ChangeVisibility = () => {
    let scrollingPosition = Math.ceil(window.scrollY);
    return scrollingPosition >= 200 ? setScrollNav(true) : setScrollNav(false);
  };

  useEffect(() => {
    window.onscroll = ChangeVisibility;
  }, []);

  const scrollTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return <UpArrow scrollNav={scrollNav} onClick={scrollTop} />;
};

export const UpArrow = styled(FaAngleUp)`
  display: ${({ scrollNav }) => (scrollNav ? "block" : "none")};
  color: ${(props) => props.theme.colors.light1};
  background: ${(props) => props.theme.colors.primary};
  font-size: 2.625rem;
  cursor: pointer;

  position: fixed;
  right: 0.25em;
  bottom: 1em;
`;

export default ScrollToTop;
