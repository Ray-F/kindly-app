import * as dotenv from "dotenv";

dotenv.config();

export enum Environment {
  DEV = "DEV",
  PROD = "PROD"
}

export const Config = {
  MONGO_URI: process.env.MONGO_URI,
  ENV: Environment.DEV,
}