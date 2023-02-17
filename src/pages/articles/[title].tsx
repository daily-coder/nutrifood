import { GetStaticProps, GetStaticPaths } from "next";
import styled from "styled-components";

import server from "../../../config";
import Meta from "../../components/Meta";

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

interface Article {
  id: string;
  title: string;
  about: string;
  nutrition: string;
}

function ArticleItem({ title, about, nutrition }: Omit<Article, "id">) {
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

export const getStaticProps: GetStaticProps = async function (context) {
  if (!context.params) {
    throw new Error("context.params is undefined");
  }
  const response = await fetch(
    `${server}/api/articles/${context.params.title}`
  );
  const article = await response.json();

  return {
    props: {
      ...article,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async function () {
  const response = await fetch(`${server}/api/articles`);
  const articles: Article[] = await response.json();
  const paths = articles.map((article) => ({
    params: { title: article.title },
  }));

  return {
    paths,
    fallback: false,
  };
};
