import { Elysia } from 'elysia';

const healthRouter = new Elysia()
  .get('/login', () => 'LOGIN')
  .get('register', () => 'REGISTER');

export default healthRouter;
