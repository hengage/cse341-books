import { getAllBooks, getBookById } from '../models/books.js';

const getBooksHandler = async (request, response) => {
  try {
    const books = await getAllBooks();
    return response.status(200).json(books);
  } catch (error) {
    console.error('Unable to retrieve books:', error.message);
    return response.status(500).json({ message: 'Internal server error' });
  }
};

const getBookByIdHandler = async (request, response) => {
  try {
    const book = await getBookById(request.params.id);
    if (!book) {
      return response.status(404).json({ message: 'Book not found' });
    }
    return response.status(200).json(book);
  } catch (error) {
    console.error('Unable to retrieve book:', error.message);
    return response.status(500).json({ message: 'Internal server error' });
  }
};

export { getBooksHandler, getBookByIdHandler };
