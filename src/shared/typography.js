import styled from "styled-components/macro";

export const HeaderSection = styled.h2`
  padding: 2em 0 1em 0;
  font-size: 1.25rem;
  font-weight: 500;
  text-align: center;
  color: ${(props) => props.theme.colors.dark2};
`;

export const Title = styled.h3`
  font-weight: 420;
  font-size: 1.0125rem;
  margin-bottom: 0.3em;
`;

export const Description = styled.p`
  color: ${(props) => props.theme.colors.dark2};
  font-size: 0.875rem;
  font-weight: 200;
`;
