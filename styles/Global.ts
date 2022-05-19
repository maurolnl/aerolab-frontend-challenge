import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    font-family: 'Montserrat';
    padding: 0;
    margin: 0;
}

  a {
    color: inherit;
    text-decoration: none;
  }

  p {
    margin-block-start: 0;
    margin-block-end: 0;
  }

  * {
    box-sizing: border-box;
  }


`;
