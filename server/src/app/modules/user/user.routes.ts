import { Router } from "express";
import { UserController } from "./user.controller";


const userRouter = Router();

userRouter.post("/create-user", UserController.createUser);
userRouter.get("/get-user/:id", UserController.getSingleUser);
userRouter.put("/update-user/:id", UserController.updateUser);
userRouter.delete("/delete-user/:id", UserController.deleteUser);
userRouter.get("/get-users", UserController.getUsers);





export default userRouter;