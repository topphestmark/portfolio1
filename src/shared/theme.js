// eslint-disable-next-line import/no-anonymous-default-export
export default {
  colors: {
    primary: "#29b9f2",
    dark1: "#010606",
    dark2: "#000",
    dark3: "#0d0d0d",
    dark4: "#0c0c0c",
    light1: "#fff",
    lightBg: "#f1f2f2",
    formBg: "#010101",
  },
  slideTop: {
    firstAnimation:
      "slide-top 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s both",
    secondAnimation:
      "slide-top 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s both",
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
