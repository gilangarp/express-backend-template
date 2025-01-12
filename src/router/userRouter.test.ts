import express from "express";
import { getUser } from "../controller/userController.test";

const userRouterTest = express.Router();

userRouterTest.get("/users/:id", getUser);

export default userRouterTest;
