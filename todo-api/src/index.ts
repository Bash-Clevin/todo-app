import Express from "express";
import bodyParser from "body-parser";
import router from "./routes/routes.js";
import cors from "cors";

const app = Express();

const port = 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

app.listen(port, () => {
  console.log(`Todo API server started on port ${port}`);
});
