import { Request, Response } from 'express';
import { userRepository } from '../repositories/userRepository.js';

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
  }
    const user = userRepository.findOne(id);
    if (!user) {
        return res.status(404).json({
             error: "Usuario no encontrado" 
        });
    }
    res.status(200).json(user)
}
