import { describe, it, expect } from "bun:test";
import app from "../../src/index";

type Quote = {
  text: string
  author: string
}

describe("GET /quote", () => {
  it("returns a quote object", async () => {
    const request = new Request("http://localhost/quote");
    const response = await app.fetch(request);

    expect(response.status).toBe(200);

    const json = (await response.json()) as Quote;

    expect(json).toHaveProperty("text");
    expect(typeof json.text).toBe("string");

    expect(json).toHaveProperty("author");
    expect(typeof json.author).toBe("string");
  });
});
