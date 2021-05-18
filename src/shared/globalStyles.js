import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'IBM Plex Sans', sans-serif;
  }

  body::-webkit-scrollbar {
    display: none;
  }

  body {
    background-color: ${(props) => props.theme.colors.lightBg};
  }
  
`;
