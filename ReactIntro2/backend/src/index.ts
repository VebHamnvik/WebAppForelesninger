import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'


let students = [
  {
    id: "1",
    name: "Vebjørn"
  },
  {
    id: "2",
    name: "Maream"
  },
  {
    id: "3",
    name: "Jørgen"
  },
  {
    id: "4",
    name: "Kosovare"
  },
  {
    id: "5",
    name: "Mathias"
  }
]

const app = new Hono()
app.use("*", cors())

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get("/api/students", (c) => {
  return c.json(students)
})

const port = 3999
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})