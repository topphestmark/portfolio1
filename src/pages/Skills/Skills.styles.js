import styled from "styled-components/macro";

export const Section = styled.section`
  min-height: 100vh;
  max-width: 1400px;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};

  h2 {
    padding-top: 2em;
    font-size: 1.25rem;
    font-weight: 500;
    text-align: center;
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const Card = styled.div`
  width: 100%;
`;
