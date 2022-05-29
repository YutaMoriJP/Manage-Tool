import express from "express";

import type { Express } from "express";

class MiddleWare {
  private express: Express;

  constructor(express: Express) {
    this.express = express;
  }

  parseJson() {
    this.express.use(express.json());
  }

  parseUrlEncoded() {
    this.express.use(express.urlencoded({ extended: true }));
  }

  init() {
    this.parseJson();
    this.parseUrlEncoded();
  }
}

export default MiddleWare;
