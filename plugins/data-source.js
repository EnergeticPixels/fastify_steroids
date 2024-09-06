import fp from "fastify-plugin";
import fastifyDataSource from "@fastify/mongodb";

export default fp(
  async (fastify, opts) => {
    // fastify.register(fastifyDataSource, opts.mongo);
    fastify.register(fastifyDataSource, {
      url: fastify.secrets.DB_HOST,
      forceClose: true,
    });
  },
  {
    dependencies: ["application-config"],
  },
);
