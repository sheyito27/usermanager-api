import express from "express";
import { users } from "./data/mockData";
import { userRouter, mainRouter } from './routes';

const app = express();
const PORT = 3000;


app.use(express.json());

app.use('/users', userRouter); 
app.use('/api', mainRouter);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

