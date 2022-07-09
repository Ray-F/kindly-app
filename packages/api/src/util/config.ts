import * as dotenv from "dotenv";

dotenv.config();

export enum Environment {
  DEV = "DEV",
  PROD = "PROD"
}

export const Config = {
  MONGO_URI: process.env.MONGO_URI,
  ENV: Environment.DEV,

  SLACK_BOT_TOKEN: process.env.SLACK_BOT_TOKEN,
  SLACK_SIGNING_SECRET: process.env.SLACK_SIGNING_SECRET
}