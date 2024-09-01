import fp from "fastify-plugin";
import fastifyEnv from "@fastify/env";

const schema = {
  type: "object",
  required: ["PORT", "DB_HOST"],
  properties: {
    PORT: {
      type: "string",
      default: 3000,
    },
    DB_HOST: {
      type: "string",
    },
  },
};

export default fp(
  async function configLoader(fastify, opts) {
    await fastify.register(fastifyEnv, {
      confKey: "secrets",
      schema: fastify.getSchema('schema:dotenv')
      // schema: schema,
    });
    fastify.decorate('config', {
      mongo: {
        forceClose: true,
        url: fastify.secrets.DB_HOST,
      }
    })
  });
