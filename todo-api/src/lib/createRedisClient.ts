import { createClient } from "redis";
import env from "./env.js";

const redisClient = createClient({ url: "redis://172.17.0.2" });

redisClient.connect();
redisClient.on("connect", () => console.log("Redis client connected"));
redisClient.on("error", (err) => console.log("Redis Client Error", err));

export default redisClient;
