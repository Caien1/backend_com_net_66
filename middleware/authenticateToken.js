import jwt from "jsonwebtoken"
import {} from "dotenv/config.js"
import { ZodMiniJWT } from "zod/v4-mini"


function genrateToken(user){

    const token = jwt.sign(user,process.env.ACCESS_JWT_TOKEN,{expiresIn:"10m"})
    const refreshToken = jwt.sign(user,process.env.REFRESH_JWT_TOKEN)
    return {token,refreshToken}
}

function authenticateToken(req,res,next){
     const authHeader = req.headers['authorization']
     const token =authHeader && authHeader.split(' ')[1]
     if(token==null) return res.sendStatus(401);

     jwt.verify(token,process.env.ACCESS_JWT_TOKEN,(err,user)=>{
        if (err) return res.sendStatus(403)
            req.user = user
        next()
     })

}
