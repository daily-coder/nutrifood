import { NextApiRequest, NextApiResponse } from "next";

import ARTICLES from "../../../data/articles";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { title } = req.query;
  const article = ARTICLES.find((article) => article.title === title);

  if (!article) {
    res
      .status(404)
      .json({ message: `article with the title of ${title} is not found` });
  }

  res.status(200).json(article);
}
