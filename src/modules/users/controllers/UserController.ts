import { Request, Response } from 'express';
import UserRepository from '@modules/users/repositories/UserRepository';
import { classToClass } from 'class-transformer';
import CreateUserService from '../services/CreateUserService';

export default class UserController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { first_name, last_name, email, password } = request.body;
    const userRespository = new UserRepository();
    const createUser = new CreateUserService(userRespository);
    const user = await createUser.execute({ first_name, last_name, email, password });
    return response.json({ user: classToClass(user) });
  }
}
