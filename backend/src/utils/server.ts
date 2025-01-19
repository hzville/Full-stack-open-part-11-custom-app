import express from "express";
import cors from "cors";
import apiRouter from "../routes/apiRoutes.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", apiRouter);
app.use(express.static("dist/frontend-build"));

app.get("/healthz", (_req, res) => {
  res.sendStatus(200);
});

export default app;
