# Quote of the Day API

A fast and minimal REST API that returns a quote of the day.  
Built with [Bun](https://bun.sh/) and [Hono](https://hono.dev/) for performance and simplicity.

## Tech Stack

- **Runtime:** [Bun](https://bun.sh/)
- **Framework:** [Hono](https://hono.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)

## Getting Started

1. Clone the repository
2. Run `bun install`
3. Start the server with `bun start`
4. Visit `http://localhost:3000/quote`

## API Endpoint

### `GET /quote`

Returns a quote object that is cached for 24 hours. A new quote will only be generated after 24 hours have passed since the last request.

#### Response

- **Status:** `200 OK`
- **Content-Type:** `application/json`

#### Example Response

```json
{
  "text": "This is a quote",
  "author": "John Smith"
}
```

## License

MIT License
