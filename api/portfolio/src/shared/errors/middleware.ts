import { Request, Response, NextFunction } from 'express'
import { ZodError } from 'zod'
import { AppError } from '@shared/errors/appError'

export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) {
  if (err instanceof ZodError) {
    const zodError = err as ZodError
    const errorMessage = zodError.errors
      .map((error) => error.message)
      .join(', ')
    return res.status(400).json({
      status: 'error',
      message: errorMessage,
    })
  } else if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    })
  } else {
    return res.status(500).json({
      status: 'error',
      message: 'Internal server error',
    })
  }
}
