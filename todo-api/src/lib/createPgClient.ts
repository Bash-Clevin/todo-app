import pg from "pg";
import env from "./env.js";

const { Client } = pg;

const postgresClient = new Client({
  user: env.postgresUser,
  host: env.postgresHost,
  port: Number(env.postgresPort),
  database: env.postgresDatabase,
  password: env.postgresPassword,
});

try {
  postgresClient.connect();
  console.log("Connected to PostgreSQL");
} catch (error) {
  console.error("Failed to connect to PostgreSQL", error);
}

export default postgresClient;
