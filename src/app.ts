import cors from "cors";
import dotenv from "dotenv";
import express from "express";

dotenv.config();
const app = express();
app
  .use(cors())
  .use(express.json())
  .get("/test", (_req, res) => res.send("OK!"));

export default app;
