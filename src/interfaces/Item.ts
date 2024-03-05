import { Document } from 'mongoose';
import { Category } from './Category';

export interface Item extends Document {
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string | Category;
}
