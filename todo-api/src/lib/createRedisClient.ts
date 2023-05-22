import { createClient } from "redis";
import env from "./env.js";

const redisClient = createClient({ url: `redis://${env.redisHost}` });

redisClient.connect();
redisClient.on("connect", () => console.log("Redis client connected"));
redisClient.on("error", (err) => console.log("Redis Client Error", err));

export default redisClient;
