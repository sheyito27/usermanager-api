import { Request, Response } from 'express';
import { userRepository } from '../repositories/userRepository.js';

export const getUserCount = (req: Request, res: Response) => {
    res.status(200).json({
        total: userRepository.countAll()
    })
}