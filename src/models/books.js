import { getDb } from '../db/connect.js';

const getAllBooks = async () => {
  return getDb().collection('books').find().toArray();
};

const getBookById = async (bookId) => {
  return getDb().collection('books').findOne({ id: bookId });
};

const createBook = async (book) => {
  return getDb().collection('books').insertOne(book);
};

const updateBook = async (bookId, updateFields) => {
  return getDb().collection('books').updateOne({ id: bookId }, { $set: updateFields });
};

const deleteBook = async (bookId) => {
  return getDb().collection('books').deleteOne({ id: bookId });
};

export { getAllBooks, getBookById, createBook, updateBook, deleteBook };
