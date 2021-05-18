import styled from "styled-components/macro";
import theme from "../../shared/theme";

export const InfoContainer = styled.section`
  color: #fff;
  background: ${({ lightBg }) =>
    lightBg ? theme.colors.light1 : theme.colors.dark1};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;

  @media screen and (max-width: 480px) {
    padding: 0 4px;
  }
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: ${theme.colors.primary};
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
  opacity: 0.9;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 2rem;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) =>
    lightText ? theme.colors.light2 : theme.colors.dark1};
  opacity: 0.8;

  @media screen and (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 16px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? theme.colors.dark1 : "#fff")};
  opacity: 0.75;

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
  text-align: center;
`;

export const Image = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
  border-radius: ${({ profileImg }) => (profileImg ? "50%" : "0")};

  @media screen and (max-width: 768px) {
    max-width: ${({ profileImg }) => (profileImg ? "350px" : "")};
  }
`;

export const EmailWrapper = styled.div`
  display: ${({ eMail }) => (eMail ? "block" : "none")};
`;

export const EmailLink = styled.a.attrs(() => ({
  type: "email",
}))`
  text-decoration: none;
  padding: 12px;
  color: white;
  background: ${theme.colors.primary};
  opacity: 0.85;
`;
