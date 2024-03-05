import { Request, Response, NextFunction } from 'express';
import { CategoryModel } from '../models/category';

export async function categoryList(
  _: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const categories = await CategoryModel.find().sort({
      name: 1,
    });

    res.json({ data: categories });
  } catch (error) {
    next(error);
  }
}
