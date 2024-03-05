import express from 'express';
// import emojis from './emojis';
import category from './category';
import item from './item';

const router = express.Router();

router.use('/categories', category);
router.use('/items', item);
// router.use('/emojis', emojis);

export default router;
