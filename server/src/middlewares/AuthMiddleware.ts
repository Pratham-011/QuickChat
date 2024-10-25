import {Response,Request, NextFunction } from "express";
import  jwt  from "jsonwebtoken";
const authMiddleware = (req:Request, res:Response, next:NextFunction) => {
    const authHeader = req.headers.authorization
    if(authHeader === null || authHeader === undefined) {
        return res.status(401).json({status:401, message:"UnAuthorized"})
    }
    const token = authHeader.split(" ")[1]
    // verify the token
    jwt.verify(token,process.env.JWT_SECRET ,(err ,user) => {
        if(err) 
            return res.status(401).json({status:401, message:"UnAuthorized"})
        req.user = user as AuthUser
        next();
    })
}
export default authMiddleware