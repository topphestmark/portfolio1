import { skillsData } from "./skillsData";
import { HeaderSection } from "../../shared/typography";
import {
  Section,
  Wrapper,
  Card,
  Icon,
  Title,
  Foreword,
  Item,
} from "./Skills.styles";

const Skills = () => {
  return (
    <Section id="skills">
      {" "}
      <HeaderSection>SKILLS</HeaderSection>{" "}
      <Wrapper>
        {skillsData.map((data) => (
          <Card key={data.id}>
            <Icon src={data.icon} alt={data.title} />
            <Title> {data.title} </Title>
            <Foreword> {data.foreworld} </Foreword>
            {data.items.map((item) => (
              <Item key={item}> {item} </Item>
            ))}
          </Card>
        ))}
      </Wrapper>
    </Section>
  );
};

export default Skills;
