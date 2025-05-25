import { Router } from "express";
import { ProductController } from "./product.controller";

const productRouter = Router();

productRouter.post("/create-product", ProductController.createProduct)
productRouter.get("/get-all-products", ProductController.getAllProducts);
productRouter.get("/:id", ProductController.getSingleProduct);
productRouter.patch("/:id", ProductController.updateProduct);
productRouter.delete("/:id", ProductController.deleteProduct);

export default productRouter;