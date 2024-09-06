import fp from "fastify-plugin";
import fastifyEnv from "@fastify/env";

export default fp(
  async function configLoader(fastify, opts) {
    await fastify.register(fastifyEnv, {
      confKey: "secrets",
      schema: fastify.getSchema("schema:dotenv"),
    });
  },
  { name: "application-config" },
);
