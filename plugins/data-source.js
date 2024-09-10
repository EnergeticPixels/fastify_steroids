import fp from "fastify-plugin";
import fastifyDataSource from "@fastify/mongodb";

export default fp(
  async function datasourcePlugin(fastify, opts) {
    const dbUrl = `mongodb+srv://${fastify.secrets.DB_USER}:${fastify.secrets.DB_PWORD}@${fastify.secrets.DB_HOST}/${fastify.secrets.DB_NAME}`;
    // fastify.register(fastifyDataSource, opts.mongo);
    await fastify.register(fastifyDataSource, {
      url: dbUrl,
      // url: "mongodb+srv://MonkeyButt:ywPU5WWjObV0CMPv@fastify1.5t6nr.mongodb.net/fastify1",
      forceClose: true,
    });
    // await fastify.mongo.client.connect();
  },
  {
    dependencies: ["application-config"],
  },
);
