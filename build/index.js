"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database");
(0, database_1.createUser)("u003", "wyl", "wyl@email.com", "wyl123");
console.table((0, database_1.getAllUsers)());
(0, database_1.createProduct)("prod003", "SSD gamer", 349.99, "Acelere seu sistema com velocidades incríveis de leitura e gravação.", "https://images.unsplash.com/photo");
console.table((0, database_1.getAllProducts)());
console.table((0, database_1.searchProductsByName)('gamer'));
