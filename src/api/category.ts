import express from 'express';
import { categoryList } from '../controllers/category';

const router = express.Router();

// router.get('/:id', categoryDetail);

router.get('/', categoryList);

export default router;
