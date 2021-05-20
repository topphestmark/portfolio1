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
    line-height: 1.625;
    font-size: 1.125rem;
    max-width: 1920px;

    @media screen and (max-width: 768px) {
          font-size: 0.975rem;
    }
  }

  
`;
