import { NextApiRequest, NextApiResponse } from "next";

import ARTICLES from "../../../data/articles";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json(ARTICLES);
}
