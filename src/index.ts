import { Hono } from "hono";
import quoteRouter from "./routes/quote";

const app = new Hono();

app.get("/", (c) => c.text("Quote of the Day API is running"));
app.route("/", quoteRouter);

export default app;
