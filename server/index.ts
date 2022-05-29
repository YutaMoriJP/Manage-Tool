import express from "express";
import next from "next";
import Middleware from "./middleware";

import type { Request, Response } from "express";

const port = parseInt(process.env.PORT as string, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  const middleware = new Middleware(server);

  // Initialize middleware like json body parse, etc.
  middleware.init();

  server.all("*", (req: Request, res: Response) => {
    return handle(req, res);
  });

  server.listen(port, () => {
    console.log(`Running on port: ${port}`);
  });
});
