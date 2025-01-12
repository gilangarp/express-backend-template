import { Router } from "express";
import userRouterTest from "./userRouter.test";

const router = Router();

router.use("/user-router-test", userRouterTest);

export default router;
