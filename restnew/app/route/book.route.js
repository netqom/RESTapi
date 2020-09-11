module.exports = function(app) {
 
    const books = require('../controller/book.controller.js');
	 app.post('/api/book', books.create);
    // Retrieve all Books
    app.get('/api/books', books.findAll);
}