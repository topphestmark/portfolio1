import styled from "styled-components/macro";
import { VscMail } from "react-icons/vsc";

export const Section = styled.section`
  min-height: 100vh;
  max-width: 1400px;
`;

export const Container = styled.section`
  min-height: 80%;
  margin-top: 1.25em;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: space-evenly;
    margin-top: -1.85em;
  }
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 1em;

  @media screen and (min-width: 768px) {
    flex: 0.48;
    padding: 2.25em 0;
    text-align: start;
    align-items: start;
  }
`;

export const Description = styled.p`
  font-weight: 300;
  max-width: 600px;

  @media screen and (min-width: 768px) {
    margin: 1em 0;
  }
`;

export const Icon = styled(VscMail)`
  font-size: 1.75rem;
  opacity: 0.7;
  margin-right: 0.25em;
`;

export const EmailLink = styled.a`
  margin: 1em 0;
  text-decoration: none;
  font-weight: 300;
  color: ${(props) => props.theme.colors.dark2};
  transition: 0.25s ease-in-out;
  display: flex;
  align-items: center;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const RightWrapper = styled.div`
  @media screen and (min-width: 768px) {
    flex: 0.48;
  }
`;

export const HeaderRight = styled.h4`
  margin-left: 0.2em;
  margin-bottom: 0.25em;
  font-size: 1.5rem;
  text-align: center;
  font-weight: 400;
  opacity: 0.85;
  color: ${(props) => props.theme.colors.dark1};
`;
