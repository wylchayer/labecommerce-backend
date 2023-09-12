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

export const createUser = (
  id: string,
  firstName: string,
  email: string,
  password: string
): void => {
  const createdAt: string = new Date().toISOString();
  console.log(`Cadastro realizado com sucesso:
  ${id}
  ${firstName}
  ${email}
  ${password}
  ${createdAt}`);
};

export const getAllUsers = (): TUsers[] => {
  return users;
};

export const createProduct = (
  id: string,
  firstName: string,
  price: number,
  description: string,
  imageUrl: string
): void => {
  console.log(`Produto criado com sucesso:
  ${id}
  ${firstName}
  ${price}
  ${description}
  ${imageUrl}`);
};

export const getAllProducts = (): TProducts[] => {
  return products;
};

export const searchProductsByName = (searchName: string): TProducts[] => {
  return products.filter((product) => {
    if (product.firstName.toLowerCase().includes(searchName.toLowerCase())) {
      return product;
    } else if (!searchName) {
      return products;
    }
  });
};
