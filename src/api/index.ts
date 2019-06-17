import { Router } from 'express';
import data from './endpoints.controller';

const router = Router();

router.get('/', (req, res) => {
  res.json({
    message: "(づ｡◕‿‿◕｡)づ"
  });
});

router.use('/', data);

export { router };