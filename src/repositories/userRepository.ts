import { createRepository } from "./repository";
import { User } from "../models/userModel";
import { users } from "../data/mockData"

export const baseRepository = createRepository<User>(users);
export const userRepository = {
    ...baseRepository,
    countAll: () => baseRepository.findAll().length,
};  

