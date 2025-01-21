import express, { Request, Response } from "express";
import { Random } from "random-js";
import { MinMaxNumbers, RandomNumberResponse } from "../types.js";
import { parseValue } from "../utils/parseValue.js";

const apiRouter = express.Router();

apiRouter.post(
  "/generate-random-number",
  (
    req: Request<unknown, unknown, MinMaxNumbers>,
    res: Response<RandomNumberResponse>
  ) => {
    const { min, max } = req.body;
    const parsedMin = parseValue(min);
    const parsedMax = parseValue(max);

    if (parsedMin == null || parsedMax == null || parsedMin > parsedMax) {
      res.status(400).send({
        error: `Invalid paramers: min: ${parsedMin}, max: ${parsedMax}`,
      });
      return;
    }
    const result = new Random().integer(parsedMin, parsedMax);
    res.send({ randomNumber: result });
  }
);

export default apiRouter;
