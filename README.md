# ibmi-rpg-api-starter
A small example that shows how to expose IBM i RPG business logic as a REST API, so existing programs can be reused by web, mobile, and cloud systems.

## Idea

- Keep RPG as the system of record.
- Put a thin API layer in front of it.
- Return clean JSON responses that other applications can call.

This repository provides a simple, end-to-end example for a `GET /api/orders/{id}` endpoint.
