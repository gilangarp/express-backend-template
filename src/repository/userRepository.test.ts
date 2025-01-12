import { IUser } from "../type/userType.test";

const users: IUser[] = [
  { id: 1, name: "test1", email: "test1@example.com" },
  { id: 2, name: "test2", email: "test2@example.com" },
  { id: 3, name: "test3", email: "test3@example.com" },
  { id: 4, name: "test4", email: "test4@example.com" },
];

export const getUserById = (id: number): IUser | null => {
  return users.find((user) => user.id === id) || null;
};
