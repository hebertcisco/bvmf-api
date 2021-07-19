import { Router } from 'express';

import DefaultRouter from './domain/default.route';
import BVMFRouter from './domain/bvmf/bvmf.routes';

const Routes = Router();

Routes.use('/', DefaultRouter).use('/bvmf', BVMFRouter);

export default Routes;
