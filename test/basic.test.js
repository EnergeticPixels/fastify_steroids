import t from 'tap';
import { buildApp } from './helper.js';
// import { getDefaultEnv } from './helper.js';`

t.test('the application should start', async (t) => {
  const app = await buildApp(t, {
    JWT_SECRET: 'nowthis'
  })
  await app.ready()
  t.pass('the application is ready')
});
t.test('the live route is online', async (t) => {
  const app = await buildApp(t);
  const response = await app.inject({
    method: 'GET',
    url: '/'
  })
  t.same(response.json(), { root: true })
});
t.test('the application should not start', async mainTest => {
  mainTest.test('if there are missing ENV vars', async t => {
    try {
      await buildApp(t, {
        NODE_ENV: 'test',
        DB_HOST: ''
      })
      t.fail('the server must not start')
    } catch (error) {
      t.ok(error, 'error must be set')
      t.match(error.message, /Protocol and host list are required in/, 'error.message shows that paramters are missing');
    }
  })
  mainTest.test('when mongodb is unreachable', async t => {
    try {
      await buildApp(t, {
        NODE_ENV: 'test',
        DB_PWORD: 'ywPU5WWjObV0CMPs'
      })
      t.fail('the server must not start')
    } catch (error) {
      t.ok(error, 'error must be set')
      t.match(error.message, 'bad auth : authentication failed')
    }
  })
});
