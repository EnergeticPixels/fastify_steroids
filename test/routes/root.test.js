import t from 'tap';
import { buildApp } from '../helper.js'

t.test('default root route', async (t) => {
  const app = await buildApp(t)

  const res = await app.inject({
    url: '/'
  })
  t.same(JSON.parse(res.payload), { root: true })
})
