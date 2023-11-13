import express from 'express';
import Product from '../models/productModel.js'
import asyncHandler from '../middleware/asyncHandler.js';
import {getProducts, getProductsById, createProduct, updateProduct, deleteProduct, createProductReview} from '../controllers/productController.js'
import { protect, admin } from '../middleware/authMiddleware.js'
const router = express.Router();

router.route('/').get(getProducts).post(protect, admin, createProduct);
router.route('/:id').get(getProductsById).put(protect, admin, updateProduct).delete(protect, admin, deleteProduct);
router.route('/:id/reviews').post(protect, createProductReview)

export default router