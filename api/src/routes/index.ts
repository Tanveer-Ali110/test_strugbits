import { Router } from 'express';
import customerRouter from './customer.route'

const apiRouter = Router();

apiRouter.use('/customer', customerRouter);

export default apiRouter