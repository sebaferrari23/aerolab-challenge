import { createGlobalStyle, ThemeProvider } from "styled-components";
import { normalize } from "styled-normalize";
import Layout from "../components/Layout";

const GlobalStyle = createGlobalStyle`
  ${normalize}
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;0,900;1,600&display=swap');
`;

const theme = {
  colors: {
    primary: "#176FEB",
    secondary: "#FF80FF",
    background: "#FFF",
  },
  fonts: {
    primary: "Montserrat, sans-serif",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
