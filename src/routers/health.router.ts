import { Elysia } from 'elysia';

const healthRouter = new Elysia().get('/', () => {
  return {
    message: 'OK',
  };
});

export default healthRouter;
