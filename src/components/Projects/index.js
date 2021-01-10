import Image1 from "../../images/rocket.png";
import Image2 from "../../images/netflix.png";
import Image3 from "../../images/statistic.png";
import Image4 from "../../images/social-media.png";

import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsIcon,
  ProjectsH2,
  ProjectsP,
} from "./styles/projects";

export default function Projects() {
  return (
    <ProjectsContainer id="projects">
      <ProjectsH1>My recent projects</ProjectsH1>
      <ProjectsWrapper>
        <ProjectsCard>
          <ProjectsIcon src={Image1} />
          <ProjectsH2>SpaceX Missions</ProjectsH2>
          <ProjectsP>
            A microsite about SpaceX missions with vanilla Javascript.
          </ProjectsP>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsIcon src={Image2} />
          <ProjectsH2>Netflix</ProjectsH2>
          <ProjectsP>
            A clone version of netflix banner with YouTube trailer, API by TMDb.
          </ProjectsP>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsIcon src={Image3} />
          <ProjectsH2>Covid-19 tracker</ProjectsH2>
          <ProjectsP>
            Total Covid-19 cases from around the world, data from disease.sh.
          </ProjectsP>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsIcon src={Image4} />
          <ProjectsH2>TikTok app</ProjectsH2>
          <ProjectsP>
            A mini version of TioTik application with TioTok UI.
          </ProjectsP>
        </ProjectsCard>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
}
