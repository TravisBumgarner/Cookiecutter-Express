require('dotenv').config()
import express from 'express';
import cors from 'cors'

import * as redis from './redis'
import * as db from './db'

const app = express()

// Body Parsing
app.use(express.json());

// Cors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})
app.use(cors({ origin: ['localhost:3000',] }))

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