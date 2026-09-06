import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'Books and Authors API',
    description: 'API for managing books and authors',
  },
  host: '', // Empty host lets Swagger UI use the current page's host
  schemes: ['https', 'http'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./src/router.js'];

swaggerAutogen()(outputFile, endpointsFiles, doc);
