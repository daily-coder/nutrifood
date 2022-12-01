import GlobalStyles from "../components/GlobalStyles";
import Layout from "../components/Layout";
import StyleVariables from "../components/StyleVariables";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <StyleVariables />
      <GlobalStyles />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
