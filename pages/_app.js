import { ThemeProvider } from "styled-components";
import { Layout } from "../components/common";
import { GlobalStyle, Theme } from "../styles";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
