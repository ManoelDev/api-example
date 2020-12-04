import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import 'express-async-errors';
import AppError from './errors/AppError';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({ status: 'error', message: err.message });
  }

  // eslint-disable-next-line no-console
  console.error(err);

  return response.status(500).json({ status: 'error', message: 'Internal server error' });
});

app.use('*', (request: Request, response: Response) => {
  return response.status(404).json({ message: 'Not Found', documentation_url: process.env.DOC_URL });
});

export default app;
