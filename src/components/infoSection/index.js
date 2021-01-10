import {
  Column1,
  Column2,
  Heading,
  Image,
  ImgWrap,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
} from "./styles/infoSection";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headLine,
  darkText,
  description,
  image,
  alt,
  profileImg,
}) => {
  return (
    <InfoContainer lightBg={lightBg} id={id}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine> {topLine} </TopLine>
              <Heading lightText={lightText}> {headLine} </Heading>
              <Subtitle darkText={darkText}> {description} </Subtitle>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Image profileImg={profileImg} src={image} alt={alt} />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default InfoSection;
