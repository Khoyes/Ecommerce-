import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  
    name: {
        type: String,
        required: [true, "Need a username"],
    },
    email: {
        type: String,
        required: [true, "Need an email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Need a password"],
    }
 },
)
{
    timestamps: true
}

let User = mongoose.model("User", userSchema)

export default User;