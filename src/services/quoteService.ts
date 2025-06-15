import type { Quote } from "../types";

const quotes: Quote[] = [
  { text: "This is a quote", author: "John Smith" },
  { text: "Another placeholder quote", author: "Jane Doe" },
  { text: "Yet another quote here", author: "Alex Johnson" },
  { text: "Placeholder quote number four", author: "Chris Lee" },
  { text: "Final placeholder quote", author: "Pat Taylor" },
];

let cachedQuote: Quote = quotes[0]!;
let lastGenerated: number = 0;

/**
 * Returns a cached quote that updates once every 24 hours.
 * If the cached quote is older than 24 hours or missing,
 * a new random quote is generated.
 *
 * @returns {Quote} The current quote to be used/displayed.
 */
export function quoteGet(): Quote {
  const now = Date.now();

  if (now - lastGenerated > 24 * 60 * 60 * 1000) {
    cachedQuote = quotes[Math.floor(Math.random() * quotes.length)]!;
    lastGenerated = now;
  }

  return cachedQuote;
}
