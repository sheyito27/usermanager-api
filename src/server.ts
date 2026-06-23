import express from "express";
import { users } from "./data/mockData";

const app = express();
const PORT = 3000;


app.use(express.json());

// Funcionamiento api
/// Ruta por defecto
app.get("/", (req, res) => {
  res.json({
  "name": "UserManager API",
  "version": "1.0.0",
  "status": "running",
  "author": "Dani"
  });
});

/// Ruta para comprobar el funcionamiento de la API
app.get("/api/health", (req, res) =>{
  res.json({
    "status": "ok",
    "message": "UserManager API funcionando",
    "timestamp": new Date().toISOString()
  })
});

/// Ruta para comprobar respuesta rápida del servidor
app.get("/api/ping", (req, res) =>{
  res.json({
    "message": "pong"
  })
});

// Ruta para obtener usuario por id
app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return res.status(400).json({
      error: "El ID debe ser un número"
    });
  }

  const user = users.find((user) => user.id === id);

  res.status(200).json({
    message: "Usuario encontrado",
    data: user
  });
});

// Ruta para crear usuarios
app.post("/api/users", (req, res) => {
  const userData = req.body;
  console.log("Body recibido en POST /api/users:", userData);

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
  "id": id,
  "role": role
});
});

// Ruta para comprobar que se reciba el body
app.post("/api/debug/body", (req, res) => {
  res.status(200).json({
    "message": "Body recibido correctamente",
    "body": req.body
  });
});

// Ruta para probar route params
app.get("/api/debug/params/:id", (req, res) => {
  res.status(200).json({
    "message": "Params recibidos correctamente",
    "params": req.params
  });
});

// Ruta para probar query params
app.get("/api/debug/query", (req, res) => {
  res.status(200).json({
    "message": "Query params recibidos correctamente",
    "query": req.query
  });
});

// Ruta para probar headers
app.get("/api/debug/headers", (req, res) => {
  res.status(200).json({
    "message": "Headers recibidos correctamente",
    "headers": req.headers
  });
});

// Ruta combinada
app.patch("/api/debug/users/:id", (req, res) => {
  const { id } = req.params;
  const { notify } = req.query;
  const authorization = req.headers.authorization;
  const changes = req.body;

  res.status(200).json({
    "message": "Datos combinados recibidos",
    id,
    notify,
    authorization,
    changes
  });
});

// Ruta para buscar un usuario simulado
app.get("/api/user/search", (req, res) => {
  res.status(200).json({
    "message": "Búsqueda de usuarios",
    "filters": req.query
  });
});

// Ruta de simulación de cambio de contraseña
app.patch("/api/users/me/password", (req, res) => {

  res.status(200).json({
     "message": "Solicitud de cambio de contraseña recibida"
  });
});

// Ruta para leer un header simulado
app.get("/api/debug/client", (req, res) => {
  res.status(200).json({
    "client": req.headers["x-client-name"]
  });
});

// Ruta temporal de depuración
app.post("/api/debug/request", (req, res) => {
  res.status(200).json({
    message: "Información completa de la petición",
    method: req.method,
    path: req.path,
    params: req.params,
    query: req.query,
    headers: req.headers,
    body: req.body
  });
});

// Ruta con header personalizado
app.post("/api/debug/custom", (req, res) => {
  res.status(200).json({
    "message": "Headers recibidos correctamente",
    "headers": req.headers["x-student-name: tu-nombre"]
  });
});

// Ruta prueba actualización completa
app.patch("/api/debug/actualizar/:id", (req, res) => {
  res.status(200).json({
    "response": "Usuario Modificado",
    "email": req.body,
    "isActive": req.params
  })
})

app.get("/test", (req, res) => {
  res.send("¡El servidor está vivo!");
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

