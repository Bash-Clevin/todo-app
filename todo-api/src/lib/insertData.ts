import { todos } from "../interfaces/todos.js";
import postgresPool from "./createPgClient.js";
import redisClient from "./createRedisClient.js";

export async function insertToRedis(params: todos) {
  try {
    await redisClient.set(params.key, params.title);
    console.log(`Added Todo: [${params.title}] to cache`);
  } catch (error) {
    console.log("Could not cache to redis", error);
  }
}

export async function insertToPostgres(params: todos, query: string) {
  try {
    await postgresPool.query(query, [params.title]);
    console.log(`Added Todo: [${params.title}] to postgres DB`);
  } catch (error) {
    console.log("Error inserting data to postgres", error);
  } finally {
    console.log("Connection ended");
  }
}
