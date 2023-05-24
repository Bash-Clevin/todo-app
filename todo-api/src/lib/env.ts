const env = {
  redisHost: process.env.REDIS_HOST,
  redisPort: process.env.REDIS_PORT,
  elasticHost: process.env.ELASTICSEARCH_HOST,
  elasticPort: process.env.ELASTICSEARCH_PORT,
  todoClientHost: process.env.TODOCLIENT_HOST,
  todoClientPORT: process.env.TODOCLIENT_PORT,
  postgresDbUrl: `postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`,
};

export default env;
