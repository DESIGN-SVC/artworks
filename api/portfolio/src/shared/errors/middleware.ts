import { NextFunction, Request, Response } from "express"
import { ZodError } from "zod"
import { AppError } from "./appError"

type ErrorHandler = {
    err: Error
    req: Request
    res: Response
    next: NextFunction
}

export function errorHandler({ err, req, res, next }: ErrorHandler) {

    if (err instanceof ZodError) {
        const zodError = err as ZodError
        const errorMessage = zodError.errors.map(error => error.message).join(", ")

        return res.status(400).json({
            status: 'error',
            message: errorMessage
        })
    }
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            status: 'error',
            message: err.message
        })
    }

    return res.status(500).json({
        status: 'error',
        message: 'Internal server error'
    })
}