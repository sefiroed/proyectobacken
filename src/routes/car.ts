import {Router} from 'express';
import { carProductsController } from '../controllers/carproducts';

const router = Router();

router.get('/', carProductsController.getProducts)
router.get('/:id', carProductsController.getProducts)
router.post('/', carProductsController.addProducts)
router.delete('/:id', carProductsController.deleteProducts)

export default router;