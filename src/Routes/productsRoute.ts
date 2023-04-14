import { Router } from 'express';
import {
  getAllProducts,
  getOneProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  updateProductGallery,
  getFeaturedProducts,
  getProductCount
} from '../controller/productController';

const productsRouter = Router();

productsRouter.get('/', getAllProducts);
productsRouter.get('/:idProduct', getOneProduct);
productsRouter.post('/', createProduct);
productsRouter.put('/:idProduct', updateProduct);
productsRouter.delete('/:idProduct', deleteProduct);
productsRouter.put('/gallery-images/:idProduct', updateProductGallery);
productsRouter.get('/get/featured/:countProduct', getFeaturedProducts);
productsRouter.get('/get/count', getProductCount);

export default productsRouter;
