import express from 'express';

import * as redis from './redis'
import * as db from './db'

const app = express()

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('pong!')
})

app.get('/redis/set/:key/:value', async (req: express.Request, res: express.Response) => {
  const redisResponse = await redis.set(req.params.key, req.params.value)
  res.send(redisResponse)
})

app.get('/redis/get/:key/', async (req: express.Request, res: express.Response) => {
  const redisResponse = await redis.get(req.params.key)
  res.send(redisResponse)
})

export default app