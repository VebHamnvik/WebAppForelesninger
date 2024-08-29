import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { serveStatic } from "@hono/node-server/serve-static";
import { readFile } from "node:fs/promises";

// instansierer en ny Hono instans
const app = new Hono();

// Aksepterer trafikk fra alle kanter, dette er greit i utvikling men ikke i prod
app.use("/*", cors());

// Definierer hvor man henter statiske filer hvis mna har det i projektet
app.use("/statics/*", serveStatic({ root: "./"}));

// localhost:3999/json -> skal vise "id" : 1 hvis serveren kjører riktig
app.get('/json', async (c) => {
    const data = await readFile("./data.json", "utf-8");
    return c.json(JSON.parse(data));
});

const port = 3999;

// Ser også i konsollen etter denne utskriften hvis serveren er oppe
console.log("Server is running YEAH")

// Dette er standard prosedyre for å starte serveren i Hono, vil være annerledes for andre pakker
serve({
    fetch: app.fetch,
    port,
});