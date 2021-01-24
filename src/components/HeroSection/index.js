import bgVideo from "../../videos/smoke-slow-motion.mp4";
import {
  HeroBg,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  VideoBg,
} from "./styles/heroSection";

export default function HeroSection() {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg src={bgVideo} loop autoPlay muted />
      </HeroBg>
      <HeroContent>
        <HeroH1>Hi.</HeroH1>
        <HeroP>Nice to see you, welcome to my site.</HeroP>
      </HeroContent>
    </HeroContainer>
  );
}
