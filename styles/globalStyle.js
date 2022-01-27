import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";
import Theme from "./theme";

const GlobalStyle = createGlobalStyle`
  // Import normalize
  ${normalize}

  // Reset styles
  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: normal;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
    font-style: normal;
    margin: 0
  }

  body {
    font-family: ${Theme.fonts.main};
    color: ${Theme.colors.darkGray};
  }

`;

export default GlobalStyle;