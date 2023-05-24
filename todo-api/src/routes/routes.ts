import Express from "express";
import { todos } from "../interfaces/todos.js";
import { insertToPostgres, insertToRedis } from "../lib/insertData.js";
const app = Express();
const router = Express.Router();
const searchIndexName = "todos";
const searchIndexType = "todo";

router.route("/api/v1/todos").post(async (req, res) => {
  const { data } = req.body;
  const todoTitle: todos = {
    key: "todo",
    title: data,
  };

  const query = "INSERT INTO todo (title) VALUES($1)";
  console.log("Called Post api/v1/todos");
  console.log(todoTitle);

  await insertToRedis(todoTitle);

  await insertToPostgres(todoTitle, query);

  res.status(201).send(req.body);
});

router.route("/api/v1/todos").get(async (req, res) => {});

router.route("/api/v1/search").post(async (req, res) => {});

export default router;
