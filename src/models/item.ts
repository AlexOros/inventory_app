import { Schema, model } from 'mongoose';
import { Item } from '../interfaces/Item';

const itemSchema = new Schema<Item>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
});

export const ItemModel = model<Item>('Item', itemSchema);
