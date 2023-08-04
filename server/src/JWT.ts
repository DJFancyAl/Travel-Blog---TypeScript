// Dependencies
require('dotenv').config()
import express from 'express';
import { Secret, sign, verify } from 'jsonwebtoken';

// Create Token Function
export const createToken = (id: string) => {
    const accessToken = sign({id}, process.env.JWT_SECRET as Secret, {
        expiresIn: 2592000000 // 30 Days
    })
    return accessToken
}

// Validate Token Function
export const validateToken = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const accessToken = req.headers["x-access-token"]

    if(!accessToken) return res.status(400).json({auth: false, error: "User not Authenticated"})

    try {
        const validToken = verify(accessToken as string, process.env.JWT_SECRET as Secret)
        if(validToken) {
            return next()
        }
    } catch (err) {
        return res.status(400).json({auth: false, error: err})
    }
}