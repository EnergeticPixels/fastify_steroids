import fp from "fastify-plugin";

import registerSchema from "./register.json" assert { type: "json" };
import tokenHeaderSchema from "./token-header.json" assert { type: "json" };
import tokenSchema from "./token.json" assert { type: "json" };
import userSchema from "./user.json" assert { type: "json" };

export default fp(async function schemaLoaderPlugin(fastify, opts) {
  fastify.addSchema(registerSchema);
  fastify.addSchema(tokenHeaderSchema);
  fastify.addSchema(tokenSchema);
  fastify.addSchema(userSchema);
});
