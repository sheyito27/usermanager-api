import * as userController from './controllers/userController'

export const userRouter = Router();

// --- Endpoints principales ---
userRouter.get("/", userController.getAllUsers);
userRouter.get("/count", userController.getUserCount);
userRouter.get("/:id", userController.getUserById);
userRouter.post("/", userController.createUser);
userRouter.patch("/:id", userController.updateUser);
userRouter.patch("/:id/role", userController.updateUserRole);
userRouter.delete("/:id", userController.deleteUser);
userRouter.patch("/me/password", userController.changePassword);
userRouter.get("/search", userController.searchUsers);

// --- Endpoints de Debug ---
userRouter.post("/debug/body", userController.debugBody);
userRouter.get("/debug/params/:id", userController.debugParams);
userRouter.get("/debug/query", userController.debugQuery);
userRouter.get("/debug/headers", userController.debugHeaders);
userRouter.patch("/debug/users/:id", userController.debugCombined);
userRouter.get("/debug/client", userController.debugClient);
userRouter.post("/debug/request", userController.debugRequest);
userRouter.post("/debug/custom", userController.debugCustom);
userRouter.patch("/debug/actualizar/:id", userController.debugUpdate);