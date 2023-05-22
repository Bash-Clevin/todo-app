import { Client } from "@elastic/elasticsearch";
import env from "./env.js";

const elasticClient = new Client({
  node: `http://${env.elasticHost}:${env.elasticPort}`,
});

try {
  elasticClient.ping({});
  console.log("Elastic search client is running");
} catch (error) {
  console.log(error);
}

export default elasticClient;
