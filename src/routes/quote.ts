import { Hono } from "hono";
import { quoteControllerGet } from "../controllers/quoteController";

const quoteRouter = new Hono();

quoteRouter.get("/quote", quoteControllerGet);

export default quoteRouter;
