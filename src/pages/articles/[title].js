import styled from "styled-components";

import Meta from "../../components/Meta";
import ARTICLES from "../../data/articles";

const ArticleWrapper = styled.div`
  max-width: 800px;
  margin: var(--space-128) auto;
  padding: 0 var(--space-16);
  font-size: var(--font-size-20);
`;

const Heading1 = styled.h1`
  text-transform: capitalize;
  text-align: center;
  margin-bottom: var(--space-48);
`;

const Heading2 = styled.h2`
  text-transform: capitalize;
  text-align: left;
`;

const Article = styled.article`
  letter-spacing: 1px;
`;

function ArticleItem({ title, about, nutrition }) {
  return (
    <>
      <Meta title={title} description={`information about ${title}`} />
      <ArticleWrapper>
        <Article>
          <Heading1>{title}</Heading1>
          <Heading2>about</Heading2>
          <p>{about}</p>
          <Heading2>Nutrition</Heading2>
          <p>{nutrition}</p>
        </Article>
      </ArticleWrapper>
    </>
  );
}

export default ArticleItem;

export async function getStaticProps(context) {
  const article = ARTICLES.find(
    (article) => article.title === context.params.title
  );

  return {
    props: {
      ...article,
    },
  };
}

export async function getStaticPaths() {
  const paths = ARTICLES.map((article) => ({
    params: { title: article.title },
  }));

  return {
    paths,
    fallback: false,
  };
}
