import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

// Ruta por defecto
app.get("/", (req, res) => {
  res.json({
  "name": "UserManager API",
  "version": "1.0.0",
  "status": "running",
  "author": "Dani"
  });
});

// Ruta para comprobar el funcionamiento de la API
app.get("/api/health", (req, res) =>{
  res.json({
    "status": "ok",
    "message": "UserManager API funcionando",
    "timestamp": new Date().toISOString()
  })
});

// Ruta para comprobar respuesta rápida del servidor
app.get("/api/ping", (req, res) =>{
  res.json({
    "message": "pong"
  })
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});