/* eslint-disable no-undef */
import fp from "fastify-plugin";
import dotenv from "./dotenv.json" with { type: "json" };
import limitSchema from "./limit.json" with { type: "json" };
import skipSchema from "./skip.json" with { type: "json" };

export default fp(
  async function (fastify, opts) {
    fastify.addSchema(dotenv);
    fastify.addSchema(limitSchema);
    fastify.addSchema(skipSchema);

    // next();
  },
  { name: "application-schemas" },
);
