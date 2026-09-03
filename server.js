import app from './app.js';
import { connectToDb } from './src/db/connect.js';

const port = Number(process.env.PORT || 3000);

const startServer = async () => {
  try {
    await connectToDb();
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error('Database connection failed:', error.message);
    process.exitCode = 1;
  }
};

startServer();
