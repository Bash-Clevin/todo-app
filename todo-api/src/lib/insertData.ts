import { todos, elasticProperies } from "../interfaces/todos.js";
import elasticClient from "./createElasticSearchClient.js";
import postgresClient from "./createPgClient.js";
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
    await postgresClient.query(query, [params.title]);
    console.log(`Added Todo: [${params.title}] to postgres DB`);
  } catch (error) {
    console.log("Error inserting data to postgres", error);
  }
}

export async function updateElasticSearch(
  params: elasticProperies,
  data: todos
) {
  try {
    await elasticClient.index({
      index: params.index,
      document: { todotext: data.title },
    });
  } catch (error) {
    console.log(`Coluld not index ${data.title}`, error);
  }
}
