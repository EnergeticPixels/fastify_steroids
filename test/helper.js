// This file contains code that we reuse
// between our tests.
import * as fcli from "fastify-cli/helper.js";
// import  from '../plugins/data-source.js';
// import fastify from 'fastify';

const startArgs = "-l silent --options app.js";

const defaultEnv = {
  NODE_ENV: "test",
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_NAME: process.env.DB_NAME,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  JWT_SECRET: "secret-1234567890",
};

// Fill in this config with all the configurations
// needed for testing the application
function config(env) {
  return {
    configData: env,
  };
}

// automatically build and tear down our instance
async function buildApp(t, env, serverOptions) {
  const app = await fcli.build(startArgs, config({ ...defaultEnv, ...env }), serverOptions);
  t.teardown(() => {
    app.close();
  });
  return app;
}

export { buildApp };
