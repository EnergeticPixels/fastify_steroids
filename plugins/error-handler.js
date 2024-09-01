import fp from "fastify-plugin";

export default fp(async function errorHandlerPlugin(fastify, opts) {
  fastify.setErrorHandler((err, req, reply) => {
    if (reply.statusCode >= 500) {
      req.log.error({ req, res: reply, err }, err?.message);
      const error = new Error(`Fatal error. Contact the support team with the id ${req.id}`);
      reply.send(error);
      return;
    }
    req.log.info({ req, res: reply, err }, err?.message);
    reply.send(err);
  });
});
