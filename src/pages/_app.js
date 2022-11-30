import StyleVariables from "../components/StyleVariables";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <StyleVariables />
    </>
  );
}

export default MyApp;
