import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        // required: true,
        // ref: "User", //Know which model the object id belongs to
    },
    name:
    {
        type: String,
        required: true,
        unique: true,
    },
    image:
    {
        type: String,
        required: true,
    },
    price:
    {
        type: Number,
        required: true,
    },
    qty:
    {
        type: Number,
        required: true,
    },
    info:
    {
        type: String,
        required: true,
    },
    created:
    {
        type: Date,
        default: Date.now()
    },
 }
);

let Product = mongoose.model("product", ProductSchema)

export default Product;