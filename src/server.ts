import { app } from "./app";
import { Express } from "express";

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

