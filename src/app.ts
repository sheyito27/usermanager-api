import express from "express";
import { userRouter, mainRouter } from './routes';

export const app = express();
app.use(express.json());

app.use('/users', userRouter); 
app.use('/api', mainRouter);