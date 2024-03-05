import express from 'express';
import { itemList } from '../controllers/items';

const router = express.Router();

// router.get('/:id', itemDetail);

router.get('/', itemList);

export default router;
