import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => c.text("Quote of the Day API is running"));

app.get("/quote", (c) => {
  const quote = {
    text: "This is a quote",
    author: "John Smith",
  };
  return c.json(quote);
});

export default app;
