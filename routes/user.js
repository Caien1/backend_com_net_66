import express from 'express'
import {UserValidation} from '../validation/auth_validation.js'

import {prisma} from "../db/client.js"

export const router = express.Router()



router.post("/sign-up",async (req,res)=>{
const body = req.body

let verified = null
    const emailAlreadyExists = await prisma.user.findFirst({
        where:{
            email: body.email
        },

    });
    if(emailAlreadyExists!=null){
        return res.status(400).json({"message":"Email Alredy Exists"})
    }

try {
        verified = UserValidation.parse(body);
        console.log(verified);
    } catch (error) {
        console.error(error);
        return res.status(400).json({ message: "Invalid Parameters" });
    }

    try {
        const user = await prisma.user.create({
            data: verified
        });
        console.log(user);
        return res.status(201).json({ message: "User created" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Something went wrong" });
    }

})


router.post("/sign-in",(req,res)=>{
res.send("Sign in")
})

