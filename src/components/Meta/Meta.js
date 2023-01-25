import Head from "next/head";
import propTypes from "prop-types";

function Meta({ title, description }) {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <link rel="icon" type="image/svg+xml" href="/svg/favicon.svg" />
      <title>{title}</title>
    </Head>
  );
}

Meta.defaultProps = {
  title: "NutriFood",
  description:
    "Get quality fresh fruits, vegetables, nuts and more at great price. Free shipping available.",
};

Meta.propTypes = {
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
};

export default Meta;
