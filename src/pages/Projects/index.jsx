import { projects } from "./data";
import {
  Section,
  Wrapper,
  Card,
  Image,
  Title,
  Description,
  BottomWrapper,
  StackItem,
} from "./projects";

const Projects = () => {
  return (
    <Section id="projects">
      <h2>PROJECTS</h2>

      <Wrapper>
        {projects.map((project) => (
          <Card href={project.link} key={project.id}>
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
