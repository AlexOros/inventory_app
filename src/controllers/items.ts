import { Request, Response, NextFunction } from 'express';
import { ItemModel } from '../models/item';

export async function itemList(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    console.log(req.query);
    const includes = req.query.includes as string[] | undefined;
    const items = await ItemModel.find()
      .populate(includes?.includes?.('category') ? 'category' : '')
      .sort({
        name: 1,
      });

    res.json({ data: items });
  } catch (error) {
    next(error);
  }
}
