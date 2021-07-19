import { Router } from 'express';

import bvmfController from './bvmf.controller';

const BVMFRouter = Router();

BVMFRouter.get('/:code', bvmfController.read);

export default BVMFRouter;
