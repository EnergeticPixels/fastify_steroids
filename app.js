"use strict";

import path from "node:path";
import { fileURLToPath } from "url";
import AutoLoad from "@fastify/autoload";

import serverOptions from "./configs/server-options.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default async function (fastify, opts) {
  // Place here your custom code!

  // Do not touch the following lines

  // This loads all of the schemas defined in schemas
  // define your schemas in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, "schemas"),
    indexPattern: /^loader.js$/i,
    // options: {Object.assign({}, opts)},
    options: { ...opts },
  });

  // await fastify.register(import('./configs/config.js'));
  // fastify.log.info('Config loaded %o', fastify.config);

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, "plugins"),
    dirNameRoutePrefix: false,
    ignorePattern: /.*.no-aload\.js/,
    indexPattern: /^no$/i,
    // options: {Object.assign({}, opts)},
    // options: fastify.config,
    options: { ...opts },
  });

  // This loads all plugins defined in routes
  // define your routes in one of these
  // THIS MUST BE THE LAST AUTOLOAD DESIGNATED! VERY IMPORTANT
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, "routes"),
    indexPattern: /.*routes(\.js|.cjs)$/i,
    ignorePattern: /.*\.js/,
    autoHooksPattern: /.*hooks(\.js|\.cjs)$/i,
    autoHooks: true,
    cascadeHooks: true,
    // options: {Object.assign({}, opts)},
    options: { ...opts },
  });
}

export const options = serverOptions;
