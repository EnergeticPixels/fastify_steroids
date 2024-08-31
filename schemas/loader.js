import fp from "fastify-plugin";
import dotenv from "./dotenv.json" assert { type: "json" };
// import userInputSchema from './userInputSchema.js';

export default fp(async function (fastify, opts, next) {
  fastify.addSchema(dotenv);
});
