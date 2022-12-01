import Head from "next/head";

function Meta({ title, description }) {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <title>{title}</title>
    </Head>
  );
}

Meta.defaultProps = {
  title: "NutriFood",
  description:
    "Get quality fresh fruits, vegetables, nuts and more at great price. Free shipping available.",
};

export default Meta;
