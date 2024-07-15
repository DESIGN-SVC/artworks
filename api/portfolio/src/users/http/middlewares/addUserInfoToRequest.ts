import { NextFunction, Request, Response } from 'express'
import { decode } from 'jsonwebtoken'

export const AddUserInfoToRequest = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).json({
      message: 'Access token not present',
      error: true,
      code: 'token.invalid',
    })
  }
  const token = authorization.split(' ')[1]

  if (!token) {
    return res.status(401).json({
      message: 'Access token not present',
      error: true,
      code: 'token.invalid',
    })
  }

  try {
    const { sub } = decode(token)
    req.user = { id: sub as string }
    return next()
  } catch (error) {
    return res.status(401).json({
      message: 'Access token not present',
      error: true,
      code: 'token.invalid',
    })
  }
}
