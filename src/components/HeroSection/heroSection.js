import styled from "styled-components/macro";
import image from "../../images/background.jpg";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2em;
  width: 100%;
  height: 100vh;
  z-index: 1;

  background-image: url(${image});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
`;

export const HeroH1 = styled.h1`
  color: ${(props) => props.theme.colors.light};
  font-size: 18rem;
  text-align: center;
  animation: ${(props) => props.theme.slideTop.firstAnimation};

  @media screen and (max-width: 480px) {
    font-size: 12rem;
  }

  ${(props) => props.theme.slideTop.keyframes};
`;

export const HeroP = styled.p`
  color: ${(props) => props.theme.colors.light};
  font-size: 1.625rem;
  margin-top: -2em;
  text-align: center;
  max-width: 600px;
  animation: ${(props) => props.theme.slideTop.secondAnimation};

  @media screen and (max-width: 480px) {
    font-size: 1.125rem;
  }

  ${(props) => props.theme.slideTop.keyframes};
`;
