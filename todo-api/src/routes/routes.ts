import Express from "express";
const app = Express();
const router = Express.Router();

router.route("/api/v1/todos").get(async (req, res) => {
  console.log("Called Get api/v1/todos");
  res.setHeader("Content-Type", "application/json");
});

export default router;
