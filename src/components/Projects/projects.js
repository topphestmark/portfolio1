import styled from "styled-components/macro";
import theme from "../../shared/theme";

export const ProjectsContainer = styled.section`
  min-height: 800px;
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${theme.colors.dark1};

  @media screen and (max-width: 768px) {
    min-height: 1100px;
    margin-bottom: 50px;
  }

  @media screen and (max-width: 480px) {
    min-height: 1300px;
  }
`;

export const ProjectsH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ProjectsWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ProjectsCard = styled.a.attrs(() => ({
  target: "_blank",
}))`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 20px;
  height: 300px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  color: white;
  transition: all 0.3s ease-in-out;

  &:hover {
    transition: all 0.3s ease-in-out;
    background: #fff;
    color: ${theme.colors.dark4};
    cursor: pointer;
  }
`;

export const ProjectsIcon = styled.img`
  height: 125px;
  width: auto;
  margin-bottom: 10px;
`;

export const ProjectsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  opacity: 0.8;
`;

export const ProjectsP = styled.p`
  font-size: 0.9rem;
  text-align: center;
  opacity: 0.75;
`;
