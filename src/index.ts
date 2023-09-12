import {
  createProduct,
  createUser,
  getAllProducts,
  getAllUsers,
  products,
  searchProductsByName,
  users,
} from "./database";

createUser("u003", "wyl", "wyl@email.com", "wyl123");

console.table(getAllUsers());

createProduct(
  "prod003",
  "SSD gamer",
  349.99,
  "Acelere seu sistema com velocidades incríveis de leitura e gravação.",
  "https://images.unsplash.com/photo"
);

console.table(getAllProducts());

console.table(searchProductsByName('mo'));
