import fp from "fastify-plugin";
/* eslint-disable no-undef */
import registerSchema from "./register.json" with { type: "json" };
import tokenHeaderSchema from "./token-header.json" with { type: "json" };
import tokenSchema from "./token.json" with { type: "json" };
import userSchema from "./user.json" with { type: "json" };

export default fp(async function schemaLoaderPlugin(fastify, opts) {
  fastify.addSchema(registerSchema);
  fastify.addSchema(tokenHeaderSchema);
  fastify.addSchema(tokenSchema);
  fastify.addSchema(userSchema);
});
