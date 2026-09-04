import { getDb } from '../db/connect.js';

const getAllBooks = async () => {
  const books = await getDb().collection('books').find({}, {
    projection: { _id: 0, id: 1, author: 1, title: 1, publicationDate: 1 }
  }).toArray();
  return books;
};

const getBookById = async (bookId) => {
  return getDb().collection('books').findOne({ id: bookId });
};

export { getAllBooks, getBookById };
