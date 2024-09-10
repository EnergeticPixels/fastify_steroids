import fp from "fastify-plugin";
import dotenv from "./dotenv.json" assert { type: "json" };
import limitSchema from "./limit.json" assert { type: "json" };
import skipSchema from "./skip.json" assert { type: "json" };

export default fp(
  async function (fastify, opts, next) {
    fastify.addSchema(dotenv);
    fastify.addSchema(limitSchema);
    fastify.addSchema(skipSchema);

    next();
  },
  { name: "application-schemas" },
);
