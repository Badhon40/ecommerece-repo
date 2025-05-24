
import { IUser } from './user.interface';
import UserModel from './user.model';



const createUserIntoDB = async( payload : IUser ) => {
	try{
        const result = await UserModel.create( payload );
        if (!result) {
            throw new Error("User creation failed");
        }
        return result;
    }
    catch( error : any ) {
        throw new Error(`Error creating user: ${error.message}`);
    }
}

const getUsersFromDB = async( ) => {
    try {
        const users = await UserModel.find({});
        if (!users) {
            throw new Error("No users found");
        }
        return users;
    } catch (error: any) {
        throw new Error(`Error fetching users: ${error.message}`);
    }
}

const getSingleUserFromDB = async( userId : string ) => {
    try {
        const user = await UserModel.findById(userId);
        if (!user) {
            throw new Error("User not found");
        }
        return user;
    } catch (error: any) {
        throw new Error(`Error fetching user: ${error.message}`);
    }
}

const updateUserInDB = async( userId: string, payload: Partial<IUser> ) => {
    try {   
        const updatedUser = await UserModel.findByIdAndUpdate(userId, payload, { new: true });
        if (!updatedUser) {
            throw new Error("User update failed");
        }
        return updatedUser;
    }
    catch (error: any) {
        throw new Error(`Error updating user: ${error.message}`);
    }   

}

const deleteUserFromDB = async( userId: string ) => {
    try {
        const deletedUser = await UserModel.findByIdAndDelete(userId);
        if (!deletedUser) {
            throw new Error("User deletion failed");
        }
        return deletedUser;
    }
    catch (error: any) {
        throw new Error(`Error deleting user: ${error.message}`);
    }
}

export const UserService = {
    createUserIntoDB,
    getUsersFromDB,
    getSingleUserFromDB,
    updateUserInDB,
    deleteUserFromDB
}