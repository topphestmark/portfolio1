import styled from "styled-components/macro";

export const Section = styled.section`
  min-height: 100vh;

  h2 {
    padding-top: 0.5em;
    font-size: 1.25rem;
    font-weight: 500;
    text-align: center;
    color: ${(props) => props.theme.colors.primary};
  }
`;