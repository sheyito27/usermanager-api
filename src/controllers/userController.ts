import { Request, Response } from 'express';
import { userRepository } from '../repositories/userRepository.js';
import { CreateUserSchema } from '../schemas/userSchema.js';

// Obtener la cantidad de usuarios
export const getUserCount = (req: Request, res: Response) => {
    res.status(200).json({
        total: userRepository.countAll()
    })
}

// Obtener el listado total de usuarios
export const getAllUsers = (req: Request, res: Response) => {
    const users = userRepository.findAll();
    res.status(200).json(users)
    }

// Obtener un usuario por ID
export const getUserById = (req: Request, res: Response) => {
    const idParam = req.params.id;
    const id = Number(idParam);
    if (Number.isNaN(id)) {
        return res.status(400).json({
        error: "El ID debe ser un número"
    });
  };
    const user = userRepository.findOne(id);
    if (!user) {
        return res.status(404).json({
             error: "Usuario no encontrado" 
        });
    };
    res.status(200).json(user);
};

// Ruta para crear usuarios
export const createUser = (req: Request, res: Response) => {
  const result = CreateUserSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ errors: result.error.format() });
  }

  const { name, email, password } = result.data;
  const userList =userRepository.findAll();
  if (userList.find(u => u.email == email)) {
    return res.status(409).json({ error: "El email ya está registrado" });
  }

  const newId = userList.length > 0
  ? Math.max(...userList.map((user) => user.id)) + 1
  : 1;

  const newUser = {
    id: newId,
    name,
    email,
    password,
    role: 'USER' as 'USER',
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  };

  const addedUser = userRepository.addOne(newUser);

  return res.status(201).json({
    message: "Usuario creado exitosamente",
    user: addedUser
  });
}

// Cambiar datos de un usuario en concreto
export const updateUser = (req: Request, res: Response) => {
  const idParam = req.params.id;
  const id = Number(idParam);
  const changes = req.body;
  const changedUser = userRepository.updateOne(id, changes);

  res.status(200).json({
    "message": "Usuario recibido para actualizar",
    "changes": changedUser
  });
};
// Cambiar rol de un usuario en concreto
export const updateUserRole = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const {role} = req.body;
  const user = userRepository.findOne(id);
  if (!user) {
    return res.status(404).json({ message: "Usuario no encontrado" });
  }
  const updatedUser = userRepository.updateOne(id, { role });
  res.status(200).json({
    message: "Rol actualizado exitosamente",
    data: updatedUser
  });
};

// Borrar usuario específico
  export const deleteUser = (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const deletedUser = userRepository.deleteOne(id)
    if (!deletedUser) {
        return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res.status(200).json({
        message: "Usuario eliminado correctamente",
        data: deletedUser
    });
};