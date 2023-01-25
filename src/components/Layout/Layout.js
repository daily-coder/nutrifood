import propTypes from "prop-types";

import Footer from "../Footer";
import Header from "../Header";

function Layout({ children }) {
  return (
    <>
      <Header />

      {children}

      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: propTypes.node.isRequired,
};

export default Layout;
