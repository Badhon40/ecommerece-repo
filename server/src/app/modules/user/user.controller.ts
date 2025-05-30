import { Request, Response } from "express";
import { UserService } from "./user.service";
import sendResponse from "../../utils/sendResponse";
import catchAsync from "../../utils/catchAsync";
import { StatusCodes } from "http-status-codes";


const createUser = catchAsync(async ( req: Request, res: Response ) =>{
    const payload = req.body;
    const result = await UserService.createUserIntoDB( payload );
    sendResponse(res, StatusCodes.CREATED, {
        status: true,
        message: "User created successfully",
        data: result
    });
});

const getUsers = catchAsync(async ( req: Request, res: Response ) => {
    const users = await UserService.getUsersFromDB();
    sendResponse(res, StatusCodes.OK, {
        status: true,
        message: "Users fetched successfully",
        data: users
    });
});

      

const getSingleUser = catchAsync(async ( req: Request, res: Response ) => {
    const userId = req.params.id;
    const user = await UserService.getSingleUserFromDB(userId);
    sendResponse(res, StatusCodes.OK, {
        status: true,
        message: "User fetched successfully",
        data: user
    });
});

const updateUser = catchAsync(async ( req: Request, res: Response ) => {
    const userId = req.params.id;
    const payload = req.body;
    const updatedUser = await UserService.updateUserInDB(userId, payload);
    sendResponse(res, StatusCodes.OK, {
        status: true,
        message: "User updated successfully",
        data: updatedUser
    });
});

const deleteUser = catchAsync(async ( req: Request, res: Response ) => {
    const userId = req.params.id;
    const deletedUser = await UserService.deleteUserFromDB(userId);
    sendResponse(res, StatusCodes.OK, {
        status: true,
        message: "User deleted successfully",
        data: deletedUser
    });
});




export const UserController = {
    createUser, 
    getUsers,
    getSingleUser,
    updateUser,
    deleteUser
};