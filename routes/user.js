import express from 'express'
import {UserValidation} from '../validation/auth_validation.js'

export const router = express.Router()



router.post("/sign-up",(req,res)=>{
const body = req.body
res.json({"message":"hello"})
try{
    UserValidation.parse(body)
}catch(error){
    throw new Error("You messed up")
    
}



//console.log(username,email,password);

})


router.post("/sign-in",(req,res)=>{
res.send("Sign in")
})

