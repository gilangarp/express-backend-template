import { Request, Response } from "express";
import { getUserById } from "../repository/userRepository.test";

export const getUser = (req: Request, res: Response) => {
  const { id } = req.params;
  const user = getUserById(Number(id));

  if (user) {
    return res.status(200).json(user);
  } else {
    return res.status(404).json({ message: "User not found" });
  }
};
