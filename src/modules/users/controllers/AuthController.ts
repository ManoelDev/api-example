import { Request, Response } from 'express';
import UserRepository from '@modules/users/repositories/UserRepository';
import { classToClass } from 'class-transformer';
import AuthService from '../services/AuthService';

export default class UserController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;
    const userRespository = new UserRepository();
    const auth = new AuthService(userRespository);
    const { user, token } = await auth.execute({ email, password });
    return response.json({ user: classToClass(user), token });
  }
}
