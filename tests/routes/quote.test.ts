import { describe, it, expect, beforeEach, afterEach } from "bun:test";
import app from "../../src/index";

import type { Quote } from "../../src/types";

describe("GET /quote", () => {
  let originalDateNow: () => number;
  let now: number;

  beforeEach(() => {
    // Save original Date.now and mock it
    originalDateNow = Date.now;
    now = originalDateNow();
    Date.now = () => now;
  });

  afterEach(() => {
    // Restore original Date.now after each test
    Date.now = originalDateNow;
  });

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

  it("returns the same quote within 24 hours", async () => {
    // First request at time `now`
    const firstRequest = new Request("http://localhost/quote");
    const firstResponse = await app.fetch(firstRequest);
    const firstJson = (await firstResponse.json()) as Quote;

    // Advance time by 23 hours
    now += 23 * 60 * 60 * 1000;

    // Second request within 24 hours
    const secondRequest = new Request("http://localhost/quote");
    const secondResponse = await app.fetch(secondRequest);
    const secondJson = (await secondResponse.json()) as Quote;

    expect(secondJson).toEqual(firstJson);
  });

  it("returns a different quote after 24 hours", async () => {
    // First request at time `now`
    const firstRequest = new Request("http://localhost/quote");
    const firstResponse = await app.fetch(firstRequest);
    const firstJson = (await firstResponse.json()) as Quote;

    // Advance time by 25 hours
    now += 25 * 60 * 60 * 1000;

    // Second request after 24 hours
    const secondRequest = new Request("http://localhost/quote");
    const secondResponse = await app.fetch(secondRequest);
    const secondJson = (await secondResponse.json()) as Quote;

    expect(secondJson).toHaveProperty("text");
    expect(secondJson).toHaveProperty("author");

    // It's possible to get the same quote by chance, so this is optional:
    expect(secondJson).not.toEqual(firstJson);
  });
});
