import express from 'express';
import router from './src/router.js';

const app = express();

app.use(express.json());
app.get('/', (request, response) => {
  return response.status(200).json({ message: 'Books API is running' });
});
app.use(router);
app.use((request, response) => {
  return response.status(404).json({ message: 'Route not found' });
});

export default app;
