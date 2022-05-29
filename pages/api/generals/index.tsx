import GENERAL_CONTROLLER from "@/server/controllers/general";
import METHODS from "@/data/methods";

import type { NextApiRequest, NextApiResponse } from "next";
import type { ResData } from "@/typings/apiGeneral";

export default function handler(req: NextApiRequest, res: NextApiResponse<ResData>) {
  const { method } = req;

  if (METHODS.some((v) => v === method)) GENERAL_CONTROLLER[method as typeof METHODS[number]](req, res);

  res.status(400).json({ success: false, message: "Something went wrong" });
}
