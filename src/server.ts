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

// Ruta para obtener usuarios
app.get("/api/users", (req, res) => {
  res.status(200).json({
    "message": "Listado de usuarios",
    "data": []
  });
});

// Ruta para obtener usuario por id
app.get("/api/users/:id", (req, res) => {
  const { id } = req.params;

  res.status(200).json({
    "message": "Detalle de usuario",
    "id": id
  });
});

// Ruta para crear usuarios
app.post("/api/users", (req, res) => {
  const userData = req.body;

  res.status(201).json({
    "message": "Usuario recibido para crear",
    "data": userData
  });
});


// Ruta para modificar valores de usuarios
app.patch("/api/users/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  res.status(200).json({
    "message": "Usuario recibido para actualizar",
    "id": id,
    "changes": changes
  });
});

// Ruta para borrar usuarios
app.delete("/api/users/:id", (req, res) => {
  const { id } = req.params;

  res.status(200).json({
    "message": "Usuario recibido para eliminar o desactivar",
    "id": id
  });
});

// Ruta para acceder a un perfil de ejemplo
app.get("/", (req, res) => {
  res.json({
  "id": 1,
  "name": "Usuario de ejemplo",
  "email": "usuario@email.com",
  "role": "USER",
  "isActive": true
  });
});

// Ruta para modificar roles de usuarios
app.patch("/api/users/:id/role", (req, res) => {
  const { id } = req.params;
  const role = req.body;

  res.status(200).json({
  "message": "Rol de usuario recibido para actualizar",
  "id": "1",
  "role": "ADMIN"
});
});



app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

