# Lab 8 – Node.js Backend (Books API)

A simple REST API built with Node.js and Express that manages a list of books stored in memory.

## Setup
1. Install dependencies: `npm install`
2. Start the server: `node app.js`
3. The server runs at `http://localhost:5000`

## Project Structure
- `app.js` – Express server and route definitions
- `books.js` – In-memory array of books (a module)
- `function.js` – Example module exporting a `sayhi(name)` function

## API Documentation

Base URL: `http://localhost:5000`

| Method | Endpoint     | Description                | Body                       | Success Response                      | Error Response           |
|--------|--------------|----------------------------|----------------------------|---------------------------------------|--------------------------|
| GET    | `/`          | Homepage welcome message   | –                          | `200` "Welcome to the homepage"       | –                        |
| GET    | `/books`     | Get all books              | –                          | `200` array of book titles            | –                        |
| GET    | `/books/:id` | Get one book by index      | –                          | `200` book title                      | `404` "404 Book not found" |
| POST   | `/books`     | Add a new book             | JSON: `{ "title": "..." }` | `201` "Book added successfully"       | –                        |
| DELETE | `/books/:id` | Delete a book by index     | –                          | `200` "Book deleted successfully"     | `404` "404 Book not found" |

### Examples
**GET /books**
Response: `["Harry Potter","A man in the iron mask","The Alchemist"]`

**GET /books/0**
Response: `Harry Potter`

**POST /books**
Request body: `{ "title": "1984" }`
Response (201): `Book added successfully`

**DELETE /books/1**
Response (200): `Book deleted successfully`

## Notes
- Data is stored in memory, so changes reset when the server restarts.
- `:id` is the zero-based index of the book in the array.
