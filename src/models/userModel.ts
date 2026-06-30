export type User = {
  id: number;
  name: string;
  email: string;
  role: 'USER' | 'ADMIN';
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
};