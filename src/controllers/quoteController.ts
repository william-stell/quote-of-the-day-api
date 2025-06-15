import type { Context } from "hono";
import { quoteGet } from "../services/quoteService";

/**
 * Handles the HTTP GET request for the quote endpoint.
 * Retrieves the current cached quote and returns it as JSON.
 * If an error occurs, responds with a 500 status and error message.
 *
 * @param {Context} c - The Hono context object for the request/response lifecycle.
 * @returns {Response} JSON response containing the quote or an error message.
 */
export function quoteControllerGet(c: Context): Response {
  try {
    const quote = quoteGet();
    return c.json(quote);
  } catch (error) {
    return c.json({ error: "Failed to get quote" }, 500);
  }
}
