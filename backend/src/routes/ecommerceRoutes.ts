import { Router } from 'express';
import { createProduct, getProducts, createOrder } from '../controllers/ecommerceController';
import { authenticate, authorize } from '../middlewares/auth';

const router = Router();

// Public routes
router.get('/products', getProducts);

// Private routes
router.post('/orders', authenticate, createOrder);

// Admin/Executive routes
router.post('/products', authenticate, authorize(['ADMIN', 'EXECUTIVE']), createProduct);

export default router;
