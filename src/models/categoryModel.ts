import { Schema, model } from 'mongoose';
import { ICategory }     from "../interfaces/InterfaceCategory";

const categorySchema = new Schema<ICategory>({
  name: { type: String, required: true },
  color: { type:String, required: true},
  icon: { type:String, required:true},
  image: { type:String, required:true}
});

// Create and export the model
const Category = model<ICategory>('Category', categorySchema);

export default Category;