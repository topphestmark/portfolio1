import { projects } from "./data";
import { HeaderSection, Title, Description } from "../../shared/typography";
import {
  Section,
  Wrapper,
  Card,
  Image,
  BottomWrapper,
  StackItem,
} from "./Projects.styles";

const Projects = () => {
  return (
    <Section id="projects">
      <HeaderSection>PROJECTS</HeaderSection>

      <Wrapper>
        {projects.map((project) => (
          <Card href={project.link} target="_blank" key={project.id}>
            <Image src={project.icon} alt={project.title} />
            <Title> {project.title} </Title>
            <Description> {project.description} </Description>

            <BottomWrapper>
              {project.stack.map((item) => (
                <StackItem key={Math.floor(Math.random() * 500000000000000000)}>
                  {" "}
                  {item}{" "}
                </StackItem>
              ))}
            </BottomWrapper>
          </Card>
        ))}
      </Wrapper>
    </Section>
  );
};

export default Projects;
