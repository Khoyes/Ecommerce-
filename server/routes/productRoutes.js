import express from "express";
const router = express.Router();

const {products,product,createProduct,updateProduct,deleteProduct} = require("../controllers/productControllers")

router.get("/products", products);

router.get("/products/:id", product);

router.post("/products", createProduct);

router.put("/products/:id", updateProduct);

router.delete("/products/:id", deleteProduct);

export default router;