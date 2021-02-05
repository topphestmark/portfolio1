import profilePic from "../../images/profile_image.jpg";
import svg2 from "../../images/frameworks.svg";
import svg3 from "../../images/mail.svg";

export const aboutSection = {
  id: "about",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  dark: false,
  darkText: true,
  imgStart: false,
  image: profilePic,
  profileImg: true,
  alt: "Topp Hestmark",
  topLine: "ABOUT ME",
  headLine: "Front-end Developer",
  description:
    "My name is Suphachai Hestmark, or 'Top' as a nickname. I have a background from the oil industry and have a strong desire to transform my career into the tech field. Like doing the work the I'm passionate about, learning new stuff everyday and helping out other people. Apart from programming I do also love to travel to new places, exercise and read books.",
  eMail: false,
  hrefEmail: null,
  contactForm: false,
};

export const skillsSection = {
  id: "skills",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  dark: false,
  darkText: true,
  imgStart: true,
  image: svg2,
  profileImg: false,
  alt: "Skills",
  topLine: "SKILLS",
  headLine: "TECH & TOOLS",
  description:
    "HTML, CSS, JavaScript, Typescript, React, Redux, styled-components, SEO, UX/UI, VSCode, Adobe XD, Lightroom, Photoshop",
  eMail: false,
  hrefEmail: null,
  contactForm: false,
};

export const contactSection = {
  id: "contact",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  dark: false,
  darkText: false,
  imgStart: false,
  image: svg3,
  profileImg: false,
  alt: "Collaboration",
  topLine: "CONTACT",
  headLine: "Get in touch",
  description:
    "I'm seeking out opportunities to collaborate with companies, agencies or individuals. I'll like to bring my skills to the table for the real world projects and solving the real problems. Send me an e-mail or leave a comment.",
  eMail: true,
  hrefEmail: "mailto:top_hestmark@yahoo.no?subject=Hi!",
  contactForm: true,
};
