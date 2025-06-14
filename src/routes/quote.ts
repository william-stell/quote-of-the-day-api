import { Hono } from "hono";
import { quoteGet } from "../controllers/quoteController";

const quoteRouter = new Hono();

quoteRouter.get("/quote", (c) => {
  const quote = quoteGet();
  return c.json(quote);
});

export default quoteRouter;
