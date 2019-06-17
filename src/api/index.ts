import express from 'express';
import { Router } from 'express';
import data from './endpoints.controller';

const router = Router();

router.get('/', (req: express.Request, res: express.Response) => {
  res.json({
    message: "(づ｡◕‿‿◕｡)づ"
  });
});

router.use('/', data);

export { router };