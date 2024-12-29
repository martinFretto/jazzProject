import { Router } from 'express';
import { artistRouter } from './artistRouter.js';

const router = new Router();

router.use(artistRouter);

export { router }