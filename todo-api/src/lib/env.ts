const env = {
  postgresHost: process.env.POSTGRES_HOST,
  postgresPort: process.env.POSTGRES_PORT,
  postgresDatabase: process.env.POSTGRES_DATABASE,
  postgresUser: process.env.POSTGRES_USER,
  postgresPassword: process.env.POSTGRES_PASSWORD,
  redisUrl: process.env.REDIS_URL,
  elasticHost: process.env.ELASTICSEARCH_HOST,
  elasticPort: process.env.ELASTICSEARCH_PORT,
};

export default env;
