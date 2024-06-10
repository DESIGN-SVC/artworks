import express from 'express'
import 'express-async-errors'
import swaggerUi from 'swagger-ui-express'
import cors from 'cors'
import { routes } from './routes'
import 'dotenv/config'
import 'reflect-metadata'
import { errorHandler } from '@shared/errors/middleware'
import '@shared/container'
import swaggerFile from '../../swagger.json'

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(routes)
app.use(errorHandler)

export { app }
