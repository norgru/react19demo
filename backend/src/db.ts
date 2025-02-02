import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER || "myuser",
  host: process.env.DB_HOST || "localhost",
  database: process.env.DB_NAME || "mydatabase",
  password: String(process.env.DB_PASSWORD || "mypassword"),
  port: Number(process.env.DB_PORT) || 5432,
});

export default pool;
