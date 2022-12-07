import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import booksRoute from "./routes/books";
import productRoutes from "./routes/productRoutes";
import userRoutes from "./routes/userRoutes";

dotenv.config();
require("dotenv").config();

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

mongoose.connect(process.env.DATABASE,
{})
.then(() => console.log("DB Connected"))
.catch((err) => console.log("DB Connection Error", err));

app.use("/api", booksRoute);
app.use("/api", productRoutes);
app.use("/api/users", userRoutes);

app.listen(3031, () => console.log("Server is running on port 3031"))