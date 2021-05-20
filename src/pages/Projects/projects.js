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

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 22vw);
  grid-template-rows: repeat(3, auto);
  justify-content: space-evenly;
  grid-gap: 1.25em;
  place-items: center;
  padding: 2em 0 4em 0;

  @media screen and (max-width: 834px) {
    grid-template-columns: repeat(3, 30vw);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 45vw);
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, auto);
  }
`;

export const Card = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
  color: ${(props) => props.theme.colors.dark2};
  border: 1.5px solid ${(props) => props.theme.colors.border};
  border-radius: 2px;
  padding: 12px;

  img {
    transition: 0.35s ease-in;
    filter: grayscale(80%);
  }

  &:hover img {
    transform: scale(1.15);
    filter: none;
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

export const Title = styled.h3`
  font-weight: 420;
  font-size: 1.0125rem;
  margin-bottom: 0.3em;
`;

export const Description = styled.p`
  color: gray;
  font-size: 0.875rem;
  font-weight: 300;
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
  background: #efefef;
  border-radius: 2px;
`;
