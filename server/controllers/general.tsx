import type { NextApiRequest, NextApiResponse } from "next";

// TODO remove
const MOCK_DATA = [
  { id: "0", name: "A" },
  { id: "1", name: "B" }
];

const getListGeneralController = async (req: NextApiRequest, res: NextApiResponse) => {
  return res.json({ success: true });
};

const getGeneralController = async (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query.id;

  // TODO move business logic to service
  const general = MOCK_DATA.find((data) => data.id === id);

  return res.status(200).json({ success: true, ...general });
};

const postGeneralController = async (req: NextApiRequest, res: NextApiResponse) => {
  return res.status(201).json({ success: true });
};

const putGeneralController = async (req: NextApiRequest, res: NextApiResponse) => {
  return res.status(201).json({ success: true });
};

const deleteGeneralController = async (req: NextApiRequest, res: NextApiResponse) => {
  return res.status(200).json({ success: true });
};

export default {
  GET_ID: getGeneralController,
  GET: getListGeneralController,
  POST: postGeneralController,
  PUT: putGeneralController,
  DELETE: deleteGeneralController
};
