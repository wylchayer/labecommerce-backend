import express, { Request, Response } from "express";
import cors from "cors";
import {
  createProduct,
  createUser,
  getUsers,
  getProducts,
  deleteUser,
  deleteProduct,
  editUser,
  editProduct,
} from "./database";
import { TProducts, TUsers } from "./types";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
  console.log("Servidor rodando na porta 3003");
});

app.get("/ping", (req: Request, res: Response) => {
  res.send("pong");
});

// USERS
app.get("/users", (req: Request, res: Response) => {
  const query: string = req.query.q as string;
  const result = getUsers(query);
  res.status(200).send(result);
});

app.post("/users", (req: Request, res: Response) => {
  const { id, firstName, email, password }: TUsers = req.body;
  const user = { id, firstName, email, password };
  const result = createUser(user);
  res.status(201).send(result);
});

app.delete("/users/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  const result = deleteUser(id);
  res.status(200).send(result);
});

app.put("/users/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  const firstName = req.body.firstName as string;
  const email = req.body.email as string;
  const password = req.body.password as string;
  const userEdit: TUsers = {
    id,
    firstName,
    email,
    password,
  };

  const result = editUser(userEdit);
  res.status(200).send(result);
});

// PRODUCTS
app.get("/products", (req: Request, res: Response) => {
  const query: string = req.query.q as string;
  const result = getProducts(query);
  res.status(200).send(result);
});

app.post("/products", (req: Request, res: Response) => {
  const { id, firstName, price, description, imageUrl }: TProducts = req.body;
  const product = { id, firstName, price, description, imageUrl };
  const result = createProduct(product);
  res.status(201).send(result);
});

app.delete("/products/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  const result = deleteProduct(id);
  res.status(200).send(result);
});

app.put("/products/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  const firstName = req.body.firstName as string;
  const price = req.body.price as number;
  const description = req.body.description as string;
  const imageUrl = req.body.imageUrl as string;
  const productEdit: TProducts = {
    id,
    firstName,
    price,
    description,
    imageUrl,
  };

  const result = editProduct(productEdit);
  res.status(200).send(result);
});
