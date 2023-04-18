import { Router }                                                                                      from "express";
import { createProduct, deleteProduct, getAllProducts, getOneProduct, getProductCount, updateProduct } from "../controller/productController";
import upload                                                                                          from "../middlewares/imgUpload";

const productsRouter = Router();

productsRouter.get("/", getAllProducts);
productsRouter.get("/:idProduct", getOneProduct);
productsRouter.post("/", upload.single('image'), createProduct);
productsRouter.put("/:idProduct", upload.single('image'), updateProduct);
productsRouter.delete("/:idProduct", deleteProduct);
/*productsRouter.put("/gallery-images/:idProduct", updateProductGallery);
productsRouter.get("/get/featured/:countProduct", getFeaturedProducts);*/
productsRouter.get("/get/count", getProductCount);

export default productsRouter;
