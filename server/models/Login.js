import mongoose from "mongoose";

const LoginSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
})

let Login = mongoose.model("login", LoginSchema)

export default Login;