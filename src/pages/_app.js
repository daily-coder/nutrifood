import CartProvider from "../components/CartProvider";
import GlobalStyles from "../components/GlobalStyles";
import Layout from "../components/Layout";
import StyleVariables from "../components/StyleVariables";

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Layout>
        <StyleVariables />
        <GlobalStyles />
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
}

export default MyApp;
