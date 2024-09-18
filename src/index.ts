import { Elysia } from 'elysia';

import { swagger } from '@elysiajs/swagger';
import { cors } from '@elysiajs/cors';

import baseRouter from './routers';

const app = new Elysia();

const PORT = process.env.PORT!;

const server = () => {
  app.use(cors());

  app.use(swagger());

  app.use(baseRouter);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

server();
