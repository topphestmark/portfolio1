import Image1 from "../../images/rocket.svg";
import Image2 from "../../images/netflix.svg";
import Image3 from "../../images/statistic.svg";
import Image4 from "../../images/social-media.svg";

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
      <ProjectsH1>Recent projects</ProjectsH1>
      <ProjectsWrapper>
        <ProjectsCard href="https://topphestmark.github.io/spacex-missions/index.html">
          <ProjectsIcon src={Image1} alt="Space program" />
          <ProjectsH2>SpaceX Missions</ProjectsH2>
          <ProjectsP>
            A microsite about SpaceX missions with vanilla Javascript.
          </ProjectsP>
        </ProjectsCard>
        <ProjectsCard href="https://netflix-tmdb.web.app/">
          <ProjectsIcon src={Image2} alt="Netflix vector" />
          <ProjectsH2>Netflix</ProjectsH2>
          <ProjectsP>
            A clone version of netflix banner with YouTube trailer, API by TMDb.
          </ProjectsP>
        </ProjectsCard>
        <ProjectsCard href="https://covid-19-tracker-3d6d5.web.app/">
          <ProjectsIcon src={Image3} alt="Statistic data" />
          <ProjectsH2>Covid-19 tracker</ProjectsH2>
          <ProjectsP>
            Total Covid-19 cases from around the world, data from disease.sh.
          </ProjectsP>
        </ProjectsCard>
        <ProjectsCard href="https://tiktok-project-2db5a.web.app/">
          <ProjectsIcon src={Image4} alt="Social media app" />
          <ProjectsH2>TikTok app</ProjectsH2>
          <ProjectsP>A mini version of TikTik app with TikTok UI.</ProjectsP>
        </ProjectsCard>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
}
