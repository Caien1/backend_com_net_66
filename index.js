import express from "express"
import { router } from "./routes/user.js" 
const app = express()
const port = 3000
app.use(express.json())

app.use("/auth",router)

app.get("/",(req,res)=>{
  res.send("hello world")
})

app.post("/sign-up",()=>{



})


app.listen(port,()=>{
console.log(`Example app listinig at port ${port}`)})
