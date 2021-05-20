// eslint-disable-next-line import/no-anonymous-default-export
export default {
  colors: {
    primary: "#29b9f2",
    dark: "#000",
    dark2: "#0d0d0d",
    light1: "#fff",
    border: "#e0e1e2",
  },
  slideTop: {
    firstAnimation:
      "slide-top 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.1s both",
    secondAnimation:
      "slide-top 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s both",
    keyframes: `@keyframes slide-top {
      0% 
      {
        transform: translateY(70px);
        opacity: 0;
      }
      100% 
      {
        transform: translateY(0px);
        opacity: 1;
      }`,
  },
};
