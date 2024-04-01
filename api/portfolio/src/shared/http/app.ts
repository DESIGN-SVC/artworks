import express from 'express'
import 'express-async-errors'
import cors from 'cors'
import { routes } from './routes'
import 'dotenv/config'
import 'reflect-metadata'
import { errorHandler } from '@shared/errors/middleware'
import '@shared/container'

const app = express()
app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errorHandler)

export { app }
