import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  @import url(https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900);
  body {
    font-family: Roboto, sans-serif;
  }

  body.fontLoaded {
    font-family: "Open Sans", Roboto, sans-serif;
  }

  #app {
    background-color: #fff;
    min-height: 100%;
    min-width: 100%;
  }

  *{
    margin: 0;
  padding: 0;
  }

  button,a{
    outline: none;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;
