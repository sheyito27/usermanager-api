import { User } from "../models/userModel";

export const users: User[] = [
  {
    id: 1,
    name: "Lluis Valenzuela",
    email: "lluis@email.com",
    role: "USER",
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 2,
    name: "Daniel Rico",
    email: "daniel@email.com",
    role: "ADMIN",
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 3,
    name: "Mauricio José Toro",
    email: "mauricio@email.com",
    role: "USER",
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
   id: 4,
    name: "Gerard Subirana",
    email: "gerard@email.com",
    role: "USER",
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
   id: 5,
    name: "Ivan Corcelles",
    email: "ivan@email.com",
    role: "USER",
    isActive: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

