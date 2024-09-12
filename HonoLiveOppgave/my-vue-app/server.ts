import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { serveStatic } from "@hono/node-server/serve-static";

const app = new Hono();
const jokesFromServer = [
    { id: 111, title: "Why don't scientists trust atoms?", answer: "Because they make up everything!" },
    { id: 222, title: "What do you call a fake noodle?", answer: "An impasta!" },
    { id: 333, title: "Why did the scarecrow win an award?", answer: "He was outstanding in his field!" },
    { id: 444, title: "How do you organize a space party?", answer: "You planet!" },
    { id: 555, title: "What do you call a bear with no teeth?", answer: "A gummy bear!" }
];

app.use(
    cors({
        origin: "*",
    })
);

app.get("/jokes", async (c) => {
    return c.json(jokesFromServer);
})

app.post()

const port = 3999;

console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});