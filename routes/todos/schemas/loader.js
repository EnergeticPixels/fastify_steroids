import fp from "fastify-plugin";
import todoSchema from "./todo.json" with { type: "json" };
import listResponseSchema from "./list-response.json" with { type: "json" };
import listQuerySchema from "./list-query.json" with { type: "json" };
import createBodySchema from "./create-body.json" with { type: "json" };
import createResponseSchema from "./create-response.json" with { type: "json" };
import updateBodySchema from "./update-body.json" with { type: "json" };
import readParamsSchema from "./read-params.json" with { type: "json" };
import statusParamsSchema from "./status-params.json" with { type: "json" };

export default fp(async function schemaLoaderPlugin(fastify, opts) {
  fastify.addSchema(todoSchema);
  fastify.addSchema(listResponseSchema);
  fastify.addSchema(listQuerySchema);
  fastify.addSchema(createBodySchema);
  fastify.addSchema(createResponseSchema);
  fastify.addSchema(updateBodySchema);
  fastify.addSchema(readParamsSchema);
  fastify.addSchema(statusParamsSchema);
});
