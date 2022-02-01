import app from './app';
import * as dotenv from 'dotenv';

dotenv.config();

const port = Number(process.env.PORT) || 3000;

app.listen(port, () =>
  process.stdout.write(`Server running at port http://localhost:${port}`)
);
