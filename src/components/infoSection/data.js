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
  topLine: "About me",
  headLine: "Front-end Developer",
  description:
    "My name is Suphachai Hestmark, or 'Top' as a nickname. I'm a passionate developer who just simply love to code. I first started coding as a hobby, as interest within the programming grew I'd decided to make programming to become a full-time profession. As much as I love programming I also enjoying outdoor avtivity, meditation and constantly learning new stuff.",
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
  alt: "Piggy bank",
  topLine: "Skills",
  headLine: "if (soft === hard) {return true;}",
  description:
    "I do believe that soft skills matter as much as hard skills. Being good with human and writing clean code increase will take one further.",
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
  alt: "Receip",
  topLine: "Contact",
  headLine: "Let's collaborate",
  description:
    "Email me at top_hestmark@yahoo.no or call +47 942 38 520 for an arrangement.",
};
