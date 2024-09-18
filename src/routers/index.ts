import { Elysia } from 'elysia';
import healthRouter from './health.router';
import registerRouter from './auth.router';

const router = new Elysia();

router.get('/', () => {
  return {
    message: 'Welcome to learn bun and elysia',
  };
});

router.group('/api/health', (app) => {
  return app.use(healthRouter);
});

router.group('/api', (app) => {
  return app.use(registerRouter);
});

export default router;
