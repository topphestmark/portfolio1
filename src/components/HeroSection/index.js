import Video from "../../videos/video.mp4";
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
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Hello</HeroH1>
        <HeroP>
          I simply design and code simple things, and I love what I do.
        </HeroP>
      </HeroContent>
    </HeroContainer>
  );
}
