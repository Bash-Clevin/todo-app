import Express from "express";
import bodyParser from "body-parser";
import router from "./routes/routes.js";
const app = Express();

const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

app.listen(port, () => {
  console.log(`Todo API server started on port ${port}`);
});
