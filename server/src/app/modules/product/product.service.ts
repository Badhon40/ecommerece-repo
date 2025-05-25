import { IProduct } from "./product.interface";
import ProductModel from "./product.model";


const createProductIntoDB = async(product : IProduct) =>{
    try {
        const result = await ProductModel.create(product);
        if (!result) {
            throw new Error("Product creation failed");
        }
        return result;
    } catch (error: any) {
        throw new Error(`Error creating product: ${error.message}`);
    }   
}

const getAllProductsFromDB = async() => {
    try {
        const products = await ProductModel.find();
        if (!products) {
            throw new Error("No products found");
        }
        return products;
    } catch (error: any) {
        throw new Error(`Error fetching products: ${error.message}`);
    }
}

const getSingleProductFromDB = async(productId: string) => {
    try {
        const product = await ProductModel.findById(productId);
        if (!product) {
            throw new Error("Product not found");
        }
        return product;
    } catch (error: any) {
        throw new Error(`Error fetching product: ${error.message}`);    
    }
}

const updateProductInDB = async(productId: string, productData: IProduct) => {
    try {
        const updatedProduct = await ProductModel.findByIdAndUpdate(productId, productData, { new: true });
        if (!updatedProduct) {
            throw new Error("Product not found");
        }
        return updatedProduct;
    } catch (error: any) {
        throw new Error(`Error updating product: ${error.message}`);
    }
}

const deleteProductFromDB = async(productId: string) => {
    try {
        const deletedProduct = await ProductModel.findByIdAndDelete(productId);
        if (!deletedProduct) {
            throw new Error("Product not found");
        }

        return deletedProduct;
    }
    catch (error: any) {
        throw new Error(`Error deleting product: ${error.message}`);
    }
}

export const ProductService = {
    createProductIntoDB,
    getAllProductsFromDB,
    getSingleProductFromDB,
    updateProductInDB,
    deleteProductFromDB,
}