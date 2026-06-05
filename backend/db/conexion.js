import { createPool } from "mariadb";
import "dotenv/config";

export const pool = createPool({
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: process.env.PASSWORD,
  database: process.env.DB,
  port: process.env.DB_PORT,
});
