import { NextFunction, Request, Response } from "express";
import { UserService } from "./user.service";
import sendResponse from "../../utils/sendResponse";


const createUser = async ( req: Request, res: Response , next: NextFunction ) =>{
    const payload = req.body;
    try {
        const result = await UserService.createUserIntoDB( payload );
        sendResponse(res, 200, {
            status: true,
            message: "User created successfully",
            data: result
        });
    } catch (error : any) {
        console.error("Error creating user:", error);
        next(error)
    }
};

const getUsers = async ( req: Request, res: Response  , next : NextFunction) => {
    try {
        const users = await UserService.getUsersFromDB();
        sendResponse(res, 200, {
            status: true,
            message: "Users fetched successfully",
            data: users
        });
    } catch (error: any) {
        console.error("Error fetching users:", error);
        next(error);
    }
};

const getSingleUser = async ( req: Request, res: Response , next : NextFunction ) => {
    const userId = req.params.id;   
    try {
        const user = await UserService.getSingleUserFromDB(userId);
        sendResponse(res, 200, {
            status: true,
            message: "User fetched successfully",
            data: user
        });
    } catch (error: any) {
        console.error("Error fetching user:", error);
        next(error);
    }
};

const updateUser = async ( req: Request, res: Response , next: NextFunction ) => {
    const userId = req.params.id;
    const payload = req.body;
    try {
        const updatedUser = await UserService.updateUserInDB(userId, payload);
        sendResponse(res, 200, {
            status: true,
            message: "User updated successfully",
            data: updatedUser
        });
    }
    catch (error: any) {
        console.error("Error updating user:", error);
        next(error);
    }   
}

const deleteUser = async ( req: Request, res: Response , next: NextFunction ) => {
    const userId = req.params.id;
    try {
        const deletedUser = await UserService.deleteUserFromDB(userId);
        sendResponse(res, 200, {
            status: true,
            message: "User deleted successfully",
            data: deletedUser
        });
    } catch (error: any) {
        console.error("Error deleting user:", error);
        next(error);
    }
};




export const UserController = {
    createUser, 
    getUsers,
    getSingleUser,
    updateUser,
    deleteUser
};