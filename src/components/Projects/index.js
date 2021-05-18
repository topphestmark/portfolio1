import Image1 from "../../images/projects/rocket.svg";
import Image2 from "../../images/projects/netflix.svg";
import Image3 from "../../images/projects/covid-19.svg";
import Image4 from "../../images/projects/social-media.svg";
import Image5 from "../../images/projects/stripe.svg";
import Image6 from "../../images/projects/chit-chat.svg";

import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsIcon,
  ProjectsH2,
  ProjectsP,
} from "./projects";

export default function Projects() {
  return (
    <ProjectsContainer id="projects">
      <ProjectsH1>Recent projects</ProjectsH1>
      <ProjectsWrapper>
        <ProjectsCard href="https://chit-chat-8993.netlify.app/">
          <ProjectsIcon src={Image6} alt="Chat" />
          <ProjectsH2>Chit Chat</ProjectsH2>
          <ProjectsP>
            React-chat-engine API chat app with image upload feature. Guest
            username: 'Janet', Password: 'password'
          </ProjectsP>
        </ProjectsCard>
        <ProjectsCard href="https://e-shop-dbc41.web.app/">
          <ProjectsIcon src={Image5} alt="Commerce" />
          <ProjectsH2>E-Shop</ProjectsH2>
          <ProjectsP>
            Mini gadgets e-commerce web-store with checkout functionalite and
            stripe payment integrated.
          </ProjectsP>
        </ProjectsCard>
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
        <ProjectsCard href="https://disease-covid-19-tracker.netlify.app/">
          <ProjectsIcon src={Image3} alt="Covid-19 data" />
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
