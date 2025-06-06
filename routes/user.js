import express from 'express'
import { UserValidationSignUp, UserValidationLogIn } from '../validation/auth_validation.js'

import { prisma } from "../db/client.js"
import bycrypt from "bcrypt"

export const router = express.Router()



router.post("/sign-up", async (req, res) => {
    const body = req.body

    let verified = null
    const emailAlreadyExists = await prisma.user.findFirst({
        where: {
            email: body.email
        },

    });
    if (emailAlreadyExists != null) {
        return res.status(400).json({ "message": "Email Alredy Exists" })
    }

    try {
        verified = UserValidationSignUp.parse(body);
        console.log(verified);
    } catch (error) {
        console.error(error);
        return res.status(400).json({ message: "Invalid Parameters" });
    }

    const { password } = verified
    const hashedPassword = await bycrypt.hash(password,10)
    verified["password"] = hashedPassword;





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


router.post("/sign-in", async (req, res) => {
    const body = req.body
    try {
        const verification = UserValidationLogIn.parse(body)
        console.log(verification)
    }
    catch (error) {
        return res.status(400).json({ message: "Invalid Email or password" })
    }

    try{
        const user = await prisma.user.findFirst({
            where: {email:body.email}
        })
        
        const passwordCheck = await bycrypt.compare(body.password,user.password)
        
        if(passwordCheck){
            
        }

        return res.status(400).json({message:"Well check the password"})



        
        
    }
    catch(error){
        return res.status(400).json({message:"Invalid Email or Password"})
    }






})

