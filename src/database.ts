import { TProducts, TUsers } from "./types";

export const users: TUsers[] = [
  {
    id: "u001",
    firstName: "Fulano",
    email: "fulano@ElementInternals.com",
    password: "fulano123",
    createdAt: new Date().toISOString(),
  },
  {
    id: "u002",
    firstName: "Beltrana",
    email: "beltrana@ElementInternals.com",
    password: "beltrana00",
    createdAt: new Date().toISOString(),
  },
];

export const products: TProducts[] = [
  {
    id: "prod001",
    firstName: "Mouse gamer",
    price: 250,
    description: "Melhor mouse do mercado!",
    imageUrl: "https://picsum.photos/seed/Mouse%20gamer/400",
  },
  {
    id: "prod002",
    firstName: "Monitor",
    price: 900,
    description: "Monitor LED Full HD 24 polegadas",
    imageUrl: "https://picsum.photos/seed/Monitor/400",
  },
];
