import { getAllAuthors, getAuthorById, createAuthor, updateAuthor, deleteAuthor } from '../models/authors.js';

const getAuthorsHandler = async (request, response) => {
  try {
    const authors = await getAllAuthors();
    return response.status(200).json(authors);
  } catch (error) {
    return response.status(500).json({ message: 'Internal server error' });
  }
};

const getAuthorByIdHandler = async (request, response) => {
  try {
    const author = await getAuthorById(request.params.id);
    if (!author) {
      return response.status(404).json({ message: 'Author not found' });
    }
    return response.status(200).json(author);
  } catch (error) {
    return response.status(500).json({ message: 'Internal server error' });
  }
};

const createAuthorHandler = async (request, response) => {
  try {
    const newAuthor = request.body;
    await createAuthor(newAuthor);
    return response.status(201).json(newAuthor);
  } catch (error) {
    return response.status(500).json({ message: 'Internal server error' });
  }
};

const updateAuthorHandler = async (request, response) => {
  try {
    const updatedAuthor = request.body;
    await updateAuthor(request.params.id, updatedAuthor);
    return response.status(200).json(updatedAuthor);
  } catch (error) {
    return response.status(500).json({ message: 'Internal server error' });
  }
};

const deleteAuthorHandler = async (request, response) => {
  try {
    const result = await deleteAuthor(request.params.id);
    if (result.error) {
      return response.status(400).json({ message: result.error });
    }
    return response.status(204).send();
  } catch (error) {
    return response.status(500).json({ message: 'Internal server error' });
  }
};

export { getAuthorsHandler, getAuthorByIdHandler, createAuthorHandler, updateAuthorHandler, deleteAuthorHandler };
