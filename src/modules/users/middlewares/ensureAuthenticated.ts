import AppError from '@src/errors/AppError';
import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureAthenticated(request: Request, response: Response, next: NextFunction): void {
  const authHeader = request.headers.authorization;
  if (!authHeader) throw new AppError('JWT token is missing.', 401);

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, process.env.APP_SECRET as string);
    const { sub } = decoded as ITokenPayload;
    request.user = { id: sub };
    return next();
  } catch {
    throw new AppError('Invalid JWT token.', 403);
  }
}
