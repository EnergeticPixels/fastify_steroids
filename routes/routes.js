export default async function root(fastify, opts) {
  fastify.route({
    method: 'GET',
    url: '/',
    schema: {
      response: {
        200: {
          type: 'object',
          properties: {
            root: { type: 'boolean' }
          }
        }
      }
    },
    handler: async function welcomeHandler(request, reply) {
      return { root: true };
    }
  })
};
