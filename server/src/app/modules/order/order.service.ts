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

const getAllOrdersFromDB = async () => {
    try{
        const orders = await OrderModel.find();
        return orders;
    }catch (error: any) {
        throw new Error(`Error fetching orders: ${error.message}`);
    }
}

const getSingleOrderFromDB = async (orderId : string) =>{
    try{
        const order = await OrderModel.findById(orderId)
        if (!order) {
            throw new Error("Order not found");
        }
        return order;
    } catch (error: any) {
        throw new Error(`Error fetching order: ${error.message}`);  
    }
}


const updateOrderInDB = async (orderId: string, updateData: IOrder) => {
    try{ 
        const updateOrder = await OrderModel.findByIdAndUpdate(orderId, updateData, { new: true });
        if (!updateOrder) {
            throw new Error("Order not found");
        }
        return updateOrder;
    } catch (error: any) {
        throw new Error(`Error updating order: ${error.message}`);
    }
}


const deleteOrderFromDB = async (orderId: string) => {
    try {
        const deletedOrder = await OrderModel.findByIdAndDelete(orderId);
        if (!deletedOrder) {
            throw new Error("Order not found");
        }
        return deletedOrder;
    } catch (error: any) {
        throw new Error(`Error deleting order: ${error.message}`);
    }
}

export const OrderService = {
    createOrderIntoDB,
    getAllOrdersFromDB,
    getSingleOrderFromDB,
    updateOrderInDB,
    deleteOrderFromDB
};