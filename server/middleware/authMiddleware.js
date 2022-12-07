import User from "../models/User";
import jwt  from "jsonwebtoken";
import asyncHandler from "express-async-handler"

/*
Function that runs during a request response cycle
When sending a request to a route/endpoint, the function runs and checks the token */

const protect = asyncHandler (async (req,res,next) => {
    let token

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){ //Check HTTP header for authorization object. Check if it starts with bearer because of bearer token
        try{
            //Get the token from the  bearer header
            token = req.headers.authorization.split(" ")[1] //Gives token index only

            //Verify the token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            //Get user from the token -> Assign to req.user -> Access it in any protected route
            req.user = await User.findById(decoded.id).select("-password") //Don't want hashed password
            
            next() //Calls next middleware
        }

        catch(error){
            console.error(error)
            res.status(404)
            throw new Error("Need higher authorization level")
        }
    }

    if(!token){
        res.status(404)
        throw new Error("No token available")
    }
})

module.exports = { protect }