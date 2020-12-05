import AppError from '@src/errors/AppError';
import { sign } from 'jsonwebtoken';
import IHashProvider from '@src/providers/HashPassword/models/IHashProvider';
import HashProvider from '@src/providers/HashPassword/implementations/HashProvider';
import User from '@database/entities/Users';
import UserRepository from '../repositories/UserRepository';
import IUserRepository from '../repositories/IUserRepository';

interface Request {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

export default class AuthenticationService {
  private userRepository: IUserRepository;

  private hashPRovider: IHashProvider;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
    this.hashPRovider = new HashProvider();
  }

  public async execute({ email, password }: Request): Promise<IResponse> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) throw new AppError('Credentials not found.', 401);
    const checkPassword = await this.hashPRovider.compareHash(password, user.password);
    if (!checkPassword) throw new AppError('Credentials not found.', 401);
    const token = sign({}, process.env.APP_SECRET as string, { subject: user.id, expiresIn: '1d' });
    return { user, token };
  }
}
