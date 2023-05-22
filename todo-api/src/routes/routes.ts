import Express from "express";
import { todos } from "../interfaces/todos.js";
import {
  insertToPostgres,
  insertToRedis,
  updateElasticSearch,
} from "../lib/insertData.js";
const app = Express();
const router = Express.Router();
const searchIndexName = "todos";
const searchIndexType = "todo";

router.route("/api/v1/todos").post(async (req, res) => {
  const todoTitle: todos = {
    key: "todo",
    title: req.body.value,
  };

  const query = "INSERT INTO todo (title) VALUES($1)";
  console.log("Called Post api/v1/todos");

  await insertToRedis(todoTitle);

  await insertToPostgres(todoTitle, query);

  await updateElasticSearch(searchIndexName, todoTitle);

  res.status(201).send(req.body);
});

router.route("/api/v1/todos").get(async (req, res) => {});

router.route("/api/v1/search").post(async (req, res) => {});

export default router;
