import { Router } from 'express';
import { artistController } from '../controllers/artistController.js';

const artistRouter = new Router();

artistRouter.get('/artists', artistController.index);

export { artistRouter }