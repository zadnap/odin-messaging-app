import app from './app.js';
import 'dotenv/config';

const PORT = process.env.EXPRESS_PORT;

app.listen(PORT, () => {
  console.log(`Express app is listening to port ${PORT}`);
});
