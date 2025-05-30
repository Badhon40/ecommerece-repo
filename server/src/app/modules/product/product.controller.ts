import { Request, Response } from "express";
import { ProductService } from "./product.service";
import sendResponse from "../../utils/sendResponse";
import { StatusCodes } from 'http-status-codes';
import catchAsync from "../../utils/catchAsync";





const createProduct = catchAsync(async(req : Request, res : Response) =>{
    const product = req.body;
    const result = await ProductService.createProductIntoDB(product);
    sendResponse(res, StatusCodes.CREATED, {
        status: true,
        message: "Product created successfully",
        data: result,
    });
});

const getAllProducts = catchAsync(async(req : Request, res : Response) =>{
    const result = await ProductService.getAllProductsFromDB();
    sendResponse(res, StatusCodes.OK, {
        status: true,
        message: "Products retrieved successfully",
        data: result,
    });
});
const getSingleProduct = catchAsync(async(req : Request, res : Response) =>{
    const { id } = req.params;
    const result = await ProductService.getSingleProductFromDB(id);
    sendResponse(res, StatusCodes.OK, {
        status: true,
        message: "Product retrieved successfully",
        data: result,
    });
});
const updateProduct = catchAsync(async(req : Request, res : Response) =>{
    const { id } = req.params;
    const product = req.body;
    const result = await ProductService.updateProductInDB(id, product);
    sendResponse(res, StatusCodes.OK, {
        status: true,
        message: "Product updated successfully",
        data: result,
    });
});
const deleteProduct = catchAsync(async(req : Request, res : Response) =>{
    const { id } = req.params;
    const result = await ProductService.deleteProductFromDB(id);
    sendResponse(res, StatusCodes.OK, {
        status: true,
        message: "Product deleted successfully",
        data: result,
    });
});

export const ProductController = {
    createProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct,
};