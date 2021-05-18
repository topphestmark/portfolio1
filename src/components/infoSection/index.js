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
  EmailWrapper,
  EmailLink,
} from "./infoSection";
import ContactForm from "../ContactForm";

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
  eMail,
  hrefEmail,
  contactForm,
}) => {
  return (
    <InfoContainer lightBg={lightBg} id={id}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine> {topLine} </TopLine>
              <Heading lightText={lightText}> {headLine} </Heading>
              <Subtitle darkText={darkText}>{description}</Subtitle>
              <EmailWrapper eMail={eMail}>
                <EmailLink href={hrefEmail}>Send me an e-mail</EmailLink>
              </EmailWrapper>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              {contactForm ? (
                <ContactForm />
              ) : (
                <Image profileImg={profileImg} src={image} alt={alt} />
              )}
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default InfoSection;
