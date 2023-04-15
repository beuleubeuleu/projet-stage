import { Request, Response } from "express";
import Product               from "../models/productModel"
import Category              from "../models/categoryModel";

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
      isFeatured: req.body.isFeatured,
    });

    const newProduct = await product.save();
    if (!newProduct) {
      return res.status(500).json({ message: "Failed to create product" });
    }
    res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create product" });
  }
};

export const updateProduct = async (req: Request, res: Response) => {

}

export const deleteProduct = async (req: Request, res: Response) => {

}

export const updateProductGallery = async (req: Request, res: Response) => {

}

export const getFeaturedProducts = async (req: Request, res: Response) => {

}

export const getProductCount = async (req: Request, res: Response) => {

}