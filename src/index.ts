import 'dotenv/config';
import app from './app';
import connectToDatabase from './connection';

const PORT = process.env.PORT || 3001;
connectToDatabase()
  .then(() => {
    app.listen(PORT, () => console.log(`Running server on port: ${PORT}`));
  })
  .catch((error) => {
    console.log('Connection with database generated an error:\r\n');
    console.error(error);
    console.log('Server initialization cancelled\r\n');
    process.exit(0);
  });