import { Schema, model } from 'mongoose';
import { categoryModel }           from "../interfaces/categoryType";

const categorySchema = new Schema<categoryModel>({
  name: { type: String, required: true },
  color: { type:String, required: true},
  icon: { type:String, required:true},
  image: { type:String, required:true}
});

// Create and export the model
const Category = model<categoryModel>('Category', categorySchema);

export default Category;