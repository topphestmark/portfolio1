import styled from "styled-components/macro";

export const Section = styled.section`
  min-height: 100vh;
  max-width: 1400px;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
`;

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  justify-content: space-between;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: ${(props) => props.theme.colors.light};
  border-radius: ${(props) => props.theme.borderRadius};
  border: 1px solid ${(props) => props.theme.colors.border};
  margin-bottom: 2em;

  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 2em;
  margin-bottom: 2em;

  &:nth-child(2) {
    border-left: 1px solid ${(props) => props.theme.colors.border};
    border-right: 1px solid ${(props) => props.theme.colors.border};
  }

  @media screen and (max-width: 992px) {
    padding: 0 1em;

    &:nth-child(2) {
      border-left: unset;
      border-right: unset;
      border-top: 1px solid ${(props) => props.theme.colors.border};
      border-bottom: 1px solid ${(props) => props.theme.colors.border};
    }
  }
`;
export const Icon = styled.img`
  width: 60px;
  height: 60px;
  margin: 2em 0;
`;
export const Title = styled.h3`
  font-weight: 500;
  font-size: 1.25rem;
`;
export const Foreword = styled.p`
  margin: 0.75em 0 1.5em 0;
  font-weight: 300;
  padding-bottom: 1.25em;
  border-bottom: 0.4px solid ${(props) => props.theme.colors.border};

  @media screen and (max-width: 992px) {
    width: 80%;
  }
`;

export const Item = styled.p`
  padding-bottom: 0.25em;
  font-weight: 300;
  color: ${(props) => props.theme.colors.dark2};
  opacity: 0.85;
  padding-bottom: 0.5em;
`;
