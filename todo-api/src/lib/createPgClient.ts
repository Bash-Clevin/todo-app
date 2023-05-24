import pg from "pg";
import env from "./env.js";

const { Pool } = pg;

const postgresPool = new Pool({
  connectionString: env.postgresDbUrl,
});

export default postgresPool;
