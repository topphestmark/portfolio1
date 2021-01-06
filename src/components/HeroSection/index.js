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
        <HeroH1>Hi, welcome to my portfolio page.</HeroH1>
        <HeroP>
          My name is Suphachai, or 'Topp' as my friend used to call me. And I'm
          a Frontend developer.
        </HeroP>
      </HeroContent>
    </HeroContainer>
  );
}
