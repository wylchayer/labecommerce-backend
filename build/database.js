"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchProductsByName = exports.getAllProducts = exports.createProduct = exports.getAllUsers = exports.createUser = exports.products = exports.users = void 0;
exports.users = [
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
exports.products = [
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
const createUser = (id, firstName, email, password) => {
    const createdAt = new Date().toISOString();
    console.log(`Cadastro realizado com sucesso:
  ${id}
  ${firstName}
  ${email}
  ${password}
  ${createdAt}`);
};
exports.createUser = createUser;
const getAllUsers = () => {
    return exports.users;
};
exports.getAllUsers = getAllUsers;
const createProduct = (id, firstName, price, description, imageUrl) => {
    console.log(`Produto criado com sucesso:
  ${id}
  ${firstName}
  ${price}
  ${description}
  ${imageUrl}`);
};
exports.createProduct = createProduct;
const getAllProducts = () => {
    return exports.products;
};
exports.getAllProducts = getAllProducts;
const searchProductsByName = (searchName) => {
    const result = exports.products.filter((product) => {
        if (product.firstName.toLowerCase().includes(searchName.toLowerCase())) {
            return product;
        }
        else if (!searchName) {
            return exports.products;
        }
    });
    return result;
};
exports.searchProductsByName = searchProductsByName;
