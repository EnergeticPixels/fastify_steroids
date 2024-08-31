import fp from "fastify-plugin";
import sensible from "@fastify/sensible";

/**
 * This plugins adds some utilities to handle http errors
 *
 * @see https://github.com/fastify/fastify-sensible
 */
export default fp(async function (fastify, opts) {
  console.info("Registering sensible plugin");
  await fastify.register(sensible, {
    errorHandler: false,
  });
});
