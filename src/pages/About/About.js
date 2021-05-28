import styled from "styled-components/macro";

export const Section = styled.section`
  min-height: 100vh;
  max-width: 1400px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: space-evenly;
  }
`;

export const LeftContainer = styled.div`
  padding-bottom: 2em;

  h2 {
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 0.125em;
    color: ${(props) => props.theme.colors.primary};
  }

  p {
    padding-bottom: 0.625em;
    font-weight: 300;
  }

  @media screen and (min-width: 768px) {
    flex: 0.5;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    max-width: 360px;
    height: auto;
    border-radius: 50%;
    margin: 2em;
    ${(props) => props.theme.boxShadow}
  }

  @media screen and (min-width: 768px) {
    flex: 0.5;
  }
`;
