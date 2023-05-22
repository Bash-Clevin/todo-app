import Express from "express";
import bodyParser from "body-parser";
import router from "./routes/routes.js";
import cors from "cors";
import env from "./lib/env.js";

const app = Express();

const port = 4000;
const corsOptions = {
  origin: `http://${env.todoClientHost}:${env.todoClientPORT}`,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

app.listen(port, () => {
  console.log(`Todo API server started on port ${port}`);
});
