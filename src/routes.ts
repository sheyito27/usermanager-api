import * as userController from './controllers/userController'
import * as mainController from './controllers/mainController'
import { Router } from 'express';

export const userRouter = Router();
export const mainRouter = Router();

// --- Endpoints users ---
userRouter.get("/", userController.getAllUsers);
userRouter.get("/count", userController.getUserCount);
userRouter.get("/:id", userController.getUserById);
userRouter.post("/", userController.createUser);
userRouter.patch("/:id", userController.updateUser);
userRouter.patch("/:id/role", userController.updateUserRole);
userRouter.delete("/:id", userController.deleteUser);

// --- Endpoints de Debug ---
mainRouter.get("/health", mainController.getStatusApi);