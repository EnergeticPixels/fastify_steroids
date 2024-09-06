import fp from 'fastify-plugin';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUI from '@fastify/swagger-ui';
import pkg from '../package.json' assert { type: 'json' };


export default fp(async (fastify, opts) => {
  fastify.register(fastifySwagger, {
    openapi: {
      info: {
        title: 'Fastify app',
        description: 'Fastify with SwaggerUI',
        version: pkg.version,
        license: pkg.license,
        contact: {
          name: pkg.author
        }
      },
      servers: [{
        url: `http://localhost:${fastify.secrets.FASTIFY_PORT}`,
      }]
    },
    exposeRoute: true,
  });
  fastify.register(fastifySwaggerUI, {
    routePrefix: '/docs',
    exposeRoute: fastify.secrets.NODE_ENV !== 'production'
  })

}, { dependencies: ['application-config'] } );
