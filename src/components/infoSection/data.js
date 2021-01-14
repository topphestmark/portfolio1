import profilePic from "../../images/profile_image.jpg";
import svg2 from "../../images/code.svg";
import svg3 from "../../images/collaborate.svg";

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
    "My name is Suphachai Hestmark, or 'Top' as a nickname. I'm a passionate developer who just simply love to code. I first started coding as a hobby, as interest within the programming grew I'd decided to make programming to become a full-time profession. As much as I love programming I also enjoying outdoor avtivity, meditation and constantly learning new stuff.",
  eMail: false,
  hrefEmail: null,
};

export const homeObjTwo = {
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
  topLine: "if (softSkills === hardSkills) return true;",
  headLine: "SKILLS & TOOLS",
  description:
    "HTML, CSS, JavaScript, React, Redux, Sass, styled-components, SEO, UX/UI, VSCode, Adobe XD, Lightroom, Photoshop",
  eMail: false,
  hrefEmail: null,
};

export const homeObjThree = {
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
  headLine: "Let's collaborate",
  description:
    "I'm seeking out opportunities to collaborate with companies, agencies or individuals. I'll like to bring my skills to the table where we can work together.",
  eMail: true,
  hrefEmail: "mailto:top_hestmark@yahoo.no?subject=Hi!",
};
