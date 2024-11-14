import loggerOptions from './logger-options.js';
import crypto from 'crypto';

const serverOptions = {
  ajv: {
    customOptions: {
      removeAdditional: "all",
    },
  },
  requestIdLogLabel: false,
  requestIdHeader: 'x-request-id',
  disableRequestLogging: true,
  genReqId (req) {
    return req.headers['x-amz-request-id'] ||
    crypto.randomUUID()
  },
  logger: loggerOptions
};

export default serverOptions;
