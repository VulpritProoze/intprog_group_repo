import { AppDataSource } from "../data-source";
import { User } from "../entities/User";
import * as bcrypt from "bcryptjs";

const userRepository = AppDataSource.getRepository(User);

export const getAll = async () => {
  return await userRepository.find();
};

export const getById = async (id: number) => {
  const user = await userRepository.findOneBy({ id });
  if (!user) throw "User not found";
  return user;
};