import express from "express";
import dotenv from "dotenv";

import products from "./data/products.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const id = req.params.id;
  const product = products.find((p) => p._id === id);
  res.json(product);
});

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
