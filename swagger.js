import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'Books and Authors API',
    description: 'API for managing books and authors',
  },
  host: 'localhost:3000',
  schemes: ['http'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./src/router.js'];

swaggerAutogen()(outputFile, endpointsFiles, doc);
