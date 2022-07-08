import * as express from "express";
import * as cors from "cors";
import { MainRouter } from "./route/routes";

import { Config } from "./util/config";
import { DIProvider } from "./util/di.provider";
import { v4 as uuidv4 } from "uuid";

const app = express();

const port = process.env.PORT || 9000;

const diprovider = DIProvider.getInstance();

app.listen(port, () => {
  console.info(`[INIT] Running environment: ${Config.ENV}`);
  console.info(`[INIT] Listening on port: ${port}`);
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("You have reached the API endpoint.");
});

app.use("/", MainRouter);
