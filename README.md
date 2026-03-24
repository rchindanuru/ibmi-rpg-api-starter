# ibmi-rpg-api-starter
A small example that shows how to expose IBM i RPG business logic as a REST API, so existing programs can be reused by web, mobile, and cloud systems.

## Idea

- Keep RPG as the system of record.
- Put a thin API layer in front of it.
- Return clean JSON responses that other applications can call.

This repository provides a simple, end-to-end example for a `GET /api/orders/{id}` endpoint.

## How to run the API locally

Prerequisites:

- Node.js installed (v18+ recommended).

Steps:

```bash
cd api
npm install
npm start
```

Then open:

- `http://localhost:3000/health` → should return `{ "status": "ok" }`.
- `http://localhost:3000/api/orders/ORD1001` → returns a sample order JSON.
- `http://localhost:3000/api/orders/ANYTHING_ELSE` → returns `404 Order not found`.

## How this relates to RPG and IBM i

In this starter:

- `rpg/GETORDR.rpgle` represents an existing RPG program that returns order details.
- The `api/ibmiClient.js` module is the place where you would call that program:
  - Via a REST or SOAP web service exposed on IBM i.
  - Via a database query that reads DB2 data.
  - Via a program call mechanism provided by an integration library.

The `api/server.js` file exposes clean REST endpoints like:

- `GET /api/orders/{id}`

This pattern allows you to:

- Keep business logic on IBM i.
- Expose that logic through APIs to web, mobile, and cloud applications.
- Extend the life of IBM i systems by making them easy to integrate.
