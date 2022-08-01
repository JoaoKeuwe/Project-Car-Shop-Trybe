import express from 'express';
import 'express-async-errors';
import errorMiddleware from './middlewares/error';
import carRouter from './routes/car.routes';

const app = express();
app.use(express.json());
app.use(carRouter);
app.use(errorMiddleware);
export default app;
