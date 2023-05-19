import { Client } from "@elastic/elasticsearch";

const elasticClient = new Client({
  node: "elasticsearch://172.17.0.3:9200",
});

try {
  elasticClient.ping({});
  console.log("Elastic search client is running");
} catch (error) {
  console.log(error);
}

export default elasticClient;
