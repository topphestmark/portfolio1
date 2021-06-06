import arkanoid from "../../images/icons/arkanoid.svg";
import candlestick from "../../images/icons/candlestick.svg";
import vaccine from "../../images/icons/vaccine.svg";
import shopping from "../../images/icons/shopping.svg";
import social_media from "../../images/icons/social-media.svg";
import startup from "../../images/icons/startup.svg";
import stock from "../../images/icons/stock.svg";
import streaming from "../../images/icons/streaming.svg";

export const projects = [
  {
    id: "1",
    icon: arkanoid,
    title: "Arkanoid Game",
    description: "Desktop 2D web game with a basic layout.",
    stack: ["Typescript", "HTML", "CSS"],
    link: "https://arkanoid-game-2d.netlify.app/",
  },
  {
    id: "2",
    icon: candlestick,
    title: "Crypto Chart",
    description: "Top 100 cryptocurrency chart per current market.",
    stack: ["NextJS", "CSS", "Coingecko API"],
    link: "https://crypto-coin-chart.netlify.app/",
  },
  {
    id: "3",
    icon: startup,
    title: "SpaceX Missions",
    description: "SpaceX rocket launch schedule and countdown.",
    stack: ["HTML", "CSS", "Javascript"],
    link: "https://topphestmark.github.io/spacex-missions/index.html",
  },
  {
    id: "4",
    icon: shopping,
    title: "E Commerce",
    description: "E-commerce app with Commerce.js CMS and Stripe.",
    stack: ["ReactJS", "Commerce.js", "Stripe", "Material-UI"],
    link: "https://e-shop-dbc41.web.app/",
  },
  {
    id: "5",
    icon: social_media,
    title: "Dev Connector",
    description: "Full-stack social media application for developers.",
    stack: ["ReactJS", "NodeJS", "Express", "MongoDB", "Redux"],
    link: "https://dev-connector-vs-555.herokuapp.com/",
  },
  {
    id: "6",
    icon: vaccine,
    title: "Covid Vaccines Tracker",
    description: "Covid-19 vaccines tracker web app.",
    stack: ["NextJS", "Styled-components", "Typescript", "Rechart"],
    link: "https://covid-vaccines-tracker.netlify.app/",
  },
  {
    id: "7",
    icon: streaming,
    title: "Netflix TMDB",
    description:
      "All the others do and nobody ever gets punished for doing so.",
    stack: ["ReactJS", "Styled-components", "Firebase", "Axios", "TMDb"],
    link: "https://netflix-tmdb.firebaseapp.com",
  },
  {
    id: "8",
    icon: stock,
    title: "TBA",
    description:
      "All the others do and nobody ever gets punished for doing so.",
    stack: ["HTML", "CSS", "Javascript"],
    link: "/",
  },
];
