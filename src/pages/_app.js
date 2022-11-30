import GlobalStyles from "../components/GlobalStyles";
import StyleVariables from "../components/StyleVariables";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <StyleVariables />
      <GlobalStyles />
    </>
  );
}

export default MyApp;
