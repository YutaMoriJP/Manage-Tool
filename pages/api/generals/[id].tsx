import GENERAL_CONTROLLER from "@/server/controllers/general";

import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  GENERAL_CONTROLLER.GET_ID(req, res);
}
