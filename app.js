import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const swaggerDocument = require('./swagger.json');
import router from './src/router.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get('/', (request, response) => {
  return response.status(200).json({ message: 'Books API is running' });
});
app.use(router);
app.use((request, response) => {
  return response.status(404).json({ message: 'Route not found' });
});

export default app;
