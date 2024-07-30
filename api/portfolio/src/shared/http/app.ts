import express from 'express';
import 'express-async-errors';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';
import { routes } from './routes';
import swaggerFile from '../../swagger.json';
import { errorHandler } from '@shared/errors/middleware';
import '@shared/container';
import uploadConfig from '@config/upload';

const app = express();

const allowedOrigins = ['http://localhost:4200',  'https://homologportfolio.vercel.app'];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(routes);
app.use(errorHandler);

export { app };
