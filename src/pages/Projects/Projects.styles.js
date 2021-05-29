import styled from "styled-components/macro";

export const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, auto);
  justify-content: space-evenly;
  grid-gap: 1.25em;
  place-items: center;
  padding-bottom: 4em;

  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(3, 30vw);
    grid-gap: 0.875em;
  }

  @media screen and (max-width: 834px) {
    grid-template-columns: repeat(2, 45vw);
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, auto);
  }
`;

export const Card = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
  background-color: ${(props) => props.theme.colors.light};
  color: ${(props) => props.theme.colors.dark2};
  border-radius: ${(props) => props.theme.borderRadius};
  border: 1px solid ${(props) => props.theme.colors.border};
  padding: 14px;
  transition: 0.25s ease-in-out;

  &:hover {
    ${(props) => props.theme.boxShadow};
  }

  img {
    width: 100%;
    transition: 0.25s ease-in;
  }

  &:hover img {
    transform: scale(1.03);
  }

  @media screen and (min-width: 834px) {
    max-width: 300px;
  }
`;

export const Image = styled.img`
  width: 60px;
  height: 60px;
  margin: 1em 0;
  align-self: center;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 40px;
  margin: 0.8em 0;
`;

export const StackItem = styled.span`
  display: flex;
  align-items: center;
  margin: 0.2em;
  padding: 0.1em 0.5em;
  height: 22px;
  font-size: 0.75rem;
  background: ${(props) => props.theme.colors.gray};
  border-radius: 2px;
  opacity: 0.8;
`;
