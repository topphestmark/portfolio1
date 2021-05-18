import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'IBM Plex Sans', sans-serif;
  }

  html {
    display: flex;
    justify-content: center;
  }

  body::-webkit-scrollbar {
    display: none;
  }

  body {
    width: 100%;
    max-width: 1920px;
    background-color: ${(props) => props.theme.colors.lightBg};
  }
  
`;
