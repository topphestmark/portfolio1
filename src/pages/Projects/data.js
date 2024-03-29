import beer from "../../images/icons/beer.svg";
import vaccine from "../../images/icons/vaccine.svg";
import shopping from "../../images/icons/shopping.svg";
import social_media from "../../images/icons/social-media.svg";
import startup from "../../images/icons/startup.svg";
import stock from "../../images/icons/stock.svg";
// import streaming from "../../images/icons/streaming.svg";
import online_shopping from "../../images/icons/online-shopping.svg";
import hotel from "../../images/icons/hotel.svg";

export const projects = [
  {
    id: "1",
    icon: beer,
    title: "Barfinder",
    description: "Find the bar nearby with Google Maps location services.",
    stack: ["Typescript", "ReactJS", "Styled-components"],
    link: "https://barfinder-317409.web.app/",
  },
  {
    id: "2",
    icon: stock,
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
    stack: ["ReactJS", "NodeJS", "Express", "MongoDB", "Redux", "Bootstrap"],
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
    icon: hotel,
    title: "Holidaze Booking",
    description: "Hotel booking website.",
    stack: [
      "ReactJS",
      "Styled-components",
      "Typescript",
      "Material-UI",
      "Strapi",
    ],
    link: "https://holidaze-inn.web.app/",
  },
  {
    id: "8",
    icon: online_shopping,
    title: "Nordic Swag",
    description: "Vanilla javascript e-commerce project.",
    stack: ["HTML", "Sass", "Javascript", "Strapi"],
    link: "https://nordic-swag.netlify.app/index.html",
  },
];
