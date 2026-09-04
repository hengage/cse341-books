import { getDb } from '../db/connect.js';

const getAllAuthors = async () => {
  return getDb().collection('authors').find().toArray();
};

const getAuthorById = async (authorId) => {
  return getDb().collection('authors').findOne({ id: authorId });
};

const createAuthor = async (author) => {
  return getDb().collection('authors').insertOne(author);
};

const updateAuthor = async (authorId, author) => {
  return getDb().collection('authors').updateOne({ id: authorId }, { $set: author });
};

const deleteAuthor = async (authorId) => {
  // Check if author is referenced by any book
  const book = await getDb().collection('books').findOne({ authorId: authorId });
  if (book) {
    return { error: 'Author is referenced by a book' };
  }
  return getDb().collection('authors').deleteOne({ id: authorId });
};

export { getAllAuthors, getAuthorById, createAuthor, updateAuthor, deleteAuthor };
