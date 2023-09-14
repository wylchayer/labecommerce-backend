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

// USERS
export const getUsers = (searchName: string): TUsers[] => {
  return users.filter((user) => {
    if (
      searchName &&
      user.firstName.toLowerCase().includes(searchName.toLowerCase())
    ) {
      return user;
    } else if (!searchName) {
      return users;
    }
  });
};

export const createUser = (user: TUsers): string => {
  const { id, firstName, email, password } = user;

  const newUser: TUsers = {
    id,
    firstName,
    email,
    password,
    createdAt: new Date().toISOString(),
  };
  users.push(newUser);

  return "Usuário criado com sucesso!";
};

// PRODUCTS
export const getProducts = (searchName: string): TProducts[] => {
  return products.filter((product) => {
    if (
      searchName &&
      product.firstName.toLowerCase().includes(searchName.toLowerCase())
    ) {
      return product;
    } else if (!searchName) {
      return products;
    }
  });
};

export const createProduct = (body: TProducts): string => {
  const { id, firstName, price, description, imageUrl }: TProducts = body;
  const newProduct: TProducts = {
    id,
    firstName,
    price,
    description,
    imageUrl,
  };
  products.push(newProduct);

  return "Produto criado com sucesso!";
};
