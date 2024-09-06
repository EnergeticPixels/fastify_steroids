import fp from "fastify-plugin";
import fastifyCors from "@fastify/cors";

export default fp(async function corsPlugin(fastify, opts) {
  fastify.register(fastifyCors, {
    origin: false,
  });
});
