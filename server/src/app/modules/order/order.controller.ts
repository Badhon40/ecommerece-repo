import { NextFunction, Request, Response } from "express";
import { OrderService } from "./order.service";
import sendResponse from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";


const createOrder = async ( req : Request , res : Response , next : NextFunction) =>{
    const order = req.body;
    try{
        const newOrder = await OrderService.createOrderIntoDB(order)
        sendResponse( res, StatusCodes.CREATED, {
            status: true,
            message: "Order created successfully",
            data: newOrder
        } )
    }catch( error : any){
        next(error);
    }
}




export const OrderController ={
    createOrder
}