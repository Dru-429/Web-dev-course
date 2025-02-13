import { JWT_SECRET } from "../config/env.js";
import jwt from "jsonwebtoken"
import User from "../models/users.model.js";

//someone making a request -> authorize middle -> verify -> if valid-> next -> get user details

const authorize = async (req, res, next) => {
    try {
        let token;
        
        if(req.headers.authorization && req.headers.autherization.startsWith('Bearer')){
            token = req.headers.autherization.split(' ')[1]
        }

        if (!token ) return res.status(401).json({ message: 'Unautherized' })
 
        const decoded = jwt.verify(token, JWT_SECRET)

        const user = await User.findById(decoded.userId);

        if(!user) return res.status(401).json({ message: 'Unauthorized' });
    
        req.user = user;
    
        next();
    } catch (error) {
        res.status(401).json({ message: 'Unauthorized', error: error.message})
    }
}

export default authorize