import { Request, Response } from "express";
import { OrderService } from "./order.service";
import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";


const createOrder = catchAsync(async(req: Request, res : Response)=>{
    const payload = req.body;
    const result = await OrderService.createOrderIntoDB(payload);
    sendResponse(res, StatusCodes.CREATED, {
        status: true,
        message: "Order created successfully",
        statusCode: StatusCodes.CREATED,
        data: result
    });
});

const getAllOrders = catchAsync(async(req: Request, res: Response) => {
    const result = await OrderService.getAllOrdersFromDB();
    sendResponse(res, StatusCodes.OK, {
        status: true,
        message: "Orders fetched successfully",
        data: result
    });
});

const getSingleOrder = catchAsync(async(req: Request, res: Response) => {
    const orderId = req.params.id;
    const result = await OrderService.getSingleOrderFromDB(orderId);
    sendResponse(res, StatusCodes.OK, {
        status: true,
        message: "Order fetched successfully",
        data: result
    });
});

const updateOrder = catchAsync(async(req: Request, res: Response) => {
    const orderId = req.params.id;
    const payload = req.body;
    const result = await OrderService.updateOrderInDB(orderId, payload);
    sendResponse(res, StatusCodes.OK, {
        status: true,
        message: "Order updated successfully",
        data: result
    });
});

const deleteOrder = catchAsync(async(req: Request, res: Response) => {
    const orderId = req.params.id;
    const result = await OrderService.deleteOrderFromDB(orderId);
    sendResponse(res, StatusCodes.OK, {
        status: true,
        message: "Order deleted successfully",
        data: result
    });
});



export const OrderController ={
    createOrder,
    getAllOrders,
    getSingleOrder,
    updateOrder,
    deleteOrder
}