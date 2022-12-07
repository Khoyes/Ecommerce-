import User from "../models/User";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler"; //Uses async/await language and is more concise.


const registerUser =  asyncHandler (async (req,res) => {
    const {name, email, password} = req.body;
    
    if(!name || !email || !password) {
        res.status(404)
        throw new Error("Need input in all fields")
    }

    const userExists = await User.findOne({email})

    if(userExists){
        res.status(404)
        throw new Error("User exists. Use a different email.")
    }

    //Use bcrypt to generate salt to hash the password - 10 is the default
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if(user){
        res.status(202).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    }

    else{
        res.status(404)
        throw new Error("Data is not valid")
    }
})


const loginUser = asyncHandler (async (req,res) => {
    const {email, password} = req.body

    const user = await User.findOne({email})

    if(user && (await bcrypt.compare(password, user.password))){ //Need to use bcrypt method called compare, as the password is hashed on mongoDB. Compares password to the hashed password
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    }

    else{
        res.status(404)
        throw new Error("Incorrect username/password")
    }
})


//Get current logged in user -> Sending a token, get ID from token
const getMe = asyncHandler (async (req,res) => {
    const {_id, name, email} = await User.findById(req.user.id)

    res.status(200).json({
        id: _id,
        name,
        email
    })
})


const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: "30d",
    })
}


module.exports = {
    registerUser,
    loginUser,
    getMe,
}