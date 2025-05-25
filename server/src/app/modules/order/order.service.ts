import { IOrder } from "./order.interface";
import OrderModel from "./order.model";


const createOrderIntoDB = async ( order : IOrder) =>{
    try {
        const newOrder = await OrderModel.create(order);
        return newOrder;
    }catch( error : any){
        throw new Error(`Error creating order: ${error.message}`);
    }
}




export const OrderService ={
    createOrderIntoDB
}