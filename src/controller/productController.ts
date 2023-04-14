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
    const {
            name,
            description,
            richDescription,
            image,
            images,
            brand,
            price,
            category,
            countInStock,
            rating,
            numReviews,
            isFeatured
          } = req.body;
    // Check if category exists
    const existingCategory = await Category.findById(category);
    if (!existingCategory) {
      return res.status(400).json({ message: "Invalid category" });
    }
  }
}

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