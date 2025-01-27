import express, { Request, Response } from 'express';
import cors from 'cors';
import router from './routers';
import globalErrorHandler from './middlewares/globalErrorHandler';
import notFound from './middlewares/notFound';

const app = express();

// parser
app.use(express.json());
app.use(cors({
  origin: ['http://localhost:5173'],
  credentials:true
}));

app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send({ message: 'Server running....' });
});

app.use(globalErrorHandler)
app.use(notFound)

export default app;
