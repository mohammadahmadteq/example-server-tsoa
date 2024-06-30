import { Response } from 'express';

export function createTsoaResponse<T>(res: Response) {
  return (status: number, data: T, headers?: object) => {
    if (headers) {
      res.set(headers);
    }
    return res.status(status).json(data);
  };
}
