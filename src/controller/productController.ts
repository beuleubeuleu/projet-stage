import { Request, Response } from "express";
import Product               from "../models/productModel"
import { deleteFile }        from "../utils/deleteFile";

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find().populate("category")
    res.status(200).json(products)
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch all products" })
  }
}

export const getOneProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.findById(req.params.idProduct).populate("category")
    if ( !product ) {
      return res.status(404).json({ message: "Product not found" })
    }
    res.status(200).json({ product })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Failed to fetch one product" })
  }
}

export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = new Product({
      name: req.body.name,
      description: req.body.description,
      richDescription: req.body.richDescription,
      image: req.file.path, // this will store the file path in the database
      images: req.body.images,
      brand: req.body.brand,
      price: req.body.price,
      category: req.body.category,
      countInStock: req.body.countInStock,
      rating: req.body.rating,
      numReviews: req.body.numReviews,
      isFeatured: req.body.isFeatured
    });

    const newProduct = await product.save();
    if ( !newProduct ) {
      return res.status(500).json({ message: "Failed to create product" });
    }
    res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create product" });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.idProduct;
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // If request has an image file, use multer for file upload
    if (req.file) {
      // Delete previous image if it exists
      if (product.image) {
        await deleteFile(product.image);
      }
      // Save the new image
      product.image = req.file.path;
    }

    product.name = req.body.name || product.name;
    product.description = req.body.description || product.description;
    product.richDescription = req.body.richDescription || product.richDescription;
    product.brand = req.body.brand || product.brand;
    product.price = req.body.price || product.price;
    product.category = req.body.category || product.category;
    product.countInStock = req.body.countInStock || product.countInStock;
    product.rating = req.body.rating || product.rating;
    product.numReviews = req.body.numReviews || product.numReviews;
    product.isFeatured = req.body.isFeatured || product.isFeatured;

    const updatedProduct = await product.save();

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update product' });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete product" });
  }
};

export const updateProductGallery = async (req: Request, res: Response) => {

}

export const getFeaturedProducts = async (req: Request, res: Response) => {

}

export const getProductCount = async (req: Request, res: Response) => {

}