# CSE 341 Books Web Service

Week 01 Books API for CSE 341. The API uses Express and MongoDB and exposes two read-only routes.

## Deployed Application

- [Books API](https://cse341-books-6c7e.onrender.com/)

## Routes

- `GET /books` returns all books with status `200`.
- `GET /books/:id` returns one book with status `200`, or `{ "message": "Book not found" }` with status `404`.
- Unexpected database errors return `{ "message": "Internal server error" }` with status `500`.

## Local setup

1. Install Node.js 20 or newer.
2. Copy `.env.example` to `.env`.
3. Set `MONGODB_URI` and `MONGODB_DB_NAME` in `.env`.
4. Install dependencies with `npm install`.
5. Start development mode with `npm run dev`.
6. Run the quality check with `npm run lint`.

Never commit `.env` or database credentials. Production values belong in the hosting provider's environment settings.

## Assignment submission

Complete `week01-reflection.txt` after the implementation is deployed. Add your own merged pull request link, closed issue link, walk-through video link, sensitive-data implementation link, implementation-decision link, and personal reflection answers.
