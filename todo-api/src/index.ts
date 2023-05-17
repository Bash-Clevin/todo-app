import Express from "express";
import router from "./routes/routes.js";
const app = Express();

const port = 3000;
app.use(router);

app.listen(port, () => {
  console.log(`Todo API server started on port ${port}`);
});
