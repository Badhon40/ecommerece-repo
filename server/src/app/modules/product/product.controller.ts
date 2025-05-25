import { Request, Response } from "express";
import { ProductService } from "./product.service";


const createProduct = async (req: Request, res : Response) => {
    const product = req.body;
    try{
        const result = await ProductService.createProductIntoDB(product);
        res.status(200).json({
            success: true,
            message: "Product created successfully",
            data: result,
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: `Error creating product: ${error.message}`,
        });
    }
}

const getAllProducts = async (req: Request, res: Response) => {
    try {
        const products = await ProductService.getAllProductsFromDB();
        res.status(200).json({
            success: true,
            message: "Products fetched successfully",
            data: products,
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: `Error fetching products: ${error.message}`,
        }); 
    }
};


const getSingleProduct = async (req: Request, res: Response) => {
    const productId = req.params.id;
    try {
        const product = await ProductService.getSingleProductFromDB(productId);
        res.status(200).json({
            success: true,
            message: "Product fetched successfully",
            data: product,
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: `Error fetching product: ${error.message}`,
        });
    }
};

const updateProduct = async (req: Request, res: Response) => {
    const productId = req.params.id;
    const productData = req.body;
    try {
        const updatedProduct = await ProductService.updateProductInDB(productId, productData);
        res.status(200).json({
            success: true,
            message: "Product updated successfully",
            data: updatedProduct,
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: `Error updating product: ${error.message}`,
        });
    }
};

const deleteProduct = async (req: Request, res: Response) => {
    const productId = req.params.id;
    try {
        const deletedProduct = await ProductService.deleteProductFromDB(productId);
        res.status(200).json({
            success: true,
            message: "Product deleted successfully",
            data: deletedProduct,
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: `Error deleting product: ${error.message}`,
        });
    }
};

export const ProductController = {
    createProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct,
};