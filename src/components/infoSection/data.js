import profilePic from "../../images/profile_image.jpg";
import svg2 from "../../images/code.svg";
import svg3 from "../../images/collaborate.svg";

export const aboutSection = {
  id: "about",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  dark: false,
  primary: false,
  darkText: true,
  imgStart: false,
  image: profilePic,
  profileImg: true,
  alt: "Topp Hestmark",
  topLine: "About me",
  headLine: "Front-end Developer",
  description:
    "My name is Suphachai Hestmark, or 'Top' as a nickname. I'm a passionate developer who just simply love to code. I first started coding as a hobby, as interest within the programming grew I'd decided to make programming to become a full-time profession. As much as I love programming I also enjoying outdoor avtivity, meditation and constantly learning new stuff.",
  buttonLabel: "Get started",
};

export const homeObjTwo = {
  id: "skills",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  dark: false,
  primary: false,
  darkText: true,
  imgStart: true,
  image: svg2,
  profileImg: false,
  alt: "Piggy bank",
  topLine: "Skills",
  headLine: "(soft === hard) return true;",
  description:
    "I do believe that soft skills matter as much as hard skills. Being good with human and writing clean code increase will take one further.",
  buttonLabel: "Learn More",
};

export const homeObjThree = {
  id: "contact",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  dark: false,
  primary: false,
  darkText: true,
  imgStart: false,
  image: svg3,
  profileImg: false,
  alt: "Receip",
  topLine: "Contact",
  headLine: "Let's collaborate",
  description:
    "Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",
  buttonLabel: "Start Now",
};
