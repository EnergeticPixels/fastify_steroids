import fp from "fastify-plugin";
import todoSchema from "./todo.json" assert { type: "json" };
import listResponseSchema from "./list-response.json" assert { type: "json" };
import listQuerySchema from "./list-query.json" assert { type: "json" };
import createBodySchema from "./create-body.json" assert { type: "json" };
import createResponseSchema from "./create-response.json" assert { type: "json" };
import updateBodySchema from "./update-body.json" assert { type: "json" };
import readParamsSchema from "./read-params.json" assert { type: "json" };
import statusParamsSchema from "./status-params.json" assert { type: "json" };

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
