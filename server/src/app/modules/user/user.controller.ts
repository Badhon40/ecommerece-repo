import { Request, Response } from "express";
import { UserService } from "./user.service";


const createUser = async ( req: Request, res: Response ) =>{
    const payload = req.body;
    try {
        const result = await UserService.createUserIntoDB( payload );
        res.status(201).json({
            success: true,
            message: "User created successfully",
            data: result
        });
    } catch (error : any) {
        console.error("Error creating user:", error);
        res.status(500).json({
            success: false,
            message: "Error creating user",
            error: error.message
        });
    }
};

const getUsers = async ( req: Request, res: Response ) => {
    try {
        const users = await UserService.getUsersFromDB();
        res.status(200).json({
            success: true,
            message: "Users fetched successfully",
            data: users
        });
    } catch (error: any) {
        console.error("Error fetching users:", error);
        res.status(500).json({
            success: false,
            message: "Error fetching users",
            error: error.message
        });
    }
};

const getSingleUser = async ( req: Request, res: Response ) => {
    const userId = req.params.id;   
    try {
        const user = await UserService.getSingleUserFromDB(userId);
        res.status(200).json({
            success: true,
            message: "User fetched successfully",
            data: user
        });
    } catch (error: any) {
        console.error("Error fetching user:", error);
        res.status(500).json({
            success: false,
            message: "Error fetching user",
            error: error.message
        });
    }
};

const updateUser = async ( req: Request, res: Response ) => {
    const userId = req.params.id;
    const payload = req.body;
    try {
        const updatedUser = await UserService.updateUserInDB(userId, payload);
        res.status(200).json({
            success: true,
            message: "User updated successfully",
            data: updatedUser   
        });
    }
    catch (error: any) {
        console.error("Error updating user:", error);
        res.status(500).json({
            success: false,
            message: "Error updating user",
            error: error.message
        });
    }   
}

const deleteUser = async ( req: Request, res: Response ) => {
    const userId = req.params.id;
    try {
        const deletedUser = await UserService.deleteUserFromDB(userId);
        res.status(200).json({
            success: true,
            message: "User deleted successfully",
            data: deletedUser
        });
    } catch (error: any) {
        console.error("Error deleting user:", error);
        res.status(500).json({
            success: false,
            message: "Error deleting user",
            error: error.message
        });
    }
};




export const UserController = {
    createUser, 
    getUsers,
    getSingleUser,
    updateUser,
    deleteUser
};