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
    const { id, name, birthYear } = request.body;
    if (!id || !name || !birthYear) {
      return response.status(400).json({ message: 'Missing required fields: id, name, birthYear' });
    }
    
    // Check if ID already exists
    const existing = await getAuthorById(id);
    if (existing) {
      return response.status(400).json({ message: 'Author with this ID already exists' });
    }

    const newAuthor = { id, name, birthYear };
    await createAuthor(newAuthor);
    return response.status(201).json(newAuthor);
  } catch (error) {
    return response.status(500).json({ message: 'Internal server error' });
  }
};

const updateAuthorHandler = async (request, response) => {
  try {
    const { id, ...updateFields } = request.body; // Prevent updating ID
    if (!updateFields.name || !updateFields.birthYear) {
      return response.status(400).json({ message: 'Missing required fields: name, birthYear' });
    }

    const result = await updateAuthor(request.params.id, updateFields);
    
    if (result.matchedCount === 0) {
      return response.status(404).json({ message: 'Author not found' });
    }

    return response.status(200).json({ id: request.params.id, ...updateFields });
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
    
    if (result.deletedCount === 0) {
      return response.status(404).json({ message: 'Author not found' });
    }
    
    return response.status(204).send();
  } catch (error) {
    return response.status(500).json({ message: 'Internal server error' });
  }
};

export { getAuthorsHandler, getAuthorByIdHandler, createAuthorHandler, updateAuthorHandler, deleteAuthorHandler };
