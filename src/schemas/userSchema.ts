import { z } from 'zod';

// Esquema para lo que recibes del cliente
export const CreateUserSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(6),
});