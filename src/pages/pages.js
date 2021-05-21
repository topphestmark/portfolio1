import styled from "styled-components/macro";

export const Container = styled.main`
  margin: 0 1em;
  display: grid;
  justify-content: center;

  @media screen and (min-width: 768px) {
    margin: 0 2em;
  }

  @media screen and (min-width: 1280px) {
    margin: 0 4em;
  }
`;
