import { NextFunction, Request, Response } from "express";
import { ProductService } from "./product.service";
import sendResponse from "../../utils/sendResponse";
import { StatusCodes } from 'http-status-codes';




const createProduct = async (req: Request, res : Response , next: NextFunction) => {
    const product = req.body;
    try{
        const result = await ProductService.createProductIntoDB(product);
        sendResponse(res, StatusCodes.CREATED, {
            status: true,
            message: "Product created successfully",
            data: result,
        });
    } catch (error: any) {
       next(error);
    }
}

const getAllProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const products = await ProductService.getAllProductsFromDB();
        sendResponse(res, StatusCodes.OK, {
            status: true,
            message: "Products fetched successfully",
            data: products,
        });
    } catch (error: any) {
        next(error);
    }
};


const getSingleProduct = async (req: Request, res: Response , next: NextFunction) => {
    const productId = req.params.id;
    try {
        const product = await ProductService.getSingleProductFromDB(productId);
       sendResponse(res, StatusCodes.OK, {
            status: true,
            message: "Product fetched successfully",
            data: product,
        });
    } catch (error: any) {
        next(error);
           
    }
};

const updateProduct = async (req: Request, res: Response , next: NextFunction) => {
    const productId = req.params.id;
    const productData = req.body;
    try {
        const updatedProduct = await ProductService.updateProductInDB(productId, productData);
       sendResponse(res, StatusCodes.OK, {
            status: true,
            message: "Product updated successfully",
            data: updatedProduct,
        });
    } catch (error: any) {
        next(error);
    }
};

const deleteProduct = async (req: Request, res: Response , next: NextFunction) => {
    const productId = req.params.id;
    try {
        const deletedProduct = await ProductService.deleteProductFromDB(productId);
        sendResponse(res, StatusCodes.OK, {
            status: true,
            message: "Product deleted successfully",
            data: deletedProduct,
        });
    } catch (error: any) {
        next(error);
    }
};

export const ProductController = {
    createProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct,
};