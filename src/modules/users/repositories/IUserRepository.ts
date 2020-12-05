import User from '@database/entities/Users';
import CreateUserDTO from '../dtos/ICreateUserDTO';

export default interface IUserRepository {
  findByEmail(email: string): Promise<User | undefined>;
  findById(id: string): Promise<User | undefined>;
  create(createUserDTO: CreateUserDTO): Promise<User>;
  save(user: User): Promise<User>;
}
