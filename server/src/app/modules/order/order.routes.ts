import { Router } from "express";
import { OrderController } from "./order.controller";

const orderRouter = Router()

orderRouter.post("/create-order", OrderController.createOrder);
orderRouter.get("/get-all-orders", OrderController.getAllOrders);
orderRouter.get("/:userId", OrderController.getSingleOrder);
orderRouter.patch("/:orderId", OrderController.updateOrder);
orderRouter.delete("/:orderId", OrderController.deleteOrder);

export default orderRouter