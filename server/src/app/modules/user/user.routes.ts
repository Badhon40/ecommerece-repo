import { Router } from "express";
import { UserController } from "./user.controller";


const userRouter = Router();

userRouter.post("/create-user", UserController.createUser);
userRouter.get("/get-all-users", UserController.getUsers);
userRouter.get("/:id", UserController.getSingleUser);
userRouter.patch("/:id", UserController.updateUser);
userRouter.delete("/:id", UserController.deleteUser);




export default userRouter;