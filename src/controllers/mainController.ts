import { Request, Response } from 'express';

// Ruta para comprobar estado de la API
export const getStatusApi = (req: Request, res: Response) => {
    res.status(200).json({
    "status": "ok",
    "message": "UserManager API funcionando",
    "timestamp": new Date().toISOString()
  })
}