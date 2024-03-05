import { Schema, model } from 'mongoose';
import { Category } from '../interfaces/Category';

const categorySchema = new Schema<Category>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export const CategoryModel =  model<Category>('Category', categorySchema);
