import express from 'express';
import { Router } from 'express';
import data_v1 from './v1.endpoints.controller';

const router_v1 = Router();

router_v1.get('/', (req: express.Request, res: express.Response) => {
  res.json({
    message: "(づ｡◕‿‿◕｡)づ API V1"
  });
});

router_v1.use('/', data_v1);

export{
  router_v1, 
};