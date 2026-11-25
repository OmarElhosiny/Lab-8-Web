const express = require('express');
const books = require('./books');
const app = express();
app.use(express.json()); 

app.get('/', (req, res) => {
    res.send("Welcome to the homepage");
});

app.get('/books', (req, res) => {
    res.send(books);
});
app.get('/books/:id', (req, res) => {
    const book = books[req.params.id];
    if (book) {
        res.send(book);
    } else {
        res.status(404).send("404 Book not found");
    }
});

app.post('/books', (req, res) => {
    const title = req.body.title;
    books.push(title);
    res.status(201).send("Book added successfully");
});


app.delete('/books/:id', (req, res) => {
    const bookIndex = req.params.id;
    if (bookIndex >= 0 && bookIndex < books.length) {
        books.splice(bookIndex, 1);
        res.status(200).send("Book deleted successfully");
    } else {
        res.status(404).send("404 Book not found");
    }
});

app.listen(5000, () => {
    console.log('Server started listening on port 5000');
});