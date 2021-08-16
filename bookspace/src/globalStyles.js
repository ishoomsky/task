import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    padding: 0;
    margin: 0;
  }
  
  h1, h2, h3, h4, h5, h6,
  p, ul, ol, li {
    font-weight: normal;
    font-style: normal;
    padding: 0;
    margin: 0;
  }
  figure, figcaption {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
