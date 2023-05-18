import Express from "express";
import redisClient from "../lib/createRedisClient.js";
const app = Express();
const router = Express.Router();

interface todos {
  key: string;
  title: string;
}

router.route("/api/v1/todos").post(async (req, res) => {
  const todoTitle: todos = {
    key: req.body.key,
    title: req.body.title,
  };
  console.log("Called Get api/v1/todos");
  // res.setHeader("Content-Type", "application/json");

  try {
    await redisClient.set(todoTitle.key, todoTitle.title);
    console.log(`Added Todo: [${todoTitle.title}] to cache`);
    res.status(201).send(req.body);
  } catch (error) {
    console.log("Could not cache to redis", error);
  }
});

router.route("/api/v1/todos").post(async (req, res) => {});

router.route("/api/v1/search").post(async (req, res) => {});

export default router;
