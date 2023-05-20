import elasticClient from "./createElasticSearchClient.js";

export async function createElasticSearchIndice(searchIndexName: string) {
  try {
    await elasticClient.indices.create({
      index: searchIndexName,
    });
    console.log("Created a new Elastic index:");
  } catch (error) {
    console.log(error);
  }
}
