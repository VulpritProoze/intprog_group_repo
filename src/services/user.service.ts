import { AppDataSource } from "../data-source";
import { User } from "../entities/User";
import * as bcrypt from "bcryptjs";

const userRepository = AppDataSource.getRepository(User);



export const _delete = async (id: number) => {
    const user = await userRepository.findOneBy({ id });
    if (!user) throw "User not found";
    await userRepository.remove(user);
  };
  