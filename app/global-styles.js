import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: Roboto, sans-serif;
  }

  body.fontLoaded {
    font-family: "Open Sans", Roboto, sans-serif;
  }

  #app {
    background-color: #F9F9F9;
    min-height: 100%;
    min-width: 100%;
  }

  *{
    margin: 0;
  padding: 0;
  }

    button, a, input, textarea{
    text-decoration: none;
    outline: none;
  }
`;

export default GlobalStyle;
