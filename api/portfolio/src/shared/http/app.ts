import express from 'express'
import 'express-async-errors'
import swaggerUi from 'swagger-ui-express'
import cors from 'cors'
import { routes } from './routes'
import swaggerFile from '../../swagger.json'
import { errorHandler } from '@shared/errors/middleware'
import '@shared/container'
import uploadConfig from '@config/upload'


const app = express()
app.use(cors())
app.use(express.json())
app.use('/files', express.static(uploadConfig.directory))
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(routes)
app.use(errorHandler)

export { app }
