import styled from "styled-components/macro";

export const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};

  h2 {
    padding-top: 2em;
    font-size: 1.25rem;
    font-weight: 500;
    text-align: center;
    color: ${(props) => props.theme.colors.primary};
  }
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
  padding: 2em 0 4em 0;

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
  padding: 14px;
  transition: 0.25s ease-in-out;
  opacity: 0.8;

  ${(props) => props.theme.boxShadow}

  img {
    transition: 0.25s ease-in;
    filter: grayscale(80%);
  }

  &:hover {
    opacity: 1;
  }

  &:hover img {
    transform: scale(1.03);
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
