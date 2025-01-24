import express, { Request, Response } from 'express';
import cors from 'cors';
import router from './routers';

const app = express();

// parser
app.use(express.json());
app.use(cors());

app.use('/api', router);
// app.use('/api', orderRouter);

app.get('/', (req: Request, res: Response) => {
  res.send({ message: 'Server running....' });
});

export default app;
