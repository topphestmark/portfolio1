import styled from "styled-components/macro";

export const HeroContainer = styled.div`
  background: ${(props) => props.theme.colors.dark4};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const HeroBg = styled.div.attrs((props) => ({
  type: "video/mp4",
}))`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: ${(props) => props.theme.colors.dark5};
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  font-size: 10rem;
  text-align: center;
  animation: ${(props) => props.theme.slideTop.firstAnimation};

  @media screen and (max-width: 480px) {
    font-size: 8rem;
  }

  ${(props) => props.theme.slideTop.keyframes};
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;
  animation: ${(props) => props.theme.slideTop.secondAnimation};

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }

  ${(props) => props.theme.slideTop.keyframes};
`;
