import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { promises as fs } from 'fs';
import fastify from 'fastify';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function ensureLogFile() {
  const logDir = join(__dirname, '../logs');
  const logFile = join(logDir, 'app.log');

  try {
    await fs.mkdir(logDir, { recursive: true });
    await fs.open(logFile, 'a');
  } catch (error) {
    fastify.log.error('Error ensuring log file:', error);
  }
}
ensureLogFile();

const loggerOptions = {
  level: process.env.LOG_LEVEL,
  timestamp: () => {
    const dateString = new Date(Date.now()).toISOString()
    return `,"@timestamp":"${dateString}"`
  },
  redact: {
    censor: '***',
    paths: [
      'req.headers.authorization',
      'req.body.password',
      'req.body.email'
    ]
  },
  transport: {
    target: 'pino/file',
    options: {
      destination: join(__dirname, '../logs/app.log'),
    },
    level: 'error'
  },
  serializers: {
    res: function (reply) {
      return {
        statusCode: reply.statusCode,
        responseTime: reply.getResponseTime ? reply.getResponseTime() : reply.elapsedTime,
      };
    },
    req: function (request) {
      const shouldLogBody = request.raw.logBody === true;
      return {
        method: request.method,
        url: request.url,
        routeUrl: request.routerPath,
        version: request.headers?.['accept-version'],
        user: request.user?.id,
        headers: request.headers,
        body: shouldLogBody ? request.body : undefined,
        hostname: request.hostname,
        remoteAddress: request.ip,
        remotePort: request.socket?.remotePort
      }
    }
  }
};

export default loggerOptions;
