import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./footer";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialIcons>
              <SocialIconLink
                href="https://www.facebook.com/ToppHestmark"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.instagram.com/topphest/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.linkedin.com/in/suphachai-hestmark/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink
                href="https://github.com/ToppHestmark/"
                target="_blank"
                aria-label="Github"
              >
                <FaGithub />
              </SocialIconLink>
            </SocialIcons>
            <WebsiteRights>
              © {new Date().getFullYear()} Suphachai Hestmark.
            </WebsiteRights>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
}
