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
    key: req.body.key,
    title: req.body.title,
  };

  const query = "INSERT INTO todo (title) VALUES($1)";
  console.log("Called Get api/v1/todos");
  res.setHeader("Content-Type", "application/json");

  await insertToRedis(todoTitle);

  await insertToPostgres(todoTitle, query);

  await updateElasticSearch(searchIndexName, todoTitle);

  res.status(201).send(req.body);
});

router.route("/api/v1/todos").post(async (req, res) => {});

router.route("/api/v1/search").post(async (req, res) => {});

export default router;
