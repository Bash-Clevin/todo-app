import Express from "express";
import { todos } from "../interfaces/todos.js";
import { insertToPostgres, insertToRedis } from "../lib/insertData.js";
import redisClient from "../lib/createRedisClient.js";
import postgresPool from "../lib/createPgClient.js";
const app = Express();
const router = Express.Router();
const searchIndexName = "todos";
const searchIndexType = "todo";

router.route("/api/v1/todos").post(async (req, res) => {
  const { data } = req.body;
  const todoTitle: todos = {
    key: "todos",
    title: data,
  };

  const query = "INSERT INTO todo (title) VALUES($1)";
  console.log("Called Post api/v1/todos");
  console.log(todoTitle);

  await insertToRedis(todoTitle);

  await insertToPostgres(todoTitle, query);

  res.status(201).send(req.body);
});

router.route("/api/v1/todos").get(async (req, res) => {
  let todos: any[] = [];
  const cachedTodoSet = await redisClient.sMembers("todos");
  if (cachedTodoSet == null) {
    postgresPool.query("SELECT title FROM todo", (error, todoRows) => {
      if (error) {
        throw error;
      }
      todos = todoRows.rows;
      console.log("todos from Postgres", todos);
      res.send(todos);
    });
  } else {
    cachedTodoSet.forEach((member) => {
      todos.push(member);
    });
    console.log("Got todos from Redis cache");
    res.send(todos);
  }
});

router.route("/api/v1/search").post(async (req, res) => {});

export default router;
