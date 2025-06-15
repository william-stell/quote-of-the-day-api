import type { Quote } from "../types";

const quotes: Quote[] = [
  { text: "This is a quote", author: "John Smith" },
  { text: "Another placeholder quote", author: "Jane Doe" },
  { text: "Yet another quote here", author: "Alex Johnson" },
  { text: "Placeholder quote number four", author: "Chris Lee" },
  { text: "Final placeholder quote", author: "Pat Taylor" },
];

let quote: Quote = quotes[0]!;
let lastGenerated: number = 0;

export function quoteGet(): Quote {
  const now = Date.now();

  if (now - lastGenerated > 24 * 60 * 60 * 1000) {
    quote = quotes[Math.floor(Math.random() * quotes.length)]!;
    lastGenerated = now;
  }

  return quote;
}
