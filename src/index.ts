import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => c.text('Quote of the Day API is running'))

export default app