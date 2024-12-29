import 'dotenv/config';
import express from 'express';
import { router } from './src/routers/index.js';

const app = express();
//app.use(express.json());
app.use(router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Application démarrée sur le port${port}`);
})