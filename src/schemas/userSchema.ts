import { boolean, z } from 'zod';
const ROLES = ['USER', 'ADMIN'] as const;

export const CreateUserSchema = z.object({
  name: z.string().min(1),
  email: z.string().email().trim().toLowerCase(),
  password: z.string().min(6),
});

export const UpdateUserSchema = z.object({
  name: z.string().min(1).trim().optional(),
  email: z.string().email().trim().toLowerCase().optional(),
  isActive: z.boolean().optional()
});

export const UserIdSchema = z.object({
  id: z.coerce.number().int().positive()
});