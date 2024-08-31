"use strict";

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
  async function configLoader(fastify, opts, next) {
    await fastify.register(fastifyEnv, {
      confKey: "secrets",
      // schema: fastify.getSchema('schema:dotenv')
      schema: schema,
    });
    next();
  },
  { name: "application-config" },
);
