import { getAllBooks, getBookById, createBook, updateBook, deleteBook } from '../models/books.js';
import { getAuthorById } from '../models/authors.js';
import { HTTP_STATUS } from '../constants.js';

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

const createBookHandler = async (request, response) => {
  try {
    const { id, authorId, title, publicationDate } = request.body;
    if (!id || !authorId || !title || !publicationDate) {
      return response.status(400).json({ message: 'Missing required fields' });
    }

    const author = await getAuthorById(authorId);
    if (!author) {
      return response.status(400).json({ message: 'Author not found' });
    }

    const existingBook = await getBookById(id);
    if (existingBook) {
      return response.status(400).json({ message: 'Book ID already exists' });
    }

    const newBook = { id, authorId, title, publicationDate };
    await createBook(newBook);
    return response.status(201).json(newBook);
  } catch (error) {
    return response.status(500).json({ message: 'Internal server error' });
  }
};

const updateBookHandler = async (request, response) => {
  try {
    const { id, ...updateFields } = request.body;
    if (!updateFields.authorId || !updateFields.title || !updateFields.publicationDate) {
      return response.status(400).json({ message: 'Missing required fields' });
    }

    const author = await getAuthorById(updateFields.authorId);
    if (!author) {
      return response.status(400).json({ message: 'Author not found' });
    }

    const result = await updateBook(request.params.id, updateFields);
    if (result.matchedCount === 0) {
      return response.status(404).json({ message: 'Book not found' });
    }

    return response.status(200).json({ id: request.params.id, ...updateFields });
  } catch (error) {
    return response.status(500).json({ message: 'Internal server error' });
  }
};

const deleteBookHandler = async (request, response) => {
  try {
    const result = await deleteBook(request.params.id);
    if (result.deletedCount === 0) {
      return response.status(404).json({ message: 'Book not found' });
    }
    return response.status(204).send();
  } catch (error) {
    return response.status(500).json({ message: 'Internal server error' });
  }
};

export { getBooksHandler, getBookByIdHandler, createBookHandler, updateBookHandler, deleteBookHandler };
