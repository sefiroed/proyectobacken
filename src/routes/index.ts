import {Router} from 'express';
import productsRouter from './products';
import carRouter from './car';

const router = Router();

router.use('/products', productsRouter);
router.use('/car', carRouter);

export default router;