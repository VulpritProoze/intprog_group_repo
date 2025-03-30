import { AppDataSource } from "../data-source";
import { User } from "../entities/User";
import * as bcrypt from "bcryptjs";

const userRepository = AppDataSource.getRepository(User);


export const create = async (params: any) => {
    // Validate email
    if (await userRepository.findOneBy({ email: params.email })) {
      throw `Email "${params.email}" is already registered`;
    }
  
    // Hash password
    const user = new User();
    user.title = params.title;
    user.firstName = params.firstName;
    user.lastName = params.lastName;
    user.role = params.role;
    user.email = params.email;
    user.passwordHash = await bcrypt.hash(params.password, 10);
  
    // Save user
    await userRepository.save(user);
  };
  
export const getAll = async () => {
  return await userRepository.find();
};

export const getById = async (id: number) => {
  const user = await userRepository.findOneBy({ id });
  if (!user) throw "User not found";
  return user;
};
