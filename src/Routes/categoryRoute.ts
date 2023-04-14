import { Router }                                                                           from "express";
import { createCategory, deleteCategory, getAllCategories, getOneCategory, updateCategory } from "../controller/categoryController"

const categoryRouter = Router();

categoryRouter.post("/new", createCategory);
categoryRouter.get("/", getAllCategories);
categoryRouter.get("/:idCategory", getOneCategory);
categoryRouter.put("/update/:idCategory", updateCategory);
categoryRouter.delete("/delete/:idCategory", deleteCategory);

export default categoryRouter;
