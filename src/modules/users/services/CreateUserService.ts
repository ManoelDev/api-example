import AppError from '@src/errors/AppError';
import IHashProvider from '@src/providers/HashPassword/models/IHashProvider';
import BCryptHashProvider from '@src/providers/HashPassword/implementations/HashProvider';
import UserRepository from '../repositories/UserRepository';
import User from '../entities/Users';
import IUserRepository from '../repositories/IUserRepository';

interface Request {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export default class CreateUserService {
  private userRepository: IUserRepository;

  private hashPovider: IHashProvider;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
    this.hashPovider = new BCryptHashProvider();
  }

  public async execute({ first_name, last_name, email, password }: Request): Promise<User> {
    const findUser = await this.userRepository.findByEmail(email);
    if (findUser) throw new AppError('User already exist.', 401);
    const passwordHash = await this.hashPovider.generateHash(password);
    const user = await this.userRepository.create({ first_name, last_name, email, password: passwordHash });
    return user;
  }
}
