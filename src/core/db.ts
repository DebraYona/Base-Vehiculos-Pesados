import { Client, Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

export const connectDb = new Client({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  port: Number(process.env.PGPORT!),
});

export const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  port: Number(process.env.PGPORT!),
});
